import styled from 'styled-components';

export const ContainerStyled = styled.div`
	padding: 16px;
`;

export const TitleStyled = styled.h1`
	display: block;
	text-align: center;
	color: #cac8c9;
	margin-top: 32px;
`;

export const ContainerCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;

	max-width: 500px;
	margin-top: 24px;
	margin-left: auto;
	margin-right: auto;
`;

export const ButtonStyled = styled.button`
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 16px;
	border-radius: 2px;
	border: none;
	cursor: pointer;
	width: 100%;
	background: #7bed9f;
	margin-top: 12px;
`;

export const InputRangeStyled = styled.input`
	width: 100%;
	background-color: red;
	accent-color: #7bed9f;
	margin-bottom: 24px;
`;

export const SubTitleStyled = styled.h3`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	margin-bottom: 24px;

	> span {
		color: #7bed9f;
		font-size: 24px;
		font-weight: bold;
	}
`;
