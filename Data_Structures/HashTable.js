
class HashTable {
  constructor() {
    // All key/value pairs will be stored inside the table property
    // Since the HashTable class only has 127 buckets,
    // that means the _hash() must return a num between 0 and 127
    this.table = new Array(127)
    this.size = 0
  }

  // Generates index -> called by set()
  _hash(key) {
    let hash = 0
    for(let i=0; i < key.length; i++) {
      // simple way to create hash (sum the ASCII code characters)
      hash += key.charCodeAt(i)
    }
    console.log('Key: ' + key + ' created hash: ' + hash)
    // this ensures the hash value doesn't exceed the bucket size
    // mod return the remainder of two integers that have been divided
    return hash % this.table.length
  }

  set(key, value) {
    // using hash function to generate the index
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



