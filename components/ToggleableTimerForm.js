import React, { Component } from "react";

import { View, StyleSheet } from "react-native";

import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

//Renderiza ou um button de adicionar ou um timeform(que aparece após clicar no button) controlado pela prop isOpen
class ToggleableTimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? (
          <TimerForm />
        ) : (
          <TimerButton title="+" color="black" onPress={this.handleFormOpen} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});

export default ToggleableTimerForm;
