import React, { Component } from "react";
import PropTypes from "prop-types";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

//Component responsavel por controlar a renderizaração do Timer ou o TimerForm via prop editFormOpen
class EditableTimer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false
    };
  }

  handleEditPress = () => {
    this.openForm();
  };
  handleFormClose = () => {
    this.closeForm();
  };
  handleSubmit = timer => {
    const { onFormSubmit } = this.props;
    onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };
  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    const {
      id,
      title,
      project,
      elapsed,
      isRunning,
      onRemovePress,
      onStartPress,
      onStopPress
    } = this.props;

    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    }

    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onEditPress={this.handleEditPress}
        onRemovePress={onRemovePress}
        onStartPress={onStartPress}
        onStopPress={onStopPress}
      />
    );
  }
}

export default EditableTimer;
