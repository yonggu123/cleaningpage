'use client';

import { useState } from 'react';
import { CleaningOptions, PriceBreakdown } from '@/lib/types/calculator';
import { calculateCleaningPrice } from '@/lib/utils/price-calculator';
import InputField from '../calculator/InputField';
import PriceDisplay from '../calculator/PriceDisplay';

export default function CalculatorForm() {
  const [options, setOptions] = useState<CleaningOptions>({
    area: 0,
    rooms: 1,
    bathrooms: 1,
    hasBalcony: false,
    needsDisinfection: false,
    serviceType: 'basic'
  });

  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  const handleCalculate = () => {
    const result = calculateCleaningPrice(options);
    setBreakdown(result);
  };

// ... 이전 코드 유지 ...
// ... 이전 코드 유지 ...
return (
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
            <option value="deep">이사 청소</option>
            <option value="move">포인트 청소</option>
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
            <span className="ml-2">발코니 포함</span>
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
  );
}