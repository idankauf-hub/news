import React, { useEffect, useState } from "react";
import DropDown from "../select/DropDown";
import { DisplayRowWithGap } from "./style";
import { RootState } from "../../store/store";

import { useSelector, useDispatch } from "react-redux";
import { updateFilters, resetFilters } from "../../store/query";
type Data = {
  endpoint: string;
};
const DropDowns: React.FC<Data> = (endpoint) => {
  const everythingFilters = ["Sort by", "Dates", "Sources", "Language"];
  const topHeadlinesFilters = ["Country", "Catagory", "Sources"];
  const [filters, setFilters] = useState<string[]>(topHeadlinesFilters);
  const Query = useSelector((state: RootState) => state.query);

  const dispatch = useDispatch();

  const HandleDropDowns = (value: string, filter: string) => {
    switch (filter) {
      case "Sort by":
        dispatch(updateFilters({ sortby: value }));
        break;
      case "Dates":
        dispatch(updateFilters({ date: value }));
        break;
      case "Sources":
        dispatch(updateFilters({ sources: value }));
        break;
      case "Language":
        dispatch(updateFilters({ language: value }));
        break;
      case "Country":
        dispatch(updateFilters({ country: value }));
        break;
      case "Catagory":
        dispatch(updateFilters({ catagory: value }));
        break;
      default:
    }
  };

  useEffect(() => {
    dispatch(resetFilters());
    Query.query.endpoint == "everything"
      ? setFilters(() => everythingFilters)
      : setFilters(() => topHeadlinesFilters);
  }, [Query.query.endpoint]);

  return (
    <DisplayRowWithGap>
      {filters?.map((filter, i) => {
        var key = "";
        if (Query.query.endpoint == "everything") {
          key = "everything/" + filter;
        } else {
          key = "top-headlines/" + filter;
        }
        return (
          <DropDown
            key={key}
            data={["a", "b"]}
            onSelect={(value) => HandleDropDowns(value, filter)}
            placeholder={filter}
          ></DropDown>
        );
      })}
    </DisplayRowWithGap>
  );
};

export default DropDowns;
