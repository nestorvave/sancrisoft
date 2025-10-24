import styled from "styled-components";

export const SelectContainer = styled.main`
  width: 100%;
  height: 2rem;
  position: relative;
  opacity: 1;
  border-radius: 0.5rem;
  border: 1px solid #e1e3e6;
  background-color: #ffffff;
`;

export const LabelInput = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.9rem;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export const SelectHeader = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  box-sizing: border-box;
`;

export const SelectedValue = styled.span<{ $isPlaceholder: boolean }>`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => (props.$isPlaceholder ? "#757d8a" : "#000000")};
  margin-right: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  z-index: 1000;
  border: 1px solid #e1e3e6;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: 200px;
  overflow-y: auto;
`;

export const SingleOption = styled.li`
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.8rem;
  color: #000000;
  padding: 0.7rem 1rem;
  cursor: pointer;

  &:hover,
  &[aria-selected="true"] {
	background-color: #f0f0f0;
  }
`;	
