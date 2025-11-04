import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function HomeNewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!news || news.length === 0) return null

  const activeNews = news[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % news.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + news.length) % news.length)
  }

  useEffect(() => {
    if (news.length <= 1) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % news.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const newsImage = (activeNews.images && activeNews.images[0]) 
    ? activeNews.images[0] 
    : activeNews.image

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <div className="relative rounded-3xl bg-white shadow-xl border border-slate-100 overflow-hidden">
          <div className="relative">
            {newsImage && (
              <img
                src={newsImage}
                alt={activeNews.title}
                className="w-full h-52 md:h-56 lg:h-60 object-cover"
              />
            )}

            {/* overlay */}
            <div className="absolute inset-0 bg-slate-900/55" />

            {/* içerik */}
            <div className="absolute inset-0 flex flex-col justify-between px-4 md:px-6 py-4 md:py-5">
              {/* üst blok: etiket + başlıklar */}
              <div className="max-w-full">
                <span className="inline-flex items-center rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white mb-2">
                  Haberler
                </span>
                <p className="text-[11px] md:text-xs text-slate-200/90 mb-1 line-clamp-1">
                  {activeNews.date}
                </p>
                <Link
                  to={`/haberler/${activeNews.slug}`}
                  className="block text-sm md:text-base font-semibold text-white hover:text-brand-orange transition-colors line-clamp-2"
                >
                  {activeNews.title}
                </Link>
                <p className="mt-1 text-[11px] md:text-xs text-slate-100/90 line-clamp-2">
                  {activeNews.shortDescription}
                </p>
              </div>

              {/* alt satır: noktalar + oklar + Tüm Haberler */}
              <div className="mt-3 flex items-center justify-between gap-3">
                {/* dots */}
                {news.length > 1 && (
                  <div className="flex items-center gap-1">
                    {news.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === activeIndex
                            ? 'bg-brand-orange'
                            : 'bg-white/40'
                        }`}
                        aria-label={item.title}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {/* oklar - daha çok tablet/desktop için */}
                  {news.length > 1 && (
                    <div className="hidden sm:flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white text-sm transition-colors"
                        aria-label="Önceki haber"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white text-sm transition-colors"
                        aria-label="Sonraki haber"
                      >
                        ›
                      </button>
                    </div>
                  )}

                  {/* Tüm Haberler butonu - HER BREAKPOINTTE görünsün */}
                  <Link
                    to="/haberler"
                    className="inline-flex items-center rounded-full bg-white/15 px-3 py-1.5 text-[11px] md:text-xs font-medium text-slate-50 hover:bg-white/25 transition-colors"
                  >
                    Tüm Haberler →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
