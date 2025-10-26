import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SelectContainer,
  SelectHeader,
  SelectedValue,
  OptionsList,
  Option,
  LabelInput,
  OptionImgWrapper,
  OptionBox,
} from "./select.styles";
import { ISelect } from "./select.interface";
import { Arrow } from "@/components/icons";



export const Select = ({
  options = [],
  placeholder = "Select an option",
  onChange,
  value = "",
  label,
  id,
  name,
  combined,
  showValueInsteadOfLabel,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const selectRef = useRef<HTMLDivElement>(null);
  const [displayedOption, setDisplayedOption] = useState<{
    label: string;
    value: string;
    img?: string;
  } | null>(null);

  const handleOptionClick = (itemValue: string) => {
    setSelectedValue(itemValue);
    setIsOpen(false);
    const event = {
      target: {
        name: name,
        value: itemValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    if (onChange) {
      onChange(event);
    } 
  };

  useEffect(() => {
    if (!value) {
      setDisplayedOption(null);
      setIsPlaceholder(true);
      return;
    }
    const found = options.find((opt) => opt.value === selectedValue || opt.value === value);
    if (found) {
      setDisplayedOption(found);
      setIsPlaceholder(false);
    } else {
      setDisplayedOption(null);
      setIsPlaceholder(true);
    }
  }, [selectedValue, value]);

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
        $combined={combined}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="select-list"
        id={id}
      >
        <SelectedValue $isPlaceholder={isPlaceholder}>
          {displayedOption && !isPlaceholder ? (
            <OptionBox>
              {displayedOption.img && (
                <OptionImgWrapper>
                  <Image
                    src={displayedOption.img}
                    alt={displayedOption.label}
                    width={18}
                    height={18}
                  />
                </OptionImgWrapper>
              )}
              <span>
                {showValueInsteadOfLabel
                  ? displayedOption.value
                  : displayedOption.label}
              </span>
            </OptionBox>
          ) : (
            placeholder
          )}
        </SelectedValue>
        <Arrow isOpen={isOpen} />
      </SelectHeader>

      {isOpen && (
        <OptionsList id="select-list" role="listbox">
          {options.map(({ value, label, img }, indx) => (
            <Option
              key={`${indx}-${value}`}
              onClick={() => handleOptionClick(value)}
              role="option"
              aria-selected={selectedValue === value}
              tabIndex={-1}
            >
              <OptionBox>
                {img && (
                  <OptionImgWrapper>
                    <Image src={img} alt={label} width={18} height={18} />
                  </OptionImgWrapper>
                )}
                <span>{showValueInsteadOfLabel ? value : label}</span>
              </OptionBox>
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
