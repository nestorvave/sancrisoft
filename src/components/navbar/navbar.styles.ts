"use client";
import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 1px solid #e0e0e0;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding: 0 1rem;
  }
`;

export const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #333333;
`;
