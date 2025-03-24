export const formatedPrice = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export const formatedPriceCompact = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  notation: "compact",
});
