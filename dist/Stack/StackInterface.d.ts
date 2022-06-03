export default abstract class StackInterface<T> {
    abstract push(...items: T[]): void;
    abstract pop(): T | undefined;
    abstract getSize(): number;
    abstract isEmpty(): boolean;
    abstract toArray(): T[];
}
