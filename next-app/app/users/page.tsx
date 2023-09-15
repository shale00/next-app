import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  // the second argument in the fetch function is an options object
  // the cache: 'no-store' option will disable caching, usefull if you have data that changes frequently
  // the next: { revalidate: 10 } option will get fresh data from the back-end every ten seconds

  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Emaill</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
