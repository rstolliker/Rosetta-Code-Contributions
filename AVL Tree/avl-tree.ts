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

/** Interface for the deciding function in the AVL tree */
interface DecisionFunction <T> {
    (first: T, second: T): boolean
}

/** The balanced AVL tree */
class AVLtree <T> {}