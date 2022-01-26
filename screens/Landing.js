import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "../componets/CourseItem";
import NoData from "../componets/NoData";

const Landing = () => {
  const existingCourses = useSelector((state) =>
    state.coures.existingCourses.filter((obj) => obj.selected == true)
  );

  if (existingCourses.length > 0) {
    return (
      <FlatList
        data={existingCourses}
        renderItem={({ item }) => (
          <CourseItem
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
      />
    );
  }
  return <NoData text="Aucune formation disponible" />;
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    color: "red",
  },
});
export default Landing;
