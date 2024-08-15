<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hungary Hippo - Food Delivery Website</title>
</head>
<body>
    <h1><strong>Hungary Hippo - Food Delivery Website</strong></h1>

    <p>Welcome to <strong>Hungary Hippo</strong>, a food delivery website built using the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). This web application allows users to sign up, sign in, browse food items, add items to their cart, and place orders. The order details are stored in the user’s order history for future reference.</p>

    <h2><strong>Features</strong></h2>
    <ul>
        <li><strong>User Authentication:</strong>
            <ul>
                <li>Sign up for new users.</li>
                <li>Sign in for existing users.</li>
                <li>JWT-based user authentication.</li>
            </ul>
        </li>
        <li><strong>Food Items Listing:</strong>
            <ul>
                <li>Browse a variety of food items by categories.</li>
                <li>Search for food items using the search bar.</li>
            </ul>
        </li>
        <li><strong>Add to Cart:</strong>
            <ul>
                <li>Add food items to the cart.</li>
                <li>Adjust the quantity of items in the cart.</li>
                <li>Remove items from the cart.</li>
            </ul>
        </li>
        <li><strong>Checkout:</strong>
            <ul>
                <li>Proceed to checkout and place orders.</li>
                <li>Order details (food items, quantities, price) are stored in the user's order history.</li>
            </ul>
        </li>
        <li><strong>Order History:</strong>
            <ul>
                <li>View past orders with details such as order date, items ordered, and total price.</li>
            </ul>
        </li>
    </ul>

    <h2><strong>Technologies Used</strong></h2>
    <ul>
        <li><strong>Frontend:</strong>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>TailwindCSS (for styling)</li>
                <li>Axios (for API requests)</li>
            </ul>
        </li>
        <li><strong>Backend:</strong>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB (Database)</li>
            </ul>
        </li>
        <li><strong>Authentication:</strong>
            <ul>
                <li>JWT (JSON Web Tokens)</li>
            </ul>
        </li>
    </ul>

    <h2><strong>Installation and Setup</strong></h2>
    <p>To run this project locally, follow these steps:</p>

    <h3><strong>Prerequisites</strong></h3>
    <p>Ensure you have the following installed:</p>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a></li>
        <li><a href="https://www.mongodb.com/">MongoDB</a></li>
        <li><a href="https://www.npmjs.com/">NPM</a> or <a href="https://yarnpkg.com/">Yarn</a></li>
    </ul>

    <h3><strong>Backend Setup</strong></h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/hungary-hippo.git
cd hungary-hippo/backend</code></pre>
        </li>
        <li>Install backend dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Set up the environment variables: Create a <code>.env</code> file in the backend folder with the following variables:
            <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret</code></pre>
        </li>
        <li>Run the backend server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>

    <h3><strong>Frontend Setup</strong></h3>
    <ol>
        <li>Navigate to the frontend folder:
            <pre><code>cd ../frontend</code></pre>
        </li>
        <li>Install frontend dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>

    <h3><strong>Running the Application</strong></h3>
    <p>The frontend will be running on <code>http://localhost:3000</code>.</p>
    <p>The backend API will be available on <code>http://localhost:5000</code>.</p>

    <h2><strong>Usage</strong></h2>
    <ol>
        <li><strong>Sign Up / Sign In:</strong> Create a new account or log in with an existing account.</li>
        <li><strong>Browse Products:</strong> View available food items and add them to your cart.</li>
        <li><strong>Manage Cart:</strong> Adjust quantities or remove items from the cart.</li>
        <li><strong>Place an Order:</strong> Proceed to checkout and complete the order.</li>
        <li><strong>View Order History:</strong> Access your past orders in the "My Orders" section.</li>
    </ol>

    <h2><strong>Folder Structure</strong></h2>
    <pre><code>hungary-hippo/
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
</code></pre>

    <h2><strong>Future Improvements</strong></h2>
    <ul>
        <li>Adding payment integration for more realistic order processing.</li>
        <li>Improving responsiveness across more screen sizes.</li>
        <li>Implementing admin features for managing products and orders.</li>
        <li>Enhancing UI/UX for a better user experience.</li>
    </ul>

    <h2><strong>License</strong></h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
