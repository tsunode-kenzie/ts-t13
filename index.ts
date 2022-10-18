interface IUser {
    name: string;
    email: string;
    age?: number;
    role: 'admin' | 'user' | 'manager';
}

const users: IUser[] = [];

users.push({
    name: 'teste',
    email: 'test@gmail.com',
    role: 'admin'
});

// if(||)
// users[0].name
