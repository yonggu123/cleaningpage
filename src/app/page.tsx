import CalculatorForm from '@/components/calculator/CalculatorForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>입주청소 비용 계산기 - 간결하고 빠른 견적 받기</title>
        <meta name="description" content="입주청소 가격 및 비용을 빠르게 계산하고, 손쉽게 청소 견적을 받아보세요." />
        <meta name="keywords" content="입주청소, 입주청소 비용, 입주청소 가격, 청소업체 추천, 입주청소 견적" />
        <link rel="canonical" href="https://cleaningpage.vercel.app/" />
        <meta property="og:title" content="입주청소 가격 비용 계산기" />
        <meta property="og:description" content="입주청소 가격 및 비용을 빠르게 계산하고, 손쉽게 청소 견적을 받아보세요." />
        <meta property="og:url" content="https://cleaningpage.vercel.app/" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "입주청소 비용 계산기",
            "url": "https://cleaningpage.vercel.app",
            "description": "입주청소 비용 계산기를 이용해 손쉽게 청소 견적을 받아보세요.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cleaningpage.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
      </Head>
      <main className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">입주청소 가격 계산기</h1>
          <CalculatorForm />
        </div>
      </main>
    </>
    
  );
}
