import Card from '../Card';
import GeneratedPassword from '../GeneratedPassword';

import {
	ButtonStyled,
	ContainerCardStyled,
	ContainerStyled,
	TitleStyled,
} from './styled';

export const Container = () => (
	<ContainerStyled>
		<TitleStyled>Password Generator</TitleStyled>

		<ContainerCardStyled>
			<GeneratedPassword password="PTx1f5DaFX" />
			<Card>
				<p>
					Character Length
					<span>10</span>
				</p>

				<ButtonStyled type="button">Generate</ButtonStyled>
			</Card>
		</ContainerCardStyled>
	</ContainerStyled>
);
