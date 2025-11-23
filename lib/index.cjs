"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFINITIONS = exports.PropertyUpdatedEvent = exports.PropertyDeletedEvent = exports.PropertyCreatedEvent = exports.ModelUpdatedEvent = exports.ModelDeletedEvent = exports.ModelCreatedEvent = exports.InspectionUpdatedEvent = exports.InspectionPdfGeneratedEvent = exports.InspectionDeletedEvent = exports.InspectionCreatedEvent = exports.EventExampleEvent = exports.AgencyUpdatedEvent = exports.AgencyDeletedEvent = exports.AgencyCreatedEvent = void 0;
const client_eventbridge_1 = require("@aws-sdk/client-eventbridge");
var AgencyCreatedEvent;
(function (AgencyCreatedEvent) {
    AgencyCreatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "agency-created",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    AgencyCreatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    AgencyCreatedEvent.type = "agency-created";
})(AgencyCreatedEvent || (exports.AgencyCreatedEvent = AgencyCreatedEvent = {}));
var AgencyDeletedEvent;
(function (AgencyDeletedEvent) {
    AgencyDeletedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "agency-deleted",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    AgencyDeletedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    AgencyDeletedEvent.type = "agency-deleted";
})(AgencyDeletedEvent || (exports.AgencyDeletedEvent = AgencyDeletedEvent = {}));
var AgencyUpdatedEvent;
(function (AgencyUpdatedEvent) {
    AgencyUpdatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "agency-updated",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    AgencyUpdatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    AgencyUpdatedEvent.type = "agency-updated";
})(AgencyUpdatedEvent || (exports.AgencyUpdatedEvent = AgencyUpdatedEvent = {}));
var EventExampleEvent;
(function (EventExampleEvent) {
    EventExampleEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "event-example",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    EventExampleEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = EventExampleEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "event-example",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    EventExampleEvent.type = "event-example";
})(EventExampleEvent || (exports.EventExampleEvent = EventExampleEvent = {}));
var InspectionCreatedEvent;
(function (InspectionCreatedEvent) {
    InspectionCreatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "inspection-created",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    InspectionCreatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    InspectionCreatedEvent.type = "inspection-created";
})(InspectionCreatedEvent || (exports.InspectionCreatedEvent = InspectionCreatedEvent = {}));
var InspectionDeletedEvent;
(function (InspectionDeletedEvent) {
    InspectionDeletedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "inspection-deleted",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    InspectionDeletedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    InspectionDeletedEvent.type = "inspection-deleted";
})(InspectionDeletedEvent || (exports.InspectionDeletedEvent = InspectionDeletedEvent = {}));
var InspectionPdfGeneratedEvent;
(function (InspectionPdfGeneratedEvent) {
    InspectionPdfGeneratedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "inspection-pdf-generated",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    InspectionPdfGeneratedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionPdfGeneratedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-pdf-generated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    InspectionPdfGeneratedEvent.type = "inspection-pdf-generated";
})(InspectionPdfGeneratedEvent || (exports.InspectionPdfGeneratedEvent = InspectionPdfGeneratedEvent = {}));
var InspectionUpdatedEvent;
(function (InspectionUpdatedEvent) {
    InspectionUpdatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "inspection-updated",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    InspectionUpdatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    InspectionUpdatedEvent.type = "inspection-updated";
})(InspectionUpdatedEvent || (exports.InspectionUpdatedEvent = InspectionUpdatedEvent = {}));
var ModelCreatedEvent;
(function (ModelCreatedEvent) {
    ModelCreatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "model-created",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    ModelCreatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    ModelCreatedEvent.type = "model-created";
})(ModelCreatedEvent || (exports.ModelCreatedEvent = ModelCreatedEvent = {}));
var ModelDeletedEvent;
(function (ModelDeletedEvent) {
    ModelDeletedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "model-deleted",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    ModelDeletedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    ModelDeletedEvent.type = "model-deleted";
})(ModelDeletedEvent || (exports.ModelDeletedEvent = ModelDeletedEvent = {}));
var ModelUpdatedEvent;
(function (ModelUpdatedEvent) {
    ModelUpdatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "model-updated",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    ModelUpdatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    ModelUpdatedEvent.type = "model-updated";
})(ModelUpdatedEvent || (exports.ModelUpdatedEvent = ModelUpdatedEvent = {}));
var PropertyCreatedEvent;
(function (PropertyCreatedEvent) {
    PropertyCreatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "property-created",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    PropertyCreatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    PropertyCreatedEvent.type = "property-created";
})(PropertyCreatedEvent || (exports.PropertyCreatedEvent = PropertyCreatedEvent = {}));
var PropertyDeletedEvent;
(function (PropertyDeletedEvent) {
    PropertyDeletedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "property-deleted",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    PropertyDeletedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    PropertyDeletedEvent.type = "property-deleted";
})(PropertyDeletedEvent || (exports.PropertyDeletedEvent = PropertyDeletedEvent = {}));
var PropertyUpdatedEvent;
(function (PropertyUpdatedEvent) {
    PropertyUpdatedEvent.buildData = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        return {
            type: "property-updated",
            data: data,
            timestamp: Math.floor(Date.now() / 1000),
            source: process.env.SERVICE,
        };
    };
    PropertyUpdatedEvent.build = (data) => {
        if (!process.env.SERVICE)
            throw new Error("process.env.SERVICE must be defined");
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: process.env.SERVICE,
                },
            ],
        });
    };
    PropertyUpdatedEvent.type = "property-updated";
})(PropertyUpdatedEvent || (exports.PropertyUpdatedEvent = PropertyUpdatedEvent = {}));
exports.DEFINITIONS = [{ "name": "agency-created", "description": "Agency created event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyCreated" }, { "name": "agency-deleted", "description": "Agency deleted event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "AgencyDeleted" }, { "name": "agency-updated", "description": "Agency updated event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyUpdated" }, { "name": "event-example", "description": "Comprehensive example event demonstrating all supported attribute type patterns.", "attributes": [{ "name": "simpleString", "type": "string", "description": "A basic string value" }, { "name": "simpleNumber", "type": "number", "description": "A basic number value", "required": true }, { "name": "simpleBoolean", "type": "boolean", "description": "A basic boolean value" }, { "name": "objectAttribute", "required": true, "attributes": [{ "name": "id", "type": "string", "description": "Identifier inside an object", "required": true }, { "name": "count", "type": "number", "description": "Numeric field inside an object" }, { "name": "nested", "required": true, "attributes": [{ "name": "enabled", "type": "boolean", "description": "Nested flag" }, { "name": "label", "type": "string", "description": "Nested label", "required": true }], "description": "A nested object attribute" }], "description": "An attribute whose value is an object with its own fields" }, { "name": "stringArray", "arrayOf": "string", "description": "Array of strings" }, { "name": "numberArray", "arrayOf": "number", "description": "Array of numbers" }, { "name": "objectArray", "arrayOf": { "description": "Value in array of objects", "attributes": [{ "name": "title", "type": "string", "description": "Item title" }, { "name": "quantity", "type": "number", "description": "Item quantity" }] }, "description": "Array of objects (each object item has title and quantity)" }, { "name": "stringEnum", "enum": ["low", "medium", "high"], "description": "String enum represented as a union of literals" }, { "name": "numberEnum", "enum": [0, 1, 2], "description": "Number enum represented as a union of numeric literals" }, { "name": "unionPrimitive", "oneOf": ["string", "number"], "description": "Value can be a string or a number" }, { "name": "unionWithObject", "required": true, "oneOf": ["string", { "attributes": [{ "name": "code", "type": "string", "description": "Object variant code" }, { "name": "details", "required": true, "attributes": [{ "name": "message", "type": "string", "description": "Detail message" }, { "name": "severity", "type": "number", "description": "Detail severity" }], "description": "Nested details object" }], "description": "Object variant of the union" }], "description": "Union of a string or a structured object" }, { "name": "unionArray", "arrayOf": ["string", "number"], "description": "Array whose items can be string or number", "required": true }], "camelName": "EventExample" }, { "name": "inspection-created", "description": "Inspection created event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status, on the created events it should always be TO_DO", "required": true }], "camelName": "InspectionCreated" }, { "name": "inspection-deleted", "description": "Inspection deleted event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "InspectionDeleted" }, { "name": "inspection-pdf-generated", "description": "Inspection PDF generated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "key", "type": "string", "description": "Inspection PDF key in the S3", "required": true }, { "name": "bucketName", "type": "string", "description": "S3 bucket name", "required": true }], "camelName": "InspectionPdfGenerated" }, { "name": "inspection-updated", "description": "Inspection updated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status", "required": true }], "camelName": "InspectionUpdated" }, { "name": "model-created", "description": "Model created event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelCreated" }, { "name": "model-deleted", "description": "Model deleted event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "ModelDeleted" }, { "name": "model-updated", "description": "Model updated event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelUpdated" }, { "name": "property-created", "description": "Property created event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyCreated" }, { "name": "property-deleted", "description": "Property deleted event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "PropertyDeleted" }, { "name": "property-updated", "description": "Property updated event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyUpdated" }];
