import StackInterface from './StackInterface';

export default class StackArrayBased<T> extends StackInterface<T> {

  protected _items: T[];

  constructor(items?: T[]) {
    super();

    this._items = [];

    if (Array.isArray(items)) {
      this._items.push(...items);
    }
  }

  push(...items: T[]): void {
    this._items.push(...items);
  }

  pop(): T | undefined {
    return this._items.pop();
  }

  getSize(): number {
    return this._items.length;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  };

  toArray(): T[] {
    return [...this._items];
  }

}
