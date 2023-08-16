import { useForm } from 'react-hook-form';

import Card from '../Card';
import Checkbox from '../Checkbox';
import GeneratedPassword from '../GeneratedPassword';

import {
	ButtonStyled,
	ContainerCardStyled,
	ContainerStyled,
	InputRangeStyled,
	SubTitleStyled,
	TitleStyled,
} from './styled';
import useSubmit, { Form } from './useSubmit';

const MIN_LENGTH_CHARACTER = 4;
const MAX_LENGTH_CHARACTER = 24;

export const Container = () => {
	const { handleSubmitForm, password } = useSubmit();
	const { register, watch, handleSubmit } = useForm<Form>({
		mode: 'onSubmit',
		defaultValues: {
			characterLength: 10,
		},
	});

	const characterLength = watch('characterLength');

	return (
		<ContainerStyled>
			<TitleStyled>Password Generator</TitleStyled>

			<ContainerCardStyled>
				{password && <GeneratedPassword password={password} />}
				<Card>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<SubTitleStyled>
							Character Length
							<span>{characterLength}</span>
						</SubTitleStyled>

						<InputRangeStyled
							type="range"
							min={MIN_LENGTH_CHARACTER}
							max={MAX_LENGTH_CHARACTER}
							{...register('characterLength')}
						/>

						<Checkbox
							label="Include Uppercase Letters"
							id="includeUppercaseLetters"
							{...register('upperCaseLetter')}
						/>

						<Checkbox
							label="Include Lowercase Letters"
							id="includeLowercaseLetters"
							{...register('lowerCaseLetter')}
						/>

						<Checkbox
							label="Include Numbers"
							id="includeNumbers"
							{...register('includeNumbers')}
						/>

						<Checkbox
							label="Include Symbols"
							id="includeSymbols"
							{...register('includeSymbols')}
						/>

						<ButtonStyled type="submit">Generate</ButtonStyled>
					</form>
				</Card>
			</ContainerCardStyled>
		</ContainerStyled>
	);
};
