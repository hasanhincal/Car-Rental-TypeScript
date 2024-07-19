import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { fetchCars } from "../utils/fetchCars";
import { ICarProps } from "../types";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Warning from "../components/Warning";
import { useSearchParams } from "react-router-dom";
import LoadMore from "../components/LoadMore";
import { CyOptions, fuels, years } from "../utils/constants";

const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars({ limit, ...paramsObj })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);

  return (
    <div>
      <Hero catalogRef={catalogRef} />

      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <Filter title="Yakıt Tipi" options={fuels} />
            <Filter title="Üretim Yılı" options={years} />
            <Filter title="Silindir Sayısı" options={CyOptions} />
          </div>
        </div>

        {/*
        * Araçları listeleme:
        
        1- Veri null ise > Henüz API'dan cevap gelmemiştir.
        2- isError > true ise API'dan hata gelmiştir.
        3- Veri boş dizi ise > Aranılan kritere uygun veri yoktur.
        4- Veri dolu dizi ise > API'dan araçlar gelmiştir.

        */}

        {!cars ? (
          <Warning>Yükleniyor...</Warning>
        ) : isError ? (
          <Warning>Üzgünüz Bir Sorun Oluştu?</Warning>
        ) : cars.length < 1 ? (
          <Warning>Üzgünüz Herhangi Bir Sonuç Bulunamadı!</Warning>
        ) : (
          cars.length > 1 && (
            <>
              <section>
                <div className="home__cars-wrapper">
                  {cars?.map((car, i) => (
                    <Card car={car} key={i} />
                  ))}
                </div>
                <LoadMore
                  limit={limit}
                  handleClick={() => setLimit(limit + 5)}
                />
              </section>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MainPage;
