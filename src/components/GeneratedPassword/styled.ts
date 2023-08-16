import styled from 'styled-components';

export const ContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const IconButtonStyled = styled.button`
	padding: 6px;
	background: transparent;
	border: none;
	cursor: pointer;
	color: #7bed9f;
	padding: 8px;
	border-radius: 42px;

	> img {
		width: 24px;
	}

	&:hover {
		filter: brightness(80%);
	}
`;

export const PasswordStyled = styled.p`
	font-weight: 700;
	font-size: 18px;
`;
