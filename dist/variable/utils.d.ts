import type { PrimitiveType } from '../types/PrimitiveType';
import { PrimitiveEmptyValueType } from '../types/PrimitiveType';
export declare const isPrimitive: (value: any) => value is PrimitiveType;
export declare const isArray: (value: any) => value is PrimitiveType;
export declare const isNumberObject: (value: any) => value is Number;
export declare const copyType: <T>(variable: T) => PrimitiveEmptyValueType | [] | {} | Object;
