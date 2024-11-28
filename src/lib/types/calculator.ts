export interface CleaningOptions {
    area: number;
    rooms: number;
    bathrooms: number;
    hasBalcony: boolean;
    needsDisinfection: boolean;
    serviceType: 'basic' |  'move';
  }
  
  export interface PriceBreakdown {
    basePrice: number;
    balconyPrice: number;
    total: number;
  }