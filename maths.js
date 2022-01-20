function add(a, b, cb) {

	if (typeof b !== "number" || typeof a !== "number") {
		throw new Error("aguments must be numbers")
	}

	setTimeout(() => {
		let sum = a + b
		cb(sum)
	}, 1995)

	// timeout has to be under 2 seconds (e.g. 1995ms), otherwise you will get an error message like this: 
	// Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/Users/sherchowdhury/github/mocha_demo/test/mathsTest.js)
	
}


// you have to make your functions publicly accessible in order to run unit tests against them. 
// this is done by having them 
// https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports
module.exports = {
	add: add
}