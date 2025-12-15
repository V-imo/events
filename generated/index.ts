import { PutEventsCommand } from "@aws-sdk/client-eventbridge"
import { randomUUID } from "crypto"
import { z } from "zod"

/**
 * Agency created event
 */
export type AgencyCreatedEventData = {
  /** Agency ID (uuid) */
  agencyId: string;
  /** Agency name */
  name: string;
  /** Agency address */
  address: {
    /** Agency street */
    street: string;
    /** Agency city */
    city: string;
    /** Agency country */
    country: string;
    /** Agency zip code */
    zipCode: string;
    /** Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc. */
    number: string;
  };
  /** Agency contact mail */
  contactMail: string;
  /** Agency contact phone number */
  contactPhone?: string;
}
export type AgencyCreatedEventEnvelope = {
  type: "agency-created",
  data: AgencyCreatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace AgencyCreatedEvent {
  const schema = z.object({
    agencyId: z.string(),
    name: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string(),
      zipCode: z.string(),
      number: z.string()
    }),
    contactMail: z.string(),
    contactPhone: z.string().optional()
  })

  const envelopeSchema = z.object({
    type: z.literal("agency-created"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type AgencyCreatedEventData = z.infer<typeof schema>
  export type AgencyCreatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "agency-created",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): AgencyCreatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "agency-created") {
        throw new Error(`Expected event type "agency-created", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = AgencyCreatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "agency-created",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "agency-created"
}


/**
 * Agency deleted event
 */
export type AgencyDeletedEventData = {
  /** Agency ID (uuid) */
  agencyId: string;
}
export type AgencyDeletedEventEnvelope = {
  type: "agency-deleted",
  data: AgencyDeletedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace AgencyDeletedEvent {
  const schema = z.object({
    agencyId: z.string()
  })

  const envelopeSchema = z.object({
    type: z.literal("agency-deleted"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type AgencyDeletedEventData = z.infer<typeof schema>
  export type AgencyDeletedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "agency-deleted",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): AgencyDeletedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "agency-deleted") {
        throw new Error(`Expected event type "agency-deleted", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = AgencyDeletedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "agency-deleted",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "agency-deleted"
}


/**
 * Agency updated event
 */
export type AgencyUpdatedEventData = {
  /** Agency ID (uuid) */
  agencyId: string;
  /** Agency name */
  name: string;
  /** Agency address */
  address: {
    /** Agency street */
    street: string;
    /** Agency city */
    city: string;
    /** Agency country */
    country: string;
    /** Agency zip code */
    zipCode: string;
    /** Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc. */
    number: string;
  };
  /** Agency contact mail */
  contactMail: string;
  /** Agency contact phone number */
  contactPhone?: string;
}
export type AgencyUpdatedEventEnvelope = {
  type: "agency-updated",
  data: AgencyUpdatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace AgencyUpdatedEvent {
  const schema = z.object({
    agencyId: z.string(),
    name: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string(),
      zipCode: z.string(),
      number: z.string()
    }),
    contactMail: z.string(),
    contactPhone: z.string().optional()
  })

  const envelopeSchema = z.object({
    type: z.literal("agency-updated"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type AgencyUpdatedEventData = z.infer<typeof schema>
  export type AgencyUpdatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "agency-updated",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): AgencyUpdatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "agency-updated") {
        throw new Error(`Expected event type "agency-updated", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = AgencyUpdatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "agency-updated",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "agency-updated"
}


/**
 * Comprehensive example event demonstrating all supported attribute type patterns.
 */
export type EventExampleEventData = {
  /** A basic string value */
  simpleString?: string;
  /** A basic number value */
  simpleNumber: number;
  /** A basic boolean value */
  simpleBoolean?: boolean;
  /** An attribute whose value is an object with its own fields */
  objectAttribute: {
    /** Identifier inside an object */
    id: string;
    /** Numeric field inside an object */
    count?: number;
    /** A nested object attribute */
    nested: {
      /** Nested flag */
      enabled?: boolean;
      /** Nested label */
      label: string;
    };
  };
  /** Array of strings */
  stringArray?: string[];
  /** Array of numbers */
  numberArray?: number[];
  /** Array of objects (each object item has title and quantity) */
  objectArray?: {    /** Item title */
    title?: string;
    /** Item quantity */
    quantity?: number;
  }[];
  /** String enum represented as a union of literals */
  stringEnum?: "low" | "medium" | "high";
  /** Number enum represented as a union of numeric literals */
  numberEnum?: 0 | 1 | 2;
  /** Value can be a string or a number */
  unionPrimitive?: string | number
  ;
  /** Union of a string or a structured object */
  unionWithObject: string | {
      /** Object variant code */
      code?: string;
      /** Nested details object */
      details: {
        /** Detail message */
        message?: string;
        /** Detail severity */
        severity?: number;
      };
    }
  ;
  /** Array whose items can be string or number */
  unionArray: (string | number)[];
}
export type EventExampleEventEnvelope = {
  type: "event-example",
  data: EventExampleEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace EventExampleEvent {
  const schema = z.object({
    simpleString: z.string().optional(),
    simpleNumber: z.number(),
    simpleBoolean: z.boolean().optional(),
    objectAttribute: z.object({
      id: z.string(),
      count: z.number().optional(),
      nested: z.object({
        enabled: z.boolean().optional(),
        label: z.string()
      })
    }),
    stringArray: z.array(z.string()).optional(),
    numberArray: z.array(z.number()).optional(),
    objectArray: z.array(z.object({
      title: z.string().optional(),
      quantity: z.number().optional()
    })).optional(),
    stringEnum: z.enum(["low", "medium", "high"]).optional(),
    numberEnum: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    unionPrimitive: z.union([z.string(), z.number()]).optional(),
    unionWithObject: z.union([z.string(), z.object({
      code: z.string().optional(),
      details: z.object({
        message: z.string().optional(),
        severity: z.number().optional()
      })
    })]),
    unionArray: z.array(z.union([z.string(), z.number()]))
  })

  const envelopeSchema = z.object({
    type: z.literal("event-example"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type EventExampleEventData = z.infer<typeof schema>
  export type EventExampleEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "event-example",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): EventExampleEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "event-example") {
        throw new Error(`Expected event type "event-example", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = EventExampleEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "event-example",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "event-example"
}


/**
 * Inspection created event
 */
export type InspectionCreatedEventData = {
  /** Inspection ID (uuid) */
  inspectionId: string;
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Inspector ID (uuid) */
  inspectorId: string;
  /** Rooms */
  rooms?: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Element state */
      state: "NEW" | "GOOD" | "BAD" | "BROKEN";
      /** Images of the element */
      images?: string[];
    }[];
  }[];
  /** Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ */
  date: string;
  /** Inspection status, on the created events it should always be TO_DO */
  status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
}
export type InspectionCreatedEventEnvelope = {
  type: "inspection-created",
  data: InspectionCreatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace InspectionCreatedEvent {
  const schema = z.object({
    inspectionId: z.string(),
    propertyId: z.string(),
    agencyId: z.string(),
    inspectorId: z.string(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        state: z.enum(["NEW", "GOOD", "BAD", "BROKEN"]),
        images: z.array(z.string()).optional()
      }))
    })).optional(),
    date: z.string(),
    status: z.enum(["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"])
  })

  const envelopeSchema = z.object({
    type: z.literal("inspection-created"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type InspectionCreatedEventData = z.infer<typeof schema>
  export type InspectionCreatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "inspection-created",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): InspectionCreatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "inspection-created") {
        throw new Error(`Expected event type "inspection-created", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = InspectionCreatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "inspection-created",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "inspection-created"
}


/**
 * Inspection deleted event
 */
export type InspectionDeletedEventData = {
  /** Inspection ID (uuid) */
  inspectionId: string;
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
}
export type InspectionDeletedEventEnvelope = {
  type: "inspection-deleted",
  data: InspectionDeletedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace InspectionDeletedEvent {
  const schema = z.object({
    inspectionId: z.string(),
    propertyId: z.string(),
    agencyId: z.string()
  })

  const envelopeSchema = z.object({
    type: z.literal("inspection-deleted"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type InspectionDeletedEventData = z.infer<typeof schema>
  export type InspectionDeletedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "inspection-deleted",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): InspectionDeletedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "inspection-deleted") {
        throw new Error(`Expected event type "inspection-deleted", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = InspectionDeletedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "inspection-deleted",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "inspection-deleted"
}


/**
 * Inspection PDF generated event
 */
export type InspectionPdfGeneratedEventData = {
  /** Inspection ID (uuid) */
  inspectionId: string;
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Inspection PDF key in the S3 */
  key: string;
  /** S3 bucket name */
  bucketName: string;
}
export type InspectionPdfGeneratedEventEnvelope = {
  type: "inspection-pdf-generated",
  data: InspectionPdfGeneratedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace InspectionPdfGeneratedEvent {
  const schema = z.object({
    inspectionId: z.string(),
    propertyId: z.string(),
    agencyId: z.string(),
    key: z.string(),
    bucketName: z.string()
  })

  const envelopeSchema = z.object({
    type: z.literal("inspection-pdf-generated"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type InspectionPdfGeneratedEventData = z.infer<typeof schema>
  export type InspectionPdfGeneratedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "inspection-pdf-generated",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): InspectionPdfGeneratedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "inspection-pdf-generated") {
        throw new Error(`Expected event type "inspection-pdf-generated", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = InspectionPdfGeneratedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "inspection-pdf-generated",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "inspection-pdf-generated"
}


/**
 * Inspection updated event
 */
export type InspectionUpdatedEventData = {
  /** Inspection ID (uuid) */
  inspectionId: string;
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Inspector ID (uuid) */
  inspectorId: string;
  /** Rooms */
  rooms?: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Element state */
      state: "NEW" | "GOOD" | "BAD" | "BROKEN";
      /** Images of the element */
      images?: string[];
    }[];
  }[];
  /** Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ */
  date: string;
  /** Inspection status */
  status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
}
export type InspectionUpdatedEventEnvelope = {
  type: "inspection-updated",
  data: InspectionUpdatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace InspectionUpdatedEvent {
  const schema = z.object({
    inspectionId: z.string(),
    propertyId: z.string(),
    agencyId: z.string(),
    inspectorId: z.string(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        state: z.enum(["NEW", "GOOD", "BAD", "BROKEN"]),
        images: z.array(z.string()).optional()
      }))
    })).optional(),
    date: z.string(),
    status: z.enum(["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"])
  })

  const envelopeSchema = z.object({
    type: z.literal("inspection-updated"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type InspectionUpdatedEventData = z.infer<typeof schema>
  export type InspectionUpdatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "inspection-updated",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): InspectionUpdatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "inspection-updated") {
        throw new Error(`Expected event type "inspection-updated", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = InspectionUpdatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "inspection-updated",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "inspection-updated"
}


/**
 * Model created event
 */
export type ModelCreatedEventData = {
  /** Model ID (uuid) */
  modelId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Model name */
  name: string;
  /** Rooms */
  rooms: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Room area in square meters */
    area?: number;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Images of the element */
      images?: string[];
      /** Element type */
      type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
    }[];
  }[];
}
export type ModelCreatedEventEnvelope = {
  type: "model-created",
  data: ModelCreatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace ModelCreatedEvent {
  const schema = z.object({
    modelId: z.string(),
    agencyId: z.string(),
    name: z.string(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      area: z.number().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        images: z.array(z.string()).optional(),
        type: z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
      }))
    }))
  })

  const envelopeSchema = z.object({
    type: z.literal("model-created"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type ModelCreatedEventData = z.infer<typeof schema>
  export type ModelCreatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "model-created",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): ModelCreatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "model-created") {
        throw new Error(`Expected event type "model-created", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = ModelCreatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "model-created",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "model-created"
}


/**
 * Model deleted event
 */
export type ModelDeletedEventData = {
  /** Model ID (uuid) */
  modelId: string;
  /** Agency ID (uuid) */
  agencyId: string;
}
export type ModelDeletedEventEnvelope = {
  type: "model-deleted",
  data: ModelDeletedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace ModelDeletedEvent {
  const schema = z.object({
    modelId: z.string(),
    agencyId: z.string()
  })

  const envelopeSchema = z.object({
    type: z.literal("model-deleted"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type ModelDeletedEventData = z.infer<typeof schema>
  export type ModelDeletedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "model-deleted",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): ModelDeletedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "model-deleted") {
        throw new Error(`Expected event type "model-deleted", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = ModelDeletedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "model-deleted",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "model-deleted"
}


/**
 * Model updated event
 */
export type ModelUpdatedEventData = {
  /** Model ID (uuid) */
  modelId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Model name */
  name: string;
  /** Rooms */
  rooms: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Room area in square meters */
    area?: number;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Images of the element */
      images?: string[];
      /** Element type */
      type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
    }[];
  }[];
}
export type ModelUpdatedEventEnvelope = {
  type: "model-updated",
  data: ModelUpdatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace ModelUpdatedEvent {
  const schema = z.object({
    modelId: z.string(),
    agencyId: z.string(),
    name: z.string(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      area: z.number().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        images: z.array(z.string()).optional(),
        type: z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
      }))
    }))
  })

  const envelopeSchema = z.object({
    type: z.literal("model-updated"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type ModelUpdatedEventData = z.infer<typeof schema>
  export type ModelUpdatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "model-updated",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): ModelUpdatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "model-updated") {
        throw new Error(`Expected event type "model-updated", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = ModelUpdatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "model-updated",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "model-updated"
}


/**
 * Property created event
 */
export type PropertyCreatedEventData = {
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Property area in square meters */
  area?: number;
  /** undefined */
  address: {
    /** Property street */
    street: string;
    /** Property city */
    city: string;
    /** Property country */
    country: string;
    /** Property zip code */
    zipCode: string;
    /** Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc. */
    number: string;
  };
  /** Property owner */
  owner?: {
    /** Property owner first name */
    firstName: string;
    /** Property owner last name */
    lastName: string;
    /** Property contact mail */
    mail?: string;
    /** Property contact phone */
    phoneNumber?: string;
  };
  /** Rooms */
  rooms: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Room area in square meters */
    area?: number;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Images of the element */
      images?: string[];
      /** Element type */
      type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
    }[];
  }[];
}
export type PropertyCreatedEventEnvelope = {
  type: "property-created",
  data: PropertyCreatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace PropertyCreatedEvent {
  const schema = z.object({
    propertyId: z.string(),
    agencyId: z.string(),
    area: z.number().optional(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string(),
      zipCode: z.string(),
      number: z.string()
    }),
    owner: z.object({
      firstName: z.string(),
      lastName: z.string(),
      mail: z.string().optional(),
      phoneNumber: z.string().optional()
    }).optional(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      area: z.number().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        images: z.array(z.string()).optional(),
        type: z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
      }))
    }))
  })

  const envelopeSchema = z.object({
    type: z.literal("property-created"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type PropertyCreatedEventData = z.infer<typeof schema>
  export type PropertyCreatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "property-created",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): PropertyCreatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "property-created") {
        throw new Error(`Expected event type "property-created", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = PropertyCreatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "property-created",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "property-created"
}


/**
 * Property deleted event
 */
export type PropertyDeletedEventData = {
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
}
export type PropertyDeletedEventEnvelope = {
  type: "property-deleted",
  data: PropertyDeletedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace PropertyDeletedEvent {
  const schema = z.object({
    propertyId: z.string(),
    agencyId: z.string()
  })

  const envelopeSchema = z.object({
    type: z.literal("property-deleted"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type PropertyDeletedEventData = z.infer<typeof schema>
  export type PropertyDeletedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "property-deleted",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): PropertyDeletedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "property-deleted") {
        throw new Error(`Expected event type "property-deleted", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = PropertyDeletedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "property-deleted",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "property-deleted"
}


/**
 * Property updated event
 */
export type PropertyUpdatedEventData = {
  /** Property ID (uuid) */
  propertyId: string;
  /** Agency ID (uuid) */
  agencyId: string;
  /** Property area in square meters */
  area?: number;
  /** undefined */
  address: {
    /** Property street */
    street: string;
    /** Property city */
    city: string;
    /** Property country */
    country: string;
    /** Property zip code */
    zipCode: string;
    /** Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc. */
    number: string;
  };
  /** Property owner */
  owner?: {
    /** Property owner first name */
    firstName: string;
    /** Property owner last name */
    lastName: string;
    /** Property contact mail */
    mail?: string;
    /** Property contact phone */
    phoneNumber?: string;
  };
  /** Rooms */
  rooms: {    /** Room name */
    name: string;
    /** Room description */
    description?: string;
    /** Room area in square meters */
    area?: number;
    /** Elements of the room */
    elements: {      /** Element name */
      name: string;
      /** Element description */
      description?: string;
      /** Images of the element */
      images?: string[];
      /** Element type */
      type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
    }[];
  }[];
}
export type PropertyUpdatedEventEnvelope = {
  type: "property-updated",
  data: PropertyUpdatedEventData,
  time: number,
  source: string,
  account: string,
  version: string,
  id: string,
}
export namespace PropertyUpdatedEvent {
  const schema = z.object({
    propertyId: z.string(),
    agencyId: z.string(),
    area: z.number().optional(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string(),
      zipCode: z.string(),
      number: z.string()
    }),
    owner: z.object({
      firstName: z.string(),
      lastName: z.string(),
      mail: z.string().optional(),
      phoneNumber: z.string().optional()
    }).optional(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      area: z.number().optional(),
      elements: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
        images: z.array(z.string()).optional(),
        type: z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
      }))
    }))
  })

  const envelopeSchema = z.object({
    type: z.literal("property-updated"),
    data: schema,
    timestamp: z.number(),
    source: z.string(),
    id: z.string(),
  })

  export type PropertyUpdatedEventData = z.infer<typeof schema>
  export type PropertyUpdatedEventEnvelope = z.infer<typeof envelopeSchema>

  export const buildData = (data: unknown) => {
    const sanitized = schema.parse(data)
    return {
      type: "property-updated",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }
  }

  export const parse = (input: unknown): PropertyUpdatedEventEnvelope => {
    // Handle EventBridge entry format (Detail is a JSON string)
    if (typeof input === 'object' && input !== null && 'Detail' in input) {
      const entry = input as { Detail: string; DetailType?: string }
      if (entry.DetailType && entry.DetailType !== "property-updated") {
        throw new Error(`Expected event type "property-updated", got ${entry.DetailType}`)
      }
      const parsed = JSON.parse(entry.Detail)
      return envelopeSchema.parse(parsed)
    }
    // Handle direct envelope object
    return envelopeSchema.parse(input)
  }

  export const build = (data: unknown) => {
    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = PropertyUpdatedEvent.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "property-updated",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })
  }

  export const type = "property-updated"
}



export const DEFINITIONS = [{"name":"agency-created","description":"Agency created event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Agency name","required":true},{"name":"address","attributes":[{"name":"street","type":"string","description":"Agency street","required":true},{"name":"city","type":"string","description":"Agency city","required":true},{"name":"country","type":"string","description":"Agency country","required":true},{"name":"zipCode","type":"string","description":"Agency zip code","required":true},{"name":"number","type":"string","description":"Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}],"description":"Agency address","required":true},{"name":"contactMail","type":"string","description":"Agency contact mail","required":true},{"name":"contactPhone","type":"string","description":"Agency contact phone number"}],"camelName":"AgencyCreated"},{"name":"agency-deleted","description":"Agency deleted event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"AgencyDeleted"},{"name":"agency-updated","description":"Agency updated event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Agency name","required":true},{"name":"address","attributes":[{"name":"street","type":"string","description":"Agency street","required":true},{"name":"city","type":"string","description":"Agency city","required":true},{"name":"country","type":"string","description":"Agency country","required":true},{"name":"zipCode","type":"string","description":"Agency zip code","required":true},{"name":"number","type":"string","description":"Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}],"description":"Agency address","required":true},{"name":"contactMail","type":"string","description":"Agency contact mail","required":true},{"name":"contactPhone","type":"string","description":"Agency contact phone number"}],"camelName":"AgencyUpdated"},{"name":"event-example","description":"Comprehensive example event demonstrating all supported attribute type patterns.","attributes":[{"name":"simpleString","type":"string","description":"A basic string value"},{"name":"simpleNumber","type":"number","description":"A basic number value","required":true},{"name":"simpleBoolean","type":"boolean","description":"A basic boolean value"},{"name":"objectAttribute","required":true,"attributes":[{"name":"id","type":"string","description":"Identifier inside an object","required":true},{"name":"count","type":"number","description":"Numeric field inside an object"},{"name":"nested","required":true,"attributes":[{"name":"enabled","type":"boolean","description":"Nested flag"},{"name":"label","type":"string","description":"Nested label","required":true}],"description":"A nested object attribute"}],"description":"An attribute whose value is an object with its own fields"},{"name":"stringArray","arrayOf":"string","description":"Array of strings"},{"name":"numberArray","arrayOf":"number","description":"Array of numbers"},{"name":"objectArray","arrayOf":{"description":"Value in array of objects","attributes":[{"name":"title","type":"string","description":"Item title"},{"name":"quantity","type":"number","description":"Item quantity"}]},"description":"Array of objects (each object item has title and quantity)"},{"name":"stringEnum","enum":["low","medium","high"],"description":"String enum represented as a union of literals"},{"name":"numberEnum","enum":[0,1,2],"description":"Number enum represented as a union of numeric literals"},{"name":"unionPrimitive","oneOf":["string","number"],"description":"Value can be a string or a number"},{"name":"unionWithObject","required":true,"oneOf":["string",{"attributes":[{"name":"code","type":"string","description":"Object variant code"},{"name":"details","required":true,"attributes":[{"name":"message","type":"string","description":"Detail message"},{"name":"severity","type":"number","description":"Detail severity"}],"description":"Nested details object"}],"description":"Object variant of the union"}],"description":"Union of a string or a structured object"},{"name":"unionArray","arrayOf":["string","number"],"description":"Array whose items can be string or number","required":true}],"camelName":"EventExample"},{"name":"inspection-created","description":"Inspection created event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"inspectorId","type":"string","description":"Inspector ID (uuid)","required":true},{"name":"rooms","description":"Rooms","arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"state","enum":["NEW","GOOD","BAD","BROKEN"],"description":"Element state","required":true},{"name":"images","description":"Images of the element","arrayOf":"string"}]}}]}},{"name":"date","type":"string","description":"Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ","required":true},{"name":"status","enum":["TO_DO","IN_PROGRESS","DONE","CANCELED"],"description":"Inspection status, on the created events it should always be TO_DO","required":true}],"camelName":"InspectionCreated"},{"name":"inspection-deleted","description":"Inspection deleted event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"InspectionDeleted"},{"name":"inspection-pdf-generated","description":"Inspection PDF generated event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"key","type":"string","description":"Inspection PDF key in the S3","required":true},{"name":"bucketName","type":"string","description":"S3 bucket name","required":true}],"camelName":"InspectionPdfGenerated"},{"name":"inspection-updated","description":"Inspection updated event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"inspectorId","type":"string","description":"Inspector ID (uuid)","required":true},{"name":"rooms","description":"Rooms","arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"state","enum":["NEW","GOOD","BAD","BROKEN"],"description":"Element state","required":true},{"name":"images","description":"Images of the element","arrayOf":"string"}]}}]}},{"name":"date","type":"string","description":"Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ","required":true},{"name":"status","enum":["TO_DO","IN_PROGRESS","DONE","CANCELED"],"description":"Inspection status","required":true}],"camelName":"InspectionUpdated"},{"name":"model-created","description":"Model created event","attributes":[{"name":"modelId","type":"string","description":"Model ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Model name","required":true},{"name":"rooms","description":"Rooms","required":true,"arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"area","type":"number","description":"Room area in square meters"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"images","description":"Images of the element","arrayOf":"string"},{"name":"type","enum":["FURNITURE","STRUCTURAL","ELECTRICAL","PLUMBING","VENTILATION","SURFACE","OTHER"],"description":"Element type","required":true}]}}]}}],"camelName":"ModelCreated"},{"name":"model-deleted","description":"Model deleted event","attributes":[{"name":"modelId","type":"string","description":"Model ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"ModelDeleted"},{"name":"model-updated","description":"Model updated event","attributes":[{"name":"modelId","type":"string","description":"Model ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Model name","required":true},{"name":"rooms","description":"Rooms","required":true,"arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"area","type":"number","description":"Room area in square meters"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"images","description":"Images of the element","arrayOf":"string"},{"name":"type","enum":["FURNITURE","STRUCTURAL","ELECTRICAL","PLUMBING","VENTILATION","SURFACE","OTHER"],"description":"Element type","required":true}]}}]}}],"camelName":"ModelUpdated"},{"name":"property-created","description":"Property created event","attributes":[{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"area","type":"number","description":"Property area in square meters"},{"name":"address","required":true,"attributes":[{"name":"street","type":"string","description":"Property street","required":true},{"name":"city","type":"string","description":"Property city","required":true},{"name":"country","type":"string","description":"Property country","required":true},{"name":"zipCode","type":"string","description":"Property zip code","required":true},{"name":"number","type":"string","description":"Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}]},{"name":"owner","description":"Property owner","attributes":[{"name":"firstName","type":"string","description":"Property owner first name","required":true},{"name":"lastName","type":"string","description":"Property owner last name","required":true},{"name":"mail","type":"string","description":"Property contact mail"},{"name":"phoneNumber","type":"string","description":"Property contact phone"}]},{"name":"rooms","description":"Rooms","required":true,"arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"area","type":"number","description":"Room area in square meters"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"images","description":"Images of the element","arrayOf":"string"},{"name":"type","enum":["FURNITURE","STRUCTURAL","ELECTRICAL","PLUMBING","VENTILATION","SURFACE","OTHER"],"description":"Element type","required":true}]}}]}}],"camelName":"PropertyCreated"},{"name":"property-deleted","description":"Property deleted event","attributes":[{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"PropertyDeleted"},{"name":"property-updated","description":"Property updated event","attributes":[{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"area","type":"number","description":"Property area in square meters"},{"name":"address","required":true,"attributes":[{"name":"street","type":"string","description":"Property street","required":true},{"name":"city","type":"string","description":"Property city","required":true},{"name":"country","type":"string","description":"Property country","required":true},{"name":"zipCode","type":"string","description":"Property zip code","required":true},{"name":"number","type":"string","description":"Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}]},{"name":"owner","description":"Property owner","attributes":[{"name":"firstName","type":"string","description":"Property owner first name","required":true},{"name":"lastName","type":"string","description":"Property owner last name","required":true},{"name":"mail","type":"string","description":"Property contact mail"},{"name":"phoneNumber","type":"string","description":"Property contact phone"}]},{"name":"rooms","description":"Rooms","required":true,"arrayOf":{"description":"Room","attributes":[{"name":"name","type":"string","description":"Room name","required":true},{"name":"description","type":"string","description":"Room description"},{"name":"area","type":"number","description":"Room area in square meters"},{"name":"elements","description":"Elements of the room","required":true,"arrayOf":{"description":"Element","attributes":[{"name":"name","type":"string","description":"Element name","required":true},{"name":"description","type":"string","description":"Element description"},{"name":"images","description":"Images of the element","arrayOf":"string"},{"name":"type","enum":["FURNITURE","STRUCTURAL","ELECTRICAL","PLUMBING","VENTILATION","SURFACE","OTHER"],"description":"Element type","required":true}]}}]}}],"camelName":"PropertyUpdated"}] 

/**
 * Parse an EventBridge entry or envelope into a typed event.
 * Supports both EventBridge entry format (with Detail as JSON string) and direct envelope objects.
 */
export function parseEvent(input: unknown): AgencyCreatedEvent.AgencyCreatedEventEnvelope | AgencyDeletedEvent.AgencyDeletedEventEnvelope | AgencyUpdatedEvent.AgencyUpdatedEventEnvelope | EventExampleEvent.EventExampleEventEnvelope | InspectionCreatedEvent.InspectionCreatedEventEnvelope | InspectionDeletedEvent.InspectionDeletedEventEnvelope | InspectionPdfGeneratedEvent.InspectionPdfGeneratedEventEnvelope | InspectionUpdatedEvent.InspectionUpdatedEventEnvelope | ModelCreatedEvent.ModelCreatedEventEnvelope | ModelDeletedEvent.ModelDeletedEventEnvelope | ModelUpdatedEvent.ModelUpdatedEventEnvelope | PropertyCreatedEvent.PropertyCreatedEventEnvelope | PropertyDeletedEvent.PropertyDeletedEventEnvelope | PropertyUpdatedEvent.PropertyUpdatedEventEnvelope {
  // Handle EventBridge entry format (Detail is a JSON string)
  let envelope: any
  if (typeof input === "object" && input !== null && "Detail" in input) {
    const entry = input as { Detail: string; DetailType?: string }
    envelope = JSON.parse(entry.Detail)
  } else {
    envelope = input
  }

  if (!envelope || typeof envelope !== "object" || !("type" in envelope)) {
    throw new Error("Invalid event: missing type field")
  }

  const eventType = envelope.type as string

  switch (eventType) {
    case "agency-created":
      return AgencyCreatedEvent.parse(envelope)
    case "agency-deleted":
      return AgencyDeletedEvent.parse(envelope)
    case "agency-updated":
      return AgencyUpdatedEvent.parse(envelope)
    case "event-example":
      return EventExampleEvent.parse(envelope)
    case "inspection-created":
      return InspectionCreatedEvent.parse(envelope)
    case "inspection-deleted":
      return InspectionDeletedEvent.parse(envelope)
    case "inspection-pdf-generated":
      return InspectionPdfGeneratedEvent.parse(envelope)
    case "inspection-updated":
      return InspectionUpdatedEvent.parse(envelope)
    case "model-created":
      return ModelCreatedEvent.parse(envelope)
    case "model-deleted":
      return ModelDeletedEvent.parse(envelope)
    case "model-updated":
      return ModelUpdatedEvent.parse(envelope)
    case "property-created":
      return PropertyCreatedEvent.parse(envelope)
    case "property-deleted":
      return PropertyDeletedEvent.parse(envelope)
    case "property-updated":
      return PropertyUpdatedEvent.parse(envelope)
    default:
      throw new Error(`Unknown event type: ${eventType}. Supported types: ${["agency-created", "agency-deleted", "agency-updated", "event-example", "inspection-created", "inspection-deleted", "inspection-pdf-generated", "inspection-updated", "model-created", "model-deleted", "model-updated", "property-created", "property-deleted", "property-updated"].join(", ")}`)
  }
}
