import { CleaningOptions, PriceBreakdown } from '../types/calculator';

const PRICE_CONFIG = {
  basePerArea: 9000,    // 평당 기본 가격
  roomPrice: 30000,      // 방당 가격
  bathroomPrice: 70000,  // 화장실당 가격
  balconyPrice: 40000,   // 발코니 추가 가격
  disinfectionRate: 0.2, // 소독 서비스 할증률 (20%)
  serviceTypeMultiplier: {
    basic: 1,
    deep: 1.7,    // 심층 청소 50% 할증
    move: 2       // 이사 청소 100% 할증
  }
};

export function calculateCleaningPrice(options: CleaningOptions): PriceBreakdown {
  const basePrice = options.area * PRICE_CONFIG.basePerArea;
  const roomPrice = options.rooms * PRICE_CONFIG.roomPrice;
  const bathroomPrice = options.bathrooms * PRICE_CONFIG.bathroomPrice;
  const balconyPrice = options.hasBalcony ? PRICE_CONFIG.balconyPrice : 0;
  
  const subtotal = basePrice + roomPrice + bathroomPrice + balconyPrice;
  
  // 서비스 타입에 따른 할증
  const serviceTypePrice = subtotal * (PRICE_CONFIG.serviceTypeMultiplier[options.serviceType] - 1);
  
  // 소독 서비스 추가 비용
  const disinfectionPrice = options.needsDisinfection ? subtotal * PRICE_CONFIG.disinfectionRate : 0;
  
  const total = subtotal + serviceTypePrice + disinfectionPrice;

  return {
    basePrice,
    roomPrice,
    bathroomPrice,
    balconyPrice,
    serviceTypePrice,
    disinfectionPrice,
    total
  };
}
