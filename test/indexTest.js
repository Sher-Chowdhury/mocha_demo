describe("testing function xxxx", () => {

	it("testing correct number of paramers passed in", () => {
		console.log("early sanity check")
	})	

	describe("testing success flows", () => {
		it("testing success scenario 1", () => {
			console.log("pass1")
		})	
		it("testing success scenario 2", () => {
			// a failure occurs when an it-block ends exits with an error. Like this one. 
			throw new Error("expected success, but got a failure")
		})	
	})
	describe("testing error flows", () => {
		it("testing error scenario 1", () => {
			console.log("error1")
		})	
		it("testing error scenario 2", () => {
			console.log("error2")
		})			
	})
})