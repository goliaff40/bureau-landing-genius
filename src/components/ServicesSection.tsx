
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Page",
      subtitle: "От идеи до 50 лидов/месяц",
      description: "Создаем продающие лендинги, которые конвертируют посетителей в клиентов",
      features: ["Конверсия от 5%", "15 дней до запуска", "Адаптив под все устройства", "Интеграция с CRM"],
      price: "от 45 000 ₽",
      timeframe: "15 дней",
      icon: "🚀",
      popular: true
    },
    {
      title: "Корпоративный сайт",
      subtitle: "Престиж + продажи",
      description: "Разрабатываем сайты, которые повышают доверие и увеличивают средний чек",
      features: ["Рост доверия на 60%", "SEO-оптимизация", "Система управления", "Аналитика"],
      price: "от 85 000 ₽",
      timeframe: "25 дней",
      icon: "🏢",
      popular: false
    },
    {
      title: "Интернет-магазин",
      subtitle: "E-commerce под ключ",
      description: "Создаем магазины с высокой конверсией и удобной системой управления",
      features: ["Конверсия от 3%", "Интеграция с 1С", "Личный кабинет", "Мобильная версия"],
      price: "от 120 000 ₽",
      timeframe: "35 дней",
      icon: "🛒",
      popular: false
    },
    {
      title: "Редизайн сайта",
      subtitle: "Увеличиваем конверсию в 2 раза",
      description: "Обновляем существующий сайт, исправляем ошибки UX и повышаем продажи",
      features: ["+100% конверсия", "UX-аудит включен", "Сохранение SEO", "Быстрый запуск"],
      price: "от 35 000 ₽",
      timeframe: "10 дней",
      icon: "⚡",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Услуги с <span className="text-blue-600">гарантированным</span> результатом
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждая услуга — это готовое решение с конкретными KPI и фиксированным результатом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-4 ring-blue-500' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-8">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярно
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-blue-600 font-semibold">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                  <div className="text-sm text-gray-500">Фиксированная стоимость</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-blue-600">{service.timeframe}</div>
                  <div className="text-sm text-gray-500">до запуска</div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                  service.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Заказать {service.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Не знаете, что выбрать?</h3>
            <p className="text-gray-600 mb-6">Получите бесплатную консультацию — подберем оптимальное решение под ваш бизнес и бюджет</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              Получить Консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
