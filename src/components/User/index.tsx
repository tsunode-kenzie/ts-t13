import { IUser } from "../../App";

interface IUserProps {
    user: IUser,
}

const User = ({ user }: IUserProps) => (
    <li>{user.name} - {user.email}</li>
)

export default User;