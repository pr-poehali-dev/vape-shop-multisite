import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      text: 'г. Вологда, ул. Пугачева, д. 71',
      link: 'https://maps.google.com'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      text: '+7 900 123-45-67',
      link: 'tel:+79001234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      text: 'info@vapeup.ru',
      link: 'mailto:info@vapeup.ru'
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      text: 'Ежедневно 10:00 - 23:00',
      link: null
    },
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'ВКонтакте', link: 'https://vk.com' },
    { icon: 'Send', name: 'Telegram', link: 'https://t.me' },
    { icon: 'Instagram', name: 'Instagram', link: 'https://instagram.com' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Контакты</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-foreground/70 mb-8">
                Заполните форму, и мы ответим на все ваши вопросы в кратчайшие сроки
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-foreground/70 hover:text-primary transition-colors"
                            >
                              {info.text}
                            </a>
                          ) : (
                            <p className="text-foreground/70">{info.text}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon name={social.icon as any} size={24} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                    <p className="text-lg text-foreground/70">
                      Карта будет здесь
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">
                      г. Вологда, ул. Пугачева, д. 71
                    </p>
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

export default Contacts;
