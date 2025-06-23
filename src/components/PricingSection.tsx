
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Старт",
      subtitle: "Для ИП на УСН",
      price: "3 500",
      originalPrice: "7 000",
      features: [
        "Ведение УСН учета",
        "Сдача отчетности в ИФНС",
        "Консультации по налогам",
        "Базовая юридическая поддержка",
        "Личный кабинет 24/7"
      ],
      popular: false
    },
    {
      name: "Оптима",
      subtitle: "Для ООО до 10 сотрудников",
      price: "8 500",
      originalPrice: "17 000",
      features: [
        "Полное бухгалтерское обслуживание",
        "Ведение кадрового учета",
        "Расчет зарплаты и отчетность",
        "Безлимитные консультации юриста",
        "Представительство в ИФНС",
        "Оптимизация налогообложения"
      ],
      popular: true
    },
    {
      name: "Все включено",
      subtitle: "Для больших компаний",
      price: "15 500",
      originalPrice: "31 000",
      features: [
        "Все из тарифа «Оптима»",
        "Управленческий учет",
        "Финансовая аналитика",
        "Персональный менеджер",
        "Приоритетная поддержка",
        "Выездное обслуживание",
        "Помощь в проверках"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Выберите <span className="text-blue-600">оптимальный пакет</span> услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Прозрачные цены без скрытых платежей. Первый месяц со скидкой 50%!
          </p>
          
          <div className="inline-block bg-green-100 border-2 border-green-300 rounded-lg p-4">
            <p className="text-green-800 font-semibold">🎉 Акция! Первый месяц — 50% скидка для новых клиентов</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Популярный выбор
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600"> ₽/мес</span>
                  </div>
                  <div className="text-gray-500 line-through mb-2">
                    Обычная цена: {plan.originalPrice} ₽/мес
                  </div>
                  <div className="text-green-600 font-semibold">
                    Экономия: {parseInt(plan.originalPrice) - parseInt(plan.price)} ₽/мес
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-lg'
                  }`}
                >
                  {plan.popular ? 'Выбрать план' : 'Подключить'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Гарантия результата</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Пробный период 2 недели</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Возврат денег если не подойдем</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Страхование до 500 000 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
