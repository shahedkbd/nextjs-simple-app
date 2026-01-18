import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleButton = () => {
    return (
        <button className="btn btn-outline w-full flex items-center gap-2">
            <FaGoogle className="text-red-500 text-lg" />
            Continue with Google
          </button>
    );
};

export default GoogleButton;