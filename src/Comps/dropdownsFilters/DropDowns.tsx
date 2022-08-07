import React, { useEffect, useState } from "react";
import DropDown from "../select/DropDown";
import { DisplayRowWithGap } from "./style";
import { RootState } from "../../store/store";

import { useSelector, useDispatch } from "react-redux";

const DropDowns = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const Query = useSelector((state: RootState) => state.query);

  const everythingFilters = ["Sort by", "Dates", "Sources", "Language"];
  const topHeadlinesFilters = ["Country", "Catagory", "Sources"];
  const dispatch = useDispatch();

  const HandleDropDowns = (selected: string) => {
    // dispatch(updateFilters({ filter: selected }));
    console.log(selected);
    // switch (selected) {
    //   case "Sort by":
    //     dispatch(updateFilters({}));
    //     break;
    //   case "Dates":
    //     dispatch(updateFilters({}));
    //     break;
    //   case "Sources":
    //     dispatch(updateFilters({}));
    //     break;
    //   case "Language":
    //     dispatch(updateFilters({}));
    //     break;
    //   case "Country":
    //     dispatch(updateFilters({}));
    //     break;
    //   case "Catagory":
    //     dispatch(updateFilters({}));
    //     break;
    //   default:
    //   // code block
    // }
  };
  // useEffect(() => {
  //   (Query.query.endpoint == "everything")
  //     ? setFilters(() => everythingFilters)
  //     : setFilters(() => topHeadlinesFilters);
  // }, []);
  
  useEffect(() => {
    // console.log(Query.query.endpoint)
    // if (Query.query.endpoint == "everything") {
    //   setFilters(()=>everythingFilters);
    // }
    // else if(Query.query.endpoint == "top-headlines") {
    //   setFilters(()=>topHeadlinesFilters);
    // }
    Query.query.endpoint == "everything"
      ? setFilters(() => everythingFilters)
      : setFilters(() => topHeadlinesFilters);
  }, [Query.query.endpoint]);

  return (
    <DisplayRowWithGap>
      {filters?.map((filter, i) => {
        return (
          <DropDown
            key={i}
            data={["a", "b"]}
            onSelect={HandleDropDowns}
            placeholder={filter}
          ></DropDown>
        );
      })}
    </DisplayRowWithGap>
  );
};

export default DropDowns;
