import { Home, Building2, Palette, Wrench } from 'lucide-react'
import { services } from '@/config/site'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building2,
  palette: Palette,
  wrench: Wrench,
}

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Size Sunduğumuz
            <span className="text-primary-600"> Profesyonel Hizmetler</span>
          </h2>
          <p className="text-lg text-gray-600">
            Evinizin veya iş yerinizin ihtiyacına göre kapsamlı boya çözümleri sunuyoruz.
            Her projede kalite ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Ücretsiz danışmanlık için bize ulaşın
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
