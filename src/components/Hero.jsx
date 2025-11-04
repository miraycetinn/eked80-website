import heroImage from '../assets/hero-header.jpeg'

function Hero() {
  const handleLearnMore = () => {
    const element = document.querySelector('#biz-kimiz')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-[320px] md:h-[380px] lg:h-[460px] w-full">
      <img
        src={heroImage}
        alt="Eğitime ve Kültüre Erişim Derneği"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white pt-16 pb-10 md:pt-0 md:pb-8 lg:pb-10">
          <p className="uppercase tracking-[0.25em] text-[11px] md:text-xs mb-3 md:mb-4">
            Eğitime ve Kültüre Erişim Derneği
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight md:leading-snug">
            Eğitime ve kültüre erişimin herkes için mümkün olduğu bir dünya.
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-100/90 mb-6">
            Osmaniye'den dünyaya uzanan projelerle, dezavantajlı grupların eğitime ve kültürel yaşama eşit katılımını destekliyoruz.
          </p>
          <a
            href="#biz-kimiz"
            onClick={(e) => {
              e.preventDefault()
              handleLearnMore()
            }}
            className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-2.5 text-sm md:text-base font-medium text-white shadow-md hover:bg-brand-orange/90 transition-colors"
          >
            Bizi Tanıyın
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

