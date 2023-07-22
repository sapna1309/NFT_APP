import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { HomeHeader, FocusedStatusBar, NFTcard } from "../components";
import { COLORS, NFTData } from "../constants";
import { useState } from "react";

const Home = () => {

const [nftData, setNftData] = useState(NFTData)

const handleSearch = (value) =>{
  if (value.length === 0) {
    setNftData(NFTData);
  }

  const filteredData = NFTData.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  if (filteredData.length === 0) {
    setNftData(NFTData);
  } else {
    setNftData(filteredData);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.childView}>
          <FlatList
            data={nftData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTcard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.backgroundView}>
          <View style={styles.backgroundViewInnerView1} />
          <View style={styles.backgroundViewInnerView2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childView: {
    zIndex: 0,
    marginTop: 25,
  },
  backgroundView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  backgroundViewInnerView1: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  backgroundViewInnerView2: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
