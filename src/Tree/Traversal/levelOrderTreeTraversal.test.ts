import { levelOrderTreeTraversal } from './levelOrderTreeTraversal';

describe('levelOrderTreeTraversal', () => {
    interface Node {
        value: number;
        left?: Node;
        right?: Node;
    }

    const tree: Node = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 3,
            },
            right: {
                value: 4,
                right: {
                    value: 8,
                }
            }
        },
        right: {
            value: 5,
            right: {
                value: 6,
            }
        }
    };

    it('should return all values from tree in lever order traversal', () => {
        const result = levelOrderTreeTraversal<Node, number[]>(
            tree,
            (node) => {
                const children = [];
                if (node.left) {
                    children.push(node.left);
                }
                if (node.right) {
                    children.push(node.right);
                }
                return children;
            },
            (result, node) => {
                result.push(node.value);
                return result;
            },
            [],
        );

        expect(result).toEqual([1, 2, 5, 3, 4, 6, 8]);
    })
    it('should return all values from tree in lever order traversal', () => {
        const result = levelOrderTreeTraversal<Node, number[]>(
            tree,
            (node) => {
                const children = [];
                if (node.left) {
                    children.push(node.left);
                }
                if (node.right) {
                    children.push(node.right);
                }
                return children;
            },
            (result, node) => {
                result.push(node.value);
                return result;
            },
            [],
        );

        expect(result).toEqual([1, 2, 5, 3, 4, 6, 8]);
    });


    it('should return min/max values from tree in lever order traversal', () => {
        const result = levelOrderTreeTraversal(
            tree,
            (node) => {
                const children = [];
                if (node.left) {
                    children.push(node.left);
                }
                if (node.right) {
                    children.push(node.right);
                }
                return children;
            },
            (result, node) => {
                result.max = result.max === null ? node.value : Math.max(node.value, result.max);
                result.min = result.min === null ? node.value : Math.min(node.value, result.min);
                return result;
            },
            { min: null, max: null } as { min: null | number, max: null | number },
        );

        expect(result).toEqual({ min: 1, max: 8 });
    });

    it('should return sum of values from tree in lever order traversal', () => {
        const result = levelOrderTreeTraversal(
            tree,
            (node) => {
                const children = [];
                if (node.left) {
                    children.push(node.left);
                }
                if (node.right) {
                    children.push(node.right);
                }
                return children;
            },
            (result, node) => {
                return result + node.value;
            },
            0,
        );

        expect(result).toEqual(29);
    });

});