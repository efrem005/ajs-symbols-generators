import Person from './Person'
import Team from './Team'

const person1 = new Person('Лучник')
const person2 = new Person('Маг')
const person3 = new Person('Мечник')

const teams = new Team()
teams.add(person1)
teams.add(person2)
teams.add(person3)

const generator = teams[Symbol.iterator]()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

for (const unit of teams) {
	console.log(unit)
}