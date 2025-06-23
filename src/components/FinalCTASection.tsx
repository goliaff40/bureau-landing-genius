
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Запустите проект со скидкой 10% уже сегодня
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Получите готовый сайт, который будет приносить от 50 лидов в месяц. 
            Гарантируем результат или вернем деньги.
          </p>

          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-semibold">Результат за 15 дней</div>
                <div className="text-sm opacity-90">От идеи до 50 лидов/месяц</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">💰</div>
                <div className="font-semibold">0% предоплаты</div>
                <div className="text-sm opacity-90">Оплата по факту результата</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-semibold">Гарантия результата</div>
                <div className="text-sm opacity-90">Или возврат денег</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mr-4 mb-4"
            >
              Запустить Проект со Скидкой 10%
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-bold rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              Получить Бесплатный Аудит
            </Button>
          </div>

          <div className="bg-yellow-400 text-gray-900 inline-block px-8 py-4 rounded-xl font-bold text-lg mb-8">
            🎉 Только до 31 декабря: скидка 10% + бесплатный аудит текущего сайта!
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">📞 Свяжитесь с нами прямо сейчас:</h3>
              <div className="space-y-2">
                <div>☎️ Телефон: <span className="font-semibold">+7 (495) 123-45-67</span></div>
                <div>📧 Email: <span className="font-semibold">hello@webstudio.ru</span></div>
                <div>💬 WhatsApp: <span className="font-semibold">+7 (925) 123-45-67</span></div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">🎯 Что происходит после заявки:</h3>
              <div className="space-y-2 text-sm">
                <div>✓ Звонок в течение 15 минут</div>
                <div>✓ Бесплатный аудит вашего сайта</div>
                <div>✓ Персональная стратегия роста</div>
                <div>✓ Запуск проекта через 3-5 дней</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90">
              🏆 127 успешных проектов. Средний рост конверсии 47%. Присоединяйтесь!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
