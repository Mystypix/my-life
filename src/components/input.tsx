import { HTMLInputTypeAttribute } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputProps = {
	isDisabled?: boolean
	isRequired?: boolean
	label: string
	name: string
	register: UseFormRegister<FieldValues>
	type?: HTMLInputTypeAttribute
}

export const Input = ({
	isDisabled,
	isRequired,
	label,
	name,
	register,
	type = 'text',
}: InputProps) => (
	<label className='form-control w-full max-w-md'>
		<div className='label'>
			<span className='label-text'>{label}</span>
		</div>
		<input
			{...register(name, { required: isRequired })}
			className='input input-bordered input-md input-primary w-full max-w-xs'
			disabled={isDisabled}
			type={type}
		/>
	</label>
)
