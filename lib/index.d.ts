import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
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
};
export type AgencyCreatedEventEnvelope = {
    type: "agency-created";
    data: AgencyCreatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace AgencyCreatedEvent {
    const buildData: (data: AgencyCreatedEventData) => {
        type: string;
        data: AgencyCreatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: AgencyCreatedEventData) => PutEventsCommand;
    const type = "agency-created";
}
/**
 * Agency deleted event
 */
export type AgencyDeletedEventData = {
    /** Agency ID (uuid) */
    agencyId: string;
};
export type AgencyDeletedEventEnvelope = {
    type: "agency-deleted";
    data: AgencyDeletedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace AgencyDeletedEvent {
    const buildData: (data: AgencyDeletedEventData) => {
        type: string;
        data: AgencyDeletedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: AgencyDeletedEventData) => PutEventsCommand;
    const type = "agency-deleted";
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
};
export type AgencyUpdatedEventEnvelope = {
    type: "agency-updated";
    data: AgencyUpdatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace AgencyUpdatedEvent {
    const buildData: (data: AgencyUpdatedEventData) => {
        type: string;
        data: AgencyUpdatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: AgencyUpdatedEventData) => PutEventsCommand;
    const type = "agency-updated";
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
    objectArray?: {
        title?: string;
        /** Item quantity */
        quantity?: number;
    }[];
    /** String enum represented as a union of literals */
    stringEnum?: "low" | "medium" | "high";
    /** Number enum represented as a union of numeric literals */
    numberEnum?: 0 | 1 | 2;
    /** Value can be a string or a number */
    unionPrimitive?: string | number;
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
    };
    /** Array whose items can be string or number */
    unionArray: (string | number)[];
};
export type EventExampleEventEnvelope = {
    type: "event-example";
    data: EventExampleEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace EventExampleEvent {
    const buildData: (data: EventExampleEventData) => {
        type: string;
        data: EventExampleEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: EventExampleEventData) => PutEventsCommand;
    const type = "event-example";
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
    rooms?: {
        name: string;
        /** Room description */
        description?: string;
        /** Elements of the room */
        elements: {
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
};
export type InspectionCreatedEventEnvelope = {
    type: "inspection-created";
    data: InspectionCreatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace InspectionCreatedEvent {
    const buildData: (data: InspectionCreatedEventData) => {
        type: string;
        data: InspectionCreatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: InspectionCreatedEventData) => PutEventsCommand;
    const type = "inspection-created";
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
};
export type InspectionDeletedEventEnvelope = {
    type: "inspection-deleted";
    data: InspectionDeletedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace InspectionDeletedEvent {
    const buildData: (data: InspectionDeletedEventData) => {
        type: string;
        data: InspectionDeletedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: InspectionDeletedEventData) => PutEventsCommand;
    const type = "inspection-deleted";
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
};
export type InspectionPdfGeneratedEventEnvelope = {
    type: "inspection-pdf-generated";
    data: InspectionPdfGeneratedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace InspectionPdfGeneratedEvent {
    const buildData: (data: InspectionPdfGeneratedEventData) => {
        type: string;
        data: InspectionPdfGeneratedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: InspectionPdfGeneratedEventData) => PutEventsCommand;
    const type = "inspection-pdf-generated";
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
    rooms?: {
        name: string;
        /** Room description */
        description?: string;
        /** Elements of the room */
        elements: {
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
};
export type InspectionUpdatedEventEnvelope = {
    type: "inspection-updated";
    data: InspectionUpdatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace InspectionUpdatedEvent {
    const buildData: (data: InspectionUpdatedEventData) => {
        type: string;
        data: InspectionUpdatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: InspectionUpdatedEventData) => PutEventsCommand;
    const type = "inspection-updated";
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
    rooms: {
        name: string;
        /** Room description */
        description?: string;
        /** Room area in square meters */
        area?: number;
        /** Elements of the room */
        elements: {
            name: string;
            /** Element description */
            description?: string;
            /** Images of the element */
            images?: string[];
            /** Element type */
            type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
        }[];
    }[];
};
export type ModelCreatedEventEnvelope = {
    type: "model-created";
    data: ModelCreatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace ModelCreatedEvent {
    const buildData: (data: ModelCreatedEventData) => {
        type: string;
        data: ModelCreatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: ModelCreatedEventData) => PutEventsCommand;
    const type = "model-created";
}
/**
 * Model deleted event
 */
export type ModelDeletedEventData = {
    /** Model ID (uuid) */
    modelId: string;
    /** Agency ID (uuid) */
    agencyId: string;
};
export type ModelDeletedEventEnvelope = {
    type: "model-deleted";
    data: ModelDeletedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace ModelDeletedEvent {
    const buildData: (data: ModelDeletedEventData) => {
        type: string;
        data: ModelDeletedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: ModelDeletedEventData) => PutEventsCommand;
    const type = "model-deleted";
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
    rooms: {
        name: string;
        /** Room description */
        description?: string;
        /** Room area in square meters */
        area?: number;
        /** Elements of the room */
        elements: {
            name: string;
            /** Element description */
            description?: string;
            /** Images of the element */
            images?: string[];
            /** Element type */
            type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
        }[];
    }[];
};
export type ModelUpdatedEventEnvelope = {
    type: "model-updated";
    data: ModelUpdatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace ModelUpdatedEvent {
    const buildData: (data: ModelUpdatedEventData) => {
        type: string;
        data: ModelUpdatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: ModelUpdatedEventData) => PutEventsCommand;
    const type = "model-updated";
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
    rooms: {
        name: string;
        /** Room description */
        description?: string;
        /** Room area in square meters */
        area?: number;
        /** Elements of the room */
        elements: {
            name: string;
            /** Element description */
            description?: string;
            /** Images of the element */
            images?: string[];
            /** Element type */
            type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
        }[];
    }[];
};
export type PropertyCreatedEventEnvelope = {
    type: "property-created";
    data: PropertyCreatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace PropertyCreatedEvent {
    const buildData: (data: PropertyCreatedEventData) => {
        type: string;
        data: PropertyCreatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: PropertyCreatedEventData) => PutEventsCommand;
    const type = "property-created";
}
/**
 * Property deleted event
 */
export type PropertyDeletedEventData = {
    /** Property ID (uuid) */
    propertyId: string;
    /** Agency ID (uuid) */
    agencyId: string;
};
export type PropertyDeletedEventEnvelope = {
    type: "property-deleted";
    data: PropertyDeletedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace PropertyDeletedEvent {
    const buildData: (data: PropertyDeletedEventData) => {
        type: string;
        data: PropertyDeletedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: PropertyDeletedEventData) => PutEventsCommand;
    const type = "property-deleted";
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
    rooms: {
        name: string;
        /** Room description */
        description?: string;
        /** Room area in square meters */
        area?: number;
        /** Elements of the room */
        elements: {
            name: string;
            /** Element description */
            description?: string;
            /** Images of the element */
            images?: string[];
            /** Element type */
            type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
        }[];
    }[];
};
export type PropertyUpdatedEventEnvelope = {
    type: "property-updated";
    data: PropertyUpdatedEventData;
    time: number;
    source: string;
    account: string;
    version: string;
    id: string;
};
export declare namespace PropertyUpdatedEvent {
    const buildData: (data: PropertyUpdatedEventData) => {
        type: string;
        data: PropertyUpdatedEventData;
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    const build: (data: PropertyUpdatedEventData) => PutEventsCommand;
    const type = "property-updated";
}
export declare const DEFINITIONS: ({
    name: string;
    description: string;
    attributes: ({
        name: string;
        type: string;
        description: string;
        required?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        required: boolean;
        attributes?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        required: boolean;
        attributes: ({
            name: string;
            type: string;
            description: string;
            required: boolean;
            attributes?: undefined;
        } | {
            name: string;
            type: string;
            description: string;
            required?: undefined;
            attributes?: undefined;
        } | {
            name: string;
            required: boolean;
            attributes: ({
                name: string;
                type: string;
                description: string;
                required?: undefined;
            } | {
                name: string;
                type: string;
                description: string;
                required: boolean;
            })[];
            description: string;
            type?: undefined;
        })[];
        description: string;
        type?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        arrayOf: string;
        description: string;
        type?: undefined;
        required?: undefined;
        attributes?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        arrayOf: {
            description: string;
            attributes: {
                name: string;
                type: string;
                description: string;
            }[];
        };
        description: string;
        type?: undefined;
        required?: undefined;
        attributes?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        enum: string[];
        description: string;
        type?: undefined;
        required?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        enum: number[];
        description: string;
        type?: undefined;
        required?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        oneOf: string[];
        description: string;
        type?: undefined;
        required?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
    } | {
        name: string;
        required: boolean;
        oneOf: (string | {
            attributes: ({
                name: string;
                type: string;
                description: string;
                required?: undefined;
                attributes?: undefined;
            } | {
                name: string;
                required: boolean;
                attributes: {
                    name: string;
                    type: string;
                    description: string;
                }[];
                description: string;
                type?: undefined;
            })[];
            description: string;
        })[];
        description: string;
        type?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
    } | {
        name: string;
        arrayOf: string[];
        description: string;
        required: boolean;
        type?: undefined;
        attributes?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    })[];
    camelName: string;
} | {
    name: string;
    description: string;
    attributes: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        arrayOf?: undefined;
        enum?: undefined;
    } | {
        name: string;
        description: string;
        arrayOf: {
            description: string;
            attributes: ({
                name: string;
                type: string;
                description: string;
                required: boolean;
                arrayOf?: undefined;
            } | {
                name: string;
                type: string;
                description: string;
                required?: undefined;
                arrayOf?: undefined;
            } | {
                name: string;
                description: string;
                required: boolean;
                arrayOf: {
                    description: string;
                    attributes: ({
                        name: string;
                        type: string;
                        description: string;
                        required: boolean;
                        enum?: undefined;
                        arrayOf?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                        required?: undefined;
                        enum?: undefined;
                        arrayOf?: undefined;
                    } | {
                        name: string;
                        enum: string[];
                        description: string;
                        required: boolean;
                        type?: undefined;
                        arrayOf?: undefined;
                    } | {
                        name: string;
                        description: string;
                        arrayOf: string;
                        type?: undefined;
                        required?: undefined;
                        enum?: undefined;
                    })[];
                };
                type?: undefined;
            })[];
        };
        type?: undefined;
        required?: undefined;
        enum?: undefined;
    } | {
        name: string;
        enum: string[];
        description: string;
        required: boolean;
        type?: undefined;
        arrayOf?: undefined;
    })[];
    camelName: string;
} | {
    name: string;
    description: string;
    attributes: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        attributes?: undefined;
        arrayOf?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        required?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
    } | {
        name: string;
        required: boolean;
        attributes: {
            name: string;
            type: string;
            description: string;
            required: boolean;
        }[];
        type?: undefined;
        description?: undefined;
        arrayOf?: undefined;
    } | {
        name: string;
        description: string;
        attributes: ({
            name: string;
            type: string;
            description: string;
            required: boolean;
        } | {
            name: string;
            type: string;
            description: string;
            required?: undefined;
        })[];
        type?: undefined;
        required?: undefined;
        arrayOf?: undefined;
    } | {
        name: string;
        description: string;
        required: boolean;
        arrayOf: {
            description: string;
            attributes: ({
                name: string;
                type: string;
                description: string;
                required: boolean;
                arrayOf?: undefined;
            } | {
                name: string;
                type: string;
                description: string;
                required?: undefined;
                arrayOf?: undefined;
            } | {
                name: string;
                description: string;
                required: boolean;
                arrayOf: {
                    description: string;
                    attributes: ({
                        name: string;
                        type: string;
                        description: string;
                        required: boolean;
                        arrayOf?: undefined;
                        enum?: undefined;
                    } | {
                        name: string;
                        type: string;
                        description: string;
                        required?: undefined;
                        arrayOf?: undefined;
                        enum?: undefined;
                    } | {
                        name: string;
                        description: string;
                        arrayOf: string;
                        type?: undefined;
                        required?: undefined;
                        enum?: undefined;
                    } | {
                        name: string;
                        enum: string[];
                        description: string;
                        required: boolean;
                        type?: undefined;
                        arrayOf?: undefined;
                    })[];
                };
                type?: undefined;
            })[];
        };
        type?: undefined;
        attributes?: undefined;
    })[];
    camelName: string;
})[];
