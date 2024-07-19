import { ICarProps } from "../types";

const headers = {
  "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
};
type Params = {
  limit: number;
  make?: string;
  model?: string;
  year?: string;
  fuel_type?: string;
};

export const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  year = "",
  fuel_type = "",
}: Params): Promise<ICarProps[]> => {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`,
    {
      headers,
    }
  );

  const data = await res.json();

  return data;
};
