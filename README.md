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
    "gsuite": "john.doe@bracu.ac.bd",
    "phoneNumber": "0123456789",
    "studentId": "123456",
    "department": "CSE",
    "gender": "Male",
    "password": "Password here"
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
    "firstName": "Jane",
    "lastName": "Doe",
    "phoneNumber": "0198765432"
  }
  ```

### **Testing the API**
Once the server is running, test the API using **Postman** or visit:
```
http://localhost:5000/api/users
```

Happy coding! 🚀

