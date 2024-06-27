import { View, Text } from "react-native";
import React, { useState } from "react";
import WelcomePresenter from "./WelcomePresenter";
import { AppImages } from "@/constants/AppImages";
import { router } from "expo-router";
const data = [
  {
    id: "1",
    image: AppImages.welcome_one,
    title: "Choose Your Category",
    description:
      "Whether you're looking for tables, chairs, sofas, or storage solutions, we have something to suit every style and need.",
    buttonText: "Get Started",
  },
  {
    id: "2",
    image: AppImages.welcome_two,
    title: "Choose Your Location",
    description:
      "Select the location that best suits your needs. Whether you're looking for urban excitement, suburban comfort, or rural tranquility",
    buttonText: "Next",
  },
  {
    id: "3",
    image: AppImages.welcome_three,
    title: "Choose Pickup Time",
    description:
      "Select a convenient pickup time that fits your schedule. We offer flexible options throughout the day to ensure you can collect your items at your preferred time.",
    buttonText: "Next",
  },
];
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onPressNext = () => {
    if (activeIndex === 0) {
      setActiveIndex(1);
    }
    if (activeIndex === 1) {
      setActiveIndex(2);
    }
    if (activeIndex === 2) {
      router.push("auth/signin");
    }
  };

  const onPressBack = () => {
    if (activeIndex === 2) {
      setActiveIndex(1);
    }
    if (activeIndex === 1) {
      setActiveIndex(0);
    }
  };
  return (
    <WelcomePresenter
      data={data}
      activeIndex={activeIndex}
      onPressBack={onPressBack}
      onPressNext={onPressNext}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
}
