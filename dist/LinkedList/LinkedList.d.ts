import LinkedListInterface from './LinkedListInterface';
import LinkedListNode from './LinkedListNode';
import type { Nullable } from '../types/Nullable';
export default class LinkedList<T> extends LinkedListInterface<T> {
    protected _firstNode: Nullable<LinkedListNode<T>>;
    protected _lastNode: Nullable<LinkedListNode<T>>;
    protected _count: number;
    constructor();
    pushBeg(item: T): void;
    popBeg(): T | undefined;
    pushEnd(item: T): void;
    popEnd(): T | undefined;
    getSize(): number;
}
