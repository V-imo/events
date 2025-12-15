import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { z } from "zod";
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
    const schema: z.ZodObject<{
        agencyId: z.ZodString;
        name: z.ZodString;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            zipCode: z.ZodString;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }>;
        contactMail: z.ZodString;
        contactPhone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        name: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        contactMail: string;
        contactPhone?: string | undefined;
    }, {
        agencyId: string;
        name: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        contactMail: string;
        contactPhone?: string | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"agency-created">;
        data: z.ZodObject<{
            agencyId: z.ZodString;
            name: z.ZodString;
            address: z.ZodObject<{
                street: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                zipCode: z.ZodString;
                number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }>;
            contactMail: z.ZodString;
            contactPhone: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        }, {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "agency-created";
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "agency-created";
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type AgencyCreatedEventData = z.infer<typeof schema>;
    export type AgencyCreatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => AgencyCreatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "agency-created";
    export {};
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
    const schema: z.ZodObject<{
        agencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
    }, {
        agencyId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"agency-deleted">;
        data: z.ZodObject<{
            agencyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
        }, {
            agencyId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "agency-deleted";
        data: {
            agencyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "agency-deleted";
        data: {
            agencyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type AgencyDeletedEventData = z.infer<typeof schema>;
    export type AgencyDeletedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => AgencyDeletedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "agency-deleted";
    export {};
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
    const schema: z.ZodObject<{
        agencyId: z.ZodString;
        name: z.ZodString;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            zipCode: z.ZodString;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }>;
        contactMail: z.ZodString;
        contactPhone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        name: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        contactMail: string;
        contactPhone?: string | undefined;
    }, {
        agencyId: string;
        name: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        contactMail: string;
        contactPhone?: string | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"agency-updated">;
        data: z.ZodObject<{
            agencyId: z.ZodString;
            name: z.ZodString;
            address: z.ZodObject<{
                street: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                zipCode: z.ZodString;
                number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }>;
            contactMail: z.ZodString;
            contactPhone: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        }, {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "agency-updated";
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "agency-updated";
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type AgencyUpdatedEventData = z.infer<typeof schema>;
    export type AgencyUpdatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            name: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            contactMail: string;
            contactPhone?: string | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => AgencyUpdatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "agency-updated";
    export {};
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
    const schema: z.ZodObject<{
        simpleString: z.ZodOptional<z.ZodString>;
        simpleNumber: z.ZodNumber;
        simpleBoolean: z.ZodOptional<z.ZodBoolean>;
        objectAttribute: z.ZodObject<{
            id: z.ZodString;
            count: z.ZodOptional<z.ZodNumber>;
            nested: z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                label: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                label: string;
                enabled?: boolean | undefined;
            }, {
                label: string;
                enabled?: boolean | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            nested: {
                label: string;
                enabled?: boolean | undefined;
            };
            count?: number | undefined;
        }, {
            id: string;
            nested: {
                label: string;
                enabled?: boolean | undefined;
            };
            count?: number | undefined;
        }>;
        stringArray: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        numberArray: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        objectArray: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            quantity: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            title?: string | undefined;
            quantity?: number | undefined;
        }, {
            title?: string | undefined;
            quantity?: number | undefined;
        }>, "many">>;
        stringEnum: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
        numberEnum: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        unionPrimitive: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        unionWithObject: z.ZodUnion<[z.ZodString, z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            details: z.ZodObject<{
                message: z.ZodOptional<z.ZodString>;
                severity: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message?: string | undefined;
                severity?: number | undefined;
            }, {
                message?: string | undefined;
                severity?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            details: {
                message?: string | undefined;
                severity?: number | undefined;
            };
            code?: string | undefined;
        }, {
            details: {
                message?: string | undefined;
                severity?: number | undefined;
            };
            code?: string | undefined;
        }>]>;
        unionArray: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    }, "strip", z.ZodTypeAny, {
        simpleNumber: number;
        objectAttribute: {
            id: string;
            nested: {
                label: string;
                enabled?: boolean | undefined;
            };
            count?: number | undefined;
        };
        unionWithObject: string | {
            details: {
                message?: string | undefined;
                severity?: number | undefined;
            };
            code?: string | undefined;
        };
        unionArray: (string | number)[];
        simpleString?: string | undefined;
        simpleBoolean?: boolean | undefined;
        stringArray?: string[] | undefined;
        numberArray?: number[] | undefined;
        objectArray?: {
            title?: string | undefined;
            quantity?: number | undefined;
        }[] | undefined;
        stringEnum?: "low" | "medium" | "high" | undefined;
        numberEnum?: 0 | 1 | 2 | undefined;
        unionPrimitive?: string | number | undefined;
    }, {
        simpleNumber: number;
        objectAttribute: {
            id: string;
            nested: {
                label: string;
                enabled?: boolean | undefined;
            };
            count?: number | undefined;
        };
        unionWithObject: string | {
            details: {
                message?: string | undefined;
                severity?: number | undefined;
            };
            code?: string | undefined;
        };
        unionArray: (string | number)[];
        simpleString?: string | undefined;
        simpleBoolean?: boolean | undefined;
        stringArray?: string[] | undefined;
        numberArray?: number[] | undefined;
        objectArray?: {
            title?: string | undefined;
            quantity?: number | undefined;
        }[] | undefined;
        stringEnum?: "low" | "medium" | "high" | undefined;
        numberEnum?: 0 | 1 | 2 | undefined;
        unionPrimitive?: string | number | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"event-example">;
        data: z.ZodObject<{
            simpleString: z.ZodOptional<z.ZodString>;
            simpleNumber: z.ZodNumber;
            simpleBoolean: z.ZodOptional<z.ZodBoolean>;
            objectAttribute: z.ZodObject<{
                id: z.ZodString;
                count: z.ZodOptional<z.ZodNumber>;
                nested: z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    label: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    label: string;
                    enabled?: boolean | undefined;
                }, {
                    label: string;
                    enabled?: boolean | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            }, {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            }>;
            stringArray: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            numberArray: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            objectArray: z.ZodOptional<z.ZodArray<z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                quantity: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                quantity?: number | undefined;
            }, {
                title?: string | undefined;
                quantity?: number | undefined;
            }>, "many">>;
            stringEnum: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            numberEnum: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            unionPrimitive: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            unionWithObject: z.ZodUnion<[z.ZodString, z.ZodObject<{
                code: z.ZodOptional<z.ZodString>;
                details: z.ZodObject<{
                    message: z.ZodOptional<z.ZodString>;
                    severity: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    message?: string | undefined;
                    severity?: number | undefined;
                }, {
                    message?: string | undefined;
                    severity?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            }, {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            }>]>;
            unionArray: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
        }, "strip", z.ZodTypeAny, {
            simpleNumber: number;
            objectAttribute: {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            };
            unionWithObject: string | {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            };
            unionArray: (string | number)[];
            simpleString?: string | undefined;
            simpleBoolean?: boolean | undefined;
            stringArray?: string[] | undefined;
            numberArray?: number[] | undefined;
            objectArray?: {
                title?: string | undefined;
                quantity?: number | undefined;
            }[] | undefined;
            stringEnum?: "low" | "medium" | "high" | undefined;
            numberEnum?: 0 | 1 | 2 | undefined;
            unionPrimitive?: string | number | undefined;
        }, {
            simpleNumber: number;
            objectAttribute: {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            };
            unionWithObject: string | {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            };
            unionArray: (string | number)[];
            simpleString?: string | undefined;
            simpleBoolean?: boolean | undefined;
            stringArray?: string[] | undefined;
            numberArray?: number[] | undefined;
            objectArray?: {
                title?: string | undefined;
                quantity?: number | undefined;
            }[] | undefined;
            stringEnum?: "low" | "medium" | "high" | undefined;
            numberEnum?: 0 | 1 | 2 | undefined;
            unionPrimitive?: string | number | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "event-example";
        data: {
            simpleNumber: number;
            objectAttribute: {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            };
            unionWithObject: string | {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            };
            unionArray: (string | number)[];
            simpleString?: string | undefined;
            simpleBoolean?: boolean | undefined;
            stringArray?: string[] | undefined;
            numberArray?: number[] | undefined;
            objectArray?: {
                title?: string | undefined;
                quantity?: number | undefined;
            }[] | undefined;
            stringEnum?: "low" | "medium" | "high" | undefined;
            numberEnum?: 0 | 1 | 2 | undefined;
            unionPrimitive?: string | number | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "event-example";
        data: {
            simpleNumber: number;
            objectAttribute: {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            };
            unionWithObject: string | {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            };
            unionArray: (string | number)[];
            simpleString?: string | undefined;
            simpleBoolean?: boolean | undefined;
            stringArray?: string[] | undefined;
            numberArray?: number[] | undefined;
            objectArray?: {
                title?: string | undefined;
                quantity?: number | undefined;
            }[] | undefined;
            stringEnum?: "low" | "medium" | "high" | undefined;
            numberEnum?: 0 | 1 | 2 | undefined;
            unionPrimitive?: string | number | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type EventExampleEventData = z.infer<typeof schema>;
    export type EventExampleEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            simpleNumber: number;
            objectAttribute: {
                id: string;
                nested: {
                    label: string;
                    enabled?: boolean | undefined;
                };
                count?: number | undefined;
            };
            unionWithObject: string | {
                details: {
                    message?: string | undefined;
                    severity?: number | undefined;
                };
                code?: string | undefined;
            };
            unionArray: (string | number)[];
            simpleString?: string | undefined;
            simpleBoolean?: boolean | undefined;
            stringArray?: string[] | undefined;
            numberArray?: number[] | undefined;
            objectArray?: {
                title?: string | undefined;
                quantity?: number | undefined;
            }[] | undefined;
            stringEnum?: "low" | "medium" | "high" | undefined;
            numberEnum?: 0 | 1 | 2 | undefined;
            unionPrimitive?: string | number | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => EventExampleEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "event-example";
    export {};
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
    const schema: z.ZodObject<{
        inspectionId: z.ZodString;
        propertyId: z.ZodString;
        agencyId: z.ZodString;
        inspectorId: z.ZodString;
        rooms: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                state: z.ZodEnum<["NEW", "GOOD", "BAD", "BROKEN"]>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }>, "many">>;
        date: z.ZodString;
        status: z.ZodEnum<["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"]>;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
        date: string;
        inspectionId: string;
        propertyId: string;
        inspectorId: string;
        rooms?: {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }[] | undefined;
    }, {
        agencyId: string;
        status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
        date: string;
        inspectionId: string;
        propertyId: string;
        inspectorId: string;
        rooms?: {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }[] | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"inspection-created">;
        data: z.ZodObject<{
            inspectionId: z.ZodString;
            propertyId: z.ZodString;
            agencyId: z.ZodString;
            inspectorId: z.ZodString;
            rooms: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    state: z.ZodEnum<["NEW", "GOOD", "BAD", "BROKEN"]>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }>, "many">>;
            date: z.ZodString;
            status: z.ZodEnum<["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"]>;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        }, {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "inspection-created";
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "inspection-created";
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type InspectionCreatedEventData = z.infer<typeof schema>;
    export type InspectionCreatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => InspectionCreatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "inspection-created";
    export {};
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
    const schema: z.ZodObject<{
        inspectionId: z.ZodString;
        propertyId: z.ZodString;
        agencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        inspectionId: string;
        propertyId: string;
    }, {
        agencyId: string;
        inspectionId: string;
        propertyId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"inspection-deleted">;
        data: z.ZodObject<{
            inspectionId: z.ZodString;
            propertyId: z.ZodString;
            agencyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
        }, {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "inspection-deleted";
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "inspection-deleted";
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type InspectionDeletedEventData = z.infer<typeof schema>;
    export type InspectionDeletedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => InspectionDeletedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "inspection-deleted";
    export {};
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
    const schema: z.ZodObject<{
        inspectionId: z.ZodString;
        propertyId: z.ZodString;
        agencyId: z.ZodString;
        key: z.ZodString;
        bucketName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        inspectionId: string;
        propertyId: string;
        key: string;
        bucketName: string;
    }, {
        agencyId: string;
        inspectionId: string;
        propertyId: string;
        key: string;
        bucketName: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"inspection-pdf-generated">;
        data: z.ZodObject<{
            inspectionId: z.ZodString;
            propertyId: z.ZodString;
            agencyId: z.ZodString;
            key: z.ZodString;
            bucketName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
            key: string;
            bucketName: string;
        }, {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
            key: string;
            bucketName: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "inspection-pdf-generated";
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
            key: string;
            bucketName: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "inspection-pdf-generated";
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
            key: string;
            bucketName: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type InspectionPdfGeneratedEventData = z.infer<typeof schema>;
    export type InspectionPdfGeneratedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            inspectionId: string;
            propertyId: string;
            key: string;
            bucketName: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => InspectionPdfGeneratedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "inspection-pdf-generated";
    export {};
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
    const schema: z.ZodObject<{
        inspectionId: z.ZodString;
        propertyId: z.ZodString;
        agencyId: z.ZodString;
        inspectorId: z.ZodString;
        rooms: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                state: z.ZodEnum<["NEW", "GOOD", "BAD", "BROKEN"]>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }>, "many">>;
        date: z.ZodString;
        status: z.ZodEnum<["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"]>;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
        date: string;
        inspectionId: string;
        propertyId: string;
        inspectorId: string;
        rooms?: {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }[] | undefined;
    }, {
        agencyId: string;
        status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
        date: string;
        inspectionId: string;
        propertyId: string;
        inspectorId: string;
        rooms?: {
            name: string;
            elements: {
                name: string;
                state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
        }[] | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"inspection-updated">;
        data: z.ZodObject<{
            inspectionId: z.ZodString;
            propertyId: z.ZodString;
            agencyId: z.ZodString;
            inspectorId: z.ZodString;
            rooms: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    state: z.ZodEnum<["NEW", "GOOD", "BAD", "BROKEN"]>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }>, "many">>;
            date: z.ZodString;
            status: z.ZodEnum<["TO_DO", "IN_PROGRESS", "DONE", "CANCELED"]>;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        }, {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "inspection-updated";
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "inspection-updated";
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type InspectionUpdatedEventData = z.infer<typeof schema>;
    export type InspectionUpdatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            status: "TO_DO" | "IN_PROGRESS" | "DONE" | "CANCELED";
            date: string;
            inspectionId: string;
            propertyId: string;
            inspectorId: string;
            rooms?: {
                name: string;
                elements: {
                    name: string;
                    state: "NEW" | "GOOD" | "BAD" | "BROKEN";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
            }[] | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => InspectionUpdatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "inspection-updated";
    export {};
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
    const schema: z.ZodObject<{
        modelId: z.ZodString;
        agencyId: z.ZodString;
        name: z.ZodString;
        rooms: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            area: z.ZodOptional<z.ZodNumber>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        name: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        modelId: string;
    }, {
        agencyId: string;
        name: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        modelId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"model-created">;
        data: z.ZodObject<{
            modelId: z.ZodString;
            agencyId: z.ZodString;
            name: z.ZodString;
            rooms: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                area: z.ZodOptional<z.ZodNumber>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        }, {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "model-created";
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "model-created";
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type ModelCreatedEventData = z.infer<typeof schema>;
    export type ModelCreatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => ModelCreatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "model-created";
    export {};
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
    const schema: z.ZodObject<{
        modelId: z.ZodString;
        agencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        modelId: string;
    }, {
        agencyId: string;
        modelId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"model-deleted">;
        data: z.ZodObject<{
            modelId: z.ZodString;
            agencyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            modelId: string;
        }, {
            agencyId: string;
            modelId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "model-deleted";
        data: {
            agencyId: string;
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "model-deleted";
        data: {
            agencyId: string;
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type ModelDeletedEventData = z.infer<typeof schema>;
    export type ModelDeletedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => ModelDeletedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "model-deleted";
    export {};
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
    const schema: z.ZodObject<{
        modelId: z.ZodString;
        agencyId: z.ZodString;
        name: z.ZodString;
        rooms: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            area: z.ZodOptional<z.ZodNumber>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        name: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        modelId: string;
    }, {
        agencyId: string;
        name: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        modelId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"model-updated">;
        data: z.ZodObject<{
            modelId: z.ZodString;
            agencyId: z.ZodString;
            name: z.ZodString;
            rooms: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                area: z.ZodOptional<z.ZodNumber>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        }, {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "model-updated";
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "model-updated";
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type ModelUpdatedEventData = z.infer<typeof schema>;
    export type ModelUpdatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            name: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            modelId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => ModelUpdatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "model-updated";
    export {};
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
    const schema: z.ZodObject<{
        propertyId: z.ZodString;
        agencyId: z.ZodString;
        area: z.ZodOptional<z.ZodNumber>;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            zipCode: z.ZodString;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }>;
        owner: z.ZodOptional<z.ZodObject<{
            firstName: z.ZodString;
            lastName: z.ZodString;
            mail: z.ZodOptional<z.ZodString>;
            phoneNumber: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        }, {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        }>>;
        rooms: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            area: z.ZodOptional<z.ZodNumber>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        propertyId: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        area?: number | undefined;
        owner?: {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        } | undefined;
    }, {
        agencyId: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        propertyId: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        area?: number | undefined;
        owner?: {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        } | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"property-created">;
        data: z.ZodObject<{
            propertyId: z.ZodString;
            agencyId: z.ZodString;
            area: z.ZodOptional<z.ZodNumber>;
            address: z.ZodObject<{
                street: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                zipCode: z.ZodString;
                number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }>;
            owner: z.ZodOptional<z.ZodObject<{
                firstName: z.ZodString;
                lastName: z.ZodString;
                mail: z.ZodOptional<z.ZodString>;
                phoneNumber: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            }, {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            }>>;
            rooms: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                area: z.ZodOptional<z.ZodNumber>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        }, {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "property-created";
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "property-created";
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type PropertyCreatedEventData = z.infer<typeof schema>;
    export type PropertyCreatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => PropertyCreatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "property-created";
    export {};
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
    const schema: z.ZodObject<{
        propertyId: z.ZodString;
        agencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        propertyId: string;
    }, {
        agencyId: string;
        propertyId: string;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"property-deleted">;
        data: z.ZodObject<{
            propertyId: z.ZodString;
            agencyId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            propertyId: string;
        }, {
            agencyId: string;
            propertyId: string;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "property-deleted";
        data: {
            agencyId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "property-deleted";
        data: {
            agencyId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type PropertyDeletedEventData = z.infer<typeof schema>;
    export type PropertyDeletedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            propertyId: string;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => PropertyDeletedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "property-deleted";
    export {};
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
    const schema: z.ZodObject<{
        propertyId: z.ZodString;
        agencyId: z.ZodString;
        area: z.ZodOptional<z.ZodNumber>;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            zipCode: z.ZodString;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }, {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        }>;
        owner: z.ZodOptional<z.ZodObject<{
            firstName: z.ZodString;
            lastName: z.ZodString;
            mail: z.ZodOptional<z.ZodString>;
            phoneNumber: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        }, {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        }>>;
        rooms: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            area: z.ZodOptional<z.ZodNumber>;
            elements: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }, {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }, {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        agencyId: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        propertyId: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        area?: number | undefined;
        owner?: {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        } | undefined;
    }, {
        agencyId: string;
        address: {
            number: string;
            street: string;
            city: string;
            country: string;
            zipCode: string;
        };
        propertyId: string;
        rooms: {
            name: string;
            elements: {
                name: string;
                type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                description?: string | undefined;
                images?: string[] | undefined;
            }[];
            description?: string | undefined;
            area?: number | undefined;
        }[];
        area?: number | undefined;
        owner?: {
            firstName: string;
            lastName: string;
            mail?: string | undefined;
            phoneNumber?: string | undefined;
        } | undefined;
    }>;
    const envelopeSchema: z.ZodObject<{
        type: z.ZodLiteral<"property-updated">;
        data: z.ZodObject<{
            propertyId: z.ZodString;
            agencyId: z.ZodString;
            area: z.ZodOptional<z.ZodNumber>;
            address: z.ZodObject<{
                street: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                zipCode: z.ZodString;
                number: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }, {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            }>;
            owner: z.ZodOptional<z.ZodObject<{
                firstName: z.ZodString;
                lastName: z.ZodString;
                mail: z.ZodOptional<z.ZodString>;
                phoneNumber: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            }, {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            }>>;
            rooms: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                area: z.ZodOptional<z.ZodNumber>;
                elements: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    type: z.ZodEnum<["FURNITURE", "STRUCTURAL", "ELECTRICAL", "PLUMBING", "VENTILATION", "SURFACE", "OTHER"]>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }, {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }, {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        }, {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        }>;
        timestamp: z.ZodNumber;
        source: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "property-updated";
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }, {
        type: "property-updated";
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: string;
    }>;
    export type PropertyUpdatedEventData = z.infer<typeof schema>;
    export type PropertyUpdatedEventEnvelope = z.infer<typeof envelopeSchema>;
    export const buildData: (data: unknown) => {
        type: string;
        data: {
            agencyId: string;
            address: {
                number: string;
                street: string;
                city: string;
                country: string;
                zipCode: string;
            };
            propertyId: string;
            rooms: {
                name: string;
                elements: {
                    name: string;
                    type: "FURNITURE" | "STRUCTURAL" | "ELECTRICAL" | "PLUMBING" | "VENTILATION" | "SURFACE" | "OTHER";
                    description?: string | undefined;
                    images?: string[] | undefined;
                }[];
                description?: string | undefined;
                area?: number | undefined;
            }[];
            area?: number | undefined;
            owner?: {
                firstName: string;
                lastName: string;
                mail?: string | undefined;
                phoneNumber?: string | undefined;
            } | undefined;
        };
        timestamp: number;
        source: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    export const parse: (input: unknown) => PropertyUpdatedEventEnvelope;
    export const build: (data: unknown) => PutEventsCommand;
    export const type = "property-updated";
    export {};
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
/**
 * Parse an EventBridge entry or envelope into a typed event.
 * Supports both EventBridge entry format (with Detail as JSON string) and direct envelope objects.
 */
export declare function parseEvent(input: unknown): AgencyCreatedEvent.AgencyCreatedEventEnvelope | AgencyDeletedEvent.AgencyDeletedEventEnvelope | AgencyUpdatedEvent.AgencyUpdatedEventEnvelope | EventExampleEvent.EventExampleEventEnvelope | InspectionCreatedEvent.InspectionCreatedEventEnvelope | InspectionDeletedEvent.InspectionDeletedEventEnvelope | InspectionPdfGeneratedEvent.InspectionPdfGeneratedEventEnvelope | InspectionUpdatedEvent.InspectionUpdatedEventEnvelope | ModelCreatedEvent.ModelCreatedEventEnvelope | ModelDeletedEvent.ModelDeletedEventEnvelope | ModelUpdatedEvent.ModelUpdatedEventEnvelope | PropertyCreatedEvent.PropertyCreatedEventEnvelope | PropertyDeletedEvent.PropertyDeletedEventEnvelope | PropertyUpdatedEvent.PropertyUpdatedEventEnvelope;
