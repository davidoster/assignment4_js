var Color  = require('./color')
var Size   = require('./size')
var Fabric = require('./fabric')

/* we can also implement inheritance and create this functionality on a 
class RandomTShirt extends TShirt {
    // can you complete the rest of the class ???
}
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class TShirt {
    constructor(random, name, size, color, fabric) {
        this._basePrice = 10
        if(random == true) {
            // console.log("random defined!!!")
            this.name = "AAA"
            this.size = Object.keys(new Size().sizes)[getRandomInt(7)]
            this.color = Object.keys(new Color().colors)[getRandomInt(7)]
            this.fabric = Object.keys(new Fabric().fabrics)[getRandomInt(7)]   
        } else {
            this.name = name
            this.size = size
            this.color = color
            this.fabric = fabric
            
        }
        this.price = this._basePrice + this._fabric
    }

    set name(value) {
        this._name = value 
    }

    get name() {
        if(this._name === undefined) return ''
        return this._name.toUpperCase()
    }

    set size(value) {
        let mySize = new Size()
        // console.log(`size from setter: ${mySize.sizes[value]}`)
        this._size = mySize.sizes[value] - 1
    }

    get size() {
        return Object.keys(new Size().sizes)[this._size]
    }

    set color(value) {
        let myColor = new Color()
        this._color = myColor.colors[value] - 1
    }

    get color() {
        //     Object.keys(fabric.fabrics).find(k => fabric.fabrics[k] === this._fabric)
        return Object.keys(new Color().colors)[this._color]
    }

    // setFabric(2) // from outside myTShirt.setFabric(2)
    set fabric(value) {
        let myFabric = new Fabric()
        this._fabric = myFabric.fabrics[value]
    }

    get fabric() {
        //ES6: Object.keys(obj).find(k=>obj[k]===value) - https://stackoverflow.com/a/57944783
        /* 
        var fabric = new Fabric()
        Object.keys(fabric.fabrics).find(k => fabric.fabrics[k] === this._fabric)
        */
        var fabric = new Fabric()
        // console.log("from getter fabric: " + fabric.fabrics['WOOL'])
        return Object.keys(fabric.fabrics).find(k => fabric.fabrics[k] === this._fabric)
    }

    toString() {
        // return `Color: ${this.color}, Size: ${this.size}, Fabric: ${this.fabric}`
        return `Name: ${this.name}, Price: ${this.price}, Size: ${this.size}, Color: ${this.color}, Fabric: ${this.fabric}`
    }
}

module.exports = TShirt