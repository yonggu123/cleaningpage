export interface CleaningOptions {
    area: number;
    rooms: number;
    bathrooms: number;
    hasBalcony: boolean;
    needsDisinfection: boolean;
    serviceType: 'basic' | 'deep' | 'move';
  }
  
  export interface PriceBreakdown {
    basePrice: number;
    roomPrice: number;
    bathroomPrice: number;
    balconyPrice: number;
    disinfectionPrice: number;
    serviceTypePrice: number;
    total: number;
  }