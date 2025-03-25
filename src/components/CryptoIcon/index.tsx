import { useState } from "react";

interface CryptoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  symbol: string;
  name: string;
}

export function CryptoIcon({ symbol, name, ...rest }: CryptoIconProps) {
  const [srcIcon, setSrcIcon] = useState<string>(
    `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}2@2x.png`
  );

  const handleImageError = () => {
    setSrcIcon(
      `https://assets.coincap.io/assets/icons/${name.toLowerCase()}2@2x.png`
    );
  };

  return (
    <img
      src={srcIcon}
      alt={`Logo critomoeda ${name}`}
      onError={handleImageError}
      {...rest}
    />
  );
}
