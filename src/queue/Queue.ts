import LinkedList from '../linkedList/LinkedList';
import QueueInterface from './QueueInterface';

export default class Queue<T> extends QueueInterface<T> {

    protected readonly _linkedList: LinkedList<T>;

    constructor(items: T[] = []) {
        super();

        this._linkedList = new LinkedList(items);
    }

    push(...items: T[]): void {
        this._linkedList.pushEnd(...items);
    };

    pop(): T | undefined {
        return this._linkedList.popBeg();
    }

    getSize(): number {
        return this._linkedList.getSize();
    }

    isEmpty(): boolean {
        return this._linkedList.isEmpty();
    };

    toArray(): T[] {
        return this._linkedList.toArray();
    }

}