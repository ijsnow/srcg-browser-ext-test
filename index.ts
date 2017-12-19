interface Person {
    firstName: string
    lastName: string | null
    meåningOfLife: any
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = { firstName: "Jane", lastName: "User", meåningOfLife: 42 }

console.log(greeter(user))