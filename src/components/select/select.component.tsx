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
  SelectWrapper,
  ErrorContainer,
} from "./select.styles";
import { ISelect } from "./select.interface";
import { Arrow, WarningIcon } from "@/components/icons";

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
  customError,
}: ISelect) => {
  const [isValid, setIsValid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
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

  const handleArrowDown = (index: number): void => {
    const next = (index + 1) % options.length;
    optionRefs.current[next]?.focus();
  };

  const handleArrowUp = (index: number): void => {
    const prev = (index - 1 + options.length) % options.length;
    optionRefs.current[prev]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    index: number,
    value: string
  ): void => {
    const keyActions: Record<string, () => void> = {
      ArrowDown: () => handleArrowDown(index),
      ArrowUp: () => handleArrowUp(index),
      Enter: () => handleOptionClick(value),
      Escape: () => setIsOpen(false),
    };

    const action = keyActions[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  };

  useEffect(() => {
    if (!value) {
      setDisplayedOption(null);
      setIsPlaceholder(true);
      return;
    }
    const found = options.find(
      (opt) => opt.value === selectedValue || opt.value === value
    );
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

  useEffect(() => {
    if (isOpen && optionRefs.current.length > 0) {
      optionRefs.current[0]?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (customError) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }, [customError]);

  return (
    <SelectWrapper>
      <SelectContainer ref={selectRef}>
        {label && <LabelInput htmlFor={id}>{label}</LabelInput>}
        <SelectHeader
          $combined={combined}
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="combobox"
          aria-label={label}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? `${id}-list` : undefined}
          aria-labelledby={id ? `${id}-label` : undefined}
          id={id}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "ArrowDown") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
        >
          <SelectedValue $isPlaceholder={isPlaceholder}>
            {displayedOption && !isPlaceholder ? (
              <OptionBox tabIndex={0}>
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
                onKeyDown={(e) => handleKeyDown(e, indx, value)}
                ref={(el) => {
                  optionRefs.current[indx] = el;
                }}
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
      {!isValid && (
        <ErrorContainer>
          <WarningIcon />
          <span>{customError || "Invalid input"}</span>
        </ErrorContainer>
      )}
    </SelectWrapper>
  );
};
