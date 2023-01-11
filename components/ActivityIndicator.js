import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView autoPlay loop source={require("../Animations/loading.json")} />
  );
}
