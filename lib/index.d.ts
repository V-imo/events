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
 * Event showcasing enums, unions, and array types
 */
export type SampleComplexTypesEventData = {
    /** Account status (enum) */
    status?: "active" | "disabled" | "pending";
    /** Numeric rating (enum) */
    rating?: 1 | 2 | 3 | 4 | 5;
    /** List of tags (array of strings) */
    tags?: string[];
    /** Mixed primitive values (array of union) */
    values?: (string | number)[];
    /** Union of string or object payload */
    payload?: string | {
        /** Payload ID */
        id?: string;
        /** Metadata */
        meta?: {
            /** Creator */
            createdBy?: string;
            /** Version */
            version?: number;
        };
    };
    /** Deeply nested object for testing */
    deepNest?: {
        /** First level object */
        level1?: {
            /** Second level object */
            level2?: {
                /** Third level object */
                level3?: {
                    /** Innermost value */
                    value?: string;
                    /** More nesting */
                    meta?: {
                        /** ISO date */
                        createdAt?: string;
                    };
                };
            };
        };
    };
};
export declare namespace SampleComplexTypesEvent {
    const build: (data: SampleComplexTypesEventData) => {
        type: string;
        data: SampleComplexTypesEventData;
        timestamp: number;
        source: string;
    };
    const type = "sample-complex-types";
}
/**
 * User registered event
 */
export type UserRegisteredOneEventData = {
    /** User ID */
    id: string;
    /** User age */
    age?: number;
    /** Nested profile */
    profile: {
        /** User bio */
        bio?: string;
        /** Verification */
        verified: boolean;
    };
};
export declare namespace UserRegisteredOneEvent {
    const build: (data: UserRegisteredOneEventData) => {
        type: string;
        data: UserRegisteredOneEventData;
        timestamp: number;
        source: string;
    };
    const type = "user-registered-one";
}
/**
 * User registered event
 */
export type UserRegisteredTwoEventData = {
    /** User ID */
    id: string;
    /** User age */
    age?: number;
    /** Nested profile */
    profile: {
        /** User bio */
        bio?: string;
        /** Verification */
        verified: boolean;
    };
};
export declare namespace UserRegisteredTwoEvent {
    const build: (data: UserRegisteredTwoEventData) => {
        type: string;
        data: UserRegisteredTwoEventData;
        timestamp: number;
        source: string;
    };
    const type = "user-registered-two";
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
        enum: string[];
        description: string;
        arrayOf?: undefined;
        oneOf?: undefined;
        attributes?: undefined;
    } | {
        name: string;
        enum: number[];
        description: string;
        arrayOf?: undefined;
        oneOf?: undefined;
        attributes?: undefined;
    } | {
        name: string;
        arrayOf: string;
        description: string;
        enum?: undefined;
        oneOf?: undefined;
        attributes?: undefined;
    } | {
        name: string;
        arrayOf: string[];
        description: string;
        enum?: undefined;
        oneOf?: undefined;
        attributes?: undefined;
    } | {
        name: string;
        oneOf: (string | {
            attributes: ({
                name: string;
                type: string;
                description: string;
                attributes?: undefined;
            } | {
                name: string;
                attributes: {
                    name: string;
                    type: string;
                    description: string;
                }[];
                description: string;
                type?: undefined;
            })[];
        })[];
        description: string;
        enum?: undefined;
        arrayOf?: undefined;
        attributes?: undefined;
    } | {
        name: string;
        attributes: {
            name: string;
            attributes: {
                name: string;
                attributes: {
                    name: string;
                    attributes: ({
                        name: string;
                        type: string;
                        description: string;
                        attributes?: undefined;
                    } | {
                        name: string;
                        attributes: {
                            name: string;
                            type: string;
                            description: string;
                        }[];
                        description: string;
                        type?: undefined;
                    })[];
                    description: string;
                }[];
                description: string;
            }[];
            description: string;
        }[];
        description: string;
        enum?: undefined;
        arrayOf?: undefined;
        oneOf?: undefined;
    })[];
    camelName: string;
})[];
