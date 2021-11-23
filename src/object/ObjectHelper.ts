

export const forEach = <T extends { [key: string]: any }>(obj: T, callback: Function) => {
    for (let k in obj) {
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        callback(obj[k], k, obj);
    }
};

export const some = <T extends { [key: string]: any }>(obj: T, callback: Function) => {
    for (let k in obj) {
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        if (callback(obj[k], k, obj)) {
            return true;
        }
    }
};

export const every = <T extends { [key: string]: any }>(obj: T, callback: Function) => {
    for (let k in obj) {
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        if (!callback(obj[k], k, obj)) {
            return false;
        }
    }
    return true;
};