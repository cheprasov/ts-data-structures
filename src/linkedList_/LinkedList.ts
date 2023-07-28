import LinkedListInterface from './LinkedListInterface';
import LinkedListNode from './LinkedListNode';

import type { Nullable } from '../types/Nullable';

export default class LinkedList<T> extends LinkedListInterface<T> {

    protected _firstNode: Nullable<LinkedListNode<T>> = null;
    protected _lastNode: Nullable<LinkedListNode<T>> = null;
    protected _count: number = 0;

    /**
     * Create a new instance of LinkedList
     *
     * Complexity: O(1) for each item
     */
    constructor(items: T[] = []) {
        super();

        items.forEach((item) => this.pushEnd(item));
    }

    /**
     * Adds item or items to begining of LinkedList
     *
     * Complexity: O(1) for each item
     */
    pushBeg(...items: T[]): void {
        items.forEach((item) => {
            const newNode = new LinkedListNode(item);
            if (this._firstNode && this._lastNode) {
                newNode.setNextNode(this._firstNode);
            } else {
                this._lastNode = newNode;
            }
            this._firstNode = newNode;
            this._count += 1;
        });
    }

    /**
     * Removes and returns item from begining of LinkedList
     *
     * Complexity: O(1)
     */
    popBeg(): T | undefined {
        if (!this._firstNode) {
            return undefined;
        }

        const node = this._firstNode;
        if (this._lastNode === node) {
            this._firstNode = null;
            this._lastNode = null;
        } else {
            this._firstNode = node.getNextNode();
        }
        this._count -= 1;

        return node.getData();
    }

    /**
     * Adds item or items to end of LinkedList
     *
     * Complexity: O(1) for each item
     */
    pushEnd(...items: T[]): void {
        items.forEach((item) => {
            const newNode = new LinkedListNode(item);
            if (this._lastNode && this._firstNode) {
                this._lastNode.setNextNode(newNode);
            } else {
                this._firstNode = newNode;
            }
            this._lastNode = newNode;
            this._count += 1;
        });
    }

    /**
     * Removes and returns item from end of LinkedList
     *
     * @deprecated
     * This method should be avoided because of the complexity
     *
     * Complexity: O(n)
     */
    popEnd(): T | undefined {
        if (!this._firstNode || !this._lastNode) {
            return undefined;
        }

        this._count -= 1;

        if (this._firstNode === this._lastNode) {
            const node = this._firstNode;
            this._firstNode = null;
            this._lastNode = null;
            return node.getData();
        }

        let currentNode = this._firstNode;
        while (true) {
            const nextNode = currentNode.getNextNode();
            if (nextNode && nextNode !== this._lastNode) {
                currentNode = nextNode;
                continue;
            }
            break;
        }
        const node = this._lastNode;
        currentNode.setNextNode(null);
        this._lastNode = currentNode;
        return node.getData();
    }

    /**
     * Returns size of LinkedList
     *
     * Complexity: O(1)
     */
    getSize(): number {
        return this._count;
    }

    /**
     * Returns TRUE if LinkedList does not have items
     *
     * Complexity: O(1)
     */
    isEmpty(): boolean {
        return !this._firstNode && !this._lastNode;
    }

    /**
     * Returns LinkedList's items as new array
     *
     * Complexity: O(n)
     */
    toArray() : T[] {
        const result: T[] = [];
        let currentNode = this._firstNode;
        while (currentNode) {
            result.push(currentNode.getData());
            currentNode = currentNode.getNextNode();
        }
        return result;
    }
}
