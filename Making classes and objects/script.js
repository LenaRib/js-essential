/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Book from './Book.js';

const studentBook = new Book(
  'Algoritms and Data Structure',
  'Mark Lutz',
  '20$',
  'Oxfotd',
  '26',
  true
);

console.log('The studentBook object:', studentBook);
console.log('Name:', studentBook.name);
