import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(''); // Change  to email
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic goes here
    console.log('Logging in with email:', email, 'and password:', password); // Change  to email
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md p-9 w-full space-y-8 bg-white">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to OGS</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email</label> {/* Change  to email */}
              <input
                id="email" // Change to email
                name="email" // Change  to email
                type="email" // Change type to email
                autoComplete="email" // Change autoComplete to email
                required
                className="appearance-none mb-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Email" // Change placeholder to Email
                value={email} // Change  to email
                onChange={(e) => setEmail(e.target.value)} // Change  to email
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none mt-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-black "
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </form>
        <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
      </div>
    </div>
  );
}

export default Login;
