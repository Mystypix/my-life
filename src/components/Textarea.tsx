import { FieldValues, UseFormRegister } from 'react-hook-form'

type TextareaProps = {
	isDisabled?: boolean
	isRequired?: boolean
	label: string
	name: string
	register: UseFormRegister<FieldValues>
}

export const Textarea = ({
	label,
	name,
	register,
	isDisabled,
	isRequired,
}: TextareaProps) => (
	<label className='form-control w-full max-w-md'>
		<div className='label'>
			<span className='label-text'>{label}</span>
		</div>
		<textarea
			className='textarea textarea-primary'
			{...register(name, { required: isRequired })}
			disabled={isDisabled}
		></textarea>
	</label>
)
