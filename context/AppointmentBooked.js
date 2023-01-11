import { createContext, useState } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  return (
    <AppointmentContext.Provider
      value={{ appointmentBooked, setAppointmentBooked }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
