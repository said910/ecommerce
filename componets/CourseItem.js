import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const CourseItem = (props) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.courseContainerDetails}>
        <Text style={styles.courseTitle}>{props.title}</Text>
        <Text style={styles.coursePrice}>{props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={props.viewDetails}>
          <MaterialIcons
            name="remove-red-eye"
            size={35}
            color={globalStyles.green}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onAddToCart}>
          <MaterialIcons
            name="shopping-basket"
            size={35}
            color={globalStyles.green}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  image: { width: "100%", height: "100%" },
  courseContainerDetails: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    marginVertical: 4,
    color: globalStyles.green,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  coursePrice: {
    color: globalStyles.darkGrey,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 30,
  },
});
export default CourseItem;
