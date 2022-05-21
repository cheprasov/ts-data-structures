export default abstract class StackInterface<T> {
    abstract push(item: T): void;
    abstract pop(): T | undefined;
}
