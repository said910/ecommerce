import { StyleSheet, FlatList, View, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "../componets/CourseItem";
import NoData from "../componets/NoData";

const Landing = ({ navigation }) => {
  const existingCourses = useSelector((state) =>
    state.coures.existingCourses.filter((obj) => obj.selected == false)
  );

  if (existingCourses.length > 0) {
    return (
      <View>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate("Details")}
        />
        <FlatList
          data={existingCourses}
          renderItem={({ item }) => (
            <CourseItem
              image={item.image}
              title={item.title}
              price={item.price}
              viewDetails={() => alert("Détails")}
              onAddToCart={() => alert("Course ajouter Panier")}
            />
          )}
        />
      </View>
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
