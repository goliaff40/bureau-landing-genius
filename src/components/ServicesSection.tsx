
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Ведение учета ИП",
      subtitle: "УСН без головной боли",
      description: "Полное ведение учета для ИП на УСН: от первичных документов до сдачи отчетности",
      features: ["Книга доходов и расходов", "Сдача декларации", "Консультации по налогам", "Оптимизация платежей"],
      price: "от 3 500 ₽",
      timeframe: "в месяц",
      icon: "👤",
      popular: true
    },
    {
      title: "Бухучет ООО",
      subtitle: "Полное обслуживание",
      description: "Комплексное ведение бухгалтерского учета для ООО любых размеров",
      features: ["Первичные документы", "Баланс и отчетность", "Налоговые декларации", "Консультации"],
      price: "от 8 500 ₽",
      timeframe: "в месяц",
      icon: "🏢",
      popular: false
    },
    {
      title: "Зарплатный проект",
      subtitle: "Кадры + зарплата",
      description: "Ведение кадрового учета и расчет заработной платы для ваших сотрудников",
      features: ["Расчет зарплаты", "Отчеты в ПФР и ФСС", "Кадровое делопроизводство", "Больничные и отпуска"],
      price: "от 600 ₽",
      timeframe: "за сотрудника",
      icon: "💰",
      popular: false
    },
    {
      title: "Налоговое планирование",
      subtitle: "Экономия до 15%",
      description: "Легальная оптимизация налогообложения и планирование налоговой нагрузки",
      features: ["Аудит текущих схем", "План оптимизации", "Смена налогового режима", "Сопровождение"],
      price: "от 15 000 ₽",
      timeframe: "разовая услуга",
      icon: "📊",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Бухгалтерские услуги с <span className="text-blue-600">фиксированной</span> ценой
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Никаких скрытых доплат — только честные цены за качественные услуги
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
                  <div className="text-sm text-gray-500">регулярные платежи</div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                  service.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Подключить {service.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Не знаете, какая услуга подойдет?</h3>
            <p className="text-gray-600 mb-6">Получите бесплатную консультацию — подберем оптимальное решение под ваш бизнес</p>
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
