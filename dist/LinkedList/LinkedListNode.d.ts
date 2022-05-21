import type { Nullable } from '../types/Nullable';
export default class LinkedListNode<T> {
    protected _nextNode: Nullable<LinkedListNode<T>>;
    protected _data: T;
    constructor(data: T, nextNode?: Nullable<LinkedListNode<T>>);
    getData(): T;
    setNextNode(node: Nullable<LinkedListNode<T>>): void;
    getNextNode(): Nullable<LinkedListNode<T>>;
}
