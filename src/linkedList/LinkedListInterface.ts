export default abstract class LinkedListInterface<T> {

  abstract pushBeg(...items: T[]): void;

  abstract popBeg(): T | undefined;

  abstract pushEnd(...items: T[]): void;

  abstract popEnd(): T | undefined;

  abstract getSize(): number;

  abstract isEmpty(): boolean;

  abstract toArray(): T[];
}
