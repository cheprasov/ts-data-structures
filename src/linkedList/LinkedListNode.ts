import { Nullable } from '../types/Nullable';

class LinkedListNode<T> {

    protected _nextNode: Nullable<LinkedListNode<any>>

    protected _data: T;

    constructor(data: T, nextNode: Nullable<LinkedListNode<any>> = null) {
        this._nextNode = nextNode;
        this._data = data;
    }

    getData(): T {
        return this._data;
    }

    getNextNode(): Nullable<LinkedListNode<any>> {
        return this._nextNode;
    }
}