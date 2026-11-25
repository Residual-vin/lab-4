'use strict'
const persons = {
	ada: { born: 1815, died: 1852 },
	turing: { born: 1912, died: 1954 },
	darwin: { born: 1809, died: 1882 },
	curie: { born: 1867, died: 1934 }
}
function ages(persons) {
	const result = {};
	for (const name in persons) {
		result[name] = persons[name].died - persons[name].born
	}
	return result
}
console.log(ages(persons))
