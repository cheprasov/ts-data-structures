
export const levelOrderTreeTraversal = <T, R>(
    rootNode: T,
    getChildren: (node: T) => T[],
    nodeReduce: (result: R, node: T) => R,
    init: R,
): R => {
    // todo: add level
    let result = nodeReduce(init, rootNode, /* level */);
    // todo: replace by queue
    const nodes = getChildren(rootNode, /* level */);

    while (nodes.length > 0) {
        const node = nodes.shift();
        if (!node) {
            continue;
        }
        result = nodeReduce(result, node, /* level */);
        nodes.push(...getChildren(node, /* level */));
    }

    return result;
}
