function add(a, b, cb) {

	if (typeof b !== "number" || typeof a !== "number") {
		let err = new Error("aguments must be numbers")
		cb(err)
	}

	let sum
	setTimeout(() => {
		sum = a + b
		cb(null, sum)
	}, 1000)

}


module.exports = {
	add: add
}