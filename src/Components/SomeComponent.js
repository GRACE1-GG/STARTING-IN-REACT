import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const SomeComponent = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'John Doe' })}>Login</button>
      )}
    </div>
  );
};

export default SomeComponent;
