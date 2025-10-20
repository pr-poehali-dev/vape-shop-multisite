import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Delivery = () => {
  const [selectedCity, setSelectedCity] = useState('vologda');

  const cities = [
    { value: 'vologda', label: 'Вологда', time: '1-2 часа', price: 'Бесплатно от 2000 ₽' },
    { value: 'kharovsk', label: 'Харовск', time: '1 день', price: '300 ₽' },
    { value: 'nyandoma', label: 'Няндома', time: '1-2 дня', price: '400 ₽' },
    { value: 'sokol', label: 'Сокол', time: '1 день', price: '350 ₽' },
    { value: 'arkhangelsk', label: 'Архангельск', time: '2-3 дня', price: '500 ₽' },
    { value: 'severodvinsk', label: 'Северодвинск', time: '2-3 дня', price: '550 ₽' },
  ];

  const methods = [
    {
      icon: 'Bike',
      title: 'Курьером',
      description: 'Доставка по городу в течение 1-2 часов',
      time: '1-2 часа',
      price: 'Бесплатно от 2000 ₽'
    },
    {
      icon: 'Store',
      title: 'Самовывоз',
      description: 'Забрать заказ из магазина или кальянной',
      time: 'В любое время',
      price: 'Бесплатно'
    },
    {
      icon: 'Truck',
      title: 'СДЭК',
      description: 'Доставка в другие города России',
      time: '3-7 дней',
      price: 'Рассчитывается индивидуально'
    },
  ];

  const conditions = [
    { icon: 'Clock', title: 'Время работы', text: 'Круглосуточный приём заказов' },
    { icon: 'Package', title: 'Упаковка', text: 'Надёжная упаковка всех товаров' },
    { icon: 'CreditCard', title: 'Оплата', text: 'Наличными или картой при получении' },
    { icon: 'RefreshCw', title: 'Возврат', text: 'Обмен и возврат в течение 14 дней' },
  ];

  const getCurrentCity = () => {
    return cities.find(city => city.value === selectedCity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Доставка и оплата</h1>

          <section className="mb-20">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="MapPin" size={32} className="text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Выберите ваш город</h2>
                    <p className="text-foreground/70">Мы доставляем по следующим городам</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {getCurrentCity() && (
                    <div className="bg-background rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground/70">Срок доставки:</span>
                        <Badge variant="secondary">{getCurrentCity()?.time}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/70">Стоимость:</span>
                        <Badge>{getCurrentCity()?.price}</Badge>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-8">Способы доставки</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methods.map((method, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={method.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{method.title}</h3>
                    <p className="text-foreground/70 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Срок:</span>
                        <span className="font-medium">{method.time}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Стоимость:</span>
                        <span className="font-medium text-primary">{method.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-8">Условия</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={condition.icon as any} size={28} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{condition.title}</h3>
                    <p className="text-sm text-foreground/70">{condition.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Зоны доставки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      Бесплатная доставка
                    </h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1" />
                        <span>Вологда — при заказе от 2000 ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1" />
                        <span>Самовывоз из магазина — всегда бесплатно</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Truck" size={20} className="text-primary" />
                      Платная доставка
                    </h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1" />
                        <span>Другие города — фиксированная стоимость</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1" />
                        <span>СДЭК — расчёт по тарифам перевозчика</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
