import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from './hooks'

export const PrivateRoute = () => {
	const auth = useAuth()
	const location = useLocation()

	if (!auth.user) {
		return <Navigate to='/sign-in' state={{ from: location }} replace />
	}

	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
