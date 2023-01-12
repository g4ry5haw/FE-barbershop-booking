import axios from "axios";
const url = "https://rich-gold-basket-clam-cape.cyclic.app/api";
export const host = url;

export const bookingApi = axios.create({
  baseURL: url,
});

export const validateUser = (username, body) => {
  return bookingApi
    .post(`/users/${username}`, { password: body })
    .then((res) => {
      return res.data;
    });
};

export const getAllAppointments = () => {
  return bookingApi.get("/appointments").then((res) => {
    return res.data.appointments;
  });
};

export const getTimeSlotsByDate = (date) => {
  return bookingApi.get(`/appointments/${date}`).then((res) => {
    return res.data.appointments;
  });
};

export const getAppointmentByUsername = (username) => {
  return bookingApi.get(`/appointments/booked/${username}`).then((res) => {
    return res.data.appointments;
  });
};

export const postUserDetails = (body) => {
  return bookingApi.post(`/users`, body).then((res) => {
    return res.data.user;
  });
};

export const postAppointment = async (appointemntId, body) => {
  try {
    const response = await bookingApi.patch(
      `/appointments/${appointemntId}`,
      body
    );

    return response.data.appointment;
  } catch (err) {
    console.log(err);
  }
};
