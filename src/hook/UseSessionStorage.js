import { useState, useEffect } from 'react';

export default function UseSessionStorage (key, defaultValue){
  const [state, setState] = useState(() => {
    const storedState = sessionStorage.getItem(key);
    return storedState !== null ? JSON.parse(storedState) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};