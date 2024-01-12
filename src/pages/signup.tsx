import { Button } from '../components/button'
import { Input } from '../components/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../auth/hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import { Checkbox } from '../components/Checkbox'

export const SignUpPage = () => {
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
			<h1>Welcome bitch</h1>
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
				<Checkbox
					name='therms'
					label={'Thersm and conditions'}
					register={register}
					required
				/>
				<Button type='submit'>Register</Button>
			</form>
		</main>
	)
}
