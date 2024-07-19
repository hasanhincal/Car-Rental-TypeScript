import { IButtonProp } from "../types";

const CostomButton = ({
  title,
  designs,
  handleClick,
  disabled,
  btnType,
  rIcon,
}: IButtonProp) => {
  return (
    <button
      onClick={handleClick}
      type={btnType}
      disabled={disabled}
      className={`custom-btn ${designs}`}
    >
      <span className="flex-1">{title}</span>
      {/* gönderilen sağ ikon varsa ekrana bas */}
      {rIcon && <img className="w-6 h-6" src={rIcon} alt="ricon" />}
    </button>
  );
};

export default CostomButton;
