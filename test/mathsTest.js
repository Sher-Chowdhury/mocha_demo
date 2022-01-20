const expect = require('chai').expect
const add = require("../maths").add



describe("testing maths function", () => {

	// have to put "done" in this line:
	it("success scenario", done => {


		// This time our callback can accept two parameters, the first parameter being an error, if any. 
		// this means that this test is now testing for 3 things:
		// 1. The add() function run's successfully without throwing an error - hence we don't trigger done('blahblah')
		// 2. the add() function does end up calling the callback function that's been passed into it. 
		// 3. we are doing an actual-expected assertion check using chai's human readable assertion library. 
		add(2, 8, (err, result) => {
			if (err) {
				done('FAIL: The function itself failed to run successfully')
			} else {
				expect(result).to.eq(10)
				done()
			}
		})
	})
})




