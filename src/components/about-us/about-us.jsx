import React, { useContext } from 'react';
import Header from '../header/header';
import { UserContext } from '../context/context';

function Aboutus() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Header />

      <div style={{ textAlign:'center', background:'khaki', height:'1000px', padding:'200px' }}>
        <h2>لوازم فروشگاه خانگی</h2>

        {user && (
          <>
            <li>{user.name}</li>
            <li>{user.family}</li>
            <li>{user.role}</li>
          </>
        )}
      </div>
    </div>
  );
}

export default Aboutus;
