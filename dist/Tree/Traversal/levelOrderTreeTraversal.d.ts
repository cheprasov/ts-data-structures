export declare const levelOrderTreeTraversal: <T, R>(rootNode: T, getChildren: (node: T) => T[], nodeReduce: (result: R, node: T) => R, init: R) => R;
