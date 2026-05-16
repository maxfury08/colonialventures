export function calculateROI(
  investmentAmount,
  monthlyRate = 3.33,
  years = 1
) {
  const monthlyIncome =
    investmentAmount *
    (monthlyRate / 100);

  const totalReturns =
    monthlyIncome * 12 * years;

  const totalValue =
    investmentAmount + totalReturns;

  return {
    monthlyIncome:
      Math.round(monthlyIncome),

    totalReturns:
      Math.round(totalReturns),

    totalValue:
      Math.round(totalValue),
  };
}