const person = {
    name: 'Nhung Le',
    age: 38,
    address: {
        line1: 'Baker field',
        city: 'London',
        country: 'United Kingdom'
    },
    links: ['twitter', 'facebook', 'linkedin'],
    addressAsString: () => {
        return person.address.line1 + " " + person.address.city + " " + person.address.country;
    }
}

export default function LearningJavascript() {
    return(
        <div>
            <div>This is all about javascript</div>
            <div>About me:</div>
            <div>
                <div  class="fa fa-small">Name: {person.name}</div>
                <div class="fa fa-small">Age: {person.age}</div>
                <div class="fa fa-small">Address: {person.addressAsString()}</div>
            </div>
        </div>
    )
}
    
