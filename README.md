# Backend of BRACU Core App

**BRACU Core** is a mobile application designed to enhance student experience at BRAC University by providing seamless access to essential academic and administrative features. It's our CSE 471 dummy project.

## 🚀 **How to Get Started**

### **Clone the Repository**
```bash
git clone https://github.com/Onnesok/bracu_core_backend.git
cd bracu_core_backend
```

### **Install Dependencies**
Ensure you have **Node.js** installed from - [Node.js](https://nodejs.org/en)

Install required Node.js packages:
```bash
npm install express mongoose dotenv cors body-parser bcryptjs jsonwebtoken
```

Optional packages for better development:
```bash
npm install nodemon --save-dev
```

### **Packages Used**
- `express`: For creating routes and APIs.
- `mongoose`: For MongoDB database connection.
- `dotenv`: To manage environment variables.
- `cors`: To handle cross-origin requests.
- `body-parser`: To parse request bodies.
- `bcryptjs`: For password hashing.
- `jsonwebtoken`: For authentication.

### **Setup MongoDB Atlas**
Sign up for **MongoDB Atlas** at [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas) and create a cluster.

### **Configure Environment Variables**
Create a `.env` file to store your environment variables:
```ini
PORT=5000
MONGO_URI=<Your MongoDB Atlas Connection URI>
JWT_SECRET=<Your Secret Key>
```

### **Start the Server**
Use `nodemon` for auto-reloading or `node` to start the server:
```bash
npx nodemon index.js
```
Or simply use:
```bash
npm start
```

### **API Routes**
#### **User Authentication & Profile Management**
- **Register User:** `POST /api/users/register`  
  Request Body:
  ```json
  {
  "firstName": "John",
  "lastName": "Doe",
  "gsuite": "test.account@g.bracu.ac.bd",
  "phoneNumber": "0123456789",
  "studentId": "12345678",
  "department": "CSE",
  "gender": "Male",
  "password": "password here",
  "admission_year": "spring22",
  "profilePicture": "https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg",
  "bio": "Passionate about AI and Robotics.",
  "currentAddress": "Mirpur, Dhaka",
  "permanentAddress": "Chattogram",
  "bloodGroup": "A+",
  "emergencyContact": {
    "name": "Mr bhoot",
    "relation": "Brother",
    "phoneNumber": "01987654321"
  },
  "cgpa": 3.85,
  "completedCredits": 90,
  "totalCredits": 136,
  "role": "Student",
  "accountVerified": true,
  "studentIdImages": {
    "front": "https://i.fbcd.co/products/resized/resized-750-500/44-32586d03d0647878c6ef48e35b1c7f313f5551d92b0b3fbb1c920f18f3d2ecef.jpg",
    "back": "https://i.fbcd.co/products/resized/resized-750-500/44-32586d03d0647878c6ef48e35b1c7f313f5551d92b0b3fbb1c920f18f3d2ecef.jpg"
  },
  "clubMemberships": ["ROBU", "IEEE BRACU"],
  "ongoingCourses": [
    {
      "courseCode": "CSE422",
      "courseTitle": "Artificial intelligence",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "03",
      "faculty": "SWK"
    },
    {
      "courseCode": "CSE471",
      "courseTitle": "System Design",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "01",
      "faculty": "AQU"
    },
    {
      "courseCode": "CSE460",
      "courseTitle": "VLSI Design",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "07",
      "faculty": "TBA"
    },
    {
      "courseCode": "CSE341",
      "courseTitle": "MicroProcessor",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "06",
      "faculty": "LHK"
    }
  ],
  "registeredDevices": ["Samsung Galaxy S23"],
  "lastLogin": "2025-03-31T10:15:00Z"
}
  ```
- **Login User:** `POST /api/users/login`  
  Request Body:
  ```json
  {
    "gsuite": "john.doe@bracu.ac.bd",
    "password": "Password here"
  }
  ```
- **Get User Profile:** `GET /api/users/profile` (Requires Authentication)
- **Update User Info:** `PUT /api/users/update` (Requires Authentication)
  Request Body (any field can be updated):
  ```json
  {
  "firstName": "John",
  "lastName": "Doe",
  "gsuite": "test.account@g.bracu.ac.bd",
  "phoneNumber": "0123456789",
  "studentId": "12345678",
  "department": "CSE",
  "gender": "Male",
  "password": "password here",
  "admission_year": "spring22",
  "profilePicture": "https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg",
  "bio": "Passionate about AI and Robotics.",
  "currentAddress": "Mirpur, Dhaka",
  "permanentAddress": "Chattogram",
  "bloodGroup": "A+",
  "emergencyContact": {
    "name": "Mr bhoot",
    "relation": "Brother",
    "phoneNumber": "01987654321"
  },
  "cgpa": 3.85,
  "completedCredits": 90,
  "totalCredits": 136,
  "role": "Student",
  "accountVerified": true,
  "studentIdImages": {
    "front": "https://i.fbcd.co/products/resized/resized-750-500/44-32586d03d0647878c6ef48e35b1c7f313f5551d92b0b3fbb1c920f18f3d2ecef.jpg",
    "back": "https://i.fbcd.co/products/resized/resized-750-500/44-32586d03d0647878c6ef48e35b1c7f313f5551d92b0b3fbb1c920f18f3d2ecef.jpg"
  },
  "clubMemberships": ["ROBU", "IEEE BRACU"],
  "ongoingCourses": [
    {
      "courseCode": "CSE422",
      "courseTitle": "Artificial intelligence",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "03",
      "faculty": "SWK"
    },
    {
      "courseCode": "CSE471",
      "courseTitle": "System Design",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "01",
      "faculty": "AQU"
    },
    {
      "courseCode": "CSE460",
      "courseTitle": "VLSI Design",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "07",
      "faculty": "TBA"
    },
    {
      "courseCode": "CSE341",
      "courseTitle": "MicroProcessor",
      "time": "10:00 AM - 11:30 AM",
      "days": ["Monday", "Wednesday"],
      "room": "10A-12C",
      "section": "06",
      "faculty": "LHK"
    }
  ],
  "registeredDevices": ["Samsung Galaxy S23"],
  "lastLogin": "2025-03-31T10:15:00Z"
}
  ```

### **Testing the API**
Once the server is running, test the API using **Postman** or visit:
```
http://localhost:5000/api/users
```

Happy coding! 🚀

