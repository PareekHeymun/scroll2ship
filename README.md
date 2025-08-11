# Project Title
**Scroll 2 Ship** \
An Ecommerce website to make shopping experience better

# Screenshots
<img width="1919" height="989" alt="Screenshot 2025-08-11 195043" src="https://github.com/user-attachments/assets/b4820cca-a336-4853-9dd1-774c958c5252" />
<img width="1838" height="670" alt="Screenshot 2025-08-11 210257" src="https://github.com/user-attachments/assets/1d0b4ea7-3ccb-4edc-8a36-0520f322a732" />
<img width="1895" height="959" alt="Screenshot 2025-08-11 210316" src="https://github.com/user-attachments/assets/988411ec-9ed9-4a81-8425-5bce180b46cd" />
<img width="1894" height="965" alt="Screenshot 2025-08-11 210331" src="https://github.com/user-attachments/assets/dc658044-8632-4f8b-8e22-c87783a77630" />
<img width="1896" height="941" alt="Screenshot 2025-08-11 210415" src="https://github.com/user-attachments/assets/697e9c64-4b68-4676-ab49-0eefb6bda158" />
<img width="1896" height="966" alt="Screenshot 2025-08-11 210457" src="https://github.com/user-attachments/assets/fafefdf7-1366-4cb8-9b32-79964fabe144" />
<img width="1893" height="966" alt="Screenshot 2025-08-11 210516" src="https://github.com/user-attachments/assets/90a26900-bb2e-4947-94a4-97f6b2058b21" />
<img width="1896" height="955" alt="Screenshot 2025-08-11 210527" src="https://github.com/user-attachments/assets/c9ead2b1-e9da-417a-b824-1de6b7d6e170" />
<img width="1892" height="963" alt="Screenshot 2025-08-11 210549" src="https://github.com/user-attachments/assets/78692a67-0ad0-41d1-8dcf-b796676a3e8c" />
<img width="1892" height="939" alt="Screenshot 2025-08-11 210607" src="https://github.com/user-attachments/assets/5a0d7994-ab72-4ca4-934a-537b33d00b4e" />
<img width="1893" height="936" alt="Screenshot 2025-08-11 210618" src="https://github.com/user-attachments/assets/2918b6e3-d2c7-49f7-b45b-46ac2c893803" />
<img width="1893" height="969" alt="Screenshot 2025-08-11 210629" src="https://github.com/user-attachments/assets/20b18b50-034b-47a2-9615-69dd537d88e3" />

# Features implemented
## Frontend features
### Landing Page

**Greets the user:**
If logged in → "Hello, [Name]" \
If not logged in → "Hello Bro"

**Displays product data fetched from the database.**

**Navigation:**
Logo/Title → Landing Page
Heart Icon → Wishlist Page
Cart Icon → Cart Page
Profile Icon → Sign-in Page

### Authentication
**Sign In:**
User enters credentials → Sent to backend → Verified → Logged in.

**Sign Up:**
New users can register.

After successful registration → Redirected to Sign-in Page.

**Validation:**
Performed at both Sign-in and Sign-up stages.

### seller registration
Sellers can register via a dedicated registration page by providing required details.

### Footer navigation
Clicking footer links navigates to corresponding pages.



## Backend features
### User Authentication & Authorization

**Sign Up**

Accepts email and password from frontend.
Password is hashed using a secure hashing algorithm (bcrypt) before storing in MongoDB.

**Sign In**
Validates user credentials.
Generates a JWT (JSON Web Token) on successful login.
Stores the JWT in an HTTP-only cookie to maintain session security.

**Protected Routes**
Middleware verifies JWT token from cookies for restricted actions (e.g., adding products).

## User Data Management
Stores basic user profile info (currently only email & hashed password).
Fetches user details for authenticated sessions.
Can be extended in future to store more user attributes (name, address, preferences).

## Product Management
Add Product 
Seller can upload product details (title, description, price, category, etc.) to MongoDB.
Get All Products (for displaying to users).

## Security
Passwords are stored hashed — no plain text storage.
JWTs stored in HTTP-only cookies to prevent XSS attacks.
Middleware to prevent unauthorized data access.

## DataBase
Stores:
Users collection → email, hashed password, role (buyer/seller if needed in future).
Products collection → product details, seller reference.

# Technologies/Libraries/Packages Used
 ## Frontend
   React.js
   Css
   React Router DOM
   Axios
   React Icons

## Backend
  Node.js
  MongoDB
  Express.js
  Mongoose
  bcrypt 
  jsonwebtoken (JWT) 
  cookie-parser
  dotenv

# Local Setup

- install nodejs from nvm
- install git or use visual studio's inbuilt-git
- clone the repo
- cd into the repo
- npm install in root of repo (root > npm install)
- cd backend > npm install
- cd frontend > npm install
- cd .. (come back to root)
- now create .env and replicate .env.example in appropriate folders like backend
- backend works on port 4000 while frontend runs on port 3000
- npm start in the root of repo it will run frontend and backend stuff concurrently

- # Team members
- ### Nama Mithul (2024IMT-052)
- ### Heymun Pareek (2024IMT-029)
- ### Shubham Prasad (2024IMT-503)
