# **Hungary Hippo - Food Delivery Website**

Welcome to Hungary Hippo, a food delivery website built using the MERN stack (MongoDB, Express, React, Node.js). This web application allows users to sign up, sign in, browse food items, add items to their cart, and place orders. The order details are stored in the user’s order history for future referebnce.

**Features**
<h1>User Authentication:<h1/>

Sign up for new users.
Sign in for existing users.
JWT-based user authentication.
Food Items Listing:

Browse a variety of food items by categories.
Search for food items using the search bar.
Add to Cart:

Add food items to the cart.
Adjust the quantity of items in the cart.
Remove items from the cart.
Checkout:

Proceed to checkout and place orders.
Order details (food items, quantities, price) are stored in the user's order history.
Order History:

View past orders with details such as order date, items ordered, and total price.
Technologies Used
Frontend:
React
React Router
TailwindCSS (for styling)
Axios (for API requests)
Backend:
Node.js
Express.js
MongoDB (Database)
Authentication:
JWT (JSON Web Tokens)
Installation and Setup
To run this project locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
NPM or Yarn
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/hungary-hippo.git
cd hungary-hippo/backend
Install backend dependencies:

bash
Copy code
npm install
Set up the environment variables:
Create a .env file in the backend folder with the following variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Running the Application
The frontend will be running on http://localhost:3000.
The backend API will be available on http://localhost:5000.
Usage
Sign Up / Sign In: Create a new account or log in with an existing account.
Browse Products: View available food items and add them to your cart.
Manage Cart: Adjust quantities or remove items from the cart.
Place an Order: Proceed to checkout and complete the order.
View Order History: Access your past orders in the "My Orders" section.
Folder Structure
css
Copy code
hungary-hippo/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── ...
│   └── ...
└── ...
Future Improvements
Adding payment integration for more realistic order processing.
Improving responsiveness across more screen sizes.
Implementing admin features for managing products and orders.
Enhancing UI/UX for a better user experience.
