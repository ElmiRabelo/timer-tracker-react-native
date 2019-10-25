import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

import TimerButton from "./TimerButton";
import { millisecondsToHuman } from "../utils/TimerUtils";

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;
    onRemovePress(id);
  };

  handleStartPress = () => {
    const { id, onStartPress } = this.props;
    onStartPress(id);
  };

  handleStopPress = () => {
    const { id, onStopPress } = this.props;
    onStopPress(id);
  };

  handleActionButton = () => {
    const { isRunning } = this.props;

    if (isRunning) {
      return (
        <TimerButton
          color="#DB2828"
          title="Pausar"
          onPress={this.handleStopPress}
        />
      );
    }

    return (
      <TimerButton
        color="#21BA45"
        title="Começar"
        onPress={this.handleStartPress}
      />
    );
  };

  render() {
    const { title, project, elapsed, onEditPress } = this.props;
    const elapsedString = millisecondsToHuman(elapsed);
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{project}</Text>
        <Text style={styles.elapsedTime}>{elapsedString}</Text>
        <View style={styles.buttonGroup}>
          <TimerButton
            color="blue"
            small
            title="Editar"
            onPress={onEditPress}
          />
          <TimerButton
            color="blue"
            small
            title="Remover"
            onPress={this.handleRemovePress}
          />
        </View>
        {this.handleActionButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
  }
});

export default Timer;
