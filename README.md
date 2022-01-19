# mocha_demo
Just some mocha examples.



```
$ npm init -y # create a package.json file                                                                                             
Wrote to /Users/sherchowdhury/github/mocha_demo/package.json:

{
  "name": "mocha_demo",
  "version": "1.0.0",
  "description": "Just some mocha examples.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sher-Chowdhury/mocha_demo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Sher-Chowdhury/mocha_demo/issues"
  },
  "homepage": "https://github.com/Sher-Chowdhury/mocha_demo#readme"
}
```


To add instanbul (nyc) coverage checker to the above package.json, you edit the above json directly, or indirectly by running:

```
$ npm install -D nyc
```

the -D means it will be added as a dev dependency, hence this bit will get added to the package.json file:

```
  "devDependencies": {
    "nyc": "^15.1.0"
  }
```

Now let's install mocha, via package.json again:


```
$ npm install -D mocha
```

This results in:

```
  "devDependencies": {
    "mocha": "^9.1.4",
    "nyc": "^15.1.0"
  }
```

Then created the following file:

```
$ node index.js 
hello world
```

next, I created indexTest.js which will eventually house our unit tests, created this file, in new folder called `test`:

```
$ cat indexTest.js 
console.log("running tests")
```

Now run this test using npx:

```
$ npx mocha indexTest.js
running tests


  0 passing (0ms) 
```


But it's best practice to run the tests via npm command, to do that, using vim, update the packages.json file's `scripts` section so that it looks like:


```
  "scripts": {
    "test": "mocha \"*/**/*Test.js\""
  },
```

The `*/**/*Test.js` wildcard will executed all js files (with filename ending of '*Test.js') in this repo in any folder (although not at the root folder level). 


```
$ npm run test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"

running tests


  0 passing (1ms)

```

You can also run the above command in a more shorthand forms:

```
$ npm run test
$ npm test
```

these shorthands only work because a scripts name of "test" has special meaning in npm world - https://docs.npmjs.com/cli/v8/using-npm/scripts#npm-test


As you can this can also in turn run `pretest` and `posttest`, if they exist. 


now see the eg1 branch. 


Rewrote indexTest.js with some sample tests, using the describe() and it() block syntaxes. These syntaxes were globally introduced by install mocha. So no need to require mocha. 

Now the output looks like:

```
$ npm test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"



  testing function xxxx
early sanity check
    ✔ testing correct number of paramers passed in
    testing success flows
pass1
      ✔ testing success scenario 1
      1) testing success scenario 2
    testing error flows
error1
      ✔ testing error scenario 1
error2
      ✔ testing error scenario 2


  4 passing (7ms)
  1 failing

  1) testing function xxxx
       testing success flows
         testing success scenario 2:
     Error: expected success, but got a failure
      at Context.<anonymous> (test/indexTest.js:13:10)
      at processImmediate (internal/timers.js:464:21)



npm ERR! Test failed.  See above for more details.

```

Configuring mocha - you can configure mocha by creating config files, or adding a "mocha" section inside the package.json file - https://mochajs.org/#configuring-mocha-nodejs

Note: configuring using the `.mocharc.js` is the more powerful way of doing this because you can code in some logic to it. 

Here are some examples - https://github.com/mochajs/mocha/tree/master/example/config


now look at "chai1" branch. 

## The Chai assertion Library

install chai:

```
$ npm install -D chai
```

This install the dev dependencies, and updates the packages.json. 


Next you have to require chai before you can use it:

```
$ cat indexTest.js
const expect = require('chai').expect 

describe("testing function xxxx", () => {

	it("testing correct number of paramers passed in", () => {
		let result = true
		expect(result).to.be.true

	})	

})
```

This outputs:

```
$ npm test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"



  testing function xxxx
    ✔ testing correct number of paramers passed in


  1 passing (4ms)

```

now switch to branch chai2

The also offers alernatives to "expect", they also offer "should" and "assert".

They are all actually equivalent to each other, the only difference being that the syntax is slightly different. 

So it's a matter of personal preference on which syntax you use. Here's a side by sid comparisons of these syntaxes:

```
$ cat indexTest.js

const expect = require('chai').expect 
const should = require('chai').should()    // notice we use '()' here. 
const assert = require('chai').assert 

describe("testing function xxxx", () => {

	it("testing correct number of paramers passed in", () => {
		let result = true

		expect(result).to.be.true

		result.should.be.true

		assert.isTrue(result)

	})	

})
```

This outputs:

```
$ npm test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"



  testing function xxxx
    ✔ testing correct number of paramers passed in


  1 passing (4ms)
```


Side note: you can use `describe.only()` and `describe.skip()` to control what get's run during `npm test`. Similarly you have `it.only()` and `it.skip()` - see https://mochajs.org/#exclusive-tests and https://mochajs.org/#inclusive-tests


now use branch chai3

here we can see how to test the add function. 

```
$ npm test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"



  testing maths function
    ✔ success scenario
    ✔ failure scenario


  2 passing (4ms)

```

now switch to hooks1 branch. 


https://mochajs.org/#available-root-hooks

mocha hooks lets you run some code before and after it-blocks. 


```
$ npm test

> mocha_demo@1.0.0 test /Users/sherchowdhury/github/mocha_demo
> mocha "*/**/*Test.js"



  testing maths function
running hook
    ✔ success scenario
running hook
    ✔ failure scenario


  2 passing (5ms)
```

There are a few hooks avaiable:

- before
- after
- beforeEach
- afterEach

see - https://mochajs.org/#hooks and https://mochajs.org/#available-root-hooks