import Person from './Person'

export default class Team {
	constructor() {
		this.members = new Set()
	}

	add(player) {
		if (!(player instanceof Person)) {
			throw new Error('Данный объект не является объектом класса Person')
		}
		this.members.add(player)
	}

	*[Symbol.iterator]() {
		yield* this.members
	}
}