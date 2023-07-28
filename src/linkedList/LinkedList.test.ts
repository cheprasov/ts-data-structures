import LinkedList from './LinkedList';

describe('LinkedList', () => {
    describe('constructor', () => {
        it('should create instance of LinkedList', () => {
            const list = new LinkedList();
            expect(list).toBeInstanceOf(LinkedList);
        });

        it('should empty by default', () => {
            const list = new LinkedList();
            expect(list.isEmpty()).toEqual(true);
            expect(list.getSize()).toEqual(0);
        });

        it('should allow to use array for creating LinkedList', () => {
            const list = new LinkedList(['foo', 'bar', 'baz']);
            expect(list.popBeg()).toEqual('foo');
            expect(list.popBeg()).toEqual('bar');
            expect(list.popBeg()).toEqual('baz');
            expect(list.popBeg()).toEqual(undefined);
        });
    });

    describe('pushBeg', () => {
        it('should add item to begining of LinkedList', () => {
            const list = new LinkedList();
            list.pushBeg('foo');
            expect(list.toArray()).toEqual(['foo']);
            list.pushBeg('bar');
            expect(list.toArray()).toEqual(['bar', 'foo']);
            list.pushBeg('baz');
            expect(list.toArray()).toEqual(['baz', 'bar', 'foo']);
            list.pushBeg('xoo');
            expect(list.toArray()).toEqual(['xoo', 'baz', 'bar', 'foo']);
            list.pushBeg('zoo');
            expect(list.toArray()).toEqual(['zoo', 'xoo', 'baz', 'bar', 'foo']);
        });

        it('should add several items to begining of LinkedList', () => {
            const list = new LinkedList();
            list.pushBeg('foo', 'bar', 'baz');
            expect(list.toArray()).toEqual(['baz', 'bar', 'foo']);
            list.pushBeg('xoo', 'zoo');
            expect(list.toArray()).toEqual(['zoo', 'xoo', 'baz', 'bar', 'foo']);
        });

        it('should allow to add not unique values', () => {
            const list = new LinkedList();
            list.pushBeg('foo', 'bar', 'baz');
            expect(list.toArray()).toEqual(['baz', 'bar', 'foo']);
            list.pushBeg('foo', 'bar', 'baz', 'baz');
            expect(list.toArray()).toEqual(['baz', 'baz', 'bar', 'foo', 'baz', 'bar', 'foo']);
        });
    });

    describe('popBeg', () => {
        it('should return item from begining of LinkedList and remove it', () => {
            const list = new LinkedList(['zoo', 'xoo', 'baz', 'bar', 'foo']);
            expect(list.popBeg()).toEqual('zoo');
            expect(list.toArray()).toEqual(['xoo', 'baz', 'bar', 'foo']);
            expect(list.popBeg()).toEqual('xoo');
            expect(list.toArray()).toEqual(['baz', 'bar', 'foo']);
            expect(list.popBeg()).toEqual('baz');
            expect(list.toArray()).toEqual(['bar', 'foo']);
            expect(list.popBeg()).toEqual('bar');
            expect(list.toArray()).toEqual(['foo']);
            expect(list.popBeg()).toEqual('foo');
            expect(list.toArray()).toEqual([]);
        });

        it('should return undefined for empty LinkedList', () => {
            const list = new LinkedList();
            expect(list.popBeg()).toEqual(undefined);
            expect(list.toArray()).toEqual([]);
        })
    });

    describe('pushEnd', () => {
        it('should add item to end of LinkedList', () => {
            const list = new LinkedList();
            list.pushEnd('foo');
            expect(list.toArray()).toEqual(['foo']);
            list.pushEnd('bar');
            expect(list.toArray()).toEqual(['foo', 'bar']);
            list.pushEnd('baz');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
            list.pushEnd('xoo');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo']);
            list.pushEnd('zoo');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should add several items to end of LinkedList', () => {
            const list = new LinkedList();
            list.pushEnd('foo', 'bar', 'baz');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
            list.pushEnd('xoo', 'zoo');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'xoo', 'zoo']);
        });

        it('should allow to add not unique values', () => {
            const list = new LinkedList();
            list.pushEnd('foo', 'bar', 'baz');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz']);
            list.pushEnd('foo', 'bar', 'baz', 'baz');
            expect(list.toArray()).toEqual(['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'baz']);
        });
    });

    describe('popEnd', () => {
        it('should return item from begining of LinkedList and remove it', () => {
            const list = new LinkedList(['zoo', 'xoo', 'baz', 'bar', 'foo']);
            expect(list.popEnd()).toEqual('foo');
            expect(list.toArray()).toEqual(['zoo', 'xoo', 'baz', 'bar']);
            expect(list.popEnd()).toEqual('bar');
            expect(list.toArray()).toEqual(['zoo', 'xoo', 'baz']);
            expect(list.popEnd()).toEqual('baz');
            expect(list.toArray()).toEqual(['zoo', 'xoo']);
            expect(list.popEnd()).toEqual('xoo');
            expect(list.toArray()).toEqual(['zoo']);
            expect(list.popEnd()).toEqual('zoo');
            expect(list.toArray()).toEqual([]);
        });

        it('should return undefined for empty LinkedList', () => {
            const list = new LinkedList();
            expect(list.popBeg()).toEqual(undefined);
            expect(list.toArray()).toEqual([]);
        })
    });

    describe('getSize', () => {
        it('should return 0 for empty LinkedList', () => {
            const list = new LinkedList();
            expect(list.getSize()).toEqual(0);
        });

        it('should return correct amount of items', () => {
            const list = new LinkedList(['foo', 'bar', 'baz']);
            expect(list.getSize()).toEqual(3);

            list.pushBeg('abc');
            list.pushBeg('xyz');
            expect(list.getSize()).toEqual(5);

            list.popBeg();
            expect(list.getSize()).toEqual(4);
            list.popBeg();
            expect(list.getSize()).toEqual(3);
            list.popBeg();
            expect(list.getSize()).toEqual(2);
            list.popBeg();
            expect(list.getSize()).toEqual(1);
            list.popBeg();
            expect(list.getSize()).toEqual(0);
            list.popBeg();
            expect(list.getSize()).toEqual(0);
        });
    });

    describe('isEmpty', () => {
        it('should return TRUE if LinkedList does not have items', () => {
            const list = new LinkedList();
            expect(list.isEmpty()).toEqual(true);

            list.pushEnd('foo');
            expect(list.isEmpty()).toEqual(false);

            list.popBeg();
            expect(list.isEmpty()).toEqual(true);

            list.popBeg();
            expect(list.isEmpty()).toEqual(true);
        });

        it('should return FALSE if LinkedList has items', () => {
            expect(new LinkedList(['foo']).isEmpty()).toEqual(false);
        });
    });

    describe('toArray', () => {
        it('should return items from LinkedList as array', () => {
            const data = ['foo', 'bar', 'baz'];
            const list = new LinkedList(data);
            expect(list.toArray()).toEqual(data);
            expect(list.toArray()).not.toBe(data);
        });

        it('should return new array', () => {
            const data = ['foo', 'bar', 'baz'];
            const list = new LinkedList(data);
            expect(list.toArray()).toEqual(list.toArray());
            expect(list.toArray()).not.toBe(list.toArray());
        });
    });

});