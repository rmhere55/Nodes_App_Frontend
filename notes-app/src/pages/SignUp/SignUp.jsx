import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const SignUp = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login handling logic here
    console.log("Form submitted");
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>
            {/* Add your input fields and submit button here */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
