import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

import { newTimer } from "./utils/TimerUtils";

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

  handleCreateFormSubmit = timer => {
    const { timers } = this.state;
    this.setState({ timers: [newTimer(timer), ...timers] });
  };

  handleFormSubmit = attrs => {
    const { timers } = this.state;
    this.setState({
      timers: timers.map(timer => {
        if (timer.id === attrs.id) {
          const { title, project } = attrs;

          return {
            ...timer,
            title,
            project
          };
        }
        return timer;
      })
    });
  };

  handleRemovePress = timerId => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId)
    });
  };

  render() {
    const { timers } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          {timers.map(({ id, title, project, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onFormSubmit={this.handleFormSubmit}
              onRemovePress={this.handleRemovePress}
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
