import { ICarProps } from "../../types";
import generateImage from "../../utils/generateImage";

const Images = ({ car }: { car: ICarProps }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      {/* büyük resim */}
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img
          className=" h-full mx-auto object-contain"
          src={generateImage(car)}
        />
      </div>
      {/* küçük resimler */}
      <div className="flex gap-3 my-3">
        <div className="bg-primary-blue-100 relative flex-1 flex rounded h-24">
          <img
            className="min-w-[146px] h-full mx-auto object-contain"
            src={generateImage(car, "25")}
          />
        </div>
        <div className="bg-primary-blue-100 relative flex-1 flex rounded h-24">
          <img
            className="min-w-[146px] h-full mx-auto object-contain"
            src={generateImage(car, "21")}
          />
        </div>
        <div className="bg-primary-blue-100 relative flex-1 flex rounded h-24">
          <img
            className="min-w-[146px] h-full mx-auto object-contain"
            src={generateImage(car, "09")}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
