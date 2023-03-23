import axiosClient from "./axiosClient";
import { destinationsType } from "api/destinationApi";
import { tourType } from "./tourApi";
import { transportationTypeData } from "./transportationType";

export type tourDetailType = {
  id: Number;
  tourId: Number;
  tour: tourType[];
  startDate: String;
  endDate: String;
  departure: String;
  destinationId: Number;
  expiredDate: Date;
  transportationId: Number;
  tourDescription: String;
  destination: destinationsType;
  transportation: transportationTypeData[];
};

// export type TourData = {
//   tourId: Number;
//   tourName: String;
//   tourDescription: String;
//   placeId: Number;
//   duration: Number;
//   cost: Number;
//   available: Number;
// };

const tourDetaisApi = {
  getAll(params?: any) {
    const url = "/TourDetails";
    return axiosClient.get(url, { params });
  },

  getByName(name: string) {
    const url = `/TourDetails/${name}`;
    return axiosClient.get(url);
  },

  getById(id: Number) {
    const url = `/TourDetails/${id}`;
    return axiosClient.get(url);
  },

  getByPlaceId(params: any) {
    const url = `/TourDetails/getToutByPlaceId`;
    return axiosClient.get(url, { params });
  },

  create(data: tourDetailType) {
    const url = "/TourDetails";
    return axiosClient.post(url, data);
  },

  update(data: tourDetailType) {
    const url = "/TourDetails";
    return axiosClient.put(url, data);
  },

  delete(id: Number) {
    const url = `/TourDetails/${id}`;
    return axiosClient.delete(url);
  },
};

export default tourDetaisApi;
