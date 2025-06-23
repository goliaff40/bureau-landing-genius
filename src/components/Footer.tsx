
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">ПростоБюро</h3>
              <p className="text-gray-300 text-lg">Бухгалтерия и Юруслуги для бизнеса без хлопот</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+74951234567" className="hover:text-blue-400 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📧</span>
                <a href="mailto:info@prostoburo.ru" className="hover:text-blue-400 transition-colors">
                  info@prostoburo.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span>ВК</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span>WA</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span>TG</span>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Бухгалтерское обслуживание</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Юридическое сопровождение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кадровый учет</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Регистрация ИП/ООО</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Налоговое планирование</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 ПростоБюро. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>ИНН: 7701234567 | ОГРН: 1234567890123</p>
            <p>Лицензия на осуществление аудиторской деятельности № 12345678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
