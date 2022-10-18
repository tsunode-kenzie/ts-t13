import { useState } from 'react';
import './App.css';
import User from './components/User';

interface ITechs {
  id: number;
  title: string;
  status: string;
}

export interface IUser {
  name: string;
  email: string;
  age?: number;
  role: 'admin' | 'user' | 'manager';
  techs?: ITechs[]
}

const App = () => {
  const [loading, setLoading ] = useState(2);

  const [users, setUsers] = useState<IUser[]>([
    {
      name: 'teste',
      email: 'test@gmail.com',
      role: 'admin'
    },
    {
      name: 'teste3',
      email: 'test3@gmail.com',
      role: 'admin',
      age: 12
    },
  ]);


  return (
    <div className="App">
      <h1>Teste</h1>

      <ul>
        {
          users.map((user) => (
            <User key={user.email} user={user} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
