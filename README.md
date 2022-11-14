# Default Profile Pic API


## Usage
```js
const profilepic = require('default-pp'); 
profilepic.random() //console log link of a random animal image
    .then(url => console.log(url))
    .catch((error) => console.error(error));

```

<details>
  <summary>List of possibilities</summary>
    - cat </br>
    - dog </br>
    - bird </br>
    - kangaroo </br>
    - fox </br>
    - koala </br>
    - panda </br>
    - racoon </br>
    - red panda
    
</details>


## Package Installation

1. npm i default-pp

##  API and dependencies i used

- some-random-api.ml
- node-superfetch

## IMPORTANT NOTE:
If you get an error like:
``` 
    ReferenceError: fetch is not defined
        at Request._request (//node_modules/node-superfetch/index.js:22:20)
        at Request.then (//node_modules/node-superfetch/index.js:67:15) 
```
        
simply add `const fetch = require('node-fetch')` at the top of `node_modules/node-superfetch/index.js`
