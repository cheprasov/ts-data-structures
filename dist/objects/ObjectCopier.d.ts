export declare class ObjectCopier {
    protected static _copierByConstructor: Map<Function, (instance: any) => any>;
    static copy<T extends Object>(instance: T): T;
    static setCopier<T extends Object>(constructor: new () => T, copier: (instance: Object) => Object): void;
}
