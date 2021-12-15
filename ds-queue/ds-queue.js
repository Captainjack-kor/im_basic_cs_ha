const Queue = function () {
  this._storage = {};
  this.save = 0;
};

Queue.prototype.add = function(n) {
  this._storage[this.save] = n;
  this.save++; //쌓고
  return this._storage;
};

Queue.prototype.remove = function() {
  if(Object.keys(this._storage).length === 0){
    return undefined;
  }
  let result = this._storage[Object.keys(this._storage)[0]];
  delete this._storage[Object.keys(this._storage)[0]];
  return result;
};

module.exports = Queue;
