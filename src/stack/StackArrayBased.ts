export default class StackArrayBased<T> {

  protected _items: T[];

  constructor(init?: StackArrayBased<T> | T[]) {
    this._items = [];
    if (init instanceof StackArrayBased) {
      this._items.push(...init._items);
    } else if (Array.isArray(init)) {
      this._items.push(...init);
    }
  }

}
