"use client"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
	padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button, input, select {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    outline: none;
  }



`;
