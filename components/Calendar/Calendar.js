import * as React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useState } from "react";
import { AlertQuestion, AlertError } from "../../helpers/AlertFunctions";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  WeekView,
  DateNavigator,
  TodayButton,
  Toolbar,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  CurrentTimeIndicator,
  AppointmentForm,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

import { getDatos, appointments } from "./demo-data/appointments";
// animaciones
import { motion } from "framer-motion";

const dragDisableIds = new Set(["ocupado"]);

const allowDrag = ({ title }) => !dragDisableIds.has(title);
const allowResize = () => false;
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return (
      <Appointments.Appointment
        {...props}
        className={"CitaPersona " + errorclass}
      />
    );
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{
        ...props.style,
        cursor: "not-allowed",
        backgroundColor: "#dc4837e0",
        pointerEvents: 'none',
      }}
    />
  );
};

let alertmensagge = "";
let errorclass = "";
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      appointmentChanges: {},
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
      console.log("Se cambio la fecha a: " + currentDate);
    };

    this.commitChanges = this.commitChanges.bind(this);
  }
  commitChanges({ changed, deleted }) {
    this.setState((state) => {
      let { data } = state;

      if (changed) {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        hoy.toISOString();

        const inicioapo = data[0].startDate;
        const finalapo = data[0].endDate;

      

        for (let index = 1; index < data.length; index++) {
          var listini = new Date(data[index].startDate);
          var listfin = new Date(data[index].endDate);
          listini.toISOString();
          listfin.toISOString();
          
          if (listini < inicioapo && listfin < finalapo) {
            console.log("se encontro algo pa ");
          }
         



        }

       

       
        if (hoy > inicioapo) {
          if (hoy < finalapo) {
          } else {
            alertmensagge =
              "Estas selecionando una hora antigua, Por favor selecciona una casilla en blanco";
            AlertError(alertmensagge);
            errorclass = "errorclass";
          }
        } else {
          if (hoy > inicioapo) {
            if (hoy < finalapo) {
            }
          } else {
            alertmensagge = "Haz realizado un cambio, Deseas guardar?";
            AlertQuestion(alertmensagge);
            errorclass = "";
          }
        }
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data[0].startDate = "2018-08-01T14:20:18.146Z";
        data[0].endDate = "2044-08-01T14:40:18.146Z";
        data = data.filter(appointment => appointment.id !== changed);
        errorclass = "";

      }
      /*
      console.log(data);
      */
      return { data };
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container
        maxWidth="md" className="containerro"
        sx={{ marginTop: 2, marginBottom: 4, overflow: "hidden" }}
      >
        <motion.div
          animate={{ y: [4000, 0], opacity: 2 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
        >
          <Paper>
            <Scheduler
              data={data}
              locale="es-ES"
              editing={this.state}
              height={700}
              showCurrentTimeIndicator={true}
            >
              <ViewState onCurrentDateChange={this.currentDateChange} />
              <EditingState onCommitChanges={this.commitChanges} />
              <EditRecurrenceMenu />
              <IntegratedEditing />
              <DayView
                startDayHour={8}
                endDayHour={18}
                cellDuration={20}
                excludedDays={[0]}
                displayName="Dia"
              />
              <WeekView
                startDayHour={8}
                endDayHour={17}
                cellDuration={20}
                displayName="Semana"
                excludedDays={[0]}
              />
              <AllDayPanel messages={{ allDay: "" }} />
              <Toolbar />
              <DateNavigator />
              <TodayButton messages={{ today: "Hoy" }} />
              <Appointments
                appointmentComponent={appointmentComponent}
                style={{ backgroundColor: "blue" }}
              />
              <AppointmentTooltip showDeleteButton />
              <AppointmentForm />

              <DragDropProvider
                allowDrag={allowDrag}
                scrollSpeed={20}
                allowResize={allowResize}
              />
              <CurrentTimeIndicator
                shadePreviousAppointments={true}
                shadePreviousCells={true}
              />
              <ViewSwitcher />
            </Scheduler>
          </Paper>
        </motion.div>
      </Container>
    );
  }
}
