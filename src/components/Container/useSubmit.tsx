/* eslint-disable no-plusplus */
import { useState } from 'react';

export type Form = {
	characterLength: number;
	upperCaseLetter: boolean;
	lowerCaseLetter: boolean;
	includeNumbers: boolean;
	includeSymbols: boolean;
};

type ReturnProps = {
	handleSubmitForm: (form: Form) => void;
	password: string;
};

const NUMBERS = '0123456789';
const SPECIAL_CHARACTERS = '!@#$%^&*()';
const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function useSubmit(): ReturnProps {
	const [password, setPassword] = useState('');
	const handleSubmitForm = ({
		includeNumbers,
		includeSymbols,
		lowerCaseLetter,
		upperCaseLetter,
		characterLength,
	}: Form) => {
		if (
			!includeNumbers &&
			!includeNumbers &&
			!lowerCaseLetter &&
			!upperCaseLetter
		) {
			return;
		}

		let characters = '';

		if (includeNumbers) characters += NUMBERS;
		if (includeSymbols) characters += SPECIAL_CHARACTERS;
		if (lowerCaseLetter) characters += LOWER_CASE_LETTERS;
		if (upperCaseLetter) characters += UPPER_CASE_LETTERS;

		let generatedPassword = '';
		for (let i = 0; i < characterLength; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			generatedPassword += characters[randomIndex];
		}
		setPassword(generatedPassword);
	};

	return {
		handleSubmitForm,
		password,
	};
}
