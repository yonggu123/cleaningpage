import { CleaningOptions, PriceBreakdown } from '../types/calculator';

const PRICE_CONFIG = {
  basePerArea: 15000,    // 평당 기본 가격
  balconyPrice: -40000,   // 발코니 추가 가격
  moveAdditional: 2000
};

export function calculateCleaningPrice(options: CleaningOptions): PriceBreakdown {
  let basePrice = 0;

  if (options.area <= 10) {
    basePrice = 200000;
  } else if (options.area <= 19) {
    basePrice = 200000 + (options.area - 10) * 10000;
  } else {

    const basePricePerArea = options.serviceType === 'move'
    ? PRICE_CONFIG.basePerArea + PRICE_CONFIG.moveAdditional
    : PRICE_CONFIG.basePerArea;
    basePrice = options.area * basePricePerArea;
  }
  
  const balconyPrice = options.hasBalcony ? PRICE_CONFIG.balconyPrice : 0;

  const total = basePrice + balconyPrice;

  return {
    basePrice,
    balconyPrice,
    total
  };
}
