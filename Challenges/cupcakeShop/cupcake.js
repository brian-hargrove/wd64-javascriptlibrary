// What should a cupcake have?
// Icing, cake, price 

class Cupcake {
    constructor(icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription (){
        console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`);
    }
}

/* APIE
    A = Abstraction: Hide complicated detail behind an easy interface
    P = Polymorphism: One interaction, with many implemtations (string.length, Array.length)
    I = Inheritence: Class heirarchy that share functionality and attributes
    E = Encapsulation: Data and functionality to manipulte that data are bundled together.


*/

module.exports=Cupcake;
