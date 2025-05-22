import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios.get('http://localhost:5000/api/sample-data')
    axios.get('https://portfolio-backtend.onrender.com/api/sample-data')

      .then((res) => setData(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>This page can be used to manage your content.</p>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading data from server...'}</pre>
    </div>
  );
}

export default AdminPage;
