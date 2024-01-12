import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks'
import { Button } from './button'

export const Header = () => {
	const navigate = useNavigate()
	const auth = useAuth()

	const handleSignout = () => {
		auth.signout(() => navigate('/'))
	}

	return (
		<nav className='navbar bg-primary text-primary-content'>
			<NavLink to='/my-day'>Muj den</NavLink>
			<NavLink to='/diary'>Diar</NavLink>
			<NavLink to='/food'>Jidlo</NavLink>
			<NavLink to='/people'>Adresar</NavLink>
			<NavLink to='/todo'>ToDo</NavLink>
			<Button onClick={handleSignout}>Sign out</Button>
		</nav>
	)
}
