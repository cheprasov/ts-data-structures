import LinkedListNode from './LinkedListNode';

describe('LinkedListNode', () => {

    describe('constructor', () => {
        it('should create instance of LinkedListNode ', () => {
            const node = new LinkedListNode('foo');
            expect(node).toBeInstanceOf(LinkedListNode);
        });

        it('should create node without nextNode', () => {
            const node = new LinkedListNode('foo');
            expect(node.getNextNode()).toEqual(null);
        });

        it('should set next node via constructor', () => {
            const nextNode = new LinkedListNode('bar');
            const node = new LinkedListNode('foo', nextNode);
            expect(node.getNextNode()).toBe(nextNode);
        });
    });

    describe('getData', () => {
        it('should return data passed via constructor', () => {
            expect(new LinkedListNode('foo').getData()).toEqual('foo');
            expect(new LinkedListNode(0).getData()).toEqual(0);
            expect(new LinkedListNode(true).getData()).toEqual(true);
            expect(new LinkedListNode(undefined).getData()).toEqual(undefined);
            expect(new LinkedListNode(null).getData()).toEqual(null);
        });

        it('should allow to get data several times', () => {
            const node = new LinkedListNode('foo');
            expect(node.getData()).toEqual('foo');
            expect(node.getData()).toEqual('foo');
            expect(node.getData()).toEqual('foo');
            expect(node.getData()).toEqual('foo');
            expect(node.getData()).toEqual('foo');
        });
    });

    describe('setNextNode', () => {
        it('should set next node to the node', () => {
            const node = new LinkedListNode('foo');
            const nextNode = new LinkedListNode('bar');
            node.setNextNode(nextNode);
            expect(node.getNextNode()).toBe(nextNode);
        });

        it('should allow to use self node as next node', () => {
            const node = new LinkedListNode('foo');
            node.setNextNode(node);
            expect(node.getNextNode()).toBe(node);
        });
    });

    describe('getNextNode', () => {
        it('should return null if next node is not provided', () => {
            const node = new LinkedListNode('foo');
            expect(node.getNextNode()).toEqual(null);
        });

        it('should return next node', () => {
            const nextNode = new LinkedListNode('bar');
            const node = new LinkedListNode('foo', nextNode);
            expect(node.getNextNode()).toBe(nextNode);
        });
    });

});