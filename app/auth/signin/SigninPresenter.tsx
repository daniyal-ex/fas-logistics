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

export default function SigninPresenter() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}} style={styles.grey_backView}>
        <Image source={AppImages.grey_back} style={styles.grey_back} />
      </Pressable>

      <Image source={AppImages.send_me} style={styles.sendMeIcon} />

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <PrimaryButton onPress={() => {}} text={"Next"} />
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
});
