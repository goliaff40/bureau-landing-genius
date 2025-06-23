
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Начните работать с нами уже сегодня со скидкой 50%
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Передайте всю бухгалтерию профессионалам и сосредоточьтесь на развитии бизнеса. 
            Первый месяц — со скидкой 50%.
          </p>

          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">💰</div>
                <div className="font-semibold">Экономия 15% на налогах</div>
                <div className="text-sm opacity-90">Легальная оптимизация</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">⏰</div>
                <div className="font-semibold">20+ часов в месяц</div>
                <div className="text-sm opacity-90">Возвращаем ваше время</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-semibold">0 штрафов</div>
                <div className="text-sm opacity-90">Гарантия или возмещение</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mr-4 mb-4"
            >
              Начать Работу со Скидкой 50%
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-bold rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              Получить Бесплатную Консультацию
            </Button>
          </div>

          <div className="bg-yellow-400 text-gray-900 inline-block px-8 py-4 rounded-xl font-bold text-lg mb-8">
            🎉 Только до 31 декабря: первый месяц со скидкой 50%!
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">📞 Свяжитесь с нами прямо сейчас:</h3>
              <div className="space-y-2">
                <div>☎️ Телефон: <span className="font-semibold">+7 (495) 123-45-67</span></div>
                <div>📧 Email: <span className="font-semibold">hello@prostoburo.ru</span></div>
                <div>💬 WhatsApp: <span className="font-semibold">+7 (925) 123-45-67</span></div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">🎯 Что происходит после заявки:</h3>
              <div className="space-y-2 text-sm">
                <div>✓ Звонок в течение 15 минут</div>
                <div>✓ Бесплатный аудит вашего учета</div>
                <div>✓ Персональное предложение</div>
                <div>✓ Начало работы через 1-2 дня</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90">
              🏆 250+ довольных клиентов. 15% экономия на налогах. 10 лет опыта. Присоединяйтесь!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
