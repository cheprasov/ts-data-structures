import StackInterface from './StackInterface';
export default class StackArrayBased<T> extends StackInterface<T> {
    protected _items: T[];
    constructor(items?: T[]);
    push(...items: T[]): void;
    pop(): T | undefined;
    getSize(): number;
    isEmpty(): boolean;
    toArray(): T[];
}
