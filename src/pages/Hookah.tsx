import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Hookah = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const menu = [
    { id: 1, name: 'Классический микс', price: '1 200 ₽', description: 'Двойное яблоко, мята', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
    { id: 2, name: 'Фруктовый взрыв', price: '1 400 ₽', description: 'Манго, маракуя, персик', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
    { id: 3, name: 'Ягодный рай', price: '1 500 ₽', description: 'Клубника, черника, малина', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
    { id: 4, name: 'Цитрусовая свежесть', price: '1 300 ₽', description: 'Грейпфрут, лимон, мята', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
    { id: 5, name: 'Премиум авторский', price: '2 000 ₽', description: 'Эксклюзивный микс от шефа', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
    { id: 6, name: 'Освежающий', price: '1 350 ₽', description: 'Огурец, мята, лёд', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg' },
  ];

  const features = [
    { icon: 'Sparkles', title: '50+ видов табака', description: 'Лучшие мировые бренды' },
    { icon: 'Users', title: 'VIP-кабинки', description: 'Приватная атмосфера' },
    { icon: 'Gamepad2', title: 'Настольные игры', description: 'Большая коллекция игр' },
    { icon: 'Wifi', title: 'Бесплатный Wi-Fi', description: 'Высокая скорость' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Бронирование отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <section className="relative h-[400px] mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img
            src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg"
            alt="Кальянная"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
                Кальянная VapeUp
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
                Уютная атмосфера, премиум табак и профессиональные кальянщики
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-8">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-8">Меню кальянов</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menu.map((item) => (
                <Card key={item.id} className="group hover:shadow-2xl transition-all">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-foreground/60 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <Button size="sm">Заказать</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Забронировать столик</h2>
                <p className="text-foreground/70 mb-6">
                  Заполните форму, и мы свяжемся с вами для подтверждения бронирования
                </p>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Input
                        id="time"
                        type="time"
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Icon name="Calendar" size={18} />
                    Забронировать
                  </Button>
                </form>
              </div>

              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg"
                  alt="Интерьер кальянной"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hookah;
