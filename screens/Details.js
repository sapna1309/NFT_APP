import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { StatusBar } from "expo-status-bar";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailBids,
  DetailsDesc,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.length + 30}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.length + 30}
      // top={StatusBar.currentHeight + 10} if it is from react native
    />
  </View>
);

const Details = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        style="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.rectButtonView}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailBids bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={styles.descView}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={styles.currentBidText}>Current Bids</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  rectButtonView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1,
  },
  descView: { padding: SIZES.font },
  currentBidText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default Details;
