import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
      <div>
        <div>
          {/* Navigation buttons */}
          <button>
            <Link to="/userregister">Go to Page 1</Link>
          </button>
          <button>
            <Link to="/ngoregister">Go to Page 2</Link>
          </button>
        </div>
      </div>
  );
};

export default Register;




