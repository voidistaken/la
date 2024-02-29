import React from "react";
import { axiosClient } from "../../api/axios";

const AuthApi = {
  login: async (email, password) => {
    return axiosClient.post("/login", { email, password });
  },
  logout: async () => {
    return await axiosClient.post("/logout");
  },
  registerRider: async (values) => {
    return await axiosClient.post("/riders", values);
  },
  getUser: async () => {
    return await axiosClient.get("/user");
  },
};

export default AuthApi;
