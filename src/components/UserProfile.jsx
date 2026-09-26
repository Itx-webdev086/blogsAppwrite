import {useSelector} from 'react-redux'

function UserProfile() {
    const userdata = useSelector((state) => state.auth.userData) 
    return (
        <div>
            <h1>User Profile</h1>
            <p>This is the user profile page.</p>
            <h2>Username</h2>
            <p>{userdata.name}</p>
            <h2>Email</h2>
            <p>{userdata.email}</p>

        </div>
    )
}

export default UserProfile
