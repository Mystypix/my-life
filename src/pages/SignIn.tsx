import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../auth/hooks'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const SignInPage = () => {
	const { register, handleSubmit } = useForm<FieldValues>()
	const navigate = useNavigate()
	const location = useLocation()
	const auth = useAuth()
	const from = location.state?.from?.pathname || '/'

	const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
		auth.signin(email, password, () => {
			navigate(from, { replace: true })
		})
	}

	return (
		<main className='flex justify-center items-center flex-col'>
			<h1>Welcome back bitch</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					isRequired
					label='Email'
					name='email'
					register={register}
					type='email'
				/>
				<Input
					isRequired
					label='Password'
					name='password'
					register={register}
					type='password'
				/>
				<Button type='submit'>Login</Button>
			</form>
			<div>
				Dont have an account yet?{' '}
				<Link to='/sign-up'>Register here</Link>
			</div>
		</main>
	)
}
