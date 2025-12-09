import Image from 'next/image'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function About() {
  const stats = [
    { icon: Clock, value: `${siteConfig.yearsOfExperience}+`, label: 'Yıl Tecrübe' },
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '100%', label: 'Memnuniyet' },
  ]

  const features = [
    'Zamanında ve özenli teslim',
    'Kaliteli marka boyalar kullanımı',
    'Temiz ve düzenli çalışma',
    'Ücretsiz keşif ve fiyat teklifi',
    'Garanti kapsamında hizmet',
    'Uygun fiyat politikası',
  ]

  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-shkrabaanthony-5493656.jpg"
                alt="Profesyonel boya ustası çalışırken"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Güvenilir Hizmet</p>
                  <p className="text-sm text-gray-500">{siteConfig.location.district} ve çevresi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {siteConfig.yearsOfExperience} Yıllık Tecrübe ile
              <span className="text-primary-600"> Kaliteli Hizmet</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {siteConfig.location.district} ve çevresinde {siteConfig.yearsOfExperience} yılı aşkın süredir 
              profesyonel boya hizmeti sunuyoruz. Ev ve iş yerlerinizin iç ve dış cephe boyama 
              işlerinde uzman ekibimizle yanınızdayız.
            </p>
            <p className="text-gray-600 mb-8">
              Kaliteli malzeme kullanımı, temiz işçilik ve müşteri memnuniyeti önceliğimizdir. 
              Her projede aynı titizlik ve özveriyle çalışarak, mekanlarınıza yeni bir görünüm kazandırıyoruz.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
