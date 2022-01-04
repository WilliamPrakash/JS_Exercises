
const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        // arrow functions don't have their own 'this', so it will modify profile
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        // functions have their own this, so printing profile.firstName will give nothing cause it hasn't been assigned a value
        /*let splitName = function(n) {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }*/
        splitName(name);
    }
}

profile.setName('john doe');
console.log(profile.firstName);