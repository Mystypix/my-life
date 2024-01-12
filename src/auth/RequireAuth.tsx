import { Navigate, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from './hooks'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth()
	const location = useLocation()

	if (!auth.user) {
		return <Navigate to='/' state={{ from: location }} replace />
	}

	return <Layout>{children}</Layout>
}
