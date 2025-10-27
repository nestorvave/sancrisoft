"use client"

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styles";
import { GlobalStyle } from "@/styles/global-styles.styles";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
