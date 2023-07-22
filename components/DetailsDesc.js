import { View, Text, StyleSheet } from "react-native";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import React, { useState } from "react";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View style={styles.container1}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.descHeading}>Description</Text>
        <View style={styles.descView}>
          <Text style={styles.descText1}>
            {text} {!readMore && "...."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container2: { marginVertical: SIZES.extraLarge * 1.5 },
  descHeading: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  descView: { marginTop: SIZES.base },
  descText1: {
    color: COLORS.secondary,
    fontSize: SIZES.small-2,
    fontFamily: FONTS.regular,
    lineHeight: SIZES.large,
  },
});

export default DetailsDesc;
