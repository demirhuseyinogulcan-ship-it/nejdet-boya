/**
 * Site Ayarları
 * Bu dosyadan kolayca site bilgilerini güncelleyebilirsiniz
 */

export const siteConfig = {
  // İşletme Bilgileri
  businessName: "Nejdet Boya",
  ownerName: "Nejdet Usta",
  tagline: "Edremit'in Güvenilir Boya Ustası",
  
  // İletişim Bilgileri
  phone: "0542 625 84 59",
  phoneClean: "905426258459", // WhatsApp için
  email: "info@nejdetboya.com", // Opsiyonel
  
  // Konum
  location: {
    city: "Balıkesir",
    district: "Edremit",
    fullAddress: "Edremit, Balıkesir",
  },
  
  // Sosyal Medya (opsiyonel)
  social: {
    instagram: "",
    facebook: "",
  },
  
  // Hizmet Alanları
  serviceAreas: [
    "Edremit",
    "Akçay", 
    "Altınoluk",
    "Burhaniye",
    "Havran",
    "Gömeç",
  ],
  
  // Deneyim
  yearsOfExperience: 40,
  
  // WhatsApp Mesajı
  whatsappMessage: "Merhaba, web sitenizi gördüm. Boya hizmeti hakkında bilgi almak istiyorum.",
}

export const services = [
  {
    id: 1,
    title: "İç Cephe Boyama",
    description: "Evinizin iç mekanlarını profesyonel ekipmanlarla, kaliteli boyalarla yeniliyoruz. Temiz ve özenli çalışma garantisi.",
    icon: "home",
  },
  {
    id: 2,
    title: "Dış Cephe Boyama",
    description: "Binanızın dış cephesini hava koşullarına dayanıklı, uzun ömürlü boyalarla koruma altına alıyoruz.",
    icon: "building",
  },
  {
    id: 3,
    title: "Dekoratif Boyama",
    description: "Özel dokular, desenler ve efektlerle mekanlarınıza farklı bir hava katıyoruz.",
    icon: "palette",
  },
  {
    id: 4,
    title: "Tavan & Duvar Tamiratı",
    description: "Boyama öncesi çatlak, nem ve yüzey sorunlarını gideriyoruz. Kusursuz bir sonuç için önemli bir adım.",
    icon: "wrench",
  },
]

// Galeri için fotoğraflar - Dayınız yeni fotoğraf eklemek istediğinde
// sadece bu listeye yeni bir obje eklemesi yeterli
export const galleryImages = [
  {
    id: 1,
    src: "/images/pexels-blue-bird-7218525.jpg",
    alt: "Profesyonel iç mekan boyama çalışması",
    category: "iç-cephe",
  },
  {
    id: 2,
    src: "/images/pexels-maltelu-1669754.jpg",
    alt: "Modern ev boyama projesi",
    category: "iç-cephe",
  },
  {
    id: 3,
    src: "/images/pexels-shkrabaanthony-5493656.jpg",
    alt: "Detaylı boya işçiliği",
    category: "detay",
  },
  {
    id: 4,
    src: "/images/pexels-tima-miroshnichenko-6474130.jpg",
    alt: "Profesyonel boya ekipmanları",
    category: "çalışma",
  },
  {
    id: 5,
    src: "/images/pexels-abror-alarice-2157079562-34568698.jpg",
    alt: "Tamamlanmış boya projesi",
    category: "tamamlanmış",
  },
]

// Müşteri Yorumları
export const testimonials = [
  {
    id: 1,
    name: "Ahmet B.",
    location: "Edremit",
    comment: "Nejdet usta işini çok titiz yapıyor. Evimizi boyattık, sonuç mükemmel oldu. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatma K.",
    location: "Akçay",
    comment: "Yazlığımızın hem iç hem dış cephesini boyattık. Çok temiz çalıştılar, fiyat da gayet uygundu.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehmet Y.",
    location: "Altınoluk",
    comment: "Apartmanımızın dış cephesi için Nejdet ustayı tercih ettik. Profesyonel iş, zamanında teslimat.",
    rating: 5,
  },
]
