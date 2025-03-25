import { useState } from "react";
import LogoDefault from "../../assets/cryptocurrency.png";

interface CryptoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  symbol: string;
  name: string;
}

export function CryptoIcon({ symbol, name, ...rest }: CryptoIconProps) {
  const [srcIcon, setSrcIcon] = useState(
    `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}2@2x.png`
  );

  // Controla o número de tentativas
  const [attempt, setAttempt] = useState(0);

  const handleImageError = () => {
    if (attempt === 0) {
      // Primeira falha: tenta usar o name
      setSrcIcon(
        `https://assets.coincap.io/assets/icons/${name.toLowerCase()}2@2x.png`
      );
      setAttempt(1);
    } else if (attempt === 1) {
      // Segunda falha: Adicionar icon padrão para moedas onde não há resultado com name
      setSrcIcon(LogoDefault);
      setAttempt(2);
    }
  };

  return (
    <img
      src={srcIcon}
      alt={" "}
      onError={handleImageError}
      className="w-5 h-auto object-cover"
      {...rest}
    />
  );
}
