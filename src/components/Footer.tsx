import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-semibold">{siteConfig.businessName}</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {siteConfig.yearsOfExperience} yılı aşkın tecrübemizle {siteConfig.location.district} ve çevresinde 
              profesyonel iç ve dış cephe boya hizmetleri sunuyoruz.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#hizmetler" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#yorumlar" className="text-gray-400 hover:text-white transition-colors">
                  Müşteri Yorumları
                </Link>
              </li>
              <li>
                <Link href="#iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <a href={`tel:${siteConfig.phoneClean}`} className="text-white hover:text-primary-400 transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white">{siteConfig.location.fullAddress}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.businessName}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-500">
              Hizmet Bölgeleri: {siteConfig.serviceAreas.slice(0, 3).join(', ')} ve çevresi
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
