import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
import globalStyles from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";
const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
  return (
    <CoursesStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.green,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: globalStyles.white,
        },
        headerRight: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color={globalStyles.white}
            onPress={() => alert("eeeeeee")}
          />
        ),
      }}
    >
      <CoursesStackNavigator.Screen name="Home" component={Landing} />
      <CoursesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
};
