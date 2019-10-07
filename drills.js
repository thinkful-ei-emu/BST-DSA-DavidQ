let BST = require('./BinarySearchTree');




function main(){
  let test = new BST(5,'this is a test');

  test.insert(10,'this is also a test');
  test.insert(11,'3rd biggest');
  test.insert(4,'answers should be same');
  test.insert(12,'should change height');
  test.insert(14,'should change height');
  console.log(BST.display(test));
  console.log(test.get(11));
  console.log('height is ',findHeight(test));
  console.log(isBST(test));
  let ABT = {key:5,value:'test',_left:{key:6,value:'test',_left:null,_right:null},_right:null}
  console.log(thirdBiggest(test));
}

function findHeight(tree){
  debugger;
  if(tree === null){
    return 0;
  }
  if(!tree._left && !tree._right){
    //means at bottom
    return 1;
  }
  let left = findHeight(tree._left);
  let right = findHeight(tree._right);
  return 1 + (right > left ? right : left);
}

function isBST(root){
  if(!root._left && !root._right)
    return true;
  if(!root._right && root._left)
    return isBST(root._left);
  if(!root._left && root._right)
    return isBST(root._right);
  if(root._left.key > root.key || root._right.key < root.key )
    return false;
  else{
    return isBST(root._left) && isBST(root._right);
  }
}

function thirdBiggest(tree){
  if(!tree._left && !tree._right)
    return tree._parent._parent.value;
  if(!tree._right)
    return thirdBiggest(tree._left);
  else
    return thirdBiggest(tree._right);
}

function theSameBST(arr1, root = arr1[0], index = 0){
 
}
main();