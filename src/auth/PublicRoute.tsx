import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './hooks'

export const PublicRoute = () => {
	const auth = useAuth()
	const location = useLocation()

	if (auth.user) {
		return <Navigate to='/food' state={{ from: location }} replace />
	}

	return <Outlet />
}
