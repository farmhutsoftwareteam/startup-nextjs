"use client"
import { useState, useEffect } from 'react';

export function useLocation() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch('https://geolocation-db.com/json/');
        const data = await response.json();
        setLocation(`${data.city}, ${data.country_name}`);
      } catch (error) {
        console.error(error);
      }
    };

    getLocation();
  }, []);

  return location;
}
