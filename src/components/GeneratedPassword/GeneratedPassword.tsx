import Card from '../Card';
import { ContainerStyled, IconButtonStyled, PasswordStyled } from './styled';

import copyIcon from '../../assets/icons/copy.svg';

type Props = {
	password: string;
};

export const GeneratedPassword = ({ password }: Props) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(password);
	};

	return (
		<Card>
			<ContainerStyled>
				<PasswordStyled>{password}</PasswordStyled>

				<IconButtonStyled type="button" onClick={handleCopy}>
					<img src={copyIcon} alt="Copy Password" />
				</IconButtonStyled>
			</ContainerStyled>
		</Card>
	);
};
