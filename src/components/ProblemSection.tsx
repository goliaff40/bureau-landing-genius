
const ProblemSection = () => {
  const problems = [
    {
      icon: "⚠️",
      title: "Страх ошибки в отчетности и огромные штрафы от ИФНС",
      description: "Одна ошибка может стоить десятки тысяч рублей штрафов"
    },
    {
      icon: "⏰",
      title: "Потеря времени: часы за 1С, ЗУП, Клиент-Банком",
      description: "Вы тратите время на бумаги вместо работы с клиентами"
    },
    {
      icon: "📚",
      title: "Путаница в меняющемся законодательстве",
      description: "Как не нарушить закон, если он меняется каждый месяц?"
    },
    {
      icon: "⚖️",
      title: "Споры с контрагентами и госорганами",
      description: "Конфликты отнимают силы и деньги вашего бизнеса"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Устали разбираться в бухгалтерии и законах 
            <span className="text-red-500"> вместо развития бизнеса?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы понимаем, с какими проблемами сталкивается каждый предприниматель
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{problem.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <p className="text-2xl font-bold text-red-600 mb-2">Хватит это терпеть!</p>
            <p className="text-gray-700">Передайте эти заботы профессионалам и сосредоточьтесь на росте бизнеса</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
