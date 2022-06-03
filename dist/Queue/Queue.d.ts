import LinkedList from '../LinkedList/LinkedList';
import QueueInterface from './QueueInterface';
export default class Queue<T> extends QueueInterface<T> {
    protected readonly _linkedList: LinkedList<T>;
    constructor(items?: T[]);
    push(...items: T[]): void;
    pop(): T | undefined;
    getSize(): number;
    isEmpty(): boolean;
    toArray(): T[];
}
