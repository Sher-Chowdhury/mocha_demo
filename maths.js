function add( a, b ) {

	if (typeof b !== "number" || typeof a !== "number") {
		throw new Error("aguments must be numbers")
	}

	return a + b
}


// you have to make your functions publicly accessible in order to run unit tests against them. 
// this is done by having them 
// https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports
module.exports = {
	add: add
}