import { AnyObject, ObjectKey } from '../types/PrimitiveType';
export default class ObjectHelper {
    static reduce<A, V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (accumulator: A, value: V, key: keyof O, obj: O) => A, initialValue: A): A;
    static map<R, V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (value: V, key: keyof O, obj: O) => R): Record<keyof O, R>;
    static filter<V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (value: V, key: keyof O, obj: O) => boolean): Partial<Record<keyof O, V>>;
    static forEach<V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (value: V, key: keyof O, obj: O) => void): void;
    static some<V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (value: V, key: keyof O, obj: O) => boolean): boolean;
    static every<V = any, O extends {
        [key: string]: V;
    } = {
        [key: string]: V;
    }>(obj: O, callback: (value: V, key: keyof O, obj: O) => boolean): boolean;
    /**
     * Retuns list of keys for keys with different values
     */
    static diffKeysByValue<T extends AnyObject>(obj1: T, obj2: T): ObjectKey[];
}
