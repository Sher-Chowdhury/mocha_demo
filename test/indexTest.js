const expect = require('chai').expect 
const should = require('chai').should()
const assert = require('chai').assert 

describe("testing function xxxx", () => {

	it("testing correct number of paramers passed in", () => {
		let result = true

		expect(result).to.be.true

		result.should.be.true

		assert.isTrue(result)

	})	

})