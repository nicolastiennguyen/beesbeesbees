var Bee = function() {
  // calling the superclass allows this new subclass to inherit its properties
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// reset Subclass.prototype & Subclass.prototype.constructors

// setting the prototype relationship between the subclass instantiation and the superclass
Bee.prototype = Object.create(Grub.prototype);
// the previous line overwrote the prototype constructor in this class
// so we must setup our subclass relationship to its Constructor prototype object
Bee.prototype.constructor = Bee;