const expect = require('chai').expect 
const add = require("../maths").add



describe("testing maths function", () => {

	it("success scenario", done => {
		
		let result 
		
		add(2,8, (response) => {
			result = response
			expect(result).to.eq(10)
			
			// we insert this done() here as a way to test that the "add" function actually executes the callback function it
			// receives. 
			// if you comment out this done() line, (as well as the "done" on the "it" line above) and run this test, then it will still
			// pass. That's because the value of "response" (and consequently, "result") is known by the time the "expect" line is 
			// executed. So what the point of "done()"?  
			// If you comment out the "cb(sum)" line in maths.js, then the test still passes, that's because that would now mean 
			// that the above "expect" line now doesn't even execute at all. 
			// that's why we need some way for mocha to ensure that "add" actually does actually execute the callback that's 
			// been passed into it. And that's done by putting the done() call here. 
			done()
		})

        // putting expect here won't work, because "add" function is asynchronous and doesn't get paused by "done()"
		// expect(result).to.eq(10)
	})

})


