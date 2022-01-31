import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import globalStyles from "../styles/globalStyles";

const CourseInfos = ({ navigation, route }) => {
  const IdCoures = route.params.courseId;
  const selectedCourse = useSelector((state) =>
    state.coures.existingCourses.find((obj) => obj.id === IdCoures)
  );

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Image
          source={{ uri: selectedCourse.image }}
          style={styles.courseImage}
        />
        <View style={styles.courseDetails}>
          <Text style={styles.courseDescriptions}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescriptions}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescriptions}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescriptions}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescriptions}>
            {selectedCourse.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrrapper}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: globalStyles.white,
    height: "80%",
  },
  courseImage: { width: "100%", height: 250 },
  courseDetails: { padding: 20, alignItems: "center" },
  courseDescriptions: {
    color: globalStyles.dimGray,
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  footerContainer: {
    height: "20%",
  },
  coursePriceWrrapper: {},
});
export default CourseInfos;
