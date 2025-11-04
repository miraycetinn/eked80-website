import { Link } from 'react-router-dom'

function NewsCard({ title, date, shortDescription, slug }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
        {shortDescription}
      </p>
      <Link
        to={`/haberler/${slug}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Daha Fazla
      </Link>
    </div>
  )
}

export default NewsCard

