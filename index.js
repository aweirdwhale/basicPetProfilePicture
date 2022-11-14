"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//prédéfinis un animal aléatoirement
const animals = ['Bird', 'Cat', 'Dog', 'fox', 'kangaroo', 'koala', 'panda', 'raccoon', 'red_panda']
const animal = animals[Math.floor(Math.random() * animals.length)]

var _nodesuperfetch = require('node-superfetch');
var _nodesuperfetch2 = _interopRequireDefault(_nodesuperfetch);
var n = async t => {
        let e = await _nodesuperfetch2.default.get(t);
        if (e.ok) 
            return e;
        
        throw new Error(`Failed to fetch ${t}`)
},
  
  
s = exports.PP = async () => n(`https://some-random-api.ml/img/${animal}`)
                                  .then(t => t.body.link)

exports.PP = s;