
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🏆",
      title: "Опыт 10+ лет",
      description: "Работаем с ИП и ООО с 2013 года. Знаем все подводные камни.",
      highlight: "Более 10 000 сданных отчетов"
    },
    {
      icon: "👨‍💼",
      title: "Персональный менеджер",
      description: "Ваш единый контакт по всем вопросам: бухгалтерия и право.",
      highlight: "Один номер для всех вопросов"
    },
    {
      icon: "💰",
      title: "Финансовая гарантия",
      description: "Возмещаем штрафы и пени, возникшие по нашей вине (прописано в договоре).",
      highlight: "До 500 000 ₽ страхование"
    },
    {
      icon: "💻",
      title: "Цифровой офис 24/7",
      description: "Все документы и отчеты онлайн. Статус задач в реальном времени.",
      highlight: "Доступ из любой точки мира"
    },
    {
      icon: "💎",
      title: "Прозрачные цены",
      description: "Никаких скрытых платежей. Фиксированный тариф под ваши нужды.",
      highlight: "Цена не изменится год"
    },
    {
      icon: "🎯",
      title: "Безлимитные консультации",
      description: "Задавайте вопросы бухгалтеру и юристу сколько угодно.",
      highlight: "В любое время дня и ночи"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Почему более <span className="text-blue-600">250 компаний</span> доверяют "ПростоБюро"?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы не просто ведем учет — мы становимся частью вашей команды и помогаем бизнесу расти
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">{advantage.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">{advantage.description}</p>
              
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {advantage.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-gray-600">Средняя экономия на налогах</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50,000+</div>
              <div className="text-gray-600">Обработанных документов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
