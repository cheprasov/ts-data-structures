import type { Nullable } from '../types/Nullable';

export default class LinkedListNode<T> {

    protected _nextNode: Nullable<LinkedListNode<T>>

    protected _data: T;

    constructor(data: T, nextNode: Nullable<LinkedListNode<T>> = null) {
        this._nextNode = nextNode;
        this._data = data;
    }

    getData(): T {
        return this._data;
    }

    setNextNode(node: Nullable<LinkedListNode<T>>): void {
        this._nextNode = node;
    }

    getNextNode(): Nullable<LinkedListNode<T>> {
        return this._nextNode;
    }
}
