A backend REST API built using **Node.js, Express.js, MongoDB**, and **JWT Authentication** for managing employee details, attendance, and payroll.
--- 
## 🚀 Features 
- User Registration & Login (JWT Authentication)- 
-Protected Routes using Auth Middleware - 
-Employee Management API - 
-Attendance Tracking - 
-Payroll Calculation - 
-MongoDB Atlas Integration -
-Proper Folder Structure & Error Handling

--- 
## 🛠 Tech Stack 
- Node.js
-  Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) -
- bcryptjs -
- dotenv
- CORS

--- 
## 🔐 Authentication 
This project uses **JWT Authentication**. 

### Register 
🔐 Authentication This project uses **JWT Authentication**. 

### Register 

### Login 
➡️ Login returns a JWT token 
➡️ Token must be passed in headers for protected routes 

--- 
## 👨‍💼 Employee APIs (Protected)
### Create Employee **Body (JSON):**
json
{ 
  "employeeId": "EMP001",
  "name": "Ravi",
  "designation": "Developer",
  "salaryPerDay": 1000
}
📅 Attendance APIs (Protected)
POST /api/attendance
GET /api/attendance

💰 Payroll APIs (Protected)
GET /api/payroll

⚙️ Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Run the Project
npm install
npm start
Server runs on:
http://localhost:5000
