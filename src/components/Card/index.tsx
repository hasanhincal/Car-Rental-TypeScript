import { motion } from "framer-motion";
import { ICarProps } from "../../types";
import CostomButton from "../CostomButton";
import Info from "./Info";
import { useState } from "react";
import Modal from "../Modal";
import generateImage from "../../utils/generateImage";

interface ICarCardProps {
  car: ICarProps;
}

const Card = ({ car }: ICarCardProps) => {
  let result = Math.round(Math.random() * 7000) + 1500;
  let roundedResult = Math.round(result / 50) * 50;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="car-card group"
    >
      {/* Araba ismi  */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* Araba fiyatı  */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{roundedResult}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>
      {/*Resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car"
          className="w-full h-full object-contain"
        />
      </div>
      {/* info Alanı */}
      <div className="w-full">
        <Info car={car} />
        <div className="hidden group-hover:flex mt-1">
          <CostomButton
            title="Daha Fazla"
            designs="w-full py-[25px]"
            rIcon="right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </motion.div>
  );
};

export default Card;
