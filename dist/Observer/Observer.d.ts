export declare type ListenerCallback<T> = (value: T) => void;
export default class Observer<T> {
    protected _listeners: Set<ListenerCallback<T>>;
    subscribe(listener: ListenerCallback<T>): () => void;
    unsubscribe(listener: ListenerCallback<T>): void;
    publish(value: T): void;
}
