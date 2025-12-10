"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFINITIONS = exports.PropertyUpdatedEvent = exports.PropertyDeletedEvent = exports.PropertyCreatedEvent = exports.ModelUpdatedEvent = exports.ModelDeletedEvent = exports.ModelCreatedEvent = exports.InspectionUpdatedEvent = exports.InspectionPdfGeneratedEvent = exports.InspectionDeletedEvent = exports.InspectionCreatedEvent = exports.EventExampleEvent = exports.AgencyUpdatedEvent = exports.AgencyDeletedEvent = exports.AgencyCreatedEvent = void 0;
const client_eventbridge_1 = require("@aws-sdk/client-eventbridge");
const crypto_1 = require("crypto");
const zod_1 = require("zod");
var AgencyCreatedEvent;
(function (AgencyCreatedEvent) {
    const schema = zod_1.z.object({
        agencyId: zod_1.z.string(),
        name: zod_1.z.string(),
        address: zod_1.z.object({
            street: zod_1.z.string(),
            city: zod_1.z.string(),
            country: zod_1.z.string(),
            zipCode: zod_1.z.string(),
            number: zod_1.z.string()
        }),
        contactMail: zod_1.z.string(),
        contactPhone: zod_1.z.string().optional()
    });
    AgencyCreatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "agency-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    AgencyCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    AgencyCreatedEvent.type = "agency-created";
})(AgencyCreatedEvent || (exports.AgencyCreatedEvent = AgencyCreatedEvent = {}));
var AgencyDeletedEvent;
(function (AgencyDeletedEvent) {
    const schema = zod_1.z.object({
        agencyId: zod_1.z.string()
    });
    AgencyDeletedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "agency-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    AgencyDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    AgencyDeletedEvent.type = "agency-deleted";
})(AgencyDeletedEvent || (exports.AgencyDeletedEvent = AgencyDeletedEvent = {}));
var AgencyUpdatedEvent;
(function (AgencyUpdatedEvent) {
    const schema = zod_1.z.object({
        agencyId: zod_1.z.string(),
        name: zod_1.z.string(),
        address: zod_1.z.object({
            street: zod_1.z.string(),
            city: zod_1.z.string(),
            country: zod_1.z.string(),
            zipCode: zod_1.z.string(),
            number: zod_1.z.string()
        }),
        contactMail: zod_1.z.string(),
        contactPhone: zod_1.z.string().optional()
    });
    AgencyUpdatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "agency-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    AgencyUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "agency-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    AgencyUpdatedEvent.type = "agency-updated";
})(AgencyUpdatedEvent || (exports.AgencyUpdatedEvent = AgencyUpdatedEvent = {}));
var EventExampleEvent;
(function (EventExampleEvent) {
    const schema = zod_1.z.object({
        simpleString: zod_1.z.string().optional(),
        simpleNumber: zod_1.z.number(),
        simpleBoolean: zod_1.z.boolean().optional(),
        objectAttribute: zod_1.z.object({
            id: zod_1.z.string(),
            count: zod_1.z.number().optional(),
            nested: zod_1.z.object({
                enabled: zod_1.z.boolean().optional(),
                label: zod_1.z.string()
            })
        }),
        stringArray: zod_1.z.array(zod_1.z.string()).optional(),
        numberArray: zod_1.z.array(zod_1.z.number()).optional(),
        objectArray: zod_1.z.array(zod_1.z.object({
            title: zod_1.z.string().optional(),
            quantity: zod_1.z.number().optional()
        })).optional(),
        stringEnum: zod_1.z.enum(["low", "medium", "high"]).optional(),
        numberEnum: zod_1.z.union([zod_1.z.literal(0), zod_1.z.literal(1), zod_1.z.literal(2)]).optional(),
        unionPrimitive: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]).optional(),
        unionWithObject: zod_1.z.union([zod_1.z.string(), zod_1.z.object({
                code: zod_1.z.string().optional(),
                details: zod_1.z.object({
                    message: zod_1.z.string().optional(),
                    severity: zod_1.z.number().optional()
                })
            })]),
        unionArray: zod_1.z.array(zod_1.z.union([zod_1.z.string(), zod_1.z.number()]))
    });
    EventExampleEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "event-example",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    EventExampleEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = EventExampleEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "event-example",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    EventExampleEvent.type = "event-example";
})(EventExampleEvent || (exports.EventExampleEvent = EventExampleEvent = {}));
var InspectionCreatedEvent;
(function (InspectionCreatedEvent) {
    const schema = zod_1.z.object({
        inspectionId: zod_1.z.string(),
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        inspectorId: zod_1.z.string(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                state: zod_1.z.enum(["NEW", "GOOD", "BAD", "BROKEN"]),
                images: zod_1.z.array(zod_1.z.string()).optional()
            }))
        })).optional(),
        date: zod_1.z.string(),
        status: zod_1.z.enum(["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"])
    });
    InspectionCreatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "inspection-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    InspectionCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    InspectionCreatedEvent.type = "inspection-created";
})(InspectionCreatedEvent || (exports.InspectionCreatedEvent = InspectionCreatedEvent = {}));
var InspectionDeletedEvent;
(function (InspectionDeletedEvent) {
    const schema = zod_1.z.object({
        inspectionId: zod_1.z.string(),
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string()
    });
    InspectionDeletedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "inspection-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    InspectionDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    InspectionDeletedEvent.type = "inspection-deleted";
})(InspectionDeletedEvent || (exports.InspectionDeletedEvent = InspectionDeletedEvent = {}));
var InspectionPdfGeneratedEvent;
(function (InspectionPdfGeneratedEvent) {
    const schema = zod_1.z.object({
        inspectionId: zod_1.z.string(),
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        key: zod_1.z.string(),
        bucketName: zod_1.z.string()
    });
    InspectionPdfGeneratedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "inspection-pdf-generated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    InspectionPdfGeneratedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionPdfGeneratedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-pdf-generated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    InspectionPdfGeneratedEvent.type = "inspection-pdf-generated";
})(InspectionPdfGeneratedEvent || (exports.InspectionPdfGeneratedEvent = InspectionPdfGeneratedEvent = {}));
var InspectionUpdatedEvent;
(function (InspectionUpdatedEvent) {
    const schema = zod_1.z.object({
        inspectionId: zod_1.z.string(),
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        inspectorId: zod_1.z.string(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                state: zod_1.z.enum(["NEW", "GOOD", "BAD", "BROKEN"]),
                images: zod_1.z.array(zod_1.z.string()).optional()
            }))
        })).optional(),
        date: zod_1.z.string(),
        status: zod_1.z.enum(["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"])
    });
    InspectionUpdatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "inspection-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    InspectionUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "inspection-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    InspectionUpdatedEvent.type = "inspection-updated";
})(InspectionUpdatedEvent || (exports.InspectionUpdatedEvent = InspectionUpdatedEvent = {}));
var ModelCreatedEvent;
(function (ModelCreatedEvent) {
    const schema = zod_1.z.object({
        modelId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        name: zod_1.z.string(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            area: zod_1.z.number().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                images: zod_1.z.array(zod_1.z.string()).optional(),
                type: zod_1.z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
            }))
        }))
    });
    ModelCreatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "model-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    ModelCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    ModelCreatedEvent.type = "model-created";
})(ModelCreatedEvent || (exports.ModelCreatedEvent = ModelCreatedEvent = {}));
var ModelDeletedEvent;
(function (ModelDeletedEvent) {
    const schema = zod_1.z.object({
        modelId: zod_1.z.string(),
        agencyId: zod_1.z.string()
    });
    ModelDeletedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "model-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    ModelDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    ModelDeletedEvent.type = "model-deleted";
})(ModelDeletedEvent || (exports.ModelDeletedEvent = ModelDeletedEvent = {}));
var ModelUpdatedEvent;
(function (ModelUpdatedEvent) {
    const schema = zod_1.z.object({
        modelId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        name: zod_1.z.string(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            area: zod_1.z.number().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                images: zod_1.z.array(zod_1.z.string()).optional(),
                type: zod_1.z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
            }))
        }))
    });
    ModelUpdatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "model-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    ModelUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "model-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    ModelUpdatedEvent.type = "model-updated";
})(ModelUpdatedEvent || (exports.ModelUpdatedEvent = ModelUpdatedEvent = {}));
var PropertyCreatedEvent;
(function (PropertyCreatedEvent) {
    const schema = zod_1.z.object({
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        area: zod_1.z.number().optional(),
        address: zod_1.z.object({
            street: zod_1.z.string(),
            city: zod_1.z.string(),
            country: zod_1.z.string(),
            zipCode: zod_1.z.string(),
            number: zod_1.z.string()
        }),
        owner: zod_1.z.object({
            firstName: zod_1.z.string(),
            lastName: zod_1.z.string(),
            mail: zod_1.z.string().optional(),
            phoneNumber: zod_1.z.string().optional()
        }).optional(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            area: zod_1.z.number().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                images: zod_1.z.array(zod_1.z.string()).optional(),
                type: zod_1.z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
            }))
        }))
    });
    PropertyCreatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "property-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    PropertyCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyCreatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-created",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    PropertyCreatedEvent.type = "property-created";
})(PropertyCreatedEvent || (exports.PropertyCreatedEvent = PropertyCreatedEvent = {}));
var PropertyDeletedEvent;
(function (PropertyDeletedEvent) {
    const schema = zod_1.z.object({
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string()
    });
    PropertyDeletedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "property-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    PropertyDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyDeletedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-deleted",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    PropertyDeletedEvent.type = "property-deleted";
})(PropertyDeletedEvent || (exports.PropertyDeletedEvent = PropertyDeletedEvent = {}));
var PropertyUpdatedEvent;
(function (PropertyUpdatedEvent) {
    const schema = zod_1.z.object({
        propertyId: zod_1.z.string(),
        agencyId: zod_1.z.string(),
        area: zod_1.z.number().optional(),
        address: zod_1.z.object({
            street: zod_1.z.string(),
            city: zod_1.z.string(),
            country: zod_1.z.string(),
            zipCode: zod_1.z.string(),
            number: zod_1.z.string()
        }),
        owner: zod_1.z.object({
            firstName: zod_1.z.string(),
            lastName: zod_1.z.string(),
            mail: zod_1.z.string().optional(),
            phoneNumber: zod_1.z.string().optional()
        }).optional(),
        rooms: zod_1.z.array(zod_1.z.object({
            name: zod_1.z.string(),
            description: zod_1.z.string().optional(),
            area: zod_1.z.number().optional(),
            elements: zod_1.z.array(zod_1.z.object({
                name: zod_1.z.string(),
                description: zod_1.z.string().optional(),
                images: zod_1.z.array(zod_1.z.string()).optional(),
                type: zod_1.z.enum(["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"])
            }))
        }))
    });
    PropertyUpdatedEvent.buildData = (data) => {
        const sanitized = schema.parse(data);
        return {
            type: "property-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: (0, crypto_1.randomUUID)(),
        };
    };
    PropertyUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyUpdatedEvent.buildData(data);
        return new client_eventbridge_1.PutEventsCommand({
            Entries: [
                {
                    Detail: JSON.stringify(envelope),
                    DetailType: "property-updated",
                    EventBusName: process.env.EVENT_BUS_NAME,
                    Source: "custom",
                },
            ],
        });
    };
    PropertyUpdatedEvent.type = "property-updated";
})(PropertyUpdatedEvent || (exports.PropertyUpdatedEvent = PropertyUpdatedEvent = {}));
exports.DEFINITIONS = [{ "name": "agency-created", "description": "Agency created event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyCreated" }, { "name": "agency-deleted", "description": "Agency deleted event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "AgencyDeleted" }, { "name": "agency-updated", "description": "Agency updated event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyUpdated" }, { "name": "event-example", "description": "Comprehensive example event demonstrating all supported attribute type patterns.", "attributes": [{ "name": "simpleString", "type": "string", "description": "A basic string value" }, { "name": "simpleNumber", "type": "number", "description": "A basic number value", "required": true }, { "name": "simpleBoolean", "type": "boolean", "description": "A basic boolean value" }, { "name": "objectAttribute", "required": true, "attributes": [{ "name": "id", "type": "string", "description": "Identifier inside an object", "required": true }, { "name": "count", "type": "number", "description": "Numeric field inside an object" }, { "name": "nested", "required": true, "attributes": [{ "name": "enabled", "type": "boolean", "description": "Nested flag" }, { "name": "label", "type": "string", "description": "Nested label", "required": true }], "description": "A nested object attribute" }], "description": "An attribute whose value is an object with its own fields" }, { "name": "stringArray", "arrayOf": "string", "description": "Array of strings" }, { "name": "numberArray", "arrayOf": "number", "description": "Array of numbers" }, { "name": "objectArray", "arrayOf": { "description": "Value in array of objects", "attributes": [{ "name": "title", "type": "string", "description": "Item title" }, { "name": "quantity", "type": "number", "description": "Item quantity" }] }, "description": "Array of objects (each object item has title and quantity)" }, { "name": "stringEnum", "enum": ["low", "medium", "high"], "description": "String enum represented as a union of literals" }, { "name": "numberEnum", "enum": [0, 1, 2], "description": "Number enum represented as a union of numeric literals" }, { "name": "unionPrimitive", "oneOf": ["string", "number"], "description": "Value can be a string or a number" }, { "name": "unionWithObject", "required": true, "oneOf": ["string", { "attributes": [{ "name": "code", "type": "string", "description": "Object variant code" }, { "name": "details", "required": true, "attributes": [{ "name": "message", "type": "string", "description": "Detail message" }, { "name": "severity", "type": "number", "description": "Detail severity" }], "description": "Nested details object" }], "description": "Object variant of the union" }], "description": "Union of a string or a structured object" }, { "name": "unionArray", "arrayOf": ["string", "number"], "description": "Array whose items can be string or number", "required": true }], "camelName": "EventExample" }, { "name": "inspection-created", "description": "Inspection created event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status, on the created events it should always be TO_DO", "required": true }], "camelName": "InspectionCreated" }, { "name": "inspection-deleted", "description": "Inspection deleted event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "InspectionDeleted" }, { "name": "inspection-pdf-generated", "description": "Inspection PDF generated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "key", "type": "string", "description": "Inspection PDF key in the S3", "required": true }, { "name": "bucketName", "type": "string", "description": "S3 bucket name", "required": true }], "camelName": "InspectionPdfGenerated" }, { "name": "inspection-updated", "description": "Inspection updated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status", "required": true }], "camelName": "InspectionUpdated" }, { "name": "model-created", "description": "Model created event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelCreated" }, { "name": "model-deleted", "description": "Model deleted event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "ModelDeleted" }, { "name": "model-updated", "description": "Model updated event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelUpdated" }, { "name": "property-created", "description": "Property created event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyCreated" }, { "name": "property-deleted", "description": "Property deleted event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "PropertyDeleted" }, { "name": "property-updated", "description": "Property updated event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyUpdated" }];
