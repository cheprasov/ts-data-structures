import type { PrimitiveType } from '../types/PrimitiveType';
import { PrimitiveEmptyValueType } from '../types/PrimitiveType';

export const isPrimitive = (value: any): value is PrimitiveType => {
    switch (typeof value) {
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'string':
        case 'undefined':
            return true;
        case 'object':
            if (value === null) {
                return true;
            }
            return false;
        default:
            return false;
    }
}

export const isNumberObject = (value: any): value is Number => {
    return value instanceof Number;
}

export const copyType = <T>(variable: T):
    PrimitiveEmptyValueType | [] | {} | Object =>
{
    if (isPrimitive(variable)) {
        return variable;
    }
    if (Array.isArray(variable)) {
        return [];
    }
    if (typeof variable === 'object') {
        if (variable instanceof Number) {
            return new Number(variable.valueOf());
        }
        if (variable instanceof String) {
            return new String(variable.valueOf());
        }
        if (variable instanceof Boolean) {
            return new Boolean(variable.valueOf());
        }
        // if (variable.constructor instanceof Date) {
        //     return new Boolean(variable.valueOf());
        // }
    }
}

// export const deepCopy = <T>(source: T): T => {
//     if (isPrimitive(source)) {
//         return source;
//     }
//     const copiedObj = {} as O;
//     const itemsForCopy: { item: any, target: any }[] = [{ item: obj, target: copiedObj }];

//     while (itemsForCopy.length) {
//         const { item, target } = itemsForCopy.pop()!;
//         if (typeof item === 'object' && item) {
//             for (let key in item) {
//                 if (!item.hasOwnProperty(key)) {
//                     continue;
//                 }
//                 const value = item[key];
//                 if (isPrimitive(value)) {
//                     target[key] = value;
//                 } else {
//                     itemsForCopy.push({ item: value, target: target })
//                 }
//             }
//         }
//     }

//     return copiedObj;
// }