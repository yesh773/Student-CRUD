Student-CRUD
Student Management System
A simple full-stack Student Management System built using React, Tailwind CSS, Spring Boot, and MySQL.

This project demonstrates basic CRUD operations:

Create a student
View all students
Update student details
Delete a student
Tech Stack
Frontend
React
Tailwind CSS
Axios
React Router DOM
Vite
Backend
Java
Spring Boot
Spring Data JPA
Lombok
Jakarta Validation
Database
MySQL
Project Structure
student-crud/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/example/studentapp/
│   │               ├── controller/
│   │               ├── entity/
│   │               ├── repository/
│   │               └── service/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
Features
Student Management
The application allows users to:

Add a new student
View registered students
Edit existing student details
Delete students
Validate student input
Navigate between pages using React Router
Each student contains:

ID
Name
Email
Course
REST API
The Spring Boot backend provides the following endpoints:

Method	Endpoint	Description
POST	/api/students	Create a student
GET	/api/students	Get all students
GET	/api/students/{id}	Get a student by ID
PUT	/api/students/{id}	Update a student
DELETE	/api/students/{id}	Delete a student
Database Configuration
Create a MySQL database:

CREATE DATABASE studentdb;
Configure the database in:

backend/src/main/resources/application.properties
Example:

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
Replace your_password with your MySQL password.

Running the Backend
Open the backend project in IntelliJ IDEA.

Make sure MySQL is running.

Then run the Spring Boot application.

The backend will start at:

http://localhost:8080
The API will be available at:

http://localhost:8080/api/students
Running the Frontend
Open the frontend folder in VS Code.

Install dependencies:

npm install
Start the development server:

npm run dev
The React application will usually be available at:

http://localhost:5173
Frontend API Configuration
The React application communicates with the Spring Boot backend using Axios.

Example:

import axios from "axios";

const API_URL = "http://localhost:8080/api/students";

// GET
const response = await axios.get(API_URL);

// CREATE
await axios.post(API_URL, student);

// UPDATE
await axios.put(`${API_URL}/${id}`, student);

// DELETE
await axios.delete(`${API_URL}/${id}`);
Validation
Student information is validated using Jakarta Validation.

Example:

@NotBlank(message = "Name is required")
private String name;

@NotBlank(message = "Email is required")
@Email(message = "Invalid email")
private String email;

@NotBlank(message = "Course is required")
private String course;
Lombok
Lombok is used in the Spring Boot backend to reduce boilerplate code such as:

Getters
Setters
Constructors
Builders
Required constructors
Example:

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {
    // fields
}
Application Flow
React + Tailwind CSS
        │
        │ Axios
        ▼
Spring Boot REST API
        │
        ▼
Controller
        │
        ▼
Service
        │
        ▼
Repository
        │
        ▼
MySQL
Requirements
Make sure you have installed:

Java 17+
Maven
Node.js
npm
MySQL
IntelliJ IDEA or another Java IDE
VS Code or another frontend editor
Git Setup
Clone the repository:

git clone https://github.com/your-username/student-crud.git
Enter the project:

cd student-crud
Backend
Open the backend folder in IntelliJ IDEA and run the Spring Boot application.

Frontend
cd frontend
npm install
npm run dev
Future Improvements
Possible improvements for this project include:

User authentication
Search and filtering
Pagination
Better error messages
Student profile page
Deployment
Spring Security and JWT authentication
License
This project is created for learning and educational purposes.
