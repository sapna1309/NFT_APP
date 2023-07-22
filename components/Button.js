import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.circleTouch, { ...props }]}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={styles.heartImage} />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.recTouch, { minWidth: minWidth, ...props }]}
      onPress={handlePress}
    >
      <Text style={[{ fontSize: fontSize }, styles.recText]}>Place a bid</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleTouch: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  heartImage: { width: 24, height: 24 },
  recTouch: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.extraLarge,
  },
  recText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: "center",
  },
});
