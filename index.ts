interface Person {
    firstName: string
    lastName: string
    meaningOfLife: any
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = { firstName: "Jane", lastName: "User", meaningOfLife: 42 }

console.log(greeter(user))