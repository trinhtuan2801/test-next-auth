'use client';

import { useEffect, useState } from 'react';

export default function ApiFromClient() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/whoAmI')
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div>
      <div>API Route from client</div>
      <div>Name: {name}</div>
    </div>
  );
}
