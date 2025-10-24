import { useEffect, useRef, useState } from "react";
import {
  SelectContainer,
  SelectHeader,
  SelectedValue,
  OptionsList,
  SingleOption,
  LabelInput,
} from "./select.styles";
import { IOptions, ISelect } from "./select.interface";

const CaretIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.3s",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Select = ({
  options = [],
  placeholder = "Select an option",
  onChange,
  value = "",
  label,
  id,
  name,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [displayedText, setDisplayedText] = useState("");
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: IOptions) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    const event = {
      target: {
        name: name,
        value: option.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    const displayLabel = selectedValue
      ? options.find((opt) => opt.value === selectedValue)?.label || placeholder
      : placeholder;
    setDisplayedText(displayLabel);
    setIsPlaceholder(!selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as any)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      {label && <LabelInput htmlFor={id}>{label}</LabelInput>}
      <SelectHeader
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="select-list"
        id={id}
      >
        <SelectedValue $isPlaceholder={isPlaceholder}>
          {displayedText}
        </SelectedValue>
        <CaretIcon isOpen={isOpen} />
      </SelectHeader>

      {isOpen && (
        <OptionsList id="select-list" role="listbox">
          {options.map((option) => (
            <SingleOption
              key={option.value}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={selectedValue === option.value}
              tabIndex={-1}
            >
              {option.label}
            </SingleOption>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
