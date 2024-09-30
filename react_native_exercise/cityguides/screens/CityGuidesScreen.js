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

import data from "../data/data";
import Card from "../components/Card";

const { height, width } = Dimensions.get("window");
const itemHeight = height - 130;

function CityGuidesScreen() {
  const [active, setActive] = useState("grid");
  const [numColumns, setNumColumns] = useState(2);
  const [orientation, setOrientation] = useState(height > width ? "portrait" : "landscape");

  const toggleView = (view) => {
    setActive(view);
  };

  const updateLayout = () => {
    const { height, width } = Dimensions.get("window");
    setOrientation(height > width ? "portrait" : "landscape");
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", updateLayout);
    updateLayout();
    return subscription?.remove;
  }, []);
  
  
  
  useEffect(() => {
    if (orientation === "landscape") {
      setNumColumns(active === "grid" ? 3 : 1);
    } else {
      setNumColumns(active === "grid" ? 2 : 1);
    }
  }, [orientation, active]);
  
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
        extraData={orientation}
        pagingEnabled
        snapToInterval={orientation==='landscape'? 230 : 600}
        decelerationRate="fast"
        numColumns={numColumns}
        renderItem={({ item }) => {
          const currentStyles = orientation === 'landscape' ? styles.landscape : styles.portrait;
          const itemStyle = active === "grid" ? currentStyles.gridItem : currentStyles.singleView;
          return(
           <Card
            image={item.image}
            cityName={item.cityName}
            description={active === "carousel" ? item.description : null}
            style={itemStyle}
          />
        )} }
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
  portrait: {
    gridItem: {
      height: 300,
      
    },
    singleView: {
      height: 600,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
  },
  landscape: {
    gridItem: {
      height: 230, 
      width: 200, 
    },
    singleView: {
      height: 230, 
      justifyContent: "flex-start",
      alignItems: "flex-start",
    
    },
  },
});

export default CityGuidesScreen;
