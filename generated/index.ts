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
export namespace AgencyCreatedEvent {
    
  export const build = (data: AgencyCreatedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "agency-created",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
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
export namespace AgencyDeletedEvent {
    
  export const build = (data: AgencyDeletedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "agency-deleted",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
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
export namespace AgencyUpdatedEvent {
    
  export const build = (data: AgencyUpdatedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "agency-updated",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
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
}
export namespace InspectionCreatedEvent {
    
  export const build = (data: InspectionCreatedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "inspection-created",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
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
export namespace InspectionDeletedEvent {
    
  export const build = (data: InspectionDeletedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "inspection-deleted",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "inspection-deleted"
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
}
export namespace InspectionUpdatedEvent {
    
  export const build = (data: InspectionUpdatedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "inspection-updated",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "inspection-updated"
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
}
export namespace PropertyCreatedEvent {
    
  export const build = (data: PropertyCreatedEventData) => {
      
    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "property-created",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }
  }
  export const type = "property-created"
} 



export const DEFINITIONS = [{"name":"agency-created","description":"Agency created event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Agency name","required":true},{"name":"address","attributes":[{"name":"street","type":"string","description":"Agency street","required":true},{"name":"city","type":"string","description":"Agency city","required":true},{"name":"country","type":"string","description":"Agency country","required":true},{"name":"zipCode","type":"string","description":"Agency zip code","required":true},{"name":"number","type":"string","description":"Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}],"description":"Agency address","required":true},{"name":"contactMail","type":"string","description":"Agency contact mail","required":true},{"name":"contactPhone","type":"string","description":"Agency contact phone number"}],"camelName":"AgencyCreated"},{"name":"agency-deleted","description":"Agency deleted event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"AgencyDeleted"},{"name":"agency-updated","description":"Agency updated event","attributes":[{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"name","type":"string","description":"Agency name","required":true},{"name":"address","attributes":[{"name":"street","type":"string","description":"Agency street","required":true},{"name":"city","type":"string","description":"Agency city","required":true},{"name":"country","type":"string","description":"Agency country","required":true},{"name":"zipCode","type":"string","description":"Agency zip code","required":true},{"name":"number","type":"string","description":"Agency number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}],"description":"Agency address","required":true},{"name":"contactMail","type":"string","description":"Agency contact mail","required":true},{"name":"contactPhone","type":"string","description":"Agency contact phone number"}],"camelName":"AgencyUpdated"},{"name":"event-example","description":"Comprehensive example event demonstrating all supported attribute type patterns.","attributes":[{"name":"simpleString","type":"string","description":"A basic string value"},{"name":"simpleNumber","type":"number","description":"A basic number value","required":true},{"name":"simpleBoolean","type":"boolean","description":"A basic boolean value"},{"name":"objectAttribute","required":true,"attributes":[{"name":"id","type":"string","description":"Identifier inside an object","required":true},{"name":"count","type":"number","description":"Numeric field inside an object"},{"name":"nested","required":true,"attributes":[{"name":"enabled","type":"boolean","description":"Nested flag"},{"name":"label","type":"string","description":"Nested label","required":true}],"description":"A nested object attribute"}],"description":"An attribute whose value is an object with its own fields"},{"name":"stringArray","arrayOf":"string","description":"Array of strings"},{"name":"numberArray","arrayOf":"number","description":"Array of numbers"},{"name":"objectArray","arrayOf":{"description":"Value in array of objects","attributes":[{"name":"title","type":"string","description":"Item title"},{"name":"quantity","type":"number","description":"Item quantity"}]},"description":"Array of objects (each object item has title and quantity)"},{"name":"stringEnum","enum":["low","medium","high"],"description":"String enum represented as a union of literals"},{"name":"numberEnum","enum":[0,1,2],"description":"Number enum represented as a union of numeric literals"},{"name":"unionPrimitive","oneOf":["string","number"],"description":"Value can be a string or a number"},{"name":"unionWithObject","required":true,"oneOf":["string",{"attributes":[{"name":"code","type":"string","description":"Object variant code"},{"name":"details","required":true,"attributes":[{"name":"message","type":"string","description":"Detail message"},{"name":"severity","type":"number","description":"Detail severity"}],"description":"Nested details object"}],"description":"Object variant of the union"}],"description":"Union of a string or a structured object"},{"name":"unionArray","arrayOf":["string","number"],"description":"Array whose items can be string or number","required":true}],"camelName":"EventExample"},{"name":"inspection-created","description":"Inspection created event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"inspectorId","type":"string","description":"Inspector ID (uuid)","required":true},{"name":"rooms","type":"any","description":"Rooms, can be created by the inspector"},{"name":"date","type":"string","description":"Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ","required":true},{"name":"status","enum":["TO_DO","IN_PROGRESS","DONE"],"description":"Inspection status, on the created events it should always be TO_DO","required":true}],"camelName":"InspectionCreated"},{"name":"inspection-deleted","description":"Inspection deleted event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true}],"camelName":"InspectionDeleted"},{"name":"inspection-updated","description":"Inspection updated event","attributes":[{"name":"inspectionId","type":"string","description":"Inspection ID (uuid)","required":true},{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"inspectorId","type":"string","description":"Inspector ID (uuid)","required":true},{"name":"rooms","type":"any","description":"Rooms, can be updated by the inspector"},{"name":"date","type":"string","description":"Inspection date, in IsoString format: YYYY-MM-DDTHH:mm:ss.sssZ","required":true},{"name":"status","enum":["TO_DO","IN_PROGRESS","DONE"],"description":"Inspection status","required":true}],"camelName":"InspectionUpdated"},{"name":"property-created","description":"Property created event","attributes":[{"name":"propertyId","type":"string","description":"Property ID (uuid)","required":true},{"name":"agencyId","type":"string","description":"Agency ID (uuid)","required":true},{"name":"address","attributes":[{"name":"street","type":"string","description":"Property street","required":true},{"name":"city","type":"string","description":"Property city","required":true},{"name":"country","type":"string","description":"Property country","required":true},{"name":"zipCode","type":"string","description":"Property zip code","required":true},{"name":"number","type":"string","description":"Property number of the street. String because it can countains 'bis', 'ter', 'quater', etc.","required":true}]},{"name":"owner","description":"Property owner","attributes":[{"name":"firstName","type":"string","description":"Property owner first name","required":true},{"name":"lastName","type":"string","description":"Property owner last name","required":true},{"name":"contactMail","type":"string","description":"Property contact mail"}]},{"name":"rooms","type":"any","description":"Rooms, can be created by the inspector","required":true}],"camelName":"PropertyCreated"}] 
