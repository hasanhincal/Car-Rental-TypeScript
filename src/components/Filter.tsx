import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type COptions = {
  label: string;
  value: number;
};
type IOption = {
  label: string;
  value: string;
};
type CombinedOption = COptions | IOption;

interface IFilterProps {
  title: string;
  options: CombinedOption[];
}

const Filter = ({ title, options }: IFilterProps) => {
  const [selected, setSelected] = useState<CombinedOption | null>(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // title'ı belirle:
    const key =
      title === "Yakıt Tipi"
        ? "fuel_type"
        : title === "Üretim Yılı"
        ? "year"
        : "cylinders";

    // değer seçildi ise parametreye ekler yoksa kaldırır.
    if (selected) {
      if (typeof selected.value === "string") {
        // url'e ekle
        params.set(key, selected.value.toLowerCase());
      } else {
        // url'e ekle
        params.set(key, selected.value.toString());
      }
    } else {
      // url'den kaldır
      params.delete(key);
    }

    // parametreleri güncelle
    setParams(params);
  }, [selected]);
  return (
    <div>
      <ReactSelect
        className="text-black min-w-[100px]"
        onChange={(e: CombinedOption | null) => setSelected(e)}
        options={options}
        placeholder={title}
      />
    </div>
  );
};

export default Filter;
