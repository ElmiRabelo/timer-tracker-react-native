import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorPropType
} from "react-native";

const TimerButton = ({ color, title, small, onPress }) => (
  <TouchableOpacity
    style={[styles.button, { borderColor: color }]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.buttonText,
        small ? styles.small : styles.large,
        { color }
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

TimerButton.propTypes = {
  color: ColorPropType.isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  onPress: PropTypes.func.isRequired
};
TimerButton.defaultProps = {
  small: false
};

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  small: {
    fontSize: 14,
    padding: 5
  },
  large: {
    fontSize: 16,
    padding: 10
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  }
});

export default TimerButton;
