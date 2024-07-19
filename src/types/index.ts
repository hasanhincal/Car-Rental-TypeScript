import { MouseEventHandler } from "react";

export interface IButtonProp {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnType?: "button" | "submit" | "reset";
  rIcon?: string;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "awd" | "rwd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string | number;
  transmission: "m" | "a";
  year: number;
}
// silindir sayısı tipi
// export interface ICOptions {
//   label: string;
//   value: number;
// }
