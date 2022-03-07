import { useAppDispatch } from "@store";
import { setQuery } from "@store/search";
import { memo, useState } from "react";

function Search() {
  const [inputQuery, setInputQuery] = useState("");
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(setQuery(inputQuery));
      }}
    >
      <input
        value={inputQuery}
        onChange={e => setInputQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default memo(Search);
