function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section

