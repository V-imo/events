import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { randomUUID } from "crypto";
export var AgencyCreatedEvent;
(function (AgencyCreatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.name) {
            throw new Error("Missing required property: name");
        }
        if (!data.address) {
            throw new Error("Missing required property: address");
        }
        if (!data.address.street) {
            throw new Error("Missing required property: address.street");
        }
        if (!data.address.city) {
            throw new Error("Missing required property: address.city");
        }
        if (!data.address.country) {
            throw new Error("Missing required property: address.country");
        }
        if (!data.address.zipCode) {
            throw new Error("Missing required property: address.zipCode");
        }
        if (!data.address.number) {
            throw new Error("Missing required property: address.number");
        }
        if (!data.contactMail) {
            throw new Error("Missing required property: contactMail");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.agencyId = data.agencyId;
        result.name = data.name;
        result.address = {};
        result.address.street = data.address.street;
        result.address.city = data.address.city;
        result.address.country = data.address.country;
        result.address.zipCode = data.address.zipCode;
        result.address.number = data.address.number;
        result.contactMail = data.contactMail;
        if (data.contactPhone) {
            result.contactPhone = data.contactPhone;
        }
        return result;
    };
    AgencyCreatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "agency-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    AgencyCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyCreatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(AgencyCreatedEvent || (AgencyCreatedEvent = {}));
export var AgencyDeletedEvent;
(function (AgencyDeletedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.agencyId = data.agencyId;
        return result;
    };
    AgencyDeletedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "agency-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    AgencyDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyDeletedEvent.buildData(data);
        return new PutEventsCommand({
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
})(AgencyDeletedEvent || (AgencyDeletedEvent = {}));
export var AgencyUpdatedEvent;
(function (AgencyUpdatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.name) {
            throw new Error("Missing required property: name");
        }
        if (!data.address) {
            throw new Error("Missing required property: address");
        }
        if (!data.address.street) {
            throw new Error("Missing required property: address.street");
        }
        if (!data.address.city) {
            throw new Error("Missing required property: address.city");
        }
        if (!data.address.country) {
            throw new Error("Missing required property: address.country");
        }
        if (!data.address.zipCode) {
            throw new Error("Missing required property: address.zipCode");
        }
        if (!data.address.number) {
            throw new Error("Missing required property: address.number");
        }
        if (!data.contactMail) {
            throw new Error("Missing required property: contactMail");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.agencyId = data.agencyId;
        result.name = data.name;
        result.address = {};
        result.address.street = data.address.street;
        result.address.city = data.address.city;
        result.address.country = data.address.country;
        result.address.zipCode = data.address.zipCode;
        result.address.number = data.address.number;
        result.contactMail = data.contactMail;
        if (data.contactPhone) {
            result.contactPhone = data.contactPhone;
        }
        return result;
    };
    AgencyUpdatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "agency-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    AgencyUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = AgencyUpdatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(AgencyUpdatedEvent || (AgencyUpdatedEvent = {}));
export var EventExampleEvent;
(function (EventExampleEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.simpleNumber) {
            throw new Error("Missing required property: simpleNumber");
        }
        if (!data.objectAttribute) {
            throw new Error("Missing required property: objectAttribute");
        }
        if (!data.objectAttribute.id) {
            throw new Error("Missing required property: objectAttribute.id");
        }
        if (!data.objectAttribute.nested) {
            throw new Error("Missing required property: objectAttribute.nested");
        }
        if (!data.objectAttribute.nested.label) {
            throw new Error("Missing required property: objectAttribute.nested.label");
        }
        if (data.objectArray && Array.isArray(data.objectArray)) {
            data.objectArray.forEach((item, index) => {
            });
        }
        if (!data.unionWithObject) {
            throw new Error("Missing required property: unionWithObject");
        }
        if (!data.unionArray || !Array.isArray(data.unionArray)) {
            throw new Error("Missing required property: unionArray (must be an array)");
        }
        // Create sanitized object with only schema properties
        const result = {};
        if (data.simpleString) {
            result.simpleString = data.simpleString;
        }
        result.simpleNumber = data.simpleNumber;
        if (data.simpleBoolean) {
            result.simpleBoolean = data.simpleBoolean;
        }
        result.objectAttribute = {};
        result.objectAttribute.id = data.objectAttribute.id;
        if (data.objectAttribute.count) {
            result.objectAttribute.count = data.objectAttribute.count;
        }
        result.objectAttribute.nested = {};
        if (data.objectAttribute.nested.enabled) {
            result.objectAttribute.nested.enabled = data.objectAttribute.nested.enabled;
        }
        result.objectAttribute.nested.label = data.objectAttribute.nested.label;
        if (data.stringArray && Array.isArray(data.stringArray)) {
            result.stringArray = data.stringArray;
        }
        if (data.numberArray && Array.isArray(data.numberArray)) {
            result.numberArray = data.numberArray;
        }
        if (data.objectArray && Array.isArray(data.objectArray)) {
            result.objectArray = data.objectArray.map((item) => {
                const sanitized = {};
                if (item.title) {
                    sanitized.title = item.title;
                }
                if (item.quantity) {
                    sanitized.quantity = item.quantity;
                }
                return sanitized;
            });
        }
        if (data.stringEnum) {
            result.stringEnum = data.stringEnum;
        }
        if (data.numberEnum) {
            result.numberEnum = data.numberEnum;
        }
        if (data.unionPrimitive) {
            result.unionPrimitive = data.unionPrimitive;
        }
        result.unionWithObject = data.unionWithObject;
        result.unionArray = data.unionArray;
        return result;
    };
    EventExampleEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "event-example",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    EventExampleEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = EventExampleEvent.buildData(data);
        return new PutEventsCommand({
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
})(EventExampleEvent || (EventExampleEvent = {}));
export var InspectionCreatedEvent;
(function (InspectionCreatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.inspectionId) {
            throw new Error("Missing required property: inspectionId");
        }
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.inspectorId) {
            throw new Error("Missing required property: inspectorId");
        }
        if (data.rooms && Array.isArray(data.rooms)) {
            data.rooms.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].name");
                }
                if (!item.elements || !Array.isArray(item.elements)) {
                    throw new Error("Missing required property: rooms[index].elements (must be an array)");
                }
                item.elements.forEach((item, index) => {
                    if (!item.name) {
                        throw new Error("Missing required property: rooms[index].elements[index].name");
                    }
                    if (!item.state) {
                        throw new Error("Missing required property: rooms[index].elements[index].state");
                    }
                });
            });
        }
        if (!data.date) {
            throw new Error("Missing required property: date");
        }
        if (!data.status) {
            throw new Error("Missing required property: status");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.inspectionId = data.inspectionId;
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        result.inspectorId = data.inspectorId;
        if (data.rooms && Array.isArray(data.rooms)) {
            result.rooms = data.rooms.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                sanitized.elements = item.elements.map((item) => {
                    const sanitized = {};
                    sanitized.name = item.name;
                    if (item.description) {
                        sanitized.description = item.description;
                    }
                    sanitized.state = item.state;
                    if (item.images && Array.isArray(item.images)) {
                        sanitized.images = item.images;
                    }
                    return sanitized;
                });
                return sanitized;
            });
        }
        result.date = data.date;
        result.status = data.status;
        return result;
    };
    InspectionCreatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "inspection-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    InspectionCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionCreatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(InspectionCreatedEvent || (InspectionCreatedEvent = {}));
export var InspectionDeletedEvent;
(function (InspectionDeletedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.inspectionId) {
            throw new Error("Missing required property: inspectionId");
        }
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.inspectionId = data.inspectionId;
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        return result;
    };
    InspectionDeletedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "inspection-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    InspectionDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionDeletedEvent.buildData(data);
        return new PutEventsCommand({
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
})(InspectionDeletedEvent || (InspectionDeletedEvent = {}));
export var InspectionPdfGeneratedEvent;
(function (InspectionPdfGeneratedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.inspectionId) {
            throw new Error("Missing required property: inspectionId");
        }
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.key) {
            throw new Error("Missing required property: key");
        }
        if (!data.bucketName) {
            throw new Error("Missing required property: bucketName");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.inspectionId = data.inspectionId;
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        result.key = data.key;
        result.bucketName = data.bucketName;
        return result;
    };
    InspectionPdfGeneratedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "inspection-pdf-generated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    InspectionPdfGeneratedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionPdfGeneratedEvent.buildData(data);
        return new PutEventsCommand({
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
})(InspectionPdfGeneratedEvent || (InspectionPdfGeneratedEvent = {}));
export var InspectionUpdatedEvent;
(function (InspectionUpdatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.inspectionId) {
            throw new Error("Missing required property: inspectionId");
        }
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.inspectorId) {
            throw new Error("Missing required property: inspectorId");
        }
        if (data.rooms && Array.isArray(data.rooms)) {
            data.rooms.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].name");
                }
                if (!item.elements || !Array.isArray(item.elements)) {
                    throw new Error("Missing required property: rooms[index].elements (must be an array)");
                }
                item.elements.forEach((item, index) => {
                    if (!item.name) {
                        throw new Error("Missing required property: rooms[index].elements[index].name");
                    }
                    if (!item.state) {
                        throw new Error("Missing required property: rooms[index].elements[index].state");
                    }
                });
            });
        }
        if (!data.date) {
            throw new Error("Missing required property: date");
        }
        if (!data.status) {
            throw new Error("Missing required property: status");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.inspectionId = data.inspectionId;
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        result.inspectorId = data.inspectorId;
        if (data.rooms && Array.isArray(data.rooms)) {
            result.rooms = data.rooms.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                sanitized.elements = item.elements.map((item) => {
                    const sanitized = {};
                    sanitized.name = item.name;
                    if (item.description) {
                        sanitized.description = item.description;
                    }
                    sanitized.state = item.state;
                    if (item.images && Array.isArray(item.images)) {
                        sanitized.images = item.images;
                    }
                    return sanitized;
                });
                return sanitized;
            });
        }
        result.date = data.date;
        result.status = data.status;
        return result;
    };
    InspectionUpdatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "inspection-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    InspectionUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = InspectionUpdatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(InspectionUpdatedEvent || (InspectionUpdatedEvent = {}));
export var ModelCreatedEvent;
(function (ModelCreatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.modelId) {
            throw new Error("Missing required property: modelId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.name) {
            throw new Error("Missing required property: name");
        }
        if (!data.rooms || !Array.isArray(data.rooms)) {
            throw new Error("Missing required property: rooms (must be an array)");
        }
        data.rooms.forEach((item, index) => {
            if (!item.name) {
                throw new Error("Missing required property: rooms[index].name");
            }
            if (!item.elements || !Array.isArray(item.elements)) {
                throw new Error("Missing required property: rooms[index].elements (must be an array)");
            }
            item.elements.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].elements[index].name");
                }
                if (!item.type) {
                    throw new Error("Missing required property: rooms[index].elements[index].type");
                }
            });
        });
        // Create sanitized object with only schema properties
        const result = {};
        result.modelId = data.modelId;
        result.agencyId = data.agencyId;
        result.name = data.name;
        result.rooms = data.rooms.map((item) => {
            const sanitized = {};
            sanitized.name = item.name;
            if (item.description) {
                sanitized.description = item.description;
            }
            if (item.area) {
                sanitized.area = item.area;
            }
            sanitized.elements = item.elements.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                if (item.images && Array.isArray(item.images)) {
                    sanitized.images = item.images;
                }
                sanitized.type = item.type;
                return sanitized;
            });
            return sanitized;
        });
        return result;
    };
    ModelCreatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "model-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    ModelCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelCreatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(ModelCreatedEvent || (ModelCreatedEvent = {}));
export var ModelDeletedEvent;
(function (ModelDeletedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.modelId) {
            throw new Error("Missing required property: modelId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.modelId = data.modelId;
        result.agencyId = data.agencyId;
        return result;
    };
    ModelDeletedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "model-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    ModelDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelDeletedEvent.buildData(data);
        return new PutEventsCommand({
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
})(ModelDeletedEvent || (ModelDeletedEvent = {}));
export var ModelUpdatedEvent;
(function (ModelUpdatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.modelId) {
            throw new Error("Missing required property: modelId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.name) {
            throw new Error("Missing required property: name");
        }
        if (!data.rooms || !Array.isArray(data.rooms)) {
            throw new Error("Missing required property: rooms (must be an array)");
        }
        data.rooms.forEach((item, index) => {
            if (!item.name) {
                throw new Error("Missing required property: rooms[index].name");
            }
            if (!item.elements || !Array.isArray(item.elements)) {
                throw new Error("Missing required property: rooms[index].elements (must be an array)");
            }
            item.elements.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].elements[index].name");
                }
                if (!item.type) {
                    throw new Error("Missing required property: rooms[index].elements[index].type");
                }
            });
        });
        // Create sanitized object with only schema properties
        const result = {};
        result.modelId = data.modelId;
        result.agencyId = data.agencyId;
        result.name = data.name;
        result.rooms = data.rooms.map((item) => {
            const sanitized = {};
            sanitized.name = item.name;
            if (item.description) {
                sanitized.description = item.description;
            }
            if (item.area) {
                sanitized.area = item.area;
            }
            sanitized.elements = item.elements.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                if (item.images && Array.isArray(item.images)) {
                    sanitized.images = item.images;
                }
                sanitized.type = item.type;
                return sanitized;
            });
            return sanitized;
        });
        return result;
    };
    ModelUpdatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "model-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    ModelUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = ModelUpdatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(ModelUpdatedEvent || (ModelUpdatedEvent = {}));
export var PropertyCreatedEvent;
(function (PropertyCreatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.address) {
            throw new Error("Missing required property: address");
        }
        if (!data.address.street) {
            throw new Error("Missing required property: address.street");
        }
        if (!data.address.city) {
            throw new Error("Missing required property: address.city");
        }
        if (!data.address.country) {
            throw new Error("Missing required property: address.country");
        }
        if (!data.address.zipCode) {
            throw new Error("Missing required property: address.zipCode");
        }
        if (!data.address.number) {
            throw new Error("Missing required property: address.number");
        }
        if (data.owner) {
            if (!data.owner.firstName) {
                throw new Error("Missing required property: owner.firstName");
            }
            if (!data.owner.lastName) {
                throw new Error("Missing required property: owner.lastName");
            }
        }
        if (!data.rooms || !Array.isArray(data.rooms)) {
            throw new Error("Missing required property: rooms (must be an array)");
        }
        data.rooms.forEach((item, index) => {
            if (!item.name) {
                throw new Error("Missing required property: rooms[index].name");
            }
            if (!item.elements || !Array.isArray(item.elements)) {
                throw new Error("Missing required property: rooms[index].elements (must be an array)");
            }
            item.elements.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].elements[index].name");
                }
                if (!item.type) {
                    throw new Error("Missing required property: rooms[index].elements[index].type");
                }
            });
        });
        // Create sanitized object with only schema properties
        const result = {};
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        if (data.area) {
            result.area = data.area;
        }
        result.address = {};
        result.address.street = data.address.street;
        result.address.city = data.address.city;
        result.address.country = data.address.country;
        result.address.zipCode = data.address.zipCode;
        result.address.number = data.address.number;
        if (data.owner) {
            result.owner = {};
            result.owner.firstName = data.owner.firstName;
            result.owner.lastName = data.owner.lastName;
            if (data.owner.mail) {
                result.owner.mail = data.owner.mail;
            }
            if (data.owner.phoneNumber) {
                result.owner.phoneNumber = data.owner.phoneNumber;
            }
        }
        result.rooms = data.rooms.map((item) => {
            const sanitized = {};
            sanitized.name = item.name;
            if (item.description) {
                sanitized.description = item.description;
            }
            if (item.area) {
                sanitized.area = item.area;
            }
            sanitized.elements = item.elements.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                if (item.images && Array.isArray(item.images)) {
                    sanitized.images = item.images;
                }
                sanitized.type = item.type;
                return sanitized;
            });
            return sanitized;
        });
        return result;
    };
    PropertyCreatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "property-created",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    PropertyCreatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyCreatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(PropertyCreatedEvent || (PropertyCreatedEvent = {}));
export var PropertyDeletedEvent;
(function (PropertyDeletedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        // Create sanitized object with only schema properties
        const result = {};
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        return result;
    };
    PropertyDeletedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "property-deleted",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    PropertyDeletedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyDeletedEvent.buildData(data);
        return new PutEventsCommand({
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
})(PropertyDeletedEvent || (PropertyDeletedEvent = {}));
export var PropertyUpdatedEvent;
(function (PropertyUpdatedEvent) {
    const sanitize = (data) => {
        if (!data || typeof data !== 'object') {
            throw new Error("Data must be an object");
        }
        // Validate required properties
        if (!data.propertyId) {
            throw new Error("Missing required property: propertyId");
        }
        if (!data.agencyId) {
            throw new Error("Missing required property: agencyId");
        }
        if (!data.address) {
            throw new Error("Missing required property: address");
        }
        if (!data.address.street) {
            throw new Error("Missing required property: address.street");
        }
        if (!data.address.city) {
            throw new Error("Missing required property: address.city");
        }
        if (!data.address.country) {
            throw new Error("Missing required property: address.country");
        }
        if (!data.address.zipCode) {
            throw new Error("Missing required property: address.zipCode");
        }
        if (!data.address.number) {
            throw new Error("Missing required property: address.number");
        }
        if (data.owner) {
            if (!data.owner.firstName) {
                throw new Error("Missing required property: owner.firstName");
            }
            if (!data.owner.lastName) {
                throw new Error("Missing required property: owner.lastName");
            }
        }
        if (!data.rooms || !Array.isArray(data.rooms)) {
            throw new Error("Missing required property: rooms (must be an array)");
        }
        data.rooms.forEach((item, index) => {
            if (!item.name) {
                throw new Error("Missing required property: rooms[index].name");
            }
            if (!item.elements || !Array.isArray(item.elements)) {
                throw new Error("Missing required property: rooms[index].elements (must be an array)");
            }
            item.elements.forEach((item, index) => {
                if (!item.name) {
                    throw new Error("Missing required property: rooms[index].elements[index].name");
                }
                if (!item.type) {
                    throw new Error("Missing required property: rooms[index].elements[index].type");
                }
            });
        });
        // Create sanitized object with only schema properties
        const result = {};
        result.propertyId = data.propertyId;
        result.agencyId = data.agencyId;
        if (data.area) {
            result.area = data.area;
        }
        result.address = {};
        result.address.street = data.address.street;
        result.address.city = data.address.city;
        result.address.country = data.address.country;
        result.address.zipCode = data.address.zipCode;
        result.address.number = data.address.number;
        if (data.owner) {
            result.owner = {};
            result.owner.firstName = data.owner.firstName;
            result.owner.lastName = data.owner.lastName;
            if (data.owner.mail) {
                result.owner.mail = data.owner.mail;
            }
            if (data.owner.phoneNumber) {
                result.owner.phoneNumber = data.owner.phoneNumber;
            }
        }
        result.rooms = data.rooms.map((item) => {
            const sanitized = {};
            sanitized.name = item.name;
            if (item.description) {
                sanitized.description = item.description;
            }
            if (item.area) {
                sanitized.area = item.area;
            }
            sanitized.elements = item.elements.map((item) => {
                const sanitized = {};
                sanitized.name = item.name;
                if (item.description) {
                    sanitized.description = item.description;
                }
                if (item.images && Array.isArray(item.images)) {
                    sanitized.images = item.images;
                }
                sanitized.type = item.type;
                return sanitized;
            });
            return sanitized;
        });
        return result;
    };
    PropertyUpdatedEvent.buildData = (data) => {
        const sanitized = sanitize(data);
        return {
            type: "property-updated",
            data: sanitized,
            timestamp: Math.floor(Date.now() / 1000),
            source: "custom",
            id: randomUUID(),
        };
    };
    PropertyUpdatedEvent.build = (data) => {
        if (!process.env.EVENT_BUS_NAME)
            throw new Error("process.env.EVENT_BUS_NAME must be provided");
        const envelope = PropertyUpdatedEvent.buildData(data);
        return new PutEventsCommand({
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
})(PropertyUpdatedEvent || (PropertyUpdatedEvent = {}));
export const DEFINITIONS = [{ "name": "agency-created", "description": "Agency created event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyCreated" }, { "name": "agency-deleted", "description": "Agency deleted event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "AgencyDeleted" }, { "name": "agency-updated", "description": "Agency updated event", "attributes": [{ "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Agency name", "required": true }, { "name": "address", "attributes": [{ "name": "street", "type": "string", "description": "Agency street", "required": true }, { "name": "city", "type": "string", "description": "Agency city", "required": true }, { "name": "country", "type": "string", "description": "Agency country", "required": true }, { "name": "zipCode", "type": "string", "description": "Agency zip code", "required": true }, { "name": "number", "type": "string", "description": "Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }], "description": "Agency address", "required": true }, { "name": "contactMail", "type": "string", "description": "Agency contact mail", "required": true }, { "name": "contactPhone", "type": "string", "description": "Agency contact phone number" }], "camelName": "AgencyUpdated" }, { "name": "event-example", "description": "Comprehensive example event demonstrating all supported attribute type patterns.", "attributes": [{ "name": "simpleString", "type": "string", "description": "A basic string value" }, { "name": "simpleNumber", "type": "number", "description": "A basic number value", "required": true }, { "name": "simpleBoolean", "type": "boolean", "description": "A basic boolean value" }, { "name": "objectAttribute", "required": true, "attributes": [{ "name": "id", "type": "string", "description": "Identifier inside an object", "required": true }, { "name": "count", "type": "number", "description": "Numeric field inside an object" }, { "name": "nested", "required": true, "attributes": [{ "name": "enabled", "type": "boolean", "description": "Nested flag" }, { "name": "label", "type": "string", "description": "Nested label", "required": true }], "description": "A nested object attribute" }], "description": "An attribute whose value is an object with its own fields" }, { "name": "stringArray", "arrayOf": "string", "description": "Array of strings" }, { "name": "numberArray", "arrayOf": "number", "description": "Array of numbers" }, { "name": "objectArray", "arrayOf": { "description": "Value in array of objects", "attributes": [{ "name": "title", "type": "string", "description": "Item title" }, { "name": "quantity", "type": "number", "description": "Item quantity" }] }, "description": "Array of objects (each object item has title and quantity)" }, { "name": "stringEnum", "enum": ["low", "medium", "high"], "description": "String enum represented as a union of literals" }, { "name": "numberEnum", "enum": [0, 1, 2], "description": "Number enum represented as a union of numeric literals" }, { "name": "unionPrimitive", "oneOf": ["string", "number"], "description": "Value can be a string or a number" }, { "name": "unionWithObject", "required": true, "oneOf": ["string", { "attributes": [{ "name": "code", "type": "string", "description": "Object variant code" }, { "name": "details", "required": true, "attributes": [{ "name": "message", "type": "string", "description": "Detail message" }, { "name": "severity", "type": "number", "description": "Detail severity" }], "description": "Nested details object" }], "description": "Object variant of the union" }], "description": "Union of a string or a structured object" }, { "name": "unionArray", "arrayOf": ["string", "number"], "description": "Array whose items can be string or number", "required": true }], "camelName": "EventExample" }, { "name": "inspection-created", "description": "Inspection created event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status, on the created events it should always be TO_DO", "required": true }], "camelName": "InspectionCreated" }, { "name": "inspection-deleted", "description": "Inspection deleted event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "InspectionDeleted" }, { "name": "inspection-pdf-generated", "description": "Inspection PDF generated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "key", "type": "string", "description": "Inspection PDF key in the S3", "required": true }, { "name": "bucketName", "type": "string", "description": "S3 bucket name", "required": true }], "camelName": "InspectionPdfGenerated" }, { "name": "inspection-updated", "description": "Inspection updated event", "attributes": [{ "name": "inspectionId", "type": "string", "description": "Inspection ID (uuid)", "required": true }, { "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "inspectorId", "type": "string", "description": "Inspector ID (uuid)", "required": true }, { "name": "rooms", "description": "Rooms", "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "state", "enum": ["NEW", "GOOD", "BAD", "BROKEN"], "description": "Element state", "required": true }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }] } }] } }, { "name": "date", "type": "string", "description": "Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ", "required": true }, { "name": "status", "enum": ["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"], "description": "Inspection status", "required": true }], "camelName": "InspectionUpdated" }, { "name": "model-created", "description": "Model created event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelCreated" }, { "name": "model-deleted", "description": "Model deleted event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "ModelDeleted" }, { "name": "model-updated", "description": "Model updated event", "attributes": [{ "name": "modelId", "type": "string", "description": "Model ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "name", "type": "string", "description": "Model name", "required": true }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "ModelUpdated" }, { "name": "property-created", "description": "Property created event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyCreated" }, { "name": "property-deleted", "description": "Property deleted event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }], "camelName": "PropertyDeleted" }, { "name": "property-updated", "description": "Property updated event", "attributes": [{ "name": "propertyId", "type": "string", "description": "Property ID (uuid)", "required": true }, { "name": "agencyId", "type": "string", "description": "Agency ID (uuid)", "required": true }, { "name": "area", "type": "number", "description": "Property area in square meters" }, { "name": "address", "required": true, "attributes": [{ "name": "street", "type": "string", "description": "Property street", "required": true }, { "name": "city", "type": "string", "description": "Property city", "required": true }, { "name": "country", "type": "string", "description": "Property country", "required": true }, { "name": "zipCode", "type": "string", "description": "Property zip code", "required": true }, { "name": "number", "type": "string", "description": "Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.", "required": true }] }, { "name": "owner", "description": "Property owner", "attributes": [{ "name": "firstName", "type": "string", "description": "Property owner first name", "required": true }, { "name": "lastName", "type": "string", "description": "Property owner last name", "required": true }, { "name": "mail", "type": "string", "description": "Property contact mail" }, { "name": "phoneNumber", "type": "string", "description": "Property contact phone" }] }, { "name": "rooms", "description": "Rooms", "required": true, "arrayOf": { "description": "Room", "attributes": [{ "name": "name", "type": "string", "description": "Room name", "required": true }, { "name": "description", "type": "string", "description": "Room description" }, { "name": "area", "type": "number", "description": "Room area in square meters" }, { "name": "elements", "description": "Elements of the room", "required": true, "arrayOf": { "description": "Element", "attributes": [{ "name": "name", "type": "string", "description": "Element name", "required": true }, { "name": "description", "type": "string", "description": "Element description" }, { "name": "images", "description": "Images of the element", "arrayOf": "string" }, { "name": "type", "enum": ["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"], "description": "Element type", "required": true }] } }] } }], "camelName": "PropertyUpdated" }];
