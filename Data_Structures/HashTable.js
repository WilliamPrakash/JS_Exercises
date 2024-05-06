
// Source: https://codepen.io/beaucarnes/pen/VbYGMb?editors=0012
/*
  Hash key: inputted data
  Hash/Hash value: the index of the hash table
*/

var hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

var HashTable = function() {
  let storage = [];
  const storageLimit = 14;
  
  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();



/* Older version
class HashTable {
  constructor() {
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key) {
    let hash = 0
    for(let i=0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    console.log('Key: ' + key + ' created hash: ' + hash)
    return hash % this.table.length
  }

  set(key, value) {
    const index = this._hash(key)
    this.table[index] = [key,value]
    this.size++
  }

  get(key) {
    const index = this._hash(key)
    console.log(this.table[index] + ' at index: ' + index)
  }

}

let hashTableObj = new HashTable()
hashTableObj.set('Will',24)
hashTableObj.set('Devon',26)
hashTableObj.get('Will')
hashTableObj.get('Devon')
*/


