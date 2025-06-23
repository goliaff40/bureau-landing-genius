
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько стоит ваше обслуживание?",
      answer: "Стоимость зависит от вашего статуса (ИП/ООО), системы налогообложения и количества операций. Тарифы начинаются от 3 500 ₽/мес для ИП на УСН. Точную цену назовем после бесплатной консультации и анализа вашей ситуации."
    },
    {
      question: "Как быстро вы сможете начать работу с моей компанией?",
      answer: "Обычно мы запускаем обслуживание в течение 3-5 рабочих дней после подписания договора. Экстренные случаи (проверки, срочная отчетность) можем взять в работу уже на следующий день."
    },
    {
      question: "Как я буду контролировать работу бухгалтера?",
      answer: "У вас будет доступ к личному кабинету 24/7, где отображается статус всех задач в реальном времени. Плюс персональный менеджер на связи в рабочее время и ежемесячные отчеты о проделанной работе."
    },
    {
      question: "Что входит в вашу гарантию?",
      answer: "Мы возмещаем все штрафы и пени, возникшие по нашей вине (прописано в договоре). Максимальная сумма страхового покрытия — 500 000 ₽. Также гарантируем сдачу всей отчетности точно в срок."
    },
    {
      question: "Можете ли вы помочь, если у меня уже есть проблемы с ИФНС?",
      answer: "Да, у нас есть опытные юристы, которые специализируются на налоговых спорах. Мы поможем разобраться с долгами, представим ваши интересы при проверке, поможем снизить штрафы или добиться их отмены."
    },
    {
      question: "Чем вы лучше штатного бухгалтера?",
      answer: "Штатный бухгалтер стоит от 50 000 ₽/мес + налоги и отпуска. У нас вы получаете целую команду (бухгалтер + юрист + менеджер) за 8 500 ₽/мес, плюс финансовая гарантия и актуальные знания законодательства."
    },
    {
      question: "Работаете ли вы с моей отраслью?",
      answer: "Мы работаем с большинством видов деятельности: торговля, услуги, производство, IT, строительство, общепит. Не работаем только с банками, страховыми и лицензированными видами деятельности, требующими специальной отчетности."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Отвечаем на <span className="text-blue-600">ваши вопросы</span>
          </h2>
          <p className="text-xl text-gray-600">
            Закрываем основные сомнения и развеиваем страхи
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Остались вопросы?</h3>
            <p className="text-gray-600 mb-6">Получите персональную консультацию нашего специалиста</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74951234567" className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                📞 Позвонить сейчас
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                💬 Написать в WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
