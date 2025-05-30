SIT323 - Practical 4P: Calculator Microservice

This project is a simple calculator microservice developed using Node.js and Express. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

Features
- Addition
- Subtraction
- Multiplication
- Division (with division-by-zero handling)

Prerequisites
- Node.js installed on your machine

Installation
1. Clone the repository:
   git clone https://github.com/Oyeyuvii/sit323-2025-prac4p.git

2. Navigate to the project directory:
   cd sit323-2025-prac4p

3. Install the dependencies:
   npm install

Usage
Start the server with the following command:
   node program.js

The server will run on http://localhost:3000.

API Endpoints
- Addition: GET /add?num1=5&num2=3
- Subtraction: GET /subtract?num1=5&num2=3
- Multiplication: GET /multiply?num1=5&num2=3
- Division: GET /divide?num1=5&num2=3

Example
Request:
   GET /add?num1=10&num2=5

Response:
   {
     "result": 15
   }

Error Handling
- If invalid or missing numbers are provided, the API responds with an error message.
- It also handles division by zero and unknown routes with appropriate responses.
