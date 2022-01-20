const expect = require('chai').expect 

describe("testing maths function", () => {

	
	let var1 = ['apple', 'oranges', 'bananas']
	let var2 = ['apple', 'oranges', 'bananas']



	it("identity testing comparison", () => {
		// this fails because eq cant properly compare composite date types (e.g. arrays) so it resorts to
		// doing a comparing memory pointer value (identity testing)
		expect(var1).to.eq(var2)
	})
	
	it("deep comparison testing", () => {
		// this test passes because it's doing a deep comparison, to see if all the underlying primitive data-type
		// based values matches. 
		expect(var1).to.eql(var2)
	})	

})


