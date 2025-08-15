import React, { useState } from 'react';
import styled from 'styled-components';
import { PaginationInfoText } from './pagination-info-text';
import { ButtonProps } from '../button/button';
import { InputProps } from '../input/input';
import { useClickAway } from '../../hooks/use-click-away';
import { formatNumber } from '../../utils/formatters';

interface PaginationInputProps extends ButtonProps {
  currentPage: number;
  pageCount: number;
  onChange: (page) => void;
}

export const PaginationInputContainer = styled.div(({ theme }) =>
  theme.withMedia({
    width: ['unset', '160px', '160px'],
    '*': {
      boxSizing: 'border-box',
    },
  }),
);

const StyledInput = styled('input')<InputProps>(({ theme }) => ({
  color: 'inherit',
  background: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: 'none',
  width: '100%',
  padding: 0,
  textAlign: 'center',
  caretColor: theme.styleguideColors.contentRed,
  '&[type=number]': {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      margin: 0,
      '-webkit-appearance': 'none',
      'pointer-events': 'none',
    },
  },
  outline: 'none',
}));

const InputInfoText = styled(PaginationInfoText)(({ theme }) => ({
  width: '100%',
  height: 24,
  cursor: 'pointer',
  ':hover': {
    background: theme.styleguideColors.fillSecondaryRedHover,
    color: theme.styleguideColors.contentRed,
  },
}));

export const PaginationInput = ({
  currentPage,
  pageCount,
  onChange,
}: PaginationInputProps) => {
  const [isHovered, setHover] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [page, setPage] = useState(undefined);

  const convertDecimalToThousand = (value) => {
    return Number(value?.replace(/[,.]/g, '')) || 0;
  };

  const resetInputValue = () => {
    setShowInput(false);
    setPage(undefined);
  };

  const { ref } = useClickAway({
    callback: () => {
      resetInputValue();
    },
  });

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const pageNumber = convertDecimalToThousand(page);

      onChange(pageNumber > pageCount ? pageCount : pageNumber);
      resetInputValue();
    }
  };

  return (
    <PaginationInputContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      ref={ref}
    >
      <InputInfoText>
        {showInput ? (
          <StyledInput
            inputMode={'numeric'}
            autoFocus
            value={page}
            onChange={(e) => setPage(e.target.value)}
            onKeyDown={handleSubmit}
          />
        ) : isHovered && !showInput ? (
          <>Enter page</>
        ) : (
          <>
            Page {formatNumber(currentPage)} of {formatNumber(pageCount)}
          </>
        )}
      </InputInfoText>
    </PaginationInputContainer>
  );
};
