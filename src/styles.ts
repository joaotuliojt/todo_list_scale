import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		border: none;
		text-decoration: none;
		box-sizing: border-box;
	}

	body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }


	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color-scheme: light dark;
		background-color: #f8f9fa;
    color: #212529;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

export const Container = styled.div`
	width: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 20px;
	background: rgba(255, 255, 255, 0.15);
	border-radius: 16px;
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.2);
`;
