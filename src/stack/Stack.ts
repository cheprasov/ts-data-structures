import LinkedList from '../LinkedList/LinkedList';
import StackInterface from './StackInterface';

export default class Stack<T> extends StackInterface<T> {

    protected readonly _linkedList: LinkedList<T>;

    constructor(items: T[] = []) {
        super();

        this._linkedList = new LinkedList();
        items.forEach((item) => this._linkedList.pushBeg(item));
    }

    push(...items: T[]): void {
        this._linkedList.pushBeg(...items);
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
        return this._linkedList.toArray().reverse();
    }

}