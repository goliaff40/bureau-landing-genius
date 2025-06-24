
import ConsultationForm from "@/components/ConsultationForm";

const CaseStudiesSection = () => {
  const cases = [
    {
      company: "Строительная компания «Альфа»",
      industry: "Строительство",
      challenge: "Штрафы от ИФНС за ошибки в отчетах",
      result: "0 штрафов, экономия 180 000 ₽/год",
      timeframe: "6 месяцев",
      metric: "Экономия 15% на налогах",
      icon: "🏗️",
      color: "blue"
    },
    {
      company: "Сеть салонов красоты",
      industry: "Услуги",
      challenge: "Много времени на ведение учета",
      result: "Освободили 25 часов/месяц",
      timeframe: "2 месяца",
      metric: "25 часов в месяц",
      icon: "✨",
      color: "pink"
    },
    {
      company: "Интернет-магазин",
      industry: "E-commerce",
      challenge: "Путаница с НДС и маркировкой",
      result: "Настроили учет, избежали блокировки",
      timeframe: "1 месяц",
      metric: "0 нарушений",
      icon: "🛒",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Как мы <span className="text-green-600">экономим время и деньги</span> наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый клиент получает персональное бухгалтерское обслуживание с гарантированным результатом
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
          <h3 className="text-2xl font-bold mb-4">Хотите забыть о проблемах с учетом и налогами?</h3>
          <p className="text-lg opacity-90 mb-6">Запишитесь на бесплатную консультацию и получите персональное решение для вашего бизнеса</p>
          <ConsultationForm>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Получить Бесплатную Консультацию
            </button>
          </ConsultationForm>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
