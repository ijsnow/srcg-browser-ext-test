interface Person {
    firstName: string
    lastName: string | null
    meåningOfLife: any
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

const user = {
    firstName: "Jane",
    lastName: "User",
    meåningOfLife: 42
}

console.log(greeter(user))
console.log(user.meåningOfLife)