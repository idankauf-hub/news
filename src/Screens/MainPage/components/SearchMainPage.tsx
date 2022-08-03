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

  const Query = useSelector((state:RootState) => state.query);
  const dispatch= useDispatch();

  const handleChange = (value: string) => {
    setInput(value);
    dispatch(addInput(value));
    console.log(Query.query)

  };

  useEffect(() => {
    //call api
  }, [debouncedValue]);

  useEffect(() => {
    console.log("changed")
  }, [Query]);

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


