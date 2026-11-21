class Dog {
  constructor(name) {
    this.name = name;
  }
};

/*I choose number2 */
// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};