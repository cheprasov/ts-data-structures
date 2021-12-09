import StackInterface from './StackInterface';

export default class StackArrayBased<T> extends StackInterface<T> {

  protected _items: T[];

  constructor(init?: StackArrayBased<T> | T[]) {
    super();

    this._items = [];
    if (init instanceof StackArrayBased) {
      this._items.push(...init._items);
    } else if (Array.isArray(init)) {
      this._items.push(...init);
    }
  }

  push(item: T): void {
    this._items.push(item);
  }

  pop(): T | undefined {
    return this._items.pop();
  }

}
