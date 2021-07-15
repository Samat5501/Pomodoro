import {
  SAVE_TIME,
  START_TIME,
  DECREASE_TIME,
  SWITCH_SESSION,
  STOP_TIME,
  RESET_TIME,
  SHORT_BREAK,
  LONG_BREAK,
} from "../action/action";

// const local = JSON.parse(localStorage.getItem("time"));
localStorage.removeItem("time")

const initialState = {
  shortBreak: 5,
  longBreak: 10,
  count: 3,
  minuteSecond: 1500,
  sessionLength: 25,
  timerRunning: false,
  interval: "Session",
  button: false,
};

// export const rootReducer = (state = initialState ? local : [], action) => {
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TIME:
      return {
        ...state,
        shortBreak: action.obj.shortBreak,
        longBreak: action.obj.longBreak,
        minuteSecond: action.obj.minuteSecond * 60,
        sessionLength: action.obj.sessionLength,
        count: action.obj.count,
      };
    case START_TIME:
      return {
        ...state,
        timerRunning: true,
        button: true,
        interval: "Session"
      };
    case DECREASE_TIME:
      return {
        ...state,
        minuteSecond: state.minuteSecond - 1,
      };
    case STOP_TIME:
      return {
        ...state,
        timerRunning: false,
      };

    case RESET_TIME:
      return {
        ...state,
        shortBreak: action.obj.shortBreak,
        longBreak: action.obj.longBreak,
        minuteSecond: action.obj.minuteSecond * 60,
        sessionLength: action.obj.sessionLength,
        count: action.obj.count,
        timerRunning: false,
        interval: "Session",
        button: false,
      };
    
    case SHORT_BREAK:
      return {
        ...state,
        interval: "Break",
        minuteSecond: state.shortBreak * 60,
      };

    case LONG_BREAK:
      return {
        ...state,
        interval: "LongBreak",
        minuteSecond: state.longBreak * 60,
      };

    case SWITCH_SESSION:
      return {
        ...state,
        interval: "Session",
        minuteSecond: state.sessionLength * 60,
      };

    default:
      return state;
  }
}