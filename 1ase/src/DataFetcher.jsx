import React, { useState, useEffect } from 'react';

function DataFetcher() {
  // State to store the fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error)); // Handle errors
  }, []); // Empty dependency array means this effect runs only once

  // Show loading message while data is being fetched
  if (!data) {
    return <div>Loading...</div>;
  }

  // Display the fetched data
  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
