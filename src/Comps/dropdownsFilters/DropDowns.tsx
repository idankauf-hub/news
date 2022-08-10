import React, { useEffect, useState } from "react";
import DropDown from "../select/DropDown";
import { DisplayRowWithGap } from "./style";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters, resetFilters } from "../../store/query";
import {
  SortbyData,
  CategoryData,
  CountryData,
  Language,
  LanguageCodesAndNames,
  setToLanguageCode,
  everythingFilters,
  topHeadlinesFilters,
} from "../../types/datatypes";
import Dates from "./Dates";
import { getAllTopHeadlinesSources } from "../../Services/Api";


const DropDowns: React.FC = () => {
  const [filters, setFilters] = useState<string[]>(topHeadlinesFilters);
  const [sources, setSources] = useState<string[]>();
  const Query = useSelector((state: RootState) => state.query);


  useEffect(() => {
    getAllTopHeadlinesSources(Query.query.filters.sources).then((value) => {
      setSources(value);
    });
  }, [Query.query.filters.country]);

  //convert Countries and Languages code to names and names to code
  var countries = require("i18n-iso-countries");
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  const languageNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  const dispatch = useDispatch();

  const HandleDropDowns = (value: string, filter: string) => {
    switch (filter) {
      case "Sort by":
        dispatch(updateFilters({ sortby: value }));
        break;

      case "Sources":
        dispatch(updateFilters({ sources: value }));
        break;
      case "Language":
        dispatch(
          updateFilters({
            language: setToLanguageCode(LanguageCodesAndNames, value),
          })
        );
        break;
      case "Country":
        dispatch(
          updateFilters({
            country: countries.getAlpha2Code(value, "en").toLowerCase(),
          })
        );
        break;
      case "Category":
        dispatch(updateFilters({ category: value }));
        break;
      default:
    }
  };


  const handleData = (filter: string) => {
    switch (filter) {
      case "Sort by":
        return SortbyData;
        break;
      case "Sources":
        return sources || [];
        break;
      case "Language":
        let Languages = Language.map((languageCode: string) =>
          languageNamesInEnglish.of(languageCode)
        );
        return Languages as string[];
        break;
      case "Country":
        let Countries: string[] = CountryData.map((country: string) =>
          countries.getName(country, "en")
        );
        return Countries;
        break;
      case "Category":
        return CategoryData;
        break;
      default:
        return [];
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
          key = "everything-" + filter;
        } else {
          key = "top-headlines-" + filter;
        }
        if (filter === "Dates") {
          return (
            <Dates
              key={i}
            ></Dates>
          );
        }
        return (
          <DropDown
            key={key}
            data={handleData(filter)}
            onSelect={(value) => HandleDropDowns(value, filter)}
            placeholder={filter}
          ></DropDown>
        );
      })}
    </DisplayRowWithGap>
  );
};

export default DropDowns;
