import { useState } from 'react'
import { Link } from 'react-router-dom'
import { news } from '../data/news'

function NewsListPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeNews = news[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % news.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + news.length) % news.length)
  }

  return (
    <div>
      {/* Carousel Section */}
      <section className="py-8 md:py-10 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Haberler
          </h1>

          {activeNews && (
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-800 shadow-lg mb-4">
              {(activeNews.images && activeNews.images[0] ? activeNews.images[0] : activeNews.image) && (
                <img
                  src={activeNews.images && activeNews.images[0] ? activeNews.images[0] : activeNews.image}
                  alt={activeNews.title}
                  className="h-64 md:h-80 lg:h-[420px] w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-slate-900/50" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-200/80 mb-1">
                    Güncel Haber
                  </p>
                  <h2 className="text-lg md:text-2xl font-semibold mb-1">
                    {activeNews.title}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-100/90 mb-3">
                    {activeNews.date}
                  </p>
                  <p className="text-xs md:text-sm text-slate-100/90 line-clamp-2 mb-3">
                    {activeNews.shortDescription}
                  </p>
                  <Link
                    to={`/haberler/${activeNews.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-brand-orange px-4 py-1.5 text-xs md:text-sm font-medium text-white hover:bg-brand-orange/90 transition-colors"
                  >
                    Haberin Detayına Git
                  </Link>
                </div>
              </div>

              {/* Sol ok */}
              <button
                type="button"
                onClick={handlePrev}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
                aria-label="Önceki haber"
              >
                ‹
              </button>

              {/* Sağ ok */}
              <button
                type="button"
                onClick={handleNext}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
                aria-label="Sonraki haber"
              >
                ›
              </button>
            </div>
          )}

          {/* Carousel kontrol butonları */}
          <div className="flex justify-center gap-2 mt-2">
            {news.map((n, index) => (
              <button
                key={n.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-brand-orange' : 'bg-slate-500'
                }`}
                aria-label={n.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Duyurular / Tüm Haberler Listesi */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Tüm Haberler ve Duyurular
          </h2>

          <div className="space-y-4">
            {news.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-3 md:gap-4 items-start border-b border-slate-100 pb-4"
              >
                {(item.images && item.images[0] ? item.images[0] : item.image) && (
                  <img
                    src={item.images && item.images[0] ? item.images[0] : item.image}
                    alt={item.title}
                    className="w-full md:w-32 h-24 md:h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">{item.date}</p>
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 line-clamp-2 mb-2">
                    {item.shortDescription}
                  </p>
                  <Link
                    to={`/haberler/${item.slug}`}
                    className="text-xs md:text-sm font-medium text-brand-orange hover:text-brand-orange/90"
                  >
                    Daha Fazla →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsListPage

