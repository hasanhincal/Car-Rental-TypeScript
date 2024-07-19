import { FormEvent, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { makes } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 ${designs}`}>
      <img src="/search.svg" width={40} height={40} />
    </button>
  );
};
const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  console.log(params);
  // sayfa her render olduğunda useMemo sayesinde tekrar hesaplama yapmayacak.
  const options = useMemo(
    () => makes.map((make) => ({ label: make, value: make })),
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //  url'i güncelle
    setParams({ make: make.toLowerCase(), model: model.toLowerCase() });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(selected) => selected && setMake(selected.value)}
          className="w-full text-black"
          placeholder="Marka Seçiniz..."
          options={options}
        />
        <Button designs="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          className="absolute ml-4 mb-1"
          src="model-icon.png"
          alt=""
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          placeholder="Ör: Civic"
          type="text"
        />
        <Button designs="sm:ml-6" />
      </div>
    </form>
  );
};

export default SearchBar;
