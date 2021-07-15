export const SAVE_TIME = "SAVE_TIME";
export const START_TIME = "START_TIME";
export const DECREASE_TIME = "DECREASE_TIME";
export const SWITCH_SESSION = "SWITCH_SESSION";
export const SHORT_BREAK = "SHORT_BREAK";
export const LONG_BREAK = "LONG_BREAK";
export const STOP_TIME = "STOP_TIME";
export const RESET_TIME = "RESET_TIME";

export const save_time = (obj) => ({
  // Saved input value in setting [all ok]
  type: SAVE_TIME,
  obj,
});

 // start time for pomodoro
export const start_time = () => ({
  type: START_TIME,
});

// decrease minute and second
export const decrease_time = () => ({
  type: DECREASE_TIME,
})

export const stop_time = () => ({
  type: STOP_TIME,
})

export const reset_time = (obj) => ({
  type: RESET_TIME,
  obj,
});

export const switchSession = () => ({
  type: SWITCH_SESSION,
});

export const short_Break = () => ({
  type: SHORT_BREAK,
});

export const long_Break = () => ({
  type: LONG_BREAK,
});