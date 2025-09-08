## vimo-events

Utility and codegen for strongly-typed events. Define events as JSON under `src/events/`, then generate TypeScript builders and types under `generated/` → published in `lib/`.

### Install

```bash
npm i vimo-events
```

### Runtime requirement

- Set the env var `SERVICE` to identify the source service of emitted events.

```bash
export SERVICE=my-service
```

### Using the package (from consumer code)

The package exposes event namespaces and a `DEFINITIONS` constant.

```ts
import {
  EventExampleEvent,
  SampleComplexTypesEvent,
  UserRegisteredOneEvent,
  DEFINITIONS,
} from "vimo-events"

// Build a typed event payload (throws if SERVICE is missing)
const evt = EventExampleEvent.build({
  simpleString: "hello",
  simpleNumber: 42,
  simpleBoolean: true,
  objectAttribute: {
    id: "abc",
    count: 3,
    nested: { enabled: true, label: "on" },
  },
  stringArray: ["a", "b"],
  numberArray: [1, 2],
  objectArray: [{ title: "t", quantity: 1 }],
  stringEnum: "low",
  numberEnum: 1,
  unionPrimitive: "x",
  unionWithObject: { code: "E1", details: { message: "oops", severity: 2 } },
  unionArray: ["a", 1],
})

// Access the static event type string
console.log(EventExampleEvent.type) // "event-example"

// Browse all JSON definitions bundled with the package
console.log(DEFINITIONS)
```

### Creating/maintaining events (in this repository)

1. Add a JSON file under `src/events/`. Example: `src/events/user-created.json`.
2. Follow the schema below (object shapes use `attributes`).
3. Generate types and builders:

```bash
npm run build
```

Artifacts:

- TypeScript output is written to `generated/index.ts` (source of truth for `tsc`).
- Published JS/DTs are in `lib/` (what consumers import).

### Event JSON schema

Top-level shape:

```json
{
  "name": "kebab-case-event-name",
  "description": "Human description",
  "attributes": [ Attribute, ... ]
}
```

Attribute forms (pick one of the following in each attribute):

- Primitive type

```json
{ "name": "title", "type": "string", "description": "A string" }
{ "name": "count", "type": "number", "description": "A number" }
{ "name": "flag", "type": "boolean", "description": "A boolean" }
```

- Object (use `attributes` to describe fields)

```json
{
  "name": "profile",
  "attributes": [
    { "name": "bio", "type": "string", "description": "User bio" },
    { "name": "verified", "type": "boolean", "description": "Verification" }
  ],
  "description": "An object with nested fields"
}
```

- Array of primitives

```json
{ "name": "tags", "arrayOf": "string", "description": "List of strings" }
{ "name": "scores", "arrayOf": "number", "description": "List of numbers" }
```

- Array of objects (item described by `attributes`)

```json
{
  "name": "items",
  "arrayOf": {
    "attributes": [
      { "name": "title", "type": "string", "description": "Item title" },
      { "name": "quantity", "type": "number", "description": "Item quantity" }
    ]
  },
  "description": "Array of object items"
}
```

- Enum (string or number literals)

```json
{ "name": "status", "enum": ["active", "disabled", "pending"], "description": "State" }
{ "name": "rating", "enum": [1, 2, 3, 4, 5], "description": "Stars" }
```

- Union of primitives

```json
{
  "name": "value",
  "oneOf": ["string", "number"],
  "description": "Primitive union"
}
```

- Union including an object (object variant uses `attributes`)

```json
{
  "name": "payload",
  "oneOf": [
    "string",
    {
      "attributes": [
        { "name": "code", "type": "string", "description": "Code" },
        {
          "name": "details",
          "attributes": [
            { "name": "message", "type": "string", "description": "Msg" },
            { "name": "severity", "type": "number", "description": "Level" }
          ],
          "description": "Nested details"
        }
      ],
      "description": "Object variant"
    }
  ],
  "description": "Union of string or object"
}
```

- Array of union primitives

```json
{
  "name": "mixed",
  "arrayOf": ["string", "number"],
  "description": "Mixed array"
}
```

Notes:

- Objects always use `attributes` (never `type` for object shapes).
- For arrays of objects, set `arrayOf` to an object with an `attributes` array.
- `oneOf` members can be primitive type strings or an object descriptor with `attributes`.

### Emitting events

At runtime, build the envelope and send through your transport of choice.

```ts
import { UserRegisteredOneEvent } from "vimo-events"

const message = UserRegisteredOneEvent.build({
  id: "user_123",
  age: 33,
  profile: { bio: "hi", verified: true },
})

// message = { type, data, timestamp, source }
sendToKafka(message)
```

### Conventions

- Event names are kebab-case in JSON; generated namespace names are PascalCase with `Event` suffix (e.g. `user-registered-one` → `UserRegisteredOneEvent`).
- The package exports a `type` string per event namespace for convenient routing.
