import { Nullable } from '../types/Nullable';
import LinkedListNode from './LinkedListNode';

export default class LinkedList<T> {

    protected _firstNode: Nullable<LinkedListNode<T>> = null;
    protected _lastNode: Nullable<LinkedListNode<T>> = null;

    constructor() {
    }

    // Complexity: O(1)
    pushToEnd(item: T): void {
        const newNode = new LinkedListNode(item);
        if (this._lastNode) {
            this._lastNode.setNextNode(newNode);
        }
        this._lastNode = newNode;
    }

    // Complexity: O(n)
    popFromEnd(item: T): T | null {
        if (!this._firstNode || !this._lastNode) {
            return null;
        }

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
                continue
            }
            break;
        }
        const node = this._lastNode;
        currentNode.setNextNode(null);
        this._lastNode = currentNode;
        return node.getData();
    }

}