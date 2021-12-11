import { Nullable } from '../types/Nullable';

export default class DoublyLinkedListNode<T> {

    protected _prevNode: Nullable<DoublyLinkedListNode<T>>

    protected _nextNode: Nullable<DoublyLinkedListNode<T>>

    protected _data: T;

    constructor(
        data: T,
        prevNode: Nullable<DoublyLinkedListNode<T>> = null,
        nextNode: Nullable<DoublyLinkedListNode<T>> = null,
    ) {
        this._prevNode = prevNode;
        this._nextNode = nextNode;
        this._data = data;
    }

    getData(): T {
        return this._data;
    }

    setPrevNode(node: Nullable<DoublyLinkedListNode<T>>): void {
        return this._prevNode = node;
    }

    getPrevNode(): Nullable<DoublyLinkedListNode<T>> {
        return this._prevNode;
    }

    setNextNode(node: Nullable<DoublyLinkedListNode<T>>): void {
        return this._nextNode = node;
    }

    getNextNode(): Nullable<DoublyLinkedListNode<T>> {
        return this._nextNode;
    }
}
