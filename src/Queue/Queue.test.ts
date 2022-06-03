import Queue from './Queue';

describe('Queue', () => {
    describe('constructor', () => {
        it('should create instance of Queue', () => {
            const queue = new Queue();
            expect(queue).toBeInstanceOf(Queue);
        });

        it('should empty by default', () => {
            const queue = new Queue();
            expect(queue.isEmpty()).toEqual(true);
            expect(queue.getSize()).toEqual(0);
        });

        it('should allow to use array for creating Queue', () => {
            const queue = new Queue(['foo', 'bar', 'baz']);
            expect(queue.pop()).toEqual('foo');
            expect(queue.pop()).toEqual('bar');
            expect(queue.pop()).toEqual('baz');
            expect(queue.pop()).toEqual(undefined);
        });
    });

    describe('push', () => {
        it('should add item to end of Queue', () => {
            const queue = new Queue();
            queue.push('foo');
            expect(queue.toArray()).toEqual(['foo']);
            queue.push('bar');
            expect(queue.toArray()).toEqual(['foo', 'bar']);
            queue.push('baz');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz']);
            queue.push('xoo');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo']);
            queue.push('zoo');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should add several items to end of Queue', () => {
            const queue = new Queue();
            queue.push('foo', 'bar', 'baz');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz']);
            queue.push('xoo', 'zoo');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should allow to add not unique values', () => {
            const queue = new Queue();
            queue.push('foo', 'bar', 'baz');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz']);
            queue.push('foo', 'bar', 'baz', 'baz');
            expect(queue.toArray()).toEqual(['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'baz']);
        });
    });

    describe('pop', () => {
        it('should return item from begining of Queue and remove it', () => {
            const queue = new Queue(['zoo', 'xoo', 'baz', 'bar', 'foo']);
            expect(queue.pop()).toEqual('zoo');
            expect(queue.toArray()).toEqual(['xoo', 'baz', 'bar', 'foo']);
            expect(queue.pop()).toEqual('xoo');
            expect(queue.toArray()).toEqual(['baz', 'bar', 'foo']);
            expect(queue.pop()).toEqual('baz');
            expect(queue.toArray()).toEqual(['bar', 'foo']);
            expect(queue.pop()).toEqual('bar');
            expect(queue.toArray()).toEqual(['foo']);
            expect(queue.pop()).toEqual('foo');
            expect(queue.toArray()).toEqual([]);
        });

        it('should return undefined for empty Queue', () => {
            const queue = new Queue();
            expect(queue.pop()).toEqual(undefined);
            expect(queue.toArray()).toEqual([]);
        })
    });

    describe('getSize', () => {
        it('should return 0 for empty Queue', () => {
            const queue = new Queue();
            expect(queue.getSize()).toEqual(0);
        });

        it('should return correct amount of items', () => {
            const queue = new Queue(['foo', 'bar', 'baz']);
            expect(queue.getSize()).toEqual(3);

            queue.push('abc');
            queue.push('xyz');
            expect(queue.getSize()).toEqual(5);

            queue.pop();
            expect(queue.getSize()).toEqual(4);
            queue.pop();
            expect(queue.getSize()).toEqual(3);
            queue.pop();
            expect(queue.getSize()).toEqual(2);
            queue.pop();
            expect(queue.getSize()).toEqual(1);
            queue.pop();
            expect(queue.getSize()).toEqual(0);
            queue.pop();
            expect(queue.getSize()).toEqual(0);
        });
    });

    describe('isEmpty', () => {
        it('should return TRUE if Queue does not have items', () => {
            const queue = new Queue();
            expect(queue.isEmpty()).toEqual(true);

            queue.push('foo');
            expect(queue.isEmpty()).toEqual(false);

            queue.pop();
            expect(queue.isEmpty()).toEqual(true);

            queue.pop();
            expect(queue.isEmpty()).toEqual(true);
        });

        it('should return FALSE if Queue has items', () => {
            expect(new Queue(['foo']).isEmpty()).toEqual(false);
        });
    });

    describe('toArray', () => {
        it('should return items from Queue as array', () => {
            const data = ['foo', 'bar', 'baz'];
            const queue = new Queue(data);
            expect(queue.toArray()).toEqual(data);
            expect(queue.toArray()).not.toBe(data);
        });

        it('should return new array', () => {
            const data = ['foo', 'bar', 'baz'];
            const queue = new Queue(data);
            expect(queue.toArray()).toEqual(queue.toArray());
            expect(queue.toArray()).not.toBe(queue.toArray());
        });
    });

});