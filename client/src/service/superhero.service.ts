import { ICreateSuperhero } from "@/app/interfaces/createSuperhero.interface";
import axiosInstance from "./base.service";

const getSuperheroes = async () => {
  const response = await axiosInstance.get("/superheroes");
  return response.data;
};

const addSuperhero = async (superhero: ICreateSuperhero) => {
  const response = await axiosInstance.post("/superheroes", superhero);
  return response.data;
};

export { getSuperheroes, addSuperhero };
