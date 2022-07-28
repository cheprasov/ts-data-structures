export declare type PrimitiveType = string | number | boolean | null | undefined;
export declare type PrimitiveEmptyValueType = '' | 0 | false | null | undefined;
export declare type EmptyValueType = PrimitiveEmptyValueType | [];
export declare type ObjectKeyType = string | number | symbol;
export declare type SomeObjectType<T> = Record<ObjectKeyType, T>;
export declare type ObjectType = SomeObjectType<any>;
