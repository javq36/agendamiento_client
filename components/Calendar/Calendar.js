import * as React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
// infojs
import dynamic from "next/dynamic";
const Steps = dynamic(() => import("intro.js-react").then((mod) => mod.Steps), {
  ssr: false,
});
import "intro.js/introjs.css";
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

import { appointments } from "./demo-data/appointments";
// animaciones
import { m, motion } from "framer-motion";
import Button from "@mui/material/Button";
import { pasos } from "../../constants/useSteps";
const dragDisableIds = new Set(["ocupado"]);

const allowDrag = ({ title }) => !dragDisableIds.has(title);
const allowResize = () => false;

const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return (
      <Appointments.Appointment
        {...props}
        className={"CitaPersona " + errorclass}
        style={{
          borderRadius: "8px",
        }}
      ></Appointments.Appointment>
    );
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{
        ...props.style,
        cursor: "not-allowed",
        backgroundColor: "#dc4837e0",
        pointerEvents: "none",
        borderRadius: "8px",
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
      iniInfo: false,
      calendWith: 800,
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
    this.iniInfoOn = () => {
      this.setState({ iniInfo: true });
      this.setState({ calendWith: 1600 });
    };
    this.iniInfoOff = () => {
      this.setState({ iniInfo: false });
      this.setState({ calendWith: 800 });
    };
    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      var re = document.getElementsByClassName(
        "MuiTable-root Layout-table css-1x3omzk-MuiTable-root"
      )[0];
      if (
        data[0].startDate === "2018-08-01T14:20:18.146Z" &&
        data[0].endDate === "2044-08-01T14:40:18.146Z"
      ) {
        re.style.display = "table";
      } else {
        re.style.display = "none";
      }

      if (changed) {
        // obtenemos el dia - hora exacta actual
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        hoy.toISOString();

        const inicioapo = data[0].startDate;
        const finalapo = data[0].endDate;

        for (let index = 1; index < data.length; index++) {
          var listini = new Date(data[index].startDate);
          var listfin = new Date(data[index].endDate);
          // validamos si hay alguna otra cita con la misma fecha
          if (listini < data[0].startDate && listfin > data[0].startDate) {
            alertmensagge =
              "Estas selecionando una hora ya ocupada, Por favor seleccione una casilla en blanco";
            AlertError(alertmensagge);
            errorclass = "errorclass";
          } else {
            // validamos si la fecha es antigua
            if (hoy > inicioapo) {
              alertmensagge =
                "Estas selecionando una hora antigua, Por favor selecciona una casilla en blanco";
              AlertError(alertmensagge);
              errorclass = "errorclass";
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
        data = data.filter((appointment) => appointment.id !== changed);
        errorclass = "";
      }

      console.log(data);

      return { data };
    });
  }
  render() {
    const { data, iniInfo, calendWith } = this.state;
    return (
      <Container
        maxWidth="md"
        className="containerro"
        sx={{
          marginTop: 2,
          marginBottom: 4,
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <motion.div
          animate={{ y: [4000, 0], opacity: 2 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
        >
          <Button
            variant="contained"
            className="tutorialbtn"
            onClick={this.iniInfoOn}
            endIcon={<AccessibilityIcon />}
          >
            Tutorial
          </Button>
          <Paper>
            <Scheduler
              data={data}
              locale="es-ES"
              height={calendWith}
              showCurrentTimeIndicator={true}
            >
              <Steps
                enabled={iniInfo}
                steps={pasos}
                initialStep={0}
                options={{
                  tooltipClass: "customTooltip",
                  showProgress: true,
                  showStepNumbers: false,
                  showBullets: false,
                  exitOnOverlayClick: false,
                  doneLabel: "Listo",
                  prevLabel: "Atras",
                  nextLabel: "Siguiente",
                  hideNext: false,
                  disableInteraction: true,
                }}
                onExit={this.iniInfoOff}
              />
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
                AppointmentContentProps={{durationType: "long"}}
              />
              <AppointmentTooltip showDeleteButton showCloseButton />
              <DragDropProvider
                allowDrag={allowDrag}
                allowResize={allowResize}
                scrollSpeed={60}
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
