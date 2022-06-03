import LinkedListInterface from './LinkedListInterface';
import LinkedListNode from './LinkedListNode';
import type { Nullable } from '../types/Nullable';
export default class LinkedList<T> extends LinkedListInterface<T> {
    protected _firstNode: Nullable<LinkedListNode<T>>;
    protected _lastNode: Nullable<LinkedListNode<T>>;
    protected _count: number;
    /**
     * Create a new instance of LinkedList
     *
     * Complexity: O(1) for each item
     */
    constructor(items?: T[]);
    /**
     * Adds item or items to begining of LinkedList
     *
     * Complexity: O(1) for each item
     */
    pushBeg(...items: T[]): void;
    /**
     * Removes and returns item from begining of LinkedList
     *
     * Complexity: O(1)
     */
    popBeg(): T | undefined;
    /**
     * Adds item or items to end of LinkedList
     *
     * Complexity: O(1) for each item
     */
    pushEnd(...items: T[]): void;
    /**
     * Removes and returns item from end of LinkedList
     *
     * @deprecated
     * This method should be avoided because of the complexity
     *
     * Complexity: O(n)
     */
    popEnd(): T | undefined;
    /**
     * Returns size of LinkedList
     *
     * Complexity: O(1)
     */
    getSize(): number;
    /**
     * Returns TRUE if LinkedList does not have items
     *
     * Complexity: O(1)
     */
    isEmpty(): boolean;
    /**
     * Returns LinkedList's items as new array
     *
     * Complexity: O(n)
     */
    toArray(): T[];
}
