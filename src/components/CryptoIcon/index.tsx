import { useState } from "react";

interface CryptoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  symbol: string;
  name: string;
}

export function CryptoIcon({ symbol, name, ...rest }: CryptoIconProps) {
  const [srcIcon, setSrcIcon] = useState(
    `https://assets.coincap.io/assets/icons/${name.toLowerCase()}2@2x.png`
  );
  const [attempt, setAttempt] = useState(0); // Controla o número de tentativas

  const handleImageError = () => {
    if (attempt === 0) {
      // Primeira falha: tenta usar o name
      setSrcIcon(
        `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}2@2x.png`
      );
      setAttempt(1);
    } else if (attempt === 1) {
      // Segunda falha: remove o "2" antes de "@2x.png"
      setSrcIcon((prevSrc) => prevSrc.replace("2@2x.png", "@2x.png"));
      setAttempt(2);
    }
  };

  return (
    <img
      src={srcIcon}
      alt={`Logo da criptomoeda ${name}`}
      onError={handleImageError}
      {...rest}
    />
  );
}
