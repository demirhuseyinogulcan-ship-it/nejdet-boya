import { Phone, MapPin, Clock, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneClean}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div className="text-white">
            <span className="inline-block text-primary-300 font-semibold text-sm tracking-wider uppercase mb-4">
              İletişim
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Hemen Bizimle
              <span className="text-primary-300"> İletişime Geçin</span>
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              Ücretsiz keşif ve fiyat teklifi için bize ulaşın. 
              Size en kısa sürede dönüş yapacağız.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Telefon</h3>
                  <a 
                    href={`tel:${siteConfig.phoneClean}`}
                    className="text-primary-200 hover:text-white transition-colors text-lg"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-primary-300 text-sm mt-1">7/24 ulaşabilirsiniz</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Konum</h3>
                  <p className="text-primary-200">{siteConfig.location.fullAddress}</p>
                  <p className="text-primary-300 text-sm mt-1">
                    Hizmet bölgeleri: {siteConfig.serviceAreas.join(', ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Çalışma Saatleri</h3>
                  <p className="text-primary-200">Pazartesi - Cumartesi: 08:00 - 19:00</p>
                  <p className="text-primary-300 text-sm mt-1">Pazar günleri randevuyla</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="flex items-center">
            <div className="bg-white rounded-2xl p-8 lg:p-10 w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ücretsiz Keşif İsteyin
              </h3>
              <p className="text-gray-600 mb-8">
                Boyama projeniz için ücretsiz keşif ve fiyat teklifi almak için 
                hemen WhatsApp'tan bize yazın veya arayın.
              </p>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp ile Hızlı İletişim
                </a>

                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-center justify-center gap-3 w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6">
                Keşif tamamen ücretsizdir ve herhangi bir taahhüt gerektirmez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
