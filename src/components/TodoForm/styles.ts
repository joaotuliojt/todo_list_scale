import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 20px;
`;

export const Input = styled.input`
	padding: 10px;
	margin-bottom: 10px;
	border: none;
	border-radius: 4px;
	background: rgba(255, 255, 255, 0.25);
	color: #212529;
	backdrop-filter: blur(5px);
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

	&::placeholder {
		color: #6c757d;
	}
`;

export const Button = styled.button`
	padding: 10px;
	background-color: rgba(40, 167, 69, 0.75);
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	backdrop-filter: blur(5px);

	&:hover {
		background-color: rgba(40, 167, 69, 1);
	}
`;
