# SmartShop eCommerce Full-Stack Web Application

A fully functional full-stack eCommerce web application based on the Ecommerce Web Design Figma template. The project includes responsive frontend pages, backend API integration, MongoDB database, authentication, cart functionality, and a protected admin panel for product management.

## Project Features

### Frontend

* Home page based on Figma ecommerce design
* Product listing page with grid and list views
* Product details page
* Shopping cart page
* Login and signup pages
* Admin dashboard page
* Help and menu pages
* Responsive desktop and mobile layout
* Search bar for product filtering
* Category-based filtering
* Cart quantity increase/decrease/remove functionality

### Backend

* Node.js and Express.js backend
* MongoDB Atlas database integration
* REST API endpoints for products
* Product CRUD operations
* JWT authentication
* Protected admin routes
* Admin-only product add, edit, and delete functionality

## Technologies Used

### Frontend

* React.js
* React Router DOM
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

## Pages Implemented

* Home Page
* Product Listing Page
* Product Details Page
* Cart Page
* Login Page
* Signup Page
* Admin Dashboard
* Help Page
* Menu Page

## Product Data Fields

Each product contains:

* Name
* Price
* Old price
* Image
* Description
* Category
* Brand
* Rating
* Orders
* Stock

## Authentication

The project uses JWT authentication. Users can sign up and log in. Admin users can access the protected admin dashboard.

### Admin Login

Email:

```text
admin@example.com
```

Password:

```text
admin12345
```

## Cart Functionality

The shopping cart supports:

* Add to cart
* Remove from cart
* Increase quantity
* Decrease quantity
* Cart total calculation
* LocalStorage cart persistence

## Admin Panel

The admin dashboard supports:

* Add new product
* Edit existing product
* Delete product
* View product list
* Protected route access

## Folder Structure

```text
ecommerce-fullstack-design
├── client
│   ├── public
│   │   └── images
│   └── src
│       ├── components
│       ├── context
│       ├── pages
│       ├── services
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── seed
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## Local Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd ecommerce-fullstack-design
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Create backend environment file

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Create frontend environment file

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Seed the database

```bash
cd server
npm run seed
```

### 7. Run backend server

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### 8. Run frontend server

Open another terminal:

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

### Product APIs

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Auth APIs

```text
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/profile
```

## Deployment

The project can be deployed using:

* Vercel for frontend
* Render for backend
* MongoDB Atlas for database

## Final Deliverables

* GitHub repository
* Live deployed frontend URL
* Live backend API URL
* Demo video showing project functionality

## Author

Developed as a Full-Stack Development Internship Task.
