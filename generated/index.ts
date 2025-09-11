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
export namespace EventExampleEvent {
    
  export const build = (data: EventExampleEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "event-example",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "event-example"
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
    }
  ;
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
}
export namespace SampleComplexTypesEvent {
    
  export const build = (data: SampleComplexTypesEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "sample-complex-types",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "sample-complex-types"
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
}
export namespace UserRegisteredOneEvent {
    
  export const build = (data: UserRegisteredOneEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "user-registered-one",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "user-registered-one"
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
    bio?: any;
    /** Verification */
    verified: boolean;
  };
}
export namespace UserRegisteredTwoEvent {
    
  export const build = (data: UserRegisteredTwoEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "user-registered-two",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "user-registered-two"
} 



export const DEFINITIONS = [{"name":"event-example","description":"Comprehensive example event demonstrating all supported attribute type patterns.","attributes":[{"name":"simpleString","type":"string","description":"A basic string value"},{"name":"simpleNumber","type":"number","description":"A basic number value","required":true},{"name":"simpleBoolean","type":"boolean","description":"A basic boolean value"},{"name":"objectAttribute","required":true,"attributes":[{"name":"id","type":"string","description":"Identifier inside an object","required":true},{"name":"count","type":"number","description":"Numeric field inside an object"},{"name":"nested","required":true,"attributes":[{"name":"enabled","type":"boolean","description":"Nested flag"},{"name":"label","type":"string","description":"Nested label","required":true}],"description":"A nested object attribute"}],"description":"An attribute whose value is an object with its own fields"},{"name":"stringArray","arrayOf":"string","description":"Array of strings"},{"name":"numberArray","arrayOf":"number","description":"Array of numbers"},{"name":"objectArray","arrayOf":{"description":"Value in array of objects","attributes":[{"name":"title","type":"string","description":"Item title"},{"name":"quantity","type":"number","description":"Item quantity"}]},"description":"Array of objects (each object item has title and quantity)"},{"name":"stringEnum","enum":["low","medium","high"],"description":"String enum represented as a union of literals"},{"name":"numberEnum","enum":[0,1,2],"description":"Number enum represented as a union of numeric literals"},{"name":"unionPrimitive","oneOf":["string","number"],"description":"Value can be a string or a number"},{"name":"unionWithObject","required":true,"oneOf":["string",{"attributes":[{"name":"code","type":"string","description":"Object variant code"},{"name":"details","required":true,"attributes":[{"name":"message","type":"string","description":"Detail message"},{"name":"severity","type":"number","description":"Detail severity"}],"description":"Nested details object"}],"description":"Object variant of the union"}],"description":"Union of a string or a structured object"},{"name":"unionArray","arrayOf":["string","number"],"description":"Array whose items can be string or number","required":true}],"camelName":"EventExample"},{"name":"sample-complex-types","description":"Event showcasing enums, unions, and array types","attributes":[{"name":"status","enum":["active","disabled","pending"],"description":"Account status (enum)"},{"name":"rating","enum":[1,2,3,4,5],"description":"Numeric rating (enum)"},{"name":"tags","arrayOf":"string","description":"List of tags (array of strings)"},{"name":"values","arrayOf":["string","number"],"description":"Mixed primitive values (array of union)"},{"name":"payload","oneOf":["string",{"attributes":[{"name":"id","type":"string","description":"Payload ID"},{"name":"meta","attributes":[{"name":"createdBy","type":"string","description":"Creator"},{"name":"version","type":"number","description":"Version"}],"description":"Metadata"}]}],"description":"Union of string or object payload"},{"name":"deepNest","attributes":[{"name":"level1","attributes":[{"name":"level2","attributes":[{"name":"level3","attributes":[{"name":"value","type":"string","description":"Innermost value"},{"name":"meta","attributes":[{"name":"createdAt","type":"string","description":"ISO date"}],"description":"More nesting"}],"description":"Third level object"}],"description":"Second level object"}],"description":"First level object"}],"description":"Deeply nested object for testing"}],"camelName":"SampleComplexTypes"},{"name":"user-registered-one","description":"User registered event","attributes":[{"name":"id","type":"string","description":"User ID","required":true},{"name":"age","type":"number","description":"User age"},{"name":"profile","required":true,"attributes":[{"name":"bio","type":"string","description":"User bio"},{"name":"verified","type":"boolean","description":"Verification","required":true}],"description":"Nested profile"}],"camelName":"UserRegisteredOne"},{"name":"user-registered-two","description":"User registered event","attributes":[{"name":"id","type":"string","description":"User ID","required":true},{"name":"age","type":"number","description":"User age"},{"name":"profile","required":true,"attributes":[{"name":"bio","type":"any","description":"User bio"},{"name":"verified","type":"boolean","description":"Verification","required":true}],"description":"Nested profile"}],"camelName":"UserRegisteredTwo"}] 
