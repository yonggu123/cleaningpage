import CalculatorForm from '@/components/calculator/CalculatorForm';

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">입주청소 견적 계산기</h1>
        <CalculatorForm />
      </div>
    </main>
  );
}
