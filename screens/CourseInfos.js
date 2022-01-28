import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CourseInfos = ({ navigation, route }) => {
  const IdCoures = route.params.courseId;
  const selectedCourse = useSelector((state) =>
    state.coures.existingCourses.find((obj) => obj.id === IdCoures)
  );

  return (
    <View>
      <Text>Course Info: {selectedCourse.title} </Text>
      <Text>route.params.courseId: {IdCoures} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CourseInfos;
