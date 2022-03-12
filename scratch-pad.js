let person = {
    name: 'bob',
    address: '100 swift road, NY',
    getAddress: function (){
        console.log(this.address);
    },
    getPhoneNumber: function (){
        let personalNumber = '816-224-3669';
        return function (){
            console.log(personalNumber);
        }
    }
}

console.log(person.getAddress())