
const HowWeWorkSection = () => {
  const steps = [
    {
      number: "1",
      title: "Заявка/Консультация",
      description: "Оставьте заявку или получите бесплатную консультацию по телефону",
      icon: "📞"
    },
    {
      number: "2", 
      title: "Анализ",
      description: "Изучим вашу ситуацию, подберем оптимальное решение и тариф",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Договор", 
      description: "Заключим понятный договор с фиксированной ценой и гарантиями",
      icon: "📝"
    },
    {
      number: "4",
      title: "Передача данных",
      description: "Настроим безопасный обмен документами (электронно/курьер)",
      icon: "🔄"
    },
    {
      number: "5",
      title: "Работа",
      description: "Ваш персональный бухгалтер и юрист ведут учет и решают задачи",
      icon: "⚡"
    },
    {
      number: "6",
      title: "Результат",
      description: "Получаете отчетность вовремя, оптимизацию налогов и полное спокойствие!",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            С <span className="text-blue-600">"ПростоБюро"</span> всё просто и прозрачно
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пошаговый процесс работы — никаких сюрпризов, только результат
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                    <div className="w-0 h-0 border-l-8 border-l-blue-300 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-8 -mt-0.5"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">⏰ Среднее время запуска</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1-2 дня</div>
                <div className="text-gray-700">Анализ и подготовка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1 день</div>
                <div className="text-gray-700">Подписание договора</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3-5 дней</div>
                <div className="text-gray-700">Полный запуск работ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
