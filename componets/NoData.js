import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const NoData = ({ text }) => {
  return (
    <View style={styles.msgContainer}>
      <Text style={styles.msg}> {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msgContainer: {
    padding: 50,
    alignItems: "center",
  },
  msg: {
    color: globalStyles.green,
    fontSize: 19,
  },
});
export default NoData;
