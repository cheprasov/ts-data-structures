import LinkedListInterface from './LinkedListInterface';
import LinkedListNode from './LinkedListNode';

import type { Nullable } from '../types/Nullable';

export default class LinkedList<T> extends LinkedListInterface<T> {

    protected _firstNode: Nullable<LinkedListNode<T>> = null;
    protected _lastNode: Nullable<LinkedListNode<T>> = null;
    protected _count: number = 0;

    constructor() {
        super();
    }

    // Complexity: O(1)
    pushBeg(item: T): void {
        const newNode = new LinkedListNode(item);
        if (this._firstNode) {
            newNode.setNextNode(this._firstNode);
        } else {
            this._lastNode = newNode;
        }
        this._firstNode = newNode;
        this._count += 1;
    }

    // Complexity: O(1)
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
    }

    // Complexity: O(1)
    pushEnd(item: T): void {
        const newNode = new LinkedListNode(item);
        if (this._lastNode) {
            this._lastNode.setNextNode(newNode);
        }
        this._lastNode = newNode;
        this._count += 1;
    }

    // Complexity: O(n)
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

    // Complexity: O(1)
    getSize(): number {
        return this._count;
    }

}
