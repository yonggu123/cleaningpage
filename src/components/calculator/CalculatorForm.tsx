'use client';

import { useState } from 'react';
import { CleaningOptions, PriceBreakdown } from '@/lib/types/calculator';
import { calculateCleaningPrice } from '@/lib/utils/price-calculator';
import InputField from '../calculator/InputField';
import PriceDisplay from '../calculator/PriceDisplay';

export default function CalculatorForm() {
  const [options, setOptions] = useState<CleaningOptions>({
    area: 0,
    rooms: 0,
    bathrooms: 0,
    hasBalcony: false,
    needsDisinfection: false,
    serviceType: 'basic',
    buildingType: '',
  });

  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  const handleCalculate = () => {
    const result = calculateCleaningPrice(options);
    setBreakdown(result);
  };

// ... 이전 코드 유지 ...
// ... 이전 코드 유지 ...
return (
  <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <div className="maxW2xl mxAuto p6">
      <div className="spaceY6">
        <InputField
          label="평수"
          value={options.area}
          onChange={(value) => setOptions({ ...options, area: value })}
          unit="평"
        />
        
        <InputField
          label="방 개수"
          value={options.rooms}
          onChange={(value) => setOptions({ ...options, rooms: value })}
          min={1}
          unit="개"
        />
        
        <InputField
          label="화장실 개수"
          value={options.bathrooms}
          onChange={(value) => setOptions({ ...options, bathrooms: value })}
          min={1}
          unit="개"
        />

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">서비스 타입</label>
          <select 
            value={options.serviceType}
            onChange={(e) => setOptions({ ...options, serviceType: e.target.value as CleaningOptions['serviceType'] })}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="basic">입주 청소</option>
            <option value="move">이사 청소</option>
            
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">건물 유형</label>
          <select 
            value={options.buildingType}
            onChange={(e) => setOptions({ ...options, buildingType: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">선택해주세요</option>
            <option value="apartment">아파트</option>
            <option value="villa">빌라</option>
            <option value="officetel">오피스텔</option>
            <option value="house">단독주택</option>
            <option value="office">사무실</option>
          </select>
        </div>

        

        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={options.hasBalcony}
              onChange={(e) => setOptions({ ...options, hasBalcony: e.target.checked })}
              className="rounded text-blue-500"
            />
            <span className="ml-2">거실 확장형</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={options.needsDisinfection}
              onChange={(e) => setOptions({ ...options, needsDisinfection: e.target.checked })}
              className="rounded text-blue-500"
            />
            <span className="ml-2">소독 서비스 추가</span>
          </label>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          견적 계산하기
        </button>

        {breakdown && <PriceDisplay breakdown={breakdown} />}
      </div>
    </div>
  </div>  
  );
}