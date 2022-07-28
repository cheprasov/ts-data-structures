
export type PrimitiveType = string | number | boolean | null | undefined;

export type PrimitiveEmptyValueType = '' | 0 | false | null | undefined;

export type EmptyValueType = PrimitiveEmptyValueType | []

export type ObjectKeyType = string | number | symbol;

export type SomeObjectType<T> = Record<ObjectKeyType, T>;

export type ObjectType = SomeObjectType<any>;