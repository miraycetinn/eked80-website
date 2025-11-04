# EKED Website

Eğitime ve Kültüre Erişim Derneği (EKED) web sitesi - React ile geliştirilmiş modern web uygulaması.

## Teknolojiler

- **Vite** - Hızlı geliştirme ortamı
- **React** - UI kütüphanesi
- **React Router v6** - Sayfa yönlendirme
- **Tailwind CSS** - Stil framework'ü

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:5173` adresini açın.

## Proje Yapısı

```
src/
├── components/       # Yeniden kullanılabilir bileşenler
├── pages/           # Sayfa bileşenleri
├── data/            # Veri dosyaları
├── App.jsx          # Ana uygulama bileşeni
├── main.jsx         # Giriş noktası
├── router.jsx       # Route tanımları
└── index.css        # Tailwind CSS giriş dosyası
```

## Özellikler

- ✅ Responsive tasarım (mobil, tablet, masaüstü)
- ✅ React Router ile sayfa yönlendirme
- ✅ Hamburger menü (mobil uyumlu)
- ✅ Haberler listesi ve detay sayfaları
- ✅ Proje ve üye kartları
- ✅ Smooth scroll anchor linkleri

## Yapı

- `/` - Anasayfa
- `/haberler` - Haberler listesi
- `/haberler/:slug` - Haber detay sayfası

