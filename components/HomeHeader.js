import { View, Text, Image, TextInput } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import { StyleSheet } from "react-native";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainerView1}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={styles.logoImage}
        />
        <View style={styles.belowLogoImageView}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={styles.innerContainerView2}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Dream Sharma 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find a masterpiece Art
        </Text>
      </View>
      <View style={styles.innerContainerView3}>
        <View style={styles.innerContainerView3ChildView}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchImage}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            // onChangeText={(text) => onSearch(text)} this will work like that also
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.primary, padding: SIZES.font },
  innerContainerView1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: { width: 90, height: 25 },
  belowLogoImageView: { width: 45, height: 45 },
  innerContainerView2: { marginVertical: SIZES.font },
  innerContainerView3: { marginTop: SIZES.font },
  innerContainerView3ChildView: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  searchImage: { width: 20, height: 20, marginRight: SIZES.base },
});

export default HomeHeader;
