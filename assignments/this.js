/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Object - this refers to the window/console object when it is called in the global scope.
 * 2. Implicit binding - this refers to the object left of the dot when it is call in an object.
 * 3. New Keyword Binding - when a constructor function is used, this refers to a specific instance of the object that is created and returned.
 * 4. Explicit - when Javascript call or apply method is used, this is defined in an explicit way
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2
const newObj = {
  silly: "Bananas",
  gibberish: function(name) {
    console.log(`People call me ${name}, but I prefer ${this.silly}`);
  }
};
newObj.gibberish("Carlton");
// code example for Implicit Binding

// Principle 3
function IrateMan(man) {
  this.man = man;
  this.tantrum = ", stop throwing things!";
  this.stop = function() {
    console.log(this.man + this.tantrum);
  };
}

const rick = new IrateMan("Rick");
rick.stop();
// code example for New Binding

// Principle 4

// code example for Explicit Binding
function Parent(attributes) {
  this.age = attributes.age;
  this.location = attributes.location;
  this.name = attributes.name;
  this.phrase = attributes.phrase;
}

function Child(CAttributes) {
  Parent.call(this, CAttributes);
  this.hobby = CAttributes.age;
  this.birthday = CAttributes.age;
}
