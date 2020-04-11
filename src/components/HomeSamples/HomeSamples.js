import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

import "./HomeSamples.scss";
import { Sample } from "../";

const samples = [
  { type: "HTML", url: "/PAL0w4SdA5rFCDGEutgpeQ50Om-YkBabtXVOJAkmedslKw" },
  { type: "PDF", url: "/XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg" },
  { type: "Image", url: "/IADUs8d9CQjUO34LmdaaNPK_STuZo24rpKVfYW3wPPM2uQ" },
  { type: "Audio", url: "/_A2zt5SKoqwnnZU4cBF8uBycSKULXMyeg1c5ZISBr2Q3dA" },
  { type: "Video", url: "/CABAB_1Dt0FJsxqsu_J4TodNCbCGvtFf1Uys_3EgzOlTcg" },
  { type: "JSON", url: "/AAC0uO43g64ULpyrW0zO3bjEknSFbAhm8c-RFP21EQlmSQ" },
  { type: "Dapp", url: "/EAC5HJr5Pu086EAZG4fP_r6Pnd7Ft366vt6t2AnjkoFb9Q/index.html" },
];

export default function HomeSamples() {
  return (
    <div className="home-samples">
      <Fade duration={700} distance="20px" bottom>

      </Fade>

      <Reveal effect="active">

      </Reveal>
    </div>
  );
}
