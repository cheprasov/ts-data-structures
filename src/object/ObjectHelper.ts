export class ObjectHelper {

    static reduce<A, V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (accumulator: A, value: V, key: keyof O, obj: O) => A,
        initialValue: A,
    ): A {
        let res = initialValue;

        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            res = callback(res, obj[key], key, obj);
        }

        return res;
    }

/// Obj => map over props

    static map<R, V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (value: V, key: keyof O, obj: O) => R,
    ): Record<keyof O, R> {
        const newObj = {} as Record<keyof O, R>;

        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            newObj[key] = callback(obj[key], key, obj);
        }

        return newObj;
    }

    static filter<V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (value: V, key: keyof O, obj: O) => boolean,
    ): Partial<Record<keyof O, V>> {
        const newObj = {} as Partial<Record<keyof O, V>>;

        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            if (callback(obj[key], key, obj)) {
                newObj[key] = obj[key];
            }
        }

        return newObj;
    }

    static forEach<V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (value: V, key: keyof O, obj: O) => void,
    ): void {
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            callback(obj[key], key, obj);
        }
    }

    static some<V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (value: V, key: keyof O, obj: O) => boolean,
    ): boolean {
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            if (callback(obj[key], key, obj)) {
                return true;
            }
        }
        return false;
    }

    static every<V = any, O extends { [key: string]: V } = { [key: string]: V }>(
        obj: O,
        callback: (value: V, key: keyof O, obj: O) => boolean,
    ): boolean {
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            if (!callback(obj[key], key, obj)) {
                return false;
            }
        }
        return true;
    }

}
