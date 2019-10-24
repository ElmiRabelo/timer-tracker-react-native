import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [
        {
          id: uuidv4(),
          title: "Lavar os Pratos",
          project: "Afazeres de casa",
          elapsed: "7806000",
          isRunning: true
        },
        {
          id: uuidv4(),
          title: "Estudar React Native",
          project: "Profissional",
          elapsed: "8806000",
          isRunning: false
        }
      ]
    };
  }

  render() {
    const { timers } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} />
          {timers.map(({ id, title, project, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  timerList: {
    paddingBottom: 15
  }
});

export default App;
