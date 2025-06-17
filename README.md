## How to Run the Scripts

### 1. Insert Sample Books

To populate your MongoDB database with sample book data, run the following command in your terminal:

```sh
node insert_books.js
```

This will connect to your local MongoDB instance and insert the sample books into the `plp_bookstore` database, `books` collection.

### 2. Run MongoDB Queries

Open the MongoDB shell (mongosh) and switch to the `plp_bookstore` database:

```sh
mongosh
use plp_bookstore
```

Then, you can copy and paste the queries from [queries.js](queries.js) into the shell to execute them.

---

**Requirements:**
- Node.js (v18 or higher)
- MongoDB running locally or accessible via Atlas
- MongoDB Shell (`mongosh`) or MongoDB Compass

For more details, see the assignment instructions in [Week1-Assignment.md](Week1-Assignment.md).

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19790809&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 
