
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



