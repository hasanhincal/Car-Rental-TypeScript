import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type IOption = {
  label: string;
  value: string;
};
interface IFilterProps {
  title: string;
  options: IOption[];
}

const Filter = ({ title, options }: IFilterProps) => {
  const [selected, setSelected] = useState<IOption | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // title'ı belirle:
    const key = title === "Yakıt Tipi" ? "fuel_type" : "year";
    // değer seçildi ise parametreye ekler yoksa kaldırır.
    if (selected?.value) {
      // url'e ekle
      params.set(key, selected.value.toLowerCase());
    } else {
      // url'den kaldır
      params.delete(key);
    }
    setParams(params);
  }, [selected]);
  return (
    <div>
      <ReactSelect
        className="text-black min-w-[100px]"
        onChange={(e: IOption | null) => setSelected(e)}
        options={options}
        placeholder={title}
      />
    </div>
  );
};

export default Filter;
