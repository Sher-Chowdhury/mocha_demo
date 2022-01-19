const expect = require('chai').expect 
const add = require("../maths").add      // you need to load in the function

describe("testing maths function", () => {

	it("success scenario", () => {
		let result = add(2,8)
		expect(result).to.eq(10)
	})
	
	it("failure scenario", () => {
		
		// Here we don't want to check the return value (since we're not expecting a return value), instead we want to 
		// test the exit code of the function itself. This is done by wrapping the add() call inside an arrow function and then 
		// put that arrow function inside  expect(arrowFunction)
		expect(() => {add(2,"xxx")}).to.throw
	})	

})


