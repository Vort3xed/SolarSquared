import React from "react";
// import Heading from "../Heading";
import StyledTextV2Small from "../StyledTextV2Small/StyledTextV2";
import Card from "./Card";
import TimelineData from "../../lib/data/TimelineData";

function Timeline(){
  return (
    <section className="py-10 sm:py-20">
        <div className="text-center pb-12 md:pb-16">
            <StyledTextV2Small text="Project Timeline" />
        </div>
        <div className="py-10 sm:py-20 rounded-lg bg-5eece1 p-2">
          {TimelineData.reverse().map((item, index) => (
            // eslint-disable-next-line
            <Card key={index} index={index} data={item} length={TimelineData.length} />
          ))}
        </div>
      </section>
  );
};

export default Timeline;