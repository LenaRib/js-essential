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
