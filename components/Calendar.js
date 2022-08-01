import * as React from "react";
import Paper from "@mui/material/Paper";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  DateNavigator,
  TodayButton,
  Toolbar,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  SchedulerItem,
} from "@devexpress/dx-react-scheduler-material-ui";

import Container from "@mui/material/Container";
import { appointments } from "./demo-data/appointments";
import { useState } from "react";

const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};
const CustomItem = (props) => (
  <SchedulerItem
    {...props}
    style={{
      ...props.style,
      backgroundColor: props.AllDay ? "pink" : "red",
    }}
  />
);
const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.TextEditor
        value={appointmentData.customField}
        onValueChange={onCustomFieldChange}
        placeholder="Custom field"
      />
    </AppointmentForm.BasicLayout>
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        console.log(data);
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
        <Paper>
          <Scheduler
            data={data}
            locale="es-ES"
            item={CustomItem}
            role="region"
            editable={{
              add: true,
              remove: false,
              drag: true,
              resize: false,
              edit: false,
              select: false,
            }}
          >
            <ViewState onCurrentDateChange={this.currentDateChange} />
            <EditingState onCommitChanges={this.commitChanges} />
            <EditRecurrenceMenu />
            <IntegratedEditing />
            <DayView startDayHour={8} endDayHour={17} cellDuration={20} />
            <AllDayPanel />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AppointmentTooltip />
            <AppointmentForm
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
            />
            <DragDropProvider />
            <ConfirmationDialog />
          </Scheduler>
        </Paper>
      </Container>
    );
  }
}
