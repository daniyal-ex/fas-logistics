import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const { height, width } = Dimensions.get("window");

interface Props {
  text: string;
  onPress: () => void;
}
export default function PrimaryButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    justifyContent: "center",
    height: 44,
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
