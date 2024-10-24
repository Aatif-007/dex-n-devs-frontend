import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const AdminDashboard = () => {
  const [getData, setGetData] = useState([]);

  const fetchAdminDB = async () => {
    try {
      const resp = await axios.get('https://dex-n-devs.onrender.com/dashboard'); // Replace with your actual API endpoint
      setGetData(resp.data.data); // Set the fetched data
      console.log(resp)
    } catch (err) {
      console.error('Failed to fetch data', err);
    }
  };

  useEffect(() => {
    fetchAdminDB();
  }, []);

  return (
    <div className="text-black" >
      <Navbar />
      <div
        className="my-5"
       
      >
        <h1 className="text-center text-white font-semibold text-2xl md:text-3xl">Dex N Devs</h1>
      

      {/* Direct map function call */}
      <div className="container mx-auto p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard Data:</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* Directly map the data to table rows */}
            {getData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.message}</td>
                <td className="py-2 px-4 border-b">{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
