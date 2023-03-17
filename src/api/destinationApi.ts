import axiosClient from "./axiosClient";

export type destinationsType = {
  id: Number;
  name: String;
  region: String;
  description: String;
  status: Number;
  destinationImages: destinationImagesType[];
};

export type destinationImagesType = {
  id: Number;
  destinationId: Number;
  image: String;
};

const destinationApi = {
  getAll(params?: any) {
    const url = "/Destinations";
    return axiosClient.get(url, { params });
  },

  getById(id: Number) {
    const url = `/Destinations/${id}`;
    return axiosClient.get(url);
  },

  create(data: destinationsType) {
    const url = "/Destinations";
    return axiosClient.post(url, data);
  },

  update(data: destinationsType) {
    const url = "/Destinations";
    return axiosClient.put(url, data);
  },

  delete(id: Number) {
    const url = `/Destinations/${id}`;
    return axiosClient.delete(url);
  },
};

export default destinationApi;
