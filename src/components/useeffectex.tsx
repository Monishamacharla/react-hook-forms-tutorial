import React, { useState, useEffect } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const DataFetcher = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data &&
          data.map(item => (
            <li>{item.id}</li>
          ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
