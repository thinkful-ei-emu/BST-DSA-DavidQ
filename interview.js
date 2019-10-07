let BST = require('./BinarySearchTree');
function newTree(arr){
  let root = new BST(arr[Math.floor(arr.length/2)]);
  arr.splice(Math.ceil(arr.length/2),1);
  arr.forEach((node)=>root.insert(node,node));
  
}