import { useState } from "react";

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const persistentState = localStorage.getItem(key);

    if (persistentState) {
      return JSON.parse(persistentState)
    }
    return defaultValue;
  });

  const setPersistedState = (value) => {
    setState(value);
    let serialisedValue;

    if (typeof value === "function") {
      serialisedValue = JSON.stringify(value(state));

    } else {
      serialisedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, serialisedValue);
  };

  return [state, setPersistedState];
};
