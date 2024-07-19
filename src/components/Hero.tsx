import { RefObject } from "react";
import CostomButton from "./CostomButton";
import { motion } from "framer-motion";

type RefProp = {
  catalogRef: RefObject<HTMLDivElement>;
};

const Hero = ({ catalogRef }: RefProp) => {
  const handleClick = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //*2. yol
  // const scrollTo = () => {
  //   const ele = document.getElementById("catalogue");
  //   ele?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle">
          Altın standartlarda hizmet unutulmaz bir yolculuğa hazırmısın? Araç
          kiralama deneyimini Altın seçenekleriyle taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CostomButton
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          src="./hero.png"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
