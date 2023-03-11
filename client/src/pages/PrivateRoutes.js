import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    return (
        storedUser && storedUser.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes