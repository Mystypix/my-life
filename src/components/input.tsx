import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps = {
	label: Path<unknown>;
	register: UseFormRegister<FieldValues>;
	required: boolean;
};

export const Input = ({ label, register, required }: InputProps) => (
	<>
		<label>{label}</label>
		<input
			{...register(label, { required })}
			className="input input-bordered input-md input-primary w-full max-w-xs"
		/>
	</>
);
