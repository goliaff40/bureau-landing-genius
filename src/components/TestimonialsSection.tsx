
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Иван Петров",
      position: "Директор",
      company: "ООО «Ромашка»",
      text: "Благодаря 'ПростоБюро' прошли налоговую проверку без доначислений! Сэкономили компании более 300 тыс. руб. Бухгалтер Анна — настоящий профессионал!",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Мария Соколова",
      position: "ИП",
      company: "Салон красоты «Стиль»",
      text: "Освободили меня от кошмара с отчетностью! Теперь у меня есть время заниматься клиентами. За 8 месяцев работы — ни одного штрафа, все четко и в срок.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Алексей Морозов",
      position: "Учредитель",
      company: "IT-компания «ТехноДом»",
      text: "Юристы ПростоБюро помогли выиграть спор с поставщиком на 150 тыс. рублей. Персональный менеджер всегда на связи, консультации действительно безлимитные!",
      avatar: "👨‍💻",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Нас рекомендуют</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные отзывы наших клиентов о конкретных результатах работы
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Нам доверяют компании:</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600">ООО</div>
              <div className="text-sm text-gray-600">«ТехноСервис»</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">ИП</div>
              <div className="text-sm text-gray-600">Козлов А.В.</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600">ООО</div>
              <div className="text-sm text-gray-600">«СтройДом»</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">ИП</div>
              <div className="text-sm text-gray-600">Новикова М.С.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
