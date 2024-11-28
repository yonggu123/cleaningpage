interface InputFieldProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    unit?: string;
  }
  
  export default function InputField({ 
    label, 
    value, 
    onChange, 
    min = 0, 
    max, 
    unit 
  }: InputFieldProps) {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-black font-medium">{label}</label>
        <div className="flex items-center">
          <input 
            type="number" 
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
            min={min}
            max={max}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {unit && (
            <span className="ml-2 text-black">{unit}</span>
          )}
        </div>
      </div>
    );
  }