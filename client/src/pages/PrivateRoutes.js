import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    console.log(storedUser)
    return (
        storedUser && storedUser.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes