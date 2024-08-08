import { headers } from 'next/headers';

export default async function ApiFromServer() {
  const resp = await fetch('http://localhost:3000/api/whoAmI', {
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div>
      <div>API Route from server</div>
      <div>Name: {resp.name}</div>
    </div>
  );
}
