import LinkedList from '../linkedList/LinkedList';
import StackInterface from './StackInterface';
export default class Stack<T> extends StackInterface<T> {
    protected readonly _linkedList: LinkedList<T>;
    constructor(items?: T[]);
    push(...items: T[]): void;
    pop(): T | undefined;
    getSize(): number;
    isEmpty(): boolean;
    toArray(): T[];
}
