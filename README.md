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

