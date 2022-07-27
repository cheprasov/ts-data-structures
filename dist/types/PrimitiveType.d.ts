export declare type PrimitiveType = string | number | boolean | null | undefined;
export declare type PrimitiveEmptyValueType = '' | 0 | false | null | undefined;
export declare type EmptyValueType = PrimitiveEmptyValueType | [];
export declare type ObjectKey = string | number | symbol;
export declare type SomeObject<T> = Record<ObjectKey, T>;
export declare type AnyObject = SomeObject<any>;
