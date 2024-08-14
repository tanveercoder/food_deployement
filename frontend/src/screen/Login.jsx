import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://food-deployement-1.onrender.com/api/loginuser", { // Update to your login API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials) // Pass the credentials directly
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Invalid email or password");
      } else {
        localStorage.setItem('userEmail', credentials.email);
        localStorage.setItem('authToken', json.authToken); // storing a token
        console.log(localStorage.getItem("authToken"))
        navigate('/'); // Redirect to dashboard or another route on success
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/createuser'); // Redirect to signup page
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-copyspace-1565982.jpg&fm=jpg" 
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}> {/* Use onSubmit to handle form submission */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={credentials.email} // Controlled component
              onChange={onChange} // Handle change
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={credentials.password} // Controlled component
              onChange={onChange} // Handle change
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={handleSignUpRedirect} 
                className="text-indigo-600 hover:text-indigo-700 focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
