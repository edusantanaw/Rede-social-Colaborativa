import { ZodObject } from "zod";

export interface IValidSchema {
  valid: <T>(data: T) => { error: { message: string } | null };
}

export class ValidSchema implements IValidSchema {
  private schema: ZodObject<any>;
  constructor(schema: ZodObject<any>) {
    this.schema = schema;
  }

  public valid<T>(data: T) {
    const isSchemaValid = this.schema.safeParse(data);
    if (isSchemaValid.success) {
      return { error: null };
    }
    return { error: isSchemaValid.error.errors[0] };
  }
}
