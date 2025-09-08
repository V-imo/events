export declare const EventExampleEventDataJson = "{\"name\":\"event-example\",\"description\":\"Comprehensive example event demonstrating all supported attribute type patterns.\",\"attributes\":[{\"name\":\"simpleString\",\"type\":\"string\",\"description\":\"A basic string value\"},{\"name\":\"simpleNumber\",\"type\":\"number\",\"description\":\"A basic number value\"},{\"name\":\"simpleBoolean\",\"type\":\"boolean\",\"description\":\"A basic boolean value\"},{\"name\":\"objectAttribute\",\"attributes\":[{\"name\":\"id\",\"type\":\"string\",\"description\":\"Identifier inside an object\"},{\"name\":\"count\",\"type\":\"number\",\"description\":\"Numeric field inside an object\"},{\"name\":\"nested\",\"attributes\":[{\"name\":\"enabled\",\"type\":\"boolean\",\"description\":\"Nested flag\"},{\"name\":\"label\",\"type\":\"string\",\"description\":\"Nested label\"}],\"description\":\"A nested object attribute\"}],\"description\":\"An attribute whose value is an object with its own fields\"},{\"name\":\"stringArray\",\"arrayOf\":\"string\",\"description\":\"Array of strings\"},{\"name\":\"numberArray\",\"arrayOf\":\"number\",\"description\":\"Array of numbers\"},{\"name\":\"objectArray\",\"arrayOf\":{\"description\":\"Value in array of objects\",\"attributes\":[{\"name\":\"title\",\"type\":\"string\",\"description\":\"Item title\"},{\"name\":\"quantity\",\"type\":\"number\",\"description\":\"Item quantity\"}]},\"description\":\"Array of objects (each object item has title and quantity)\"},{\"name\":\"stringEnum\",\"enum\":[\"low\",\"medium\",\"high\"],\"description\":\"String enum represented as a union of literals\"},{\"name\":\"numberEnum\",\"enum\":[0,1,2],\"description\":\"Number enum represented as a union of numeric literals\"},{\"name\":\"unionPrimitive\",\"oneOf\":[\"string\",\"number\"],\"description\":\"Value can be a string or a number\"},{\"name\":\"unionWithObject\",\"oneOf\":[\"string\",{\"attributes\":[{\"name\":\"code\",\"type\":\"string\",\"description\":\"Object variant code\"},{\"name\":\"details\",\"attributes\":[{\"name\":\"message\",\"type\":\"string\",\"description\":\"Detail message\"},{\"name\":\"severity\",\"type\":\"number\",\"description\":\"Detail severity\"}],\"description\":\"Nested details object\"}],\"description\":\"Object variant of the union\"}],\"description\":\"Union of a string or a structured object\"},{\"name\":\"unionArray\",\"arrayOf\":[\"string\",\"number\"],\"description\":\"Array whose items can be string or number\"}]}";
/**
 * Comprehensive example event demonstrating all supported attribute type patterns.
 */
export type EventExampleEventData = {
    /** A basic string value */
    simpleString: string;
    /** A basic number value */
    simpleNumber: number;
    /** A basic boolean value */
    simpleBoolean: boolean;
    /** An attribute whose value is an object with its own fields */
    objectAttribute: {
        /** Identifier inside an object */
        id: string;
        /** Numeric field inside an object */
        count: number;
        /** A nested object attribute */
        nested: {
            /** Nested flag */
            enabled: boolean;
            /** Nested label */
            label: string;
        };
    };
    /** Array of strings */
    stringArray: string[];
    /** Array of numbers */
    numberArray: number[];
    /** Array of objects (each object item has title and quantity) */
    objectArray: {
        title: string;
        /** Item quantity */
        quantity: number;
    }[];
    /** String enum represented as a union of literals */
    stringEnum: "low" | "medium" | "high";
    /** Number enum represented as a union of numeric literals */
    numberEnum: 0 | 1 | 2;
    /** Value can be a string or a number */
    unionPrimitive: string | number;
    /** Union of a string or a structured object */
    unionWithObject: string | {
        /** Object variant code */
        code: string;
        /** Nested details object */
        details: {
            /** Detail message */
            message: string;
            /** Detail severity */
            severity: number;
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
export declare const SampleComplexTypesEventDataJson = "{\"name\":\"sample-complex-types\",\"description\":\"Event showcasing enums, unions, and array types\",\"attributes\":[{\"name\":\"status\",\"enum\":[\"active\",\"disabled\",\"pending\"],\"description\":\"Account status (enum)\"},{\"name\":\"rating\",\"enum\":[1,2,3,4,5],\"description\":\"Numeric rating (enum)\"},{\"name\":\"tags\",\"arrayOf\":\"string\",\"description\":\"List of tags (array of strings)\"},{\"name\":\"values\",\"arrayOf\":[\"string\",\"number\"],\"description\":\"Mixed primitive values (array of union)\"},{\"name\":\"payload\",\"oneOf\":[\"string\",{\"attributes\":[{\"name\":\"id\",\"type\":\"string\",\"description\":\"Payload ID\"},{\"name\":\"meta\",\"attributes\":[{\"name\":\"createdBy\",\"type\":\"string\",\"description\":\"Creator\"},{\"name\":\"version\",\"type\":\"number\",\"description\":\"Version\"}],\"description\":\"Metadata\"}]}],\"description\":\"Union of string or object payload\"}]}";
/**
 * Event showcasing enums, unions, and array types
 */
export type SampleComplexTypesEventData = {
    /** Account status (enum) */
    status: "active" | "disabled" | "pending";
    /** Numeric rating (enum) */
    rating: 1 | 2 | 3 | 4 | 5;
    /** List of tags (array of strings) */
    tags: string[];
    /** Mixed primitive values (array of union) */
    values: (string | number)[];
    /** Union of string or object payload */
    payload: string | {
        /** Payload ID */
        id: string;
        /** Metadata */
        meta: {
            /** Creator */
            createdBy: string;
            /** Version */
            version: number;
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
export declare const UserRegisteredOneEventDataJson = "{\"name\":\"user-registered-one\",\"description\":\"User registered event\",\"attributes\":[{\"name\":\"id\",\"type\":\"string\",\"description\":\"User ID\"},{\"name\":\"age\",\"type\":\"number\",\"description\":\"User age\"},{\"name\":\"profile\",\"attributes\":[{\"name\":\"bio\",\"type\":\"string\",\"description\":\"User bio\"},{\"name\":\"verified\",\"type\":\"boolean\",\"description\":\"Verification\"}],\"description\":\"Nested profile\"}]}";
/**
 * User registered event
 */
export type UserRegisteredOneEventData = {
    /** User ID */
    id: string;
    /** User age */
    age: number;
    /** Nested profile */
    profile: {
        /** User bio */
        bio: string;
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
export declare const UserRegisteredTwoEventDataJson = "{\"name\":\"user-registered-two\",\"description\":\"User registered event\",\"attributes\":[{\"name\":\"id\",\"type\":\"string\",\"description\":\"User ID\"},{\"name\":\"age\",\"type\":\"number\",\"description\":\"User age\"},{\"name\":\"profile\",\"attributes\":[{\"name\":\"bio\",\"type\":\"string\",\"description\":\"User bio\"},{\"name\":\"verified\",\"type\":\"boolean\",\"description\":\"Verification\"}],\"description\":\"Nested profile\"}]}";
/**
 * User registered event
 */
export type UserRegisteredTwoEventData = {
    /** User ID */
    id: string;
    /** User age */
    age: number;
    /** Nested profile */
    profile: {
        /** User bio */
        bio: string;
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
        attributes?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
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
        type?: undefined;
        arrayOf?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        arrayOf: string;
        description: string;
        type?: undefined;
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
        attributes?: undefined;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        enum: string[];
        description: string;
        type?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        enum: number[];
        description: string;
        type?: undefined;
        attributes?: undefined;
        arrayOf?: undefined;
        oneOf?: undefined;
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
    } | {
        name: string;
        enum: number[];
        description: string;
        arrayOf?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        arrayOf: string;
        description: string;
        enum?: undefined;
        oneOf?: undefined;
    } | {
        name: string;
        arrayOf: string[];
        description: string;
        enum?: undefined;
        oneOf?: undefined;
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
    })[];
    camelName: string;
})[];
