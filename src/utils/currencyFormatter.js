export function currencyFormatter(
  amount,
  currency = "LKR"
) {
  if (!amount && amount !== 0) {
    return "";
  }

  return new Intl.NumberFormat(
    "en-LK",
    {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }
  ).format(amount);
}