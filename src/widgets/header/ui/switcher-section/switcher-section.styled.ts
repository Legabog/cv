import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	left: 50%;
	transform: translate(-50%);
`;
export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	flex-wrap: nowrap;
	gap: 12px;
	height: min-content;
	justify-content: center;
	overflow: visible;
	padding: 12px;
	position: relative;
	width: min-content;

	backdrop-filter: blur(12px);
	background-color: ${({ theme }) => theme.backgroundColor};
	border-radius: 12px;
	box-shadow:
		0px 0px 4px 0px ${({ theme }) => theme.boxShadow},
		0px 4px 16px 0px ${({ theme }) => theme.boxShadow},
		0px 8px 32px 0px ${({ theme }) => theme.boxShadow};
	opacity: 1;
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
		top: -38px;
	}
	to {
		opacity: 1;
		top: -46px;
	}
`;
const fadeOut = keyframes`
	from {
		opacity: 1;
		top: -46px;
	}
	to {
		opacity: 0;
		top: -38px;
	}
`;
export const Tooltip = styled.div`
	display: flex;
	flex: none;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	opacity: 0;
	padding: 4px 8px;
	position: absolute;
	border: 1px ${({ theme }) => theme.boxShadow} solid;
	background-color: ${({ theme }) => theme.backgroundColor};
	white-space: pre;
	height: min-content;
	width: min-content;
	color: ${({ theme }) => theme.color};
	pointer-events: none;
	border-radius: 8px;
	box-shadow:
		${({ theme }) => theme.boxShadow} 0px 0px 4px 0px,
		${({ theme }) => theme.boxShadow} 0px 2px 8px 0px,
		${({ theme }) => theme.boxShadow} 0px 4px 16px 0px;
`;
export const A = styled.a`
	position: relative;
	display: block;
	height: 28px;
	width: 28px;
	box-sizing: border-box;
	border-radius: 7px;
	overflow: visible;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px rgba(0, 0, 0, 0.1) solid;
	border-radius: 12px;
	box-shadow:
		0px 1px 4px 0px ${({ theme }) => theme.boxShadow},
		0px 2px 8px 0px ${({ theme }) => theme.boxShadow};
	cursor: pointer;
`;
export const WrapperItem = styled.div`
	position: relative;
	flex: none;
	height: auto;
	width: auto;
	/* &:hover ${A} {
		background-color: ${({ $hoverColor }) => $hoverColor};
	}
	&:hover ${Tooltip} {
		animation: ${fadeIn} 0.1s linear forwards;
	}
	&:not(:hover) ${Tooltip} {
		animation: ${fadeOut} 0.1s linear forwards;
	} */
`;
