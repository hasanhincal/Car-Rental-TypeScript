import { ICarProps } from "../types";
import { colors } from "./constants";

const generateImage = (car: ICarProps, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/get-image");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model as string);
  url.searchParams.append("zoomType", "fullscreen");

  //* açı parametresi geldiyse url'e ekle:
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // colors dizisinin uzunluğuna göre rastgele bir sayı al:
  const i = Math.floor(Math.random() * colors.length);

  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
