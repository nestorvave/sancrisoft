import styled from "styled-components";

export const SelectContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 1;
  background-color: #ffffff;
  position: relative;
`;

export const LabelInput = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.9rem;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export const SelectHeader = styled.div<{ $combined?: boolean }>`
  width: 100%;
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #e1e3e6;
  border-radius: ${({ $combined }) =>
    $combined ? "0.5rem 0 0 0.5rem" : "0.5rem"};

  ${({ $combined }) =>
    $combined &&
    `
    border-right: none;
  `}
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
  overflow-x: hidden;
`;

export const Option = styled.li`
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.9rem;
  width: 100%;
  color: #000000;
  padding: 0.7rem 1rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover,
  &[aria-selected="true"] {
    background-color: #f0f0f0;
  }
`;

export const OptionImgWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 0.25rem;
    object-fit: contain;
  }
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    width: 100%;
  }
`;
