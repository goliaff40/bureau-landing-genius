
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      problem: "Страх штрафов",
      solution: "Безупречная отчетность и нулевые штрафы",
      description: "Наши аттестованные бухгалтеры сдают всё вовремя и точно. Гарантия в договоре!",
      icon: "🛡️"
    },
    {
      problem: "Потеря времени",
      solution: "Вернем вам 20+ часов в месяц",
      description: "Забираем на себя всю учетную рутину. Вы занимаетесь бизнесом, а не документами.",
      icon: "⏱️"
    },
    {
      problem: "Путаница в законах",
      solution: "Актуальные знания 24/7",
      description: "Наши юристы следят за всеми изменениями и оперативно предупредят о рисках для ВАШЕГО бизнеса.",
      icon: "📖"
    },
    {
      problem: "Споры",
      solution: "Ваш щит в спорах",
      description: "Представим ваши интересы в ИФНС, суде, перед контрагентами. Сохраним ваши деньги и нервы.",
      icon: "⚖️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Как <span className="text-blue-600">"ПростоБюро"</span> решает ваши проблемы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждую вашу боль мы превращаем в конкурентное преимущество вашего бизнеса
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((item, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="mb-4">
                    <span className="text-red-500 font-semibold">Проблема: </span>
                    <span className="text-gray-700">{item.problem}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">{item.solution}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Результат для вас:</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Экономия времени и денег</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Полное спокойствие</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Фокус на развитии бизнеса</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Хочу Такое Решение
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
