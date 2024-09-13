import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";

const taskList = [
  {
    title: "Finish Report",
    status: "Pending",
    dueDate: "12/04/2025",
    description: "Complete the final report for the Q3 financial review. Ensure all figures are accurate and submit by end of the day.",
  },
  {
    title: "Update Website",
    status: "Completed",
    dueDate: "24/04/2025",
    description: "Revamp the homepage with the new marketing materials. All sections should reflect the updated branding.",
  },
  {
    title: "Team Meeting",
    status: "Pending",
    dueDate: "30/04/2025",
    description: "Prepare the agenda for the weekly team meeting. Topics include project updates, upcoming deadlines, and team feedback.",
  },
];

function TaskList() {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks =
    selectedStatus === "all"
      ? taskList
      : taskList.filter(
          (task) =>
            task.status.toLocaleLowerCase() ===
            selectedStatus.toLocaleLowerCase()
        );
  return (
    <>
      <Screen>
        <View >
          <Text style={styles.headingName}>Task List</Text>
          <View>
            <Picker
              mode="dropdown"
              selectedValue={selectedStatus}
              onValueChange={(itemValue) => setSelectedStatus(itemValue)}
            >
              <Picker.Item label="All Tasks" value={"all"} />
              <Picker.Item label="Pending Tasks" value={"pending"} />
              <Picker.Item label="Completed Tasks" value={"completed"} />
            </Picker>
          </View>
        </View>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card
              style={styles.flatList}
              onPress={() => {
                setSelectedTask(item);
                setDescriptionVisible(true);
              }}
            >
              <AppText>Task Name: {item.title}</AppText>
              <AppText>Task Status: {item.status}</AppText>
              <AppText>Due Date : {item.dueDate}</AppText>
            </Card>
          )}
        />
      </Screen>

      <Modal visible={descriptionVisible} animationType="slide">
        <Screen>
          <View>
            {selectedTask && (
              <>
                <TouchableOpacity onPress={() => setDescriptionVisible(false)}>
                  <MaterialCommunityIcons
                    name="close"
                    size={30}
                    style={styles.closeIcon}
                  />
                </TouchableOpacity>
                <AppText>
                  Task Name: {selectedTask.title}
                </AppText>
                <AppText>
                  Task Status: {selectedTask.status}
                </AppText>
                <AppText>
                  Due Date: {selectedTask.dueDate}
                </AppText>
                <AppText>
                  Description: {selectedTask.description}
                </AppText>
              </>
            )}
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headingName: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    marginBottom: 20,
  },
  
  flatList: {
    marginLeft: 10,
    marginVertical: 20,
  },
});

export default TaskList;
