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
export declare namespace AgencyCreatedEvent {
    const build: (data: AgencyCreatedEventData) => {
        type: string;
        data: AgencyCreatedEventData;
        timestamp: number;
        source: string;
    };
    const type = "agency-created";
}
/**
 * Agency deleted event
 */
export type AgencyDeletedEventData = {
    /** Agency ID (uuid) */
    agencyId: string;
};
export declare namespace AgencyDeletedEvent {
    const build: (data: AgencyDeletedEventData) => {
        type: string;
        data: AgencyDeletedEventData;
        timestamp: number;
        source: string;
    };
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
export declare namespace AgencyUpdatedEvent {
    const build: (data: AgencyUpdatedEventData) => {
        type: string;
        data: AgencyUpdatedEventData;
        timestamp: number;
        source: string;
    };
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
export declare namespace EventExampleEvent {
    const build: (data: EventExampleEventData) => {
        type: string;
        data: EventExampleEventData;
        timestamp: number;
        source: string;
    };
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
    /** Rooms, can be created by the inspector */
    rooms?: any;
    /** Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ */
    date: string;
    /** Inspection status, on the created events it should always be TO_DO */
    status: "TO_DO" | "IN_PROGRESS" | "DONE";
};
export declare namespace InspectionCreatedEvent {
    const build: (data: InspectionCreatedEventData) => {
        type: string;
        data: InspectionCreatedEventData;
        timestamp: number;
        source: string;
    };
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
export declare namespace InspectionDeletedEvent {
    const build: (data: InspectionDeletedEventData) => {
        type: string;
        data: InspectionDeletedEventData;
        timestamp: number;
        source: string;
    };
    const type = "inspection-deleted";
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
    /** Rooms, can be updated by the inspector */
    rooms?: any;
    /** Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ */
    date: string;
    /** Inspection status */
    status: "TO_DO" | "IN_PROGRESS" | "DONE";
};
export declare namespace InspectionUpdatedEvent {
    const build: (data: InspectionUpdatedEventData) => {
        type: string;
        data: InspectionUpdatedEventData;
        timestamp: number;
        source: string;
    };
    const type = "inspection-updated";
}
/**
 * Property created event
 */
export type PropertyCreatedEventData = {
    /** Property ID (uuid) */
    propertyId: string;
    /** Agency ID (uuid) */
    agencyId: string;
    /** undefined */
    address?: {
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
        contactMail?: string;
    };
    /** Rooms, can be created by the inspector */
    rooms: any;
};
export declare namespace PropertyCreatedEvent {
    const build: (data: PropertyCreatedEventData) => {
        type: string;
        data: PropertyCreatedEventData;
        timestamp: number;
        source: string;
    };
    const type = "property-created";
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
        enum?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        required?: undefined;
        enum?: undefined;
    } | {
        name: string;
        enum: string[];
        description: string;
        required: boolean;
        type?: undefined;
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
    } | {
        name: string;
        attributes: {
            name: string;
            type: string;
            description: string;
            required: boolean;
        }[];
        type?: undefined;
        description?: undefined;
        required?: undefined;
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
    })[];
    camelName: string;
})[];
