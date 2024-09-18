import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDeviceOrientation } from '@react-native-community/hooks';

import data from "../data/data";
import Card from "../components/Card";

const { height, width } = Dimensions.get("window");
const itemHeight = height - 150;

function Heading() {
  const [active, setActive] = useState("grid");
  const [numColumns, setNumColumns] = useState(2); // Default to 2 columns
  const { landscape } = useDeviceOrientation();

  const toggleView = (view) => {
    setActive(view);
    if (view === "grid") {
      setNumColumns(landscape ? 3 : 2);
    } else {
      setNumColumns(1);
    }
  };

  useEffect(() => {
    // Update the number of columns when the orientation changes
    if (active === "grid") {
      setNumColumns(landscape ? 3 : 2);
    }
  }, [landscape]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>City Guides</Text>
        <View style={styles.displayStyle}>
          <TouchableOpacity onPress={() => toggleView("grid")}>
            <MaterialCommunityIcons
              name="view-grid"
              size={30}
              color={active === "grid" ? "black" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleView("carousel")}>
            <MaterialCommunityIcons
              name="view-carousel"
              size={30}
              color={active === "carousel" ? "black" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        key={numColumns}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        snapToInterval={itemHeight}
        decelerationRate="fast"
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            cityName={item.cityName}
            description={active === "carousel" ? item.description : null}
            style={active === "grid" ? styles.gridItem : styles.singleView}
          />
        )}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 90,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  displayStyle: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  gridItem: {
    alignSelf: "center",
    height: 300,
    width: width > height ? width * 0.3 : width * 0.45, 
  },
  singleView: {
    height: itemHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Heading;
