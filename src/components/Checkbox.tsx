import { FieldValues, UseFormRegister } from 'react-hook-form'

type CheckboxProps = {
	isDisabled?: boolean
	isRequired?: boolean
	label: string
	name: string
	register: UseFormRegister<FieldValues>
}

export const Checkbox = ({
	isDisabled,
	isRequired,
	label,
	name,
	register,
}: CheckboxProps) => (
	<div className='form-control'>
		<label className='label cursor-pointer'>
			<input
				disabled={isDisabled}
				type='checkbox'
				{...register(name, { required: isRequired })}
				className='checkbox checkbox-primary'
			/>
			<span className='label-text'>{label}</span>
		</label>
	</div>
)
