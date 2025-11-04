import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { news } from '../data/news'

function NewsDetailPage() {
  const { slug } = useParams()
  const newsItem = news.find((item) => item.slug === slug)
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  if (!newsItem) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Haber bulunamadı
            </h1>
            <Link
              to="/haberler"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              ← Tüm haberlere dön
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const paragraphs = newsItem.content
    .split('\n')
    .filter((p) => p.trim().length > 0)

  const heroImage = (newsItem.images && newsItem.images.length > 0) 
    ? newsItem.images[0] 
    : newsItem.image

  const images = newsItem.images || (newsItem.image ? [newsItem.image] : [])

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/haberler"
          className="text-brand-orange hover:text-brand-orange/90 underline mb-6 inline-block"
        >
          ← Tüm haberlere dön
        </Link>

        {heroImage && (
          <div className="mb-6 overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={heroImage}
              alt={newsItem.title}
              className="w-full h-64 md:h-80 lg:h-[420px] object-cover"
            />
          </div>
        )}

        <article className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          <div className="text-xs md:text-sm text-slate-500 mb-2">{newsItem.date}</div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            {newsItem.title}
          </h1>
          <div className="prose max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 whitespace-pre-line"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {images.length > 1 && (
            <section className="mt-8 border-t border-slate-100 pt-6">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                Fotoğraf Galerisi
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {images.map((imgSrc, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className="group relative block overflow-hidden rounded-xl bg-slate-100"
                  >
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={imgSrc}
                        alt={`${newsItem.title} - fotoğraf ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      {activeImageIndex !== null && images.length > 0 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 px-4"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Kapat butonu */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveImageIndex(null)
            }}
            className="absolute right-4 top-4 text-slate-200 hover:text-white text-2xl z-10"
            aria-label="Kapat"
          >
            ✕
          </button>

          {/* Sol ok */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImageIndex((prev) =>
                  (prev - 1 + images.length) % images.length
                )
              }}
              className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Önceki fotoğraf"
            >
              ‹
            </button>
          )}

          {/* Sağ ok */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImageIndex((prev) => (prev + 1) % images.length)
              }}
              className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Sonraki fotoğraf"
            >
              ›
            </button>
          )}

          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl bg-black">
              <img
                src={images[activeImageIndex]}
                alt="Haber fotoğrafı"
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsDetailPage

