

module.exports = class BST{
  constructor(key,value,parent=null,left=null,right=null){
    this.key = key;
    this.value = value;
    this._parent = parent;
    this._left = left;
    this._right = right;
   
  }

  insert(key,value){
    if(this.key === null)
    {
      this.key = key;
      this.value = value;
    }
    let item = new BST(key,value,this);
    if(key > this.key){//need to go right
      if(this._right === null)
        this._right = new BST(key,value,this);
      else
        this._right.insert(key,value);
    }
    else{  //need to go left
      if(this._left === null)
        this._left = new BST(key,value,this);
      else
        this._left.insert(key,value);
    }
  }
  get(key){
    
    if(this.key === key)
      return this.value;
    if(key > this.key)
      if(this._right === null)
        throw new Error('key not found');
      else
        return this._right.get(key);
    else
    if(this._left === null)
      throw new Error('key not found');
    else
      return this._left.get(key);

  }
  static display(root){
    if(!root._left && !root._right)
      return`      ${root.value }      `;
    else if(!root._left && root._right)
      return BST.display(root._right);
    else if(!root._right && root.left)
      return BST.display(root._left);
    else{
      return BST.display(root._left) + BST.display(root._right);
      
    }

  }
 
  
 
};