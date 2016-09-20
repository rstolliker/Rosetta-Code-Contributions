/** A single node in an AVL tree */
class AVLnode <T> {
    balance: number
    left: AVLnode<T>
    right: AVLnode<T>

    constructor(public key: T, public parent: AVLnode<T> = null) {
        this.balance = 0
        this.left = null
        this.right = null
    }
}

/** A hack to emulate a pointer to AVLnode.
 * Needed because javascript passes references by value only.
 * While most operations will work, they would not be saved outside the function scope.
 * Also, 'this' cannot be reassigned.
 */
class nodePtr<T> {
    constructor(public node: AVLnode<T> = null) {}
}

/** The balanced AVL tree */
class AVLtree <T> {
    // public members organized here
    constructor() {}

    insert(key: T): boolean {}

    deleteKey(key: T): void {}

    printTreeBalance(): void {}


    // private members organized here
    private root: nodePtr<T>

    private rotateLeft(a: nodePtr<T>): nodePtr<T> {}

    private rotateRight(a: nodePtr<T>): nodePtr<T> {}

    private rotateLeftThenRight(n: nodePtr<T>): nodePtr<T> {}

    private rotateRightThenLeft(n: nodePtr<T>): nodePtr<T> {}

    private rebalance(n: nodePtr<T>): void {
        this.setBalance(n)

        if (n.node.balance === -2) {
            if(this.height(n.node.left.left) >= this.height(n.node.left.right)) {
                n.node = this.rotateRight(n).node
            } else {
                n.node = this.rotateLeftThenRight(n).node
            }
        }
    }

    private height(n: AVLnode<T>): number {}

    private setBalance(n: AVLnode<T>): void {}

    private printNodeBalance(n: AVLnode<T>): void {}

    private clearNode(n: AVLnode<T>): void {}
}