import { useAppDispatch } from "@store";
import { setQuery } from "@store/search";
import { SearchNormal1 } from "iconsax-react";
import { memo, useState } from "react";
import styled from "styled-components";

function Search() {
  const [inputQuery, setInputQuery] = useState("");
  const dispatch = useAppDispatch();
  return (
    <StyledSearch
      onSubmit={e => {
        e.preventDefault();
        if (!inputQuery) return;
        dispatch(setQuery(inputQuery));
        setInputQuery("");
      }}
    >
      <StyledSubmit type="submit">
        <SearchNormal1 size={20} />
      </StyledSubmit>
      <StyledInput
        value={inputQuery}
        onChange={e => setInputQuery(e.target.value)}
        type="text"
        placeholder="Buscar por produtos, marcas e muito mais..."
      />
    </StyledSearch>
  );
}

const StyledSearch = styled.form`
  flex-grow: 1;
  display: flex;
  min-width: 22rem;
  height: 100%;
`;

const StyledInput = styled.input`
  background-color: transparent;
  flex-grow: 1;
  height: 100%;
  font-size: var(--fs-sm);
  &:focus {
    outline: none;
  }
`;

const StyledSubmit = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 480px) {
    display: none;
  }
`;

export default memo(Search);
