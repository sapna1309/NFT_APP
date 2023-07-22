import { View, Text, StyleSheet, Image } from "react-native";
import { SIZES, COLORS, SHADOWS, FONTS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={[styles.nftTitle, { fontSize: titleSize }]}>{title}</Text>
      <Text style={[styles.nftSubTitle, { fontSize: subTitleSize }]}>
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={styles.ethPriceContainer}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={styles.ethPriceImage}
      />
      <Text style={styles.ethPriceText}>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={[
        styles.imageCmpImg,
        { marginLeft: index === 0 ? 0 : -SIZES.font },
      ]}
    />
  );
};

export const People = () => {
  return (
    <View style={styles.peopleContainer}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styles.endDateContainer}>
      <Text style={styles.endDateText1}>Ending in</Text>
      <Text style={styles.endDateText2}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles.subInfoContainer}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  subInfoContainer: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  peopleContainer: { flexDirection: "row" },
  endDateContainer: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: "50%",
  },
  imageCmpImg: { width: 48, height: 48 },
  endDateText1: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  endDateText2: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  nftTitle: { fontFamily: FONTS.semiBold, color: COLORS.primary },
  nftSubTitle: { fontFamily: FONTS.regular, color: COLORS.primary },
  ethPriceContainer: { flexDirection: "row", alignItems: "center" },
  ethPriceImage: { width: 20, height: 20, marginRight: 2 },
  ethPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
});
