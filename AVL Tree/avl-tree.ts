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

/** The balanced AVL tree */
class AVLtree <T> {
    // public members organized here
    constructor() {}

    insert(key: T): boolean {}

    deleteKey(key: T): void {}

    printTreeBalance(): void {}


    // private members organized here
    private root: AVLnode<T>

    private rotateLeft(a: AVLnode<T>): AVLnode<T> {}

    private rotateRight(a: AVLnode<T>): AVLnode<T> {}

    private rotateLeftThenRight(n: AVLnode<T>): AVLnode<T> {}

    private rotateRightThenLeft(n: AVLnode<T>): AVLnode<T> {}

    private rebalance(n: AVLnode<T>): void {
        this.setBalance(n)

        if (n.balance === -2) {
            if(this.height(n.left.left) >= this.height(n.left.right)) {
                n = this.rotateRight(n)
            } else {
                n = this.rotateLeftThenRight(n)
            }
        } else if (n.balance === -2) {
            if(this.height(n.right.right) >= this.height(n.right.left)) {
                n = this.rotateLeft(n)
            } else {
                n = this.rotateRightThenLeft(n)
            }
        }

        if (n.parent !== null) {
            this.rebalance(n.parent)
        } else {
            this.root = n
        }
    }

    private height(n: AVLnode<T>): number {}

    private setBalance(n: AVLnode<T>): void {}

    private printNodeBalance(n: AVLnode<T>): void {}

    private clearNode(n: AVLnode<T>): void {}
}