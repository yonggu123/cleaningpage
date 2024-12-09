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
  const [showInfo, setShowInfo] = useState(false);

  const handleCalculate = () => {
    const result = calculateCleaningPrice(options);
    setBreakdown(result);
    setShowInfo(true);
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

        

        <div className="space-x-4 mb-4">
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
            <span className="ml-2">가전제품 추가</span>
          </label>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          견적 계산하기
        </button>

        {breakdown && <PriceDisplay breakdown={breakdown} />}
        {showInfo && (
          <div>
            <div className="text-sm text-gray-600 mt-4">
              본 견적은 예상 견적이며 업체별/현장별로 금액이 상이할 수 있습니다.(FAQ 참고)
            </div>
            <div className="text-sm text-gray-600 mt-4">
              문의하기를 누르시면 1:1 무료 견적을 받으실 수 있습니다.
            </div>
          </div>
        )}

        <div className="flex space-x-4 mt-4">
          <a href="https://blog.naver.com/ucanclean/223687676693"
             className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            청소견적 GUIDE
          </a>      
          <a href="https://map.naver.com/p/search/%EC%9C%A0%EC%BA%94%ED%81%B4%EB%A6%B0/place/1621803637?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh" 
             className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            문의하기
          </a>
          <a href="https://blog.naver.com/ucanclean/223148778152"
             className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              청소방법
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}