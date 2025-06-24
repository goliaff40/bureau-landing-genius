
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Check, Gift, Percent } from "lucide-react";

interface FormData {
  businessType: string;
  currentSolution: string;
  mainChallenge: string;
  teamSize: string;
  phone: string;
}

interface ConsultationFormProps {
  children: React.ReactNode;
}

const ConsultationForm = ({ children }: ConsultationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    currentSolution: '',
    mainChallenge: '',
    teamSize: '',
    phone: ''
  });
  const { toast } = useToast();

  const totalSteps = 5;

  // Рассчитываем скидку и бонусы на основе заполненных шагов
  const getDiscountAndBonuses = () => {
    const completedSteps = [
      formData.businessType,
      formData.currentSolution,
      formData.mainChallenge,
      formData.teamSize
    ].filter(Boolean).length;

    const discounts = [0, 15, 25, 35, 50];
    const bonuses = [
      [],
      ['Бесплатная настройка'],
      ['Бесплатная настройка', 'Консультация юриста'],
      ['Бесплатная настройка', 'Консультация юриста', 'Аудит за прошлый период'],
      ['Бесплатная настройка', 'Консультация юриста', 'Аудит за прошлый период', 'Персональный менеджер']
    ];

    return {
      discount: discounts[completedSteps],
      bonuses: bonuses[completedSteps]
    };
  };

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    toast({
      title: "Заявка отправлена!",
      description: "Персональное предложение отправим в WhatsApp в течение 15 минут",
    });
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      businessType: '',
      currentSolution: '',
      mainChallenge: '',
      teamSize: '',
      phone: ''
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessType !== '';
      case 2:
        return formData.currentSolution !== '';
      case 3:
        return formData.mainChallenge !== '';
      case 4:
        return formData.teamSize !== '';
      case 5:
        return formData.phone !== '';
      default:
        return false;
    }
  };

  const { discount, bonuses } = getDiscountAndBonuses();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-8">Какой у вас тип бизнеса?</h3>
            <div className="grid gap-3">
              {[
                'ИП',
                'ООО',
                'Самозанятый',
                'Планирую открыть бизнес'
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('businessType', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.businessType === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-8">Как сейчас ведете учет?</h3>
            <div className="grid gap-3">
              {[
                'Веду сам',
                'Штатный бухгалтер',
                'Аутсорс компания',
                'Никак не веду'
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('currentSolution', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.currentSolution === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-8">Что больше всего беспокоит?</h3>
            <div className="grid gap-3">
              {[
                'Штрафы от налоговой',
                'Много времени на учет',
                'Путаница с документами',
                'Переплачиваю налоги',
                'Нет времени разбираться'
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('mainChallenge', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.mainChallenge === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-8">Сколько у вас сотрудников?</h3>
            <div className="grid gap-3">
              {[
                'Только я',
                '2-5 человек',
                '6-20 человек',
                'Более 20 человек'
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect('teamSize', option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.teamSize === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-4">Укажите номер для WhatsApp</h3>
            <p className="text-center text-gray-600 mb-8">
              Отправим персональное предложение со скидкой {discount}% в WhatsApp в течение 15 минут. Звонить не будем.
            </p>
            <div>
              <Input
                value={formData.phone}
                onChange={(e) => handleOptionSelect('phone', e.target.value)}
                placeholder="+7 (999) 123-45-67"
                className="text-lg p-4 text-center"
                type="tel"
              />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2 text-center">Что вы получите в WhatsApp:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ Персональное предложение со скидкой {discount}%</li>
                <li>✓ Подробный план работы для вашей ситуации</li>
                <li>✓ Расчет экономии на налогах</li>
                <li>✓ Все включенные бонусы</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Рассчитайте персональную скидку</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Основная форма */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Шаг {currentStep} из {totalSteps}</span>
                <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Назад
              </Button>
              
              {currentStep === totalSteps ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Получить предложение в WhatsApp
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  Далее
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Боковая панель со скидкой и бонусами */}
          <div className="space-y-6">
            {/* Скидка */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-5 h-5" />
                <span className="font-semibold">Ваша скидка</span>
              </div>
              <div className="text-3xl font-bold mb-2">{discount}%</div>
              <div className="text-sm opacity-90">
                {discount === 0 ? 'Ответьте на вопросы, чтобы увеличить скидку' : 
                 discount < 50 ? 'Продолжайте отвечать для увеличения скидки' : 
                 'Максимальная скидка получена!'}
              </div>
            </div>

            {/* Бонусы */}
            <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Ваши бонусы</span>
              </div>
              
              {bonuses.length === 0 ? (
                <div className="text-gray-500 text-sm">
                  Отвечайте на вопросы, чтобы получить бонусы
                </div>
              ) : (
                <div className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-700">{bonus}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {bonuses.length < 4 && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-xs text-green-600 font-medium">
                    Следующий бонус через {4 - bonuses.length} {4 - bonuses.length === 1 ? 'ответ' : 'ответа'}
                  </div>
                </div>
              )}
            </div>

            {/* Гарантии */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Наши гарантии:</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Возмещение всех штрафов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Экономия 15% на налогах</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Результат в первый месяц</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
