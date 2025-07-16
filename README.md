# scroll2ship - E-commerce Platform

A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (signup/signin)
- Product browsing and search
- Shopping cart functionality
- Wishlist management
- Order management
- Product ratings and reviews
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scroll2ship
```

2. Install dependencies for both frontend and backend:
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGODB_URI=mongodb://localhost:27017/scroll2ship
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   PORT=4000
   ```

4. Start MongoDB:
   - If using local MongoDB, make sure MongoDB is running
   - If using MongoDB Atlas, update the MONGODB_URI in the .env file

## Running the Application

From the root directory, run:
```bash
npm start
```

This will start both the backend (port 4000) and frontend (port 3000) concurrently.

Alternatively, you can run them separately:

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `POST /api/products/uploadProduct` - Upload new product

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/:productId` - Remove item from cart
- `PUT /api/cart/:productId` - Update item quantity

### Wishlist
- `GET /api/wishlist` - Get user wishlist
- `POST /api/wishlist/add` - Add item to wishlist
- `DELETE /api/wishlist/:productId` - Remove item from wishlist

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get specific order

### User Ratings
- `POST /api/userRating/add` - Add product rating
- `GET /api/userRating/product/:productId` - Get product ratings
- `GET /api/userRating/user` - Get user ratings

## Project Structure

```
scroll2ship/
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── pages/
│   └── package.json
└── package.json
```

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- express-validator for input validation
- cors for cross-origin requests

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- Context API for state management
- CSS for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
