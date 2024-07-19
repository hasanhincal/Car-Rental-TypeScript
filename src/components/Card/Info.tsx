import { ICarProps } from "../../types";
import { motion } from "framer-motion";

interface IProps {
  car: ICarProps;
}
interface IFieldProps {
  img: string;
  text: string;
}

const Field = ({ img, text }: IFieldProps) => {
  return (
    <motion.div
      initial={{ translateY: "50px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      className="flex-center flex-col"
    >
      <img className="mx-auto" width={25} src={img} />
      <p>{text}</p>
    </motion.div>
  );
};

const Info = ({ car }: IProps) => {
  const transmission = car.transmission === "m" ? "Manuel" : "Otomatik";
  const drive =
    car.drive === "fwd"
      ? "Önden Çeker"
      : car.drive === "rwd"
      ? "Arkadan İtişli"
      : "Dört Çeker";

  return (
    <div className="flex justify-between w-full group-hover:hidden">
      <Field img="/steering-wheel.svg" text={transmission} />
      <Field img="/tire.svg" text={drive} />
      <Field
        img="/gas.svg"
        text={car.fuel_type.charAt(0).toUpperCase() + car.fuel_type.slice(1)}
      />
    </div>
  );
};

export default Info;
