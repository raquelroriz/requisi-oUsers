import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { User } from './types/User';

function App() {
  const user1: User = {
    id: 1,
    name: 'Maria Raquel',
  };

  const user2: User = {
    id: 2,
    name: 'Vinicius',
  };

  const [users, setUsers] = useState<User[]>([]);

  const templateUser = (user: User) => {
    return (
      <div key={user.id}>
        <p>Nome: {user.name}</p>
        <p>Endereço: {user.address?.city}</p>
        ----------------------------------------------------------------
      </div>
    );
  };

  const butao = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  };

  return (
    <>
      <div className="flex justify-center text-5xl font-mono font-bold">
        <h1 className="my-4">Listagem de Usuários</h1>
      </div>
      <button onClick={butao}>Clique</button>
      <div className="flex justify-center">
        {users.map((user: User) => templateUser(user))}
      </div>
    </>
  );
}

export default App;
