
const CaseStudiesSection = () => {
  const cases = [
    {
      company: "Хабр",
      industry: "IT",
      challenge: "Низкая конверсия подписок",
      result: "Конверсия с 3% → 12%",
      timeframe: "2 месяца",
      metric: "+300% рост подписок",
      icon: "💻",
      color: "blue"
    },
    {
      company: "Студия красоты",
      industry: "Услуги",
      challenge: "Мало онлайн-записей",
      result: "От 5 до 47 записей/день",
      timeframe: "3 недели",
      metric: "+840% рост заявок",
      icon: "✨",
      color: "pink"
    },
    {
      company: "Доставка еды",
      industry: "E-commerce",
      challenge: "Высокий отказ в корзине",
      result: "Отказы с 78% → 23%",
      timeframe: "1 месяц",
      metric: "+180% продаж",
      icon: "🍕",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Реальные <span className="text-green-600">результаты</span> наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый проект — это конкретные цифры роста. Вот как мы помогли бизнесу увеличить прибыль.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border">
              <div className="text-4xl mb-4">{caseStudy.icon}</div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{caseStudy.company}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{caseStudy.industry}</span>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Проблема:</div>
                <div className="text-gray-800 mb-4">{caseStudy.challenge}</div>
                
                <div className="text-sm text-gray-600 mb-2">Результат:</div>
                <div className="text-lg font-bold text-green-600 mb-2">{caseStudy.result}</div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  caseStudy.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  caseStudy.color === 'pink' ? 'bg-pink-100 text-pink-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {caseStudy.metric}
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                Срок: {caseStudy.timeframe}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Хотите такой же результат для своего бизнеса?</h3>
          <p className="text-lg opacity-90 mb-6">Запишитесь на бесплатную консультацию и получите персональную стратегию роста</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Получить Бесплатную Стратегию
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
