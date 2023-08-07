export class ObjectCopier {

    protected static _copierByConstructor = new Map<Function, (instance: any) => any>([
        [
            Date,
            (date: Date) => new Date(date.getTime()),
        ],
        [
            URL,
            (url: URL) => new URL(url.toString()),
        ],
        [
            URLSearchParams,
            (params: URLSearchParams) => new URLSearchParams(params.toString()),
        ],
    ]);

    static copy<T extends Object>(instance: T): T {
        const copier = this._copierByConstructor.get(instance.constructor);
        if (copier) {
            return copier(instance) as T;
        }
        throw new Error('Copier function is not provided for constructor ' + instance.constructor.name);
    }

    static setCopier<T extends Object>(constructor: new () => T, copier: (instance: Object) => Object): void {
        this._copierByConstructor.set(constructor, copier);
    }

}
