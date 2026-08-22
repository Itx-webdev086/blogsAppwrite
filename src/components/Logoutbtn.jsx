import { useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'

function Logoutbtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
        onClick={logoutHandler}
        className='rounded bg-teal-500 text-white px-3 py-2 inline-block cursor-pointer active:bg-teal-400'
        >Logout</button>
    )
}

export default Logoutbtn