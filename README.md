# Student Management GraphQL Server

This project is a GraphQL server for managing student records using MongoDB. The server allows you to perform CRUD operations on student data.

## Live API

You can access the live GraphQL API at: [https://student-management-server-side.onrender.com](https://student-management-server-side.onrender.com)

## Features

- **Add Student**: Add a new student to the database.
- **Get Students**: Retrieve a list of all students.
- **Get Student**: Retrieve a single student by ID.
- **Update Student**: Update a student's details.
- **Delete Student**: Delete a student by ID.

## Technologies Used

- Node.js
- Apollo Server
- GraphQL
- MongoDB
- dotenv

## Usage

- Adding a Student

```
mutation {
  addStudent(student: {
    name: "Alice",
    age: 30,
    gender: "Female",
    state: "California",
    city: "Los Angeles",
    agreed: true
  }) {
    id
    name
    age
    gender
    state
    city
    agreed
  }
}
```

- Getting All Students

```
query {
  students {
    id
    name
    age
    gender
    state
    city
    agreed
  }
}
```

- Getting a Single Student

```
query {
  student(id: "1") {
    id
    name
    age
    gender
    state
    city
    agreed
  }
}
```

- Updating a Student

```
mutation {
  updateStudent(id: "1", edits: {
    name: "Alice Updated",
    age: 31,
    city: "San Francisco"
  }) {
    id
    name
    age
    gender
    state
    city
    agreed
  }
}
```

- Deleting a Student

```
mutation {
  deleteStudent(id: "1") {
    id
    name
    age
    gender
    state
    city
    agreed
  }
}
```
