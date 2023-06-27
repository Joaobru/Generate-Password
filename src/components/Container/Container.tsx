import Card from '../Card';

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
			<Card>PTx1f5DaFX</Card>
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
