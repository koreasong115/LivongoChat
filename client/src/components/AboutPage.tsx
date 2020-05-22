import React from "react";
import Welcome from "react-welcome-page";
import { Hero, ScrollDownIndicator } from "react-landing-page";

export default function AboutPage() {
  return (
    <>
      <Welcome
        data={[
          {
            backgroundColor: "rgb(73, 49, 91)",
            text: "So you wanna know more eh?",
            textAnimation: "slideInRight",
            imageAnimation: "flipInX",
            image: require("../images/lux.png"),
          },
        ]}
      />
    </>
  );
}
