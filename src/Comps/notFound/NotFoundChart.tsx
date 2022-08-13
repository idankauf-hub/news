import React from "react";
import { NotFounedChartIcon } from "../../Icons";
import { NotFoundChartContainer, NotFoundChartText } from "./style";

const NotFoundChart = () => {
  return (
    <NotFoundChartContainer>
      <NotFounedChartIcon />
      <NotFoundChartText>No data to display</NotFoundChartText>
    </NotFoundChartContainer>
  );
};

export default NotFoundChart;
