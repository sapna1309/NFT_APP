import { View, Text, Image, StyleSheet } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

const DetailBids = ({ bid }) => {
  return (
    <View style={styles.container} key={bid.id}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small - 2,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 4,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
    ...SHADOWS.light,
    elevation: 1,
    borderRadius: SIZES.font,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.base,
  },
});

export default DetailBids;
