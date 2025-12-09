# Nejdet Boya - Profesyonel Boya Hizmetleri Web Sitesi

Balıkesir Edremit'te profesyonel iç ve dış cephe boya hizmetleri sunan Nejdet Boya için hazırlanmış modern web sitesi.

## 🚀 Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Görselleri Taşıyın

Kök klasördeki görsel dosyalarını `public/images/` klasörüne taşıyın:

```powershell
# PowerShell ile:
Move-Item "pexels-*.jpg" "public/images/"
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Site varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

## 📁 Proje Yapısı

```
nejdet-boya/
├── public/
│   └── images/          # Web sitesi görselleri
├── src/
│   ├── app/
│   │   ├── globals.css  # Global stiller
│   │   ├── layout.tsx   # Ana layout
│   │   └── page.tsx     # Ana sayfa
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── CookieBanner.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Gallery.tsx
│   │       ├── About.tsx
│   │       ├── Testimonials.tsx
│   │       └── Contact.tsx
│   └── config/
│       └── site.ts      # Site ayarları ve içerik
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## ⚙️ Site Ayarlarını Düzenleme

Tüm site ayarları `src/config/site.ts` dosyasında bulunur. Bu dosyadan kolayca:

- İşletme bilgileri
- Telefon numarası
- Konum bilgileri
- Hizmetler
- Galeri görselleri
- Müşteri yorumları

güncellenebilir.

### Yeni Görsel Ekleme

1. Görseli `public/images/` klasörüne kopyalayın
2. `src/config/site.ts` dosyasındaki `galleryImages` dizisine yeni görsel ekleyin:

```typescript
{
  id: 6, // Bir sonraki numara
  src: "/images/yeni-gorsel.jpg",
  alt: "Görsel açıklaması",
  category: "iç-cephe", // veya "dış-cephe", "detay" vb.
}
```

## 🌐 Yayına Alma (Hosting)

### Vercel (Önerilen)

Next.js'in yaratıcısı olan Vercel, en kolay hosting seçeneğidir:

1. [vercel.com](https://vercel.com) adresine gidin
2. GitHub hesabınızla giriş yapın
3. Projenizi GitHub'a yükleyin
4. Vercel'de "New Project" ile projenizi import edin
5. Deploy butonuna tıklayın

**Ücretsiz plan özellikleri:**
- Sınırsız site
- Otomatik SSL
- Global CDN
- Otomatik deploy (GitHub push ile)

### Domain Bağlama

1. Bir domain satın alın (örn: nejdetboya.com)
2. Vercel panelinden "Domains" bölümüne gidin
3. Domain'i ekleyin ve DNS ayarlarını yapın

## 📱 Özellikler

- ✅ Modern ve profesyonel tasarım
- ✅ Mobil uyumlu (responsive)
- ✅ WhatsApp hızlı iletişim butonu
- ✅ KVKK uyumlu çerez banner'ı
- ✅ SEO optimizasyonu
- ✅ Hızlı yükleme (Next.js optimizasyonları)
- ✅ Kolay içerik yönetimi (JSON tabanlı)

## 🎨 Renk Paleti

- **Primary (Ana renk):** Mavi tonları - güven ve profesyonellik
- **Accent:** Turuncu - dikkat çekici CTA'lar
- **Neutral:** Gri tonları - metin ve arka planlar

## 📞 İletişim

**Nejdet Boya**
- Telefon: 0542 625 84 59
- Konum: Edremit, Balıkesir

---

Bu web sitesi profesyonel boya hizmetleri için hazırlanmıştır.
