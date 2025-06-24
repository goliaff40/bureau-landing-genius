
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

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
      description: "Мы свяжемся с вами в течение 15 минут",
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
            <h3 className="text-xl font-semibold text-center mb-4">Оставьте номер телефона</h3>
            <p className="text-center text-gray-600 mb-8">
              Перезвоним в течение 15 минут и предложим решение именно для вашей ситуации
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
              <h4 className="font-semibold text-green-800 mb-2 text-center">Что будет дальше:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ Звонок в течение 15 минут</li>
                <li>✓ Бесплатный аудит вашего учета</li>
                <li>✓ Персональное предложение</li>
                <li>✓ Экономия 15% на налогах</li>
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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Бесплатная консультация</DialogTitle>
        </DialogHeader>
        
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
              Получить консультацию
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
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
