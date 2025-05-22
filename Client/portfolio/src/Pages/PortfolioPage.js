// PortfolioPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios.get('https://portfolio-backtend.onrender.com/api/projects')

    // axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">My Portfolio</h1>
      <div className="row">
        {projects.map(project => (
          <div className="col-md-6 mb-3" key={project.id}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
