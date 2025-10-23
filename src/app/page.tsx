"use client";
import { useCountStore } from "@/store/index.store";
import styled from "styled-components";

export default function Home() {
  const { count, decrease, increase } = useCountStore((state) => state);
  return (
    <main>
      <h1>
        Counter <span>{count}</span>
      </h1>
      <div>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
      </div>
    </main>
  );
}
const Button = styled.button`
  background-color: rgb(162, 243, 0);
  color: "#FFFFF";
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size};
  cursor: pointer;
`;
