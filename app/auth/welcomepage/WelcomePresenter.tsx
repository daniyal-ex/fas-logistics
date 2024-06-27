import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { AppImages } from "@/constants/AppImages";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";

const { height, width } = Dimensions.get("window");

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

interface Props {
  data: any;
  activeIndex: number;
  viewabilityConfig: any;
  onPressNext: any;
  onPressBack: any;
  onViewableItemsChanged: any;
}
export default function WelcomePresenter(props: Props) {
  console.log("DATA======", props.data[props.activeIndex].title);
  return (
    <View style={styles.container}>
      {props.activeIndex > 0 && (
        <Pressable onPress={props.onPressBack} style={styles.grey_backView}>
          <Image source={AppImages.grey_back} style={styles.grey_back} />
        </Pressable>
      )}
      <Image source={AppImages.send_me} style={styles.sendMeIcon} />
      <View style={{ height: height * 0.4 }}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={props.onViewableItemsChanged}
          viewabilityConfig={props.viewabilityConfig}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.welcomeImage} />
            </View>
          )}
        />
      </View>
      <View style={styles.row}>
        {props.data.map((_: any, index: number) => (
          <View
            key={index}
            style={{
              backgroundColor:
                props.activeIndex === index ? Colors.primary : "#D9D9D9",
              height: 10,
              width: props.activeIndex === index ? 30 : 10,
              borderRadius: 50,
              margin: 5,
            }}
          ></View>
        ))}
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={styles.title}>{props.data[props.activeIndex].title}</Text>
        <Text style={styles.description}>
          {props.data[props.activeIndex].description}
        </Text>
        <PrimaryButton
          onPress={props.onPressNext}
          text={data[props.activeIndex].buttonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  sendMeIcon: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    marginTop: height * 0.05,
  },
  grey_backView: {
    position: "absolute",
    top: 15,
    left: 22,
  },
  grey_back: {
    height: 34,
    width: 34,
  },
  itemContainer: {
    width: width,
    alignItems: "center",
  },
  welcomeImage: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
    marginTop: height * 0.05,
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#707070",
    width: width * 0.7,
    textAlign: "center",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
