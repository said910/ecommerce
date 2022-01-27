import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
  return (
    <CoursesStackNavigator.Navigator>
      <CoursesStackNavigator.Screen name="Home" component={Landing} />
      <CoursesStackNavigator.Screen name="Details" component={CourseInfos} />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
};
