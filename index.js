"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _nodesuperfetch = require('node-superfetch');
var _nodesuperfetch2 = _interopRequireDefault(_nodesuperfetch);
var n = async t => {
        let e = await _nodesuperfetch2.default.get(t);
        if (e.ok) 
            return e;
        
        throw new Error(`Failed to fetch ${t}`)
    },

    s = exports.cat = async () => n("https://aws.random.cat/meow").then(t => t.body.file),
    p = exports.dog = async () => n("https://dog.ceo/api/breeds/image/random").then(t => t.body.message),
    i = exports.bunny = async () => n("https://api.bunnies.io/v2/loop/random/?media=gif,png").then(t => t.body.media.poster),
    c = exports.duck = async () => n("https://random-d.uk/api/v1/random?type=png").then(t => t.body.url),
    d = exports.fox = async () => n("https://randomfox.ca/floof/").then(t => t.body.image),
    h = exports.lizard = async () => n("https://nekos.life/api/v2/img/lizard").then(t => t.body.url),
    m = exports.shiba = async () => n("http://shibe.online/api/shibes").then(t => t.body[0]),
    y = exports.koala = async () => n("https://some-random-api.ml/img/koala").then(t => t.body.link),
    u = exports.panda = async () => n("https://some-random-api.ml/img/panda").then(t => t.body.link);

    random = Math.floor(Math.random(1, 9))
    console.log(random)
exports.random = random