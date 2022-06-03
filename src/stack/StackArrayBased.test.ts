import StackArrayBased from './StackArrayBased';

describe('StackArrayBased', () => {
    describe('constructor', () => {
        it('should create instance of StackArrayBased', () => {
            const stack = new StackArrayBased();
            expect(stack).toBeInstanceOf(StackArrayBased);
        });

        it('should empty by default', () => {
            const stack = new StackArrayBased();
            expect(stack.isEmpty()).toEqual(true);
            expect(stack.getSize()).toEqual(0);
        });

        it('should allow to use array for creating StackArrayBased', () => {
            const stack = new StackArrayBased(['foo', 'bar', 'baz']);
            expect(stack.pop()).toEqual('baz');
            expect(stack.pop()).toEqual('bar');
            expect(stack.pop()).toEqual('foo');
            expect(stack.pop()).toEqual(undefined);
        });
    });

    describe('push', () => {
        it('should add item to end of StackArrayBased', () => {
            const stack = new StackArrayBased();
            stack.push('foo');
            expect(stack.toArray()).toEqual(['foo']);
            stack.push('bar');
            expect(stack.toArray()).toEqual(['foo', 'bar']);
            stack.push('baz');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz']);
            stack.push('xoo');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo']);
            stack.push('zoo');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should add several items to end of StackArrayBased', () => {
            const stack = new StackArrayBased();
            stack.push('foo', 'bar', 'baz');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz']);
            stack.push('xoo', 'zoo');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should allow to add not unique values', () => {
            const stack = new StackArrayBased();
            stack.push('foo', 'bar', 'baz');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz']);
            stack.push('foo', 'bar', 'baz', 'baz');
            expect(stack.toArray()).toEqual(['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'baz']);
        });
    });

    describe('pop', () => {
        it('should return item from end of StackArrayBased and remove it', () => {
            const stack = new StackArrayBased(['zoo', 'xoo', 'baz', 'bar', 'foo']);
            expect(stack.pop()).toEqual('foo');
            expect(stack.toArray()).toEqual(['zoo', 'xoo', 'baz', 'bar']);
            expect(stack.pop()).toEqual('bar');
            expect(stack.toArray()).toEqual(['zoo', 'xoo', 'baz']);
            expect(stack.pop()).toEqual('baz');
            expect(stack.toArray()).toEqual(['zoo', 'xoo']);
            expect(stack.pop()).toEqual('xoo');
            expect(stack.toArray()).toEqual(['zoo']);
            expect(stack.pop()).toEqual('zoo');
            expect(stack.toArray()).toEqual([]);
        });

        it('should return undefined for empty StackArrayBased', () => {
            const stack = new StackArrayBased();
            expect(stack.pop()).toEqual(undefined);
            expect(stack.toArray()).toEqual([]);
        })
    });

    describe('getSize', () => {
        it('should return 0 for empty StackArrayBased', () => {
            const stack = new StackArrayBased();
            expect(stack.getSize()).toEqual(0);
        });

        it('should return correct amount of items', () => {
            const stack = new StackArrayBased(['foo', 'bar', 'baz']);
            expect(stack.getSize()).toEqual(3);

            stack.push('abc');
            stack.push('xyz');
            expect(stack.getSize()).toEqual(5);

            stack.pop();
            expect(stack.getSize()).toEqual(4);
            stack.pop();
            expect(stack.getSize()).toEqual(3);
            stack.pop();
            expect(stack.getSize()).toEqual(2);
            stack.pop();
            expect(stack.getSize()).toEqual(1);
            stack.pop();
            expect(stack.getSize()).toEqual(0);
            stack.pop();
            expect(stack.getSize()).toEqual(0);
        });
    });

    describe('isEmpty', () => {
        it('should return TRUE if StackArrayBased does not have items', () => {
            const stack = new StackArrayBased();
            expect(stack.isEmpty()).toEqual(true);

            stack.push('foo');
            expect(stack.isEmpty()).toEqual(false);

            stack.pop();
            expect(stack.isEmpty()).toEqual(true);

            stack.pop();
            expect(stack.isEmpty()).toEqual(true);
        });

        it('should return FALSE if StackArrayBased has items', () => {
            expect(new StackArrayBased(['foo']).isEmpty()).toEqual(false);
        });
    });

    describe('toArray', () => {
        it('should return items from StackArrayBased as array', () => {
            const data = ['foo', 'bar', 'baz'];
            const stack = new StackArrayBased(data);
            expect(stack.toArray()).toEqual(data);
            expect(stack.toArray()).not.toBe(data);
        });

        it('should return new array', () => {
            const data = ['foo', 'bar', 'baz'];
            const stack = new StackArrayBased(data);
            expect(stack.toArray()).toEqual(stack.toArray());
            expect(stack.toArray()).not.toBe(stack.toArray());
        });
    });

});