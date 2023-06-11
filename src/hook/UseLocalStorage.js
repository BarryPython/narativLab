import { useState, useEffect } from 'react';

export default function UseLocalStorage (key, defaultValue){
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key);
    console.log(storedState);
    if(storedState === "undefined"){
      return defaultValue;
    } else {
      return storedState !== null ? JSON.parse(storedState) : defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};