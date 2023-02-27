import {ZodObject} from "zod"

export class ValidSchema{
    private schema: ZodObject<any>
    constructor(schema:  ZodObject<any>){
        this.schema = schema;
    }

    public valid<T>(data: T){
        return this.schema.safeParse(data);
    }
}