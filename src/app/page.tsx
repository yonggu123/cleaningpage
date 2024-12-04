import CalculatorForm from '@/components/calculator/CalculatorForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>입주청소 비용 계산기 - 간결하고 빠른 견적 받기</title>
        <meta name="description" content="입주청소 비용 계산기를 이용해 손쉽게 청소 견적을 받아보세요." />
        <meta name="keywords" content="입주청소, 입주청소 비용, 청소업체 추천, 입주청소 견적" />
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6238144034010969"
     crossorigin="anonymous">
        </script>
      </Head>
      <main className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">입주청소 견적 계산기</h1>
          <CalculatorForm />
        </div>
      </main>
    </>
    
  );
}
