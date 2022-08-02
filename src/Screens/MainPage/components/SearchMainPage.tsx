import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import type { RootState } from '../../../store/store'
import { addInput } from "../../../store/query";

import { useSelector,useDispatch} from "react-redux";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 500);

  const storeInput = useSelector((state:RootState) => state.query.input);
  const dispatch= useDispatch();

  const handleChange = (value: string) => {
    setInput(value);
    dispatch(addInput(value));
  };

  useEffect(() => {
    //call api
  }, [debouncedValue]);

  return (
    <Search
      input={input}
      searchFunction={handleChange}
      Icon={() => (
        <>
          <SearchIcon />
        </>
      )}
    />
  );
};
