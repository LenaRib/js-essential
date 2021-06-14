/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Book {
  constructor(name, author, cost, publisher, percentRead, opened) {
    this.name = name;
    this.author = author;
    this.cost = cost;
    this.publisher = publisher;
    this.percentRead = percentRead;
    this.opened = opened;
  }
  isOpened(status) {
    this.opened = status;
  }
}

export default Book;
