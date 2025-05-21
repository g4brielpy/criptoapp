import { useState } from "react";
import LogoDefault from "../../assets/cryptocurrency.png";

interface CryptoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  symbol: string;
  name: string;
  idCripto: string;
}

export function CryptoIcon({
  symbol,
  name,
  idCripto,
  ...rest
}: CryptoIconProps) {
  const fallbackIcons = [
    `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}2@2x.png`,
    `https://assets.coincap.io/assets/icons/${name.toLowerCase()}2@2x.png`,
    `https://assets.coincap.io/assets/icons/${idCripto.toLowerCase()}2@2x.png`,
    LogoDefault,
  ];

  const [attempt, setAttempt] = useState(0);

  const getIconWithQuery = (index: number) => {
    const icon = fallbackIcons[index];
    // Para imagens locais, não precisa adicionar query param
    return typeof icon === "string" && icon.startsWith("http")
      ? `${icon}?v=${index}`
      : icon;
  };

  const [srcIcon, setSrcIcon] = useState(getIconWithQuery(0));

  const handleImageError = () => {
    const nextAttempt = attempt + 1;
    if (nextAttempt < fallbackIcons.length) {
      setSrcIcon(getIconWithQuery(nextAttempt));
      setAttempt(nextAttempt);
    }
  };

  return (
    <img
      src={srcIcon}
      alt={`Ícone da criptomoeda ${name}`}
      onError={handleImageError}
      className="w-5 h-auto object-cover"
      {...rest}
    />
  );
}
