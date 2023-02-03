import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../actions/userActions";

function UserContainer(props) {


    //alternative for mapping state to props - use selector hook
    const users = useSelector((state) => {
        return state.user.users
    })

    const message = useSelector((state) => state.user.error)

    const loading = useSelector((state) => state.user.loading)


    // allows to use dispatch method directly in the code (used in button onClick event)
    const dispatch = useDispatch();

    return (

        <div>
            <h2>{loading && 'Loading'}</h2>
            <h2>Users</h2>
            {
                users.map((user) => {
                    return <p key={user.id}>Id: {user.id}, Name: {user.name}</p>
                })

            }
            <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
            <footer>Message: {message}</footer>
        </div>
    );
}

export default UserContainer;