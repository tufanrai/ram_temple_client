import React from "react";
import { AboutJass } from "@/src/contents/HistoryOfTemple";

const AboutJASS = () => {
  return (
    <div>
      {AboutJass.map((value, index) => (
        <div key={index}>
          <h1>{value.title}</h1>
          <div>
            {value.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutJASS;
