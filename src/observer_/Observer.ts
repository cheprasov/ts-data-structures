export type ListenerCallback<T> = (value: T) => void;

export default class Observer<T> {

    protected _listeners: Set<ListenerCallback<T>> = new Set();

    subscribe(listener: ListenerCallback<T>): () => void {
        this._listeners.add(listener);
        return () => {
            this.unsubscribe(listener);
        };
    }

    unsubscribe(listener: ListenerCallback<T>) {
        this._listeners.delete(listener);
    }

    publish(value: T) {
        this._listeners.forEach((listener) => {
            try {
                listener(value);
            } catch (e) {
                console.error(e);
            }
        });
    }

}