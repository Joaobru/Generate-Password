import { ReactNode } from 'react';

import { ContainerStyled } from './styled';

type Props = {
	children: ReactNode;
};

export const Card = ({ children }: Props) => (
	<ContainerStyled>{children}</ContainerStyled>
);
