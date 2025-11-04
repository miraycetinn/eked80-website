import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/eked-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo + EKED Text */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="EKED Logo"
              className="h-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-semibold tracking-wide text-slate-900">
              EKED
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <Link
              to="/"
              className="text-sm md:text-base font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Anasayfa
            </Link>
            <a
              href="#biz-kimiz"
              onClick={(e) => handleAnchorClick(e, '#biz-kimiz')}
              className="text-sm md:text-base font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Hakkımızda
            </a>
            <a
              href="#projeler"
              onClick={(e) => handleAnchorClick(e, '#projeler')}
              className="text-sm md:text-base font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Projeler
            </a>
            <Link
              to="/haberler"
              className="text-sm md:text-base font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Haberler
            </Link>
            <a
              href="#iletisim"
              onClick={(e) => handleAnchorClick(e, '#iletisim')}
              className="text-sm md:text-base font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              İletişim
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Menü"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-3">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2"
              >
                Anasayfa
              </Link>
              <a
                href="#biz-kimiz"
                onClick={(e) => handleAnchorClick(e, '#biz-kimiz')}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer py-2"
              >
                Hakkımızda
              </a>
              <a
                href="#projeler"
                onClick={(e) => handleAnchorClick(e, '#projeler')}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer py-2"
              >
                Projeler
              </a>
              <Link
                to="/haberler"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2"
              >
                Haberler
              </Link>
              <a
                href="#iletisim"
                onClick={(e) => handleAnchorClick(e, '#iletisim')}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer py-2"
              >
                İletişim
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

