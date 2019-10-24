import React, { Component } from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

//Component responsavel por controlar a renderizaração do Timer ou o TimerForm via prop editFormOpen
class EditableTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false
    };
  }

  render() {
    const { id, title, project, elapsed, isRunning } = this.props;
    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return <TimerForm id={id} title={title} project={project} />;
    }

    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
      />
    );
  }
}

export default EditableTimer;
