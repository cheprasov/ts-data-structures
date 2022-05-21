import type { Nullable } from '../types/Nullable';
export default class DoublyLinkedListNode<T> {
    protected _prevNode: Nullable<DoublyLinkedListNode<T>>;
    protected _nextNode: Nullable<DoublyLinkedListNode<T>>;
    protected _data: T;
    constructor(data: T, prevNode?: Nullable<DoublyLinkedListNode<T>>, nextNode?: Nullable<DoublyLinkedListNode<T>>);
    getData(): T;
    setPrevNode(node: Nullable<DoublyLinkedListNode<T>>): void;
    getPrevNode(): Nullable<DoublyLinkedListNode<T>>;
    setNextNode(node: Nullable<DoublyLinkedListNode<T>>): void;
    getNextNode(): Nullable<DoublyLinkedListNode<T>>;
}
