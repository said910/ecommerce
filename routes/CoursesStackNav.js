import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
import CustomHeaderIcon from "../componets/CustomHeaderIcon";
import globalStyles from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
  return (
    <CoursesStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold", color: globalStyles.white },

        // headerRight: () => (
        //   <MaterialIcons
        //     name="menu"
        //     size={24}
        //     color={globalStyles.white}
        //     onPress={() => alert("eeeeeee")}
        //   />
        // ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Pannier"
              iconName="shopping-cart"
              onPress={() => navigation.navigate("Cart")}
            />
            <Item
              title="Test"
              iconName="delete"
              onPress={() => navigation.navigate("Cart")}
            />
          </HeaderButtons>
        ),
      })}
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
