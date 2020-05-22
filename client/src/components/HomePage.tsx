import React from "react";
import Welcome from "react-welcome-page";
import { Provider, Heading } from "rebass";
import { Hero, ScrollDownIndicator, CallToAction } from "react-landing-page";

export default function HomePage(props: any) {
  return (
    <>
      <Welcome
        SameSite="None"
        data={[
          {
            backgroundColor: "rgb(73, 49, 91)",
            text: "Welcome to",
            textAnimation: "slideInRight",
            imageAnimation: "flipInX",
            image: require("../images/lux.png"),
          },
          {
            backgroundColor: "rgb(252, 187, 19)",
            text: "My App",
            textAnimation: "slideInLeft",
            imageAnimation: "slideInUp",
            image: require("../images/ezreal.png"),
          },
          {
            backgroundColor: "rgb(156, 196, 76)",
            text: "Made By",
            image: require("../images/earth.png"),
          },
          {
            backgroundColor: "rgb(4, 116, 188)",
            text: "Ryun Song",
            textAnimation: "fadeInUp",
            image: require("../images/snowboarder.png"),
          },
        ]}
      />
        <Provider>
          <Hero
            color="black"
            bg="none"
            backgroundImage="https://res.cloudinary.com/diayu6wis/image/upload/v1588828715/basic_uuobeu.jpg"
          >
            <Heading>Hello Livongo to the Home Page with ZERO CONTENT!</Heading>
            <CallToAction href="/about" mt={3}>
              Get Started
            </CallToAction>
          </Hero>
        </Provider>
    </>
  );
}
