import StackInterface from './StackInterface';
export default class StackArrayBased<T> extends StackInterface<T> {
    protected _items: T[];
    constructor(init?: StackArrayBased<T> | T[]);
    push(item: T): void;
    pop(): T | undefined;
}
