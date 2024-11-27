import { PriceBreakdown } from '@/lib/types/calculator';

interface PriceDisplayProps {
  breakdown: PriceBreakdown;
}

export default function PriceDisplay({ breakdown }: PriceDisplayProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">청소 견적 상세</h2>
      <div className="space-y-2">
        <PriceRow label="기본 청소 비용" amount={breakdown.basePrice} />
        <PriceRow label="방 청소 비용" amount={breakdown.roomPrice} />
        <PriceRow label="화장실 청소 비용" amount={breakdown.bathroomPrice} />
        {breakdown.balconyPrice > 0 && (
          <PriceRow label="발코니 청소 비용" amount={breakdown.balconyPrice} />
        )}
        {breakdown.serviceTypePrice > 0 && (
          <PriceRow label="서비스 할증 비용" amount={breakdown.serviceTypePrice} />
        )}
        {breakdown.disinfectionPrice > 0 && (
          <PriceRow label="소독 서비스 비용" amount={breakdown.disinfectionPrice} />
        )}
        <div className="border-t pt-2 mt-4">
          <PriceRow 
            label="총 견적 금액" 
            amount={breakdown.total} 
            className="font-bold text-lg"
          />
        </div>
      </div>
    </div>
  );
}

interface PriceRowProps {
  label: string;
  amount: number;
  className?: string;
}

function PriceRow({ label, amount, className = '' }: PriceRowProps) {
  return (
    <div className={`flex justify-between ${className}`}>
      <span>{label}</span>
      <span>{amount.toLocaleString()}원</span>
    </div>
  );
}