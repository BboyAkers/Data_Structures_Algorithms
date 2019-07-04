// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data){
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children.filter(node => {
            return node.data !== data; 
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn){
        //creating top node
        const arr = [this.root];
        // pushing node inside array and while it has something in it
        while(arr.length){
            //Take out first element of array
            const node = arr.shift();
            // Take all the elements out of node and push them into the back of the array
            arr.push(...node.children)
            fn(node);
        }
    }
    traverseDF(fn){
        //creating top node
        const arr = [this.root];
        // pushing node inside array and while it has something in it
        while(arr.length){
            //Take out first element of array
            const node = arr.shift();
            // Take all the elements out of node and push them into the beginning of the array
            arr.unshift(...node.children)
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
