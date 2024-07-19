import CostomButton from "./CostomButton";

type Props = {
  limit: number;
  handleClick: () => void;
};

const LoadMore = ({ limit, handleClick }: Props) => {
  console.log(limit);
  return (
    <div className="w-full flex-center my-10">
      {limit < 30 && (
        <CostomButton handleClick={handleClick} title="Daha Fazla" />
      )}
    </div>
  );
};

export default LoadMore;
