import { AnimatePresence, motion } from "framer-motion";
import { ICarProps } from "../../types";
import Images from "./Images";

interface IProps {
  car: ICarProps;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ car, isOpen, close }: IProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-20 bg-black bg-opacity-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="car-details__dialog-panel"
          >
            <button onClick={close} className="car-details__close-btn">
              <img src="/close.svg" alt="close" />
            </button>
            {/* fotoğraflar */}
            <Images car={car} />
            {/* bilgiler */}
            {Object.entries(car).map(([key, value]) => (
              <div key={key} className="flex-between capitalize">
                <h4>{key.split("_").join(" ")}</h4>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
