import { createBrowserRouter } from 'react-router-dom'
import { SignUpPage } from './pages/Signup'
import { RequireAuth } from './auth/RequireAuth'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <SignUpPage />,
	},
	{
		path: '/diary',
		element: (
			<RequireAuth>
				<div>Diary</div>
			</RequireAuth>
		),
	},
	{
		path: '/food',
		element: (
			<RequireAuth>
				<div>Food</div>
			</RequireAuth>
		),
	},
	{
		path: '/people',
		element: (
			<RequireAuth>
				<div>People</div>
			</RequireAuth>
		),
	},
	{
		path: '/todo',
		element: (
			<RequireAuth>
				<div>Todo</div>
			</RequireAuth>
		),
	},
])
