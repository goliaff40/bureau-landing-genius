
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  businessType: string;
  currentAccounting: string;
  problems: string;
  preferredContact: string;
}

interface ConsultationFormProps {
  children: React.ReactNode;
}

const ConsultationForm = ({ children }: ConsultationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    businessType: '',
    currentAccounting: '',
    problems: '',
    preferredContact: 'phone'
  });
  const { toast } = useToast();

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string) => {
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
      name: '',
      phone: '',
      email: '',
      company: '',
      businessType: '',
      currentAccounting: '',
      problems: '',
      preferredContact: 'phone'
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.phone;
      case 2:
        return formData.company && formData.businessType;
      case 3:
        return formData.currentAccounting;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Расскажите о себе</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон *</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                type="email"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">О вашем бизнесе</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Название компании *</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="ООО Ромашка"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Сфера деятельности *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.businessType}
                onChange={(e) => handleInputChange('businessType', e.target.value)}
              >
                <option value="">Выберите сферу</option>
                <option value="retail">Розничная торговля</option>
                <option value="services">Услуги</option>
                <option value="production">Производство</option>
                <option value="construction">Строительство</option>
                <option value="it">IT</option>
                <option value="food">Общепит</option>
                <option value="other">Другое</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Текущая ситуация</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Кто сейчас ведет учет? *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.currentAccounting}
                onChange={(e) => handleInputChange('currentAccounting', e.target.value)}
              >
                <option value="">Выберите вариант</option>
                <option value="owner">Веду сам</option>
                <option value="employee">Штатный бухгалтер</option>
                <option value="outsource">Сторонняя компания</option>
                <option value="none">Никто не ведет</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Какие проблемы хотите решить?</label>
              <Textarea
                value={formData.problems}
                onChange={(e) => handleInputChange('problems', e.target.value)}
                placeholder="Опишите ваши проблемы с учетом и налогами"
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Как с вами связаться?</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Предпочтительный способ связи</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="mr-2"
                  />
                  Телефонный звонок
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="mr-2"
                  />
                  Email
                </label>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Что будет дальше:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ Звонок в течение 15 минут</li>
                <li>✓ Бесплатный аудит вашего учета</li>
                <li>✓ Персональное предложение</li>
                <li>✓ Начало работы через 1-2 дня</li>
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
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Бесплатная консультация</DialogTitle>
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

        <div className="flex justify-between mt-6">
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
              className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Отправить заявку
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
