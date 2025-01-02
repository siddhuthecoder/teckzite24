import React, { useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";


const CertificatesWorkshop = () => {
  const [teckziteId, setTeckziteId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    setUserData('');
    setError('');
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/qr/getUser/${teckziteId}`);
      setUserData(response.data.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <> <Header />
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <label style={{ marginRight: '10px' }}>
          Teckzite ID:
          <input
            type="text"
            value={teckziteId}
            onChange={(e) => setTeckziteId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div>
          <h2>User Data:</h2>
          <p>ID: {userData._id}</p>
          <p>Teckzite ID: {userData.tzkid}</p>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          <p>College: {userData.college}</p>
          <p>Phone Number: {userData.phno}</p>
          {/* Add other fields as needed */}
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
    </>
  );
};

export default CertificatesWorkshop;
