
export type PrimitiveType = string | number | boolean | null | undefined;

export type PrimitiveEmptyValueType = '' | 0 | false | null | undefined;

export type EmptyValueType = PrimitiveEmptyValueType | []

export type ObjectKey = string | number | symbol;

export type SomeObject<T> = Record<ObjectKey, T>;

export type AnyObject = SomeObject<any>;