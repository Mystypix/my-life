import { useFieldArray, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { IngredientSection } from '../../components/IngredientSectionForm'
import { Button } from '../../components/Button'

export const AddRecipe = () => {
	const { control, register, handleSubmit } = useForm({
		defaultValues: {
			ingredientSections: [
				{
					ingredientSectionName: '',
					ingredients: [{ ingredientName: '', amount: '', unit: '' }],
				},
			],
		},
	})
	const {
		fields: ingredientSections,
		append: appendToIngredientSections,
		remove: removeIngredientSection,
	} = useFieldArray({
		control,
		name: 'ingredientSections',
	})

	const onSubmit = (data) => {
		console.log('DATAAA', data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label='Name of the recipe'
					name='recipeName'
					register={register}
				/>
				<Input label='Duration' name='duration' register={register} />
				<Input
					label='Number of servings'
					name='numberOfServings'
					register={register}
				/>
				<div>-----------------------------</div>
				{ingredientSections.map((ingredientSections, i) => (
					<div key={ingredientSections.id}>
						<Input
							label='Section name'
							name={`ingredientSections[${i}].ingredientSectionName`}
							register={register}
						/>
						<IngredientSection
							index={i}
							{...{ control, register }}
						/>
						<Button onClick={() => removeIngredientSection(i)}>
							Remove ingredient section
						</Button>
					</div>
				))}
				<Button
					type='button'
					onClick={() =>
						appendToIngredientSections({
							ingredientSectionName: '',
							ingredients: [
								{ ingredientName: '', amount: '', unit: '' },
							],
						})
					}
				>
					Add new ingredient section
				</Button>
				<Button>Save</Button>
			</form>
		</div>
	)
}
