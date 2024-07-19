//* Higher Order Components(HOC)
//* Normal componentlerden farklı olarak hem açılış hemde kapanış etiketleri olur
//* ve içlerinde yazılan değeri otomatik olarak children propu olarak gönderir.

type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <div className="home__error-container">{children}</div>;
};
export default Warning;
