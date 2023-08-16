/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import { CheckboxStyled, ContainerStyled } from './styled';

type Props = React.HtmlHTMLAttributes<HTMLInputElement> & {
	label: string;
	id: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ label, id, ...rest }, ref): JSX.Element => (
		<ContainerStyled>
			<CheckboxStyled ref={ref} id={id} type="checkbox" {...rest} />

			<label htmlFor={id}>{label}</label>
		</ContainerStyled>
	)
);
