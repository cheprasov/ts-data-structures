import Queue from '../../queue/Queue';

export const levelOrderTreeTraversal = <T, R>(
    rootNode: T,
    getChildren: (node: T) => T[],
    nodeReduce: (result: R, node: T) => R,
    init: R,
): R => {
    // todo: add level
    let result = nodeReduce(init, rootNode, /* level */);
    const nodesQueue = new Queue(getChildren(rootNode, /* level */));

    while (!nodesQueue.isEmpty()) {
        const node = nodesQueue.pop();
        if (!node) {
            continue;
        }
        result = nodeReduce(result, node, /* level */);
        nodesQueue.push(...getChildren(node, /* level */));
    }

    return result;
}
