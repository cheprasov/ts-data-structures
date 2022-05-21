export default abstract class LinkedListInterface<T> {
    abstract pushBeg(item: T): void;
    abstract popBeg(): T | undefined;
    abstract pushEnd(item: T): void;
    abstract popEnd(): T | undefined;
    abstract getSize(): number;
}
