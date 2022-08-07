import React, { useEffect, useState } from "react";
import DropDown from "../select/DropDown";
import { DisplayRowWithGap } from "./style";
import { RootState } from "../../store/store";

import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../store/query";
import { getLocation } from "../../Services/Api";

const DropDowns = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const Query = useSelector((state: RootState) => state.query);

  const everythingFilters = ["Sort by", "Dates", "Sources", "Language"];
  const topHeadlinesFilters = ["Country", "Catagory", "Sources"];
  const dispatch = useDispatch();

  const HandleDropDowns = (value:string,filter: string) => {
        switch (filter) {
      case "Sort by":
        dispatch(updateFilters({sortby:value}));
        break;
      case "Dates":
        dispatch(updateFilters({date:value}));
        break;
      case "Sources":
        dispatch(updateFilters({sources:value}));
        break;
      case "Language":
        dispatch(updateFilters({language:value}));
        break;
      case "Country":
        dispatch(updateFilters({country:value}));
        break;
      case "Catagory":
        dispatch(updateFilters({catagory:value}));
        break;
      default:
    }
  };

  
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
            onSelect={(value)=>HandleDropDowns(value,filter)}
            placeholder={filter}
          ></DropDown>
        );
      })}
    </DisplayRowWithGap>
  );
};

export default DropDowns;
