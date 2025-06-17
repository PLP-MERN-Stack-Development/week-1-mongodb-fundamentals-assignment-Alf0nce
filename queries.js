// Task 1: Create a MongoDB Database and Collection
// use plp_bookstore;

// Task 2: Basic CRUD Operations
// Find all books in a specific genre
db.books.find({ genre: "Fantasy" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author
db.books.find({ author: "J.R.R. Tolkien" });

// Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
{ $set: { price: 14.99 } }
);

// Delete a book by title
db.books.deleteOne({ title: "1984" });


// Task 3: Advanced Queries
// Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection to return only title, author, and price
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1 }
);

// Sorting books by price (ascending and descending)
db.books.find().sort({ price: 1 });  // Ascending
db.books.find().sort({ price: -1 }); // Descending

// Pagination (5 books per page)
// Page 1
db.books.find().limit(5).skip(0);

// Page 2
db.books.find().limit(5).skip(5);


// Task 4: Aggregation Pipeline
// Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: { averagePrice: 1 } // Sort by average price ascending
  }
]);

// Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);


// Task 5: Indexing
// Create an index on the title field
db.books.createIndex({ title: 1 }); 

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Demonstrate performance improvement with explain()
// Without index
db.books.find({ title: "The Hobbit" }).explain("executionStats");
 
// With index
db.books.createIndex({ title: 1 });
// Check the performance of the query with the index
db.books.find({ title: "The Hobbit" }).explain("executionStats");

