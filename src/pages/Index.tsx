import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCity, setSelectedCity] = useState('moscow');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = {
    vapes: [
      { id: 1, name: 'VAPE PRO X', price: '3 990 ₽', flavor: 'Ледяная мята', puffs: '5000' },
      { id: 2, name: 'VAPE ULTRA', price: '4 590 ₽', flavor: 'Манго-маракуя', puffs: '7000' },
      { id: 3, name: 'VAPE MINI', price: '2 490 ₽', flavor: 'Вишня', puffs: '3000' },
      { id: 4, name: 'VAPE MAX', price: '5 990 ₽', flavor: 'Ягодный микс', puffs: '10000' },
    ],
    hookahs: [
      { id: 1, name: 'HOOKAH PREMIUM', price: '12 990 ₽', height: '70см', type: 'Стеклянный' },
      { id: 2, name: 'HOOKAH CLASSIC', price: '8 490 ₽', height: '60см', type: 'Металл' },
      { id: 3, name: 'HOOKAH MINI', price: '5 990 ₽', height: '40см', type: 'Портативный' },
    ],
    energy: [
      { id: 1, name: 'ENERGY BOOST', price: '199 ₽', volume: '500мл', caffeine: '160мг' },
      { id: 2, name: 'ENERGY MAX', price: '249 ₽', volume: '500мл', caffeine: '200мг' },
      { id: 3, name: 'ENERGY LITE', price: '149 ₽', volume: '330мл', caffeine: '100мг' },
      { id: 4, name: 'ENERGY ZERO', price: '179 ₽', volume: '500мл', caffeine: '140мг' },
    ],
  };

  const cities = [
    { value: 'moscow', label: 'Москва' },
    { value: 'spb', label: 'Санкт-Петербург' },
    { value: 'kazan', label: 'Казань' },
    { value: 'ekb', label: 'Екатеринбург' },
    { value: 'nsk', label: 'Новосибирск' },
  ];

  const reviews = [
    { id: 1, name: 'Алексей', rating: 5, text: 'Отличный магазин! Быстрая доставка, качественный товар.' },
    { id: 2, name: 'Мария', rating: 5, text: 'Кальянная просто огонь! Атмосфера и обслуживание на высоте.' },
    { id: 3, name: 'Дмитрий', rating: 4, text: 'Большой выбор вейпов, консультанты помогли с выбором.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">VapeUp</h1>
            
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'hookah', label: 'Кальянная' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'about', label: 'О нас' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[180px] bg-card border-primary/30">
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
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-neon-purple to-neon-magenta text-white border-0">
                🔥 Новинки 2025
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Вейпы,</span>
                <br />
                <span className="text-neon-magenta">Кальяны,</span>
                <br />
                <span className="text-neon-orange">Энергетики</span>
              </h2>
              <p className="text-xl text-foreground/80">
                Доставка по всей России. Оригинальная продукция. Гарантия качества.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-magenta hover:opacity-90 text-white neon-glow"
                  onClick={() => scrollToSection('catalog')}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Перейти в каталог
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => scrollToSection('hookah')}
                >
                  <Icon name="Flame" className="mr-2" size={20} />
                  Кальянная
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-magenta/30 blur-3xl rounded-full" />
              <img
                src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/035954af-be7c-466a-80cd-97d674c0f9b2.jpg"
                alt="Vape Product"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Каталог продукции
          </h2>

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Cigarette" className="text-neon-purple" size={32} />
                <h3 className="text-3xl font-bold text-neon-purple">Вейпы</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.vapes.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:scale-105 transition-transform duration-300 bg-card border-primary/20 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-neon-purple/20 to-neon-magenta/20 flex items-center justify-center">
                      <Icon name="Wind" size={64} className="text-primary opacity-50" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                      <div className="space-y-2 text-sm text-foreground/70 mb-4">
                        <p>Вкус: {product.flavor}</p>
                        <p>Затяжек: {product.puffs}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neon-purple">{product.price}</span>
                        <Button size="sm" className="bg-neon-purple hover:bg-neon-purple/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Flame" className="text-neon-orange" size={32} />
                <h3 className="text-3xl font-bold text-neon-orange">Кальяны</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.hookahs.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:scale-105 transition-transform duration-300 bg-card border-primary/20 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-neon-orange/20 to-neon-magenta/20 flex items-center justify-center">
                      <Icon name="Flame" size={64} className="text-neon-orange opacity-50" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                      <div className="space-y-2 text-sm text-foreground/70 mb-4">
                        <p>Высота: {product.height}</p>
                        <p>Тип: {product.type}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neon-orange">{product.price}</span>
                        <Button size="sm" className="bg-neon-orange hover:bg-neon-orange/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Zap" className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-bold text-neon-cyan">Энергетики</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.energy.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:scale-105 transition-transform duration-300 bg-card border-primary/20 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      <Icon name="Zap" size={64} className="text-neon-cyan opacity-50" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                      <div className="space-y-2 text-sm text-foreground/70 mb-4">
                        <p>Объем: {product.volume}</p>
                        <p>Кофеин: {product.caffeine}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neon-cyan">{product.price}</span>
                        <Button size="sm" className="bg-neon-cyan hover:bg-neon-cyan/90">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hookah" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/c0b18a8a-840e-4142-9f9e-97e93683d492.jpg"
              alt="Hookah Lounge"
              className="rounded-2xl shadow-2xl"
            />
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Наша кальянная</h2>
              <p className="text-lg text-foreground/80">
                Уютная атмосфера с неоновыми акцентами. Более 50 вкусов премиального табака.
                Профессиональные кальянщики с опытом более 5 лет.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-card/50 border-neon-purple/30">
                  <Icon name="Clock" className="text-neon-purple mb-2" size={24} />
                  <p className="font-semibold">Работаем до 2:00</p>
                </Card>
                <Card className="p-4 bg-card/50 border-neon-magenta/30">
                  <Icon name="Users" className="text-neon-magenta mb-2" size={24} />
                  <p className="font-semibold">До 20 гостей</p>
                </Card>
                <Card className="p-4 bg-card/50 border-neon-orange/30">
                  <Icon name="Wifi" className="text-neon-orange mb-2" size={24} />
                  <p className="font-semibold">Бесплатный Wi-Fi</p>
                </Card>
                <Card className="p-4 bg-card/50 border-neon-cyan/30">
                  <Icon name="Music" className="text-neon-cyan mb-2" size={24} />
                  <p className="font-semibold">Live DJ</p>
                </Card>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-neon-orange to-neon-magenta text-white">
                Забронировать столик
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Доставка по России
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card border-primary/20">
              <Icon name="Truck" className="mx-auto text-neon-purple mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">Быстрая доставка</h3>
              <p className="text-foreground/70">По Москве — 2-4 часа, по России — 2-5 дней</p>
            </Card>
            <Card className="p-6 text-center bg-card border-primary/20">
              <Icon name="ShieldCheck" className="mx-auto text-neon-magenta mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
              <p className="text-foreground/70">Только оригинальная продукция от проверенных брендов</p>
            </Card>
            <Card className="p-6 text-center bg-card border-primary/20">
              <Icon name="Gift" className="mx-auto text-neon-orange mb-4" size={48} />
              <h3 className="font-bold text-xl mb-2">Бонусы и скидки</h3>
              <p className="text-foreground/70">Накопительная система лояльности для постоянных клиентов</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">О нас</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            VapeUp — это современный магазин вейп-продукции с кальянной в самом сердце города.
            Мы работаем с 2020 года и за это время обслужили более 10 000 довольных клиентов.
            Наша миссия — предоставить качественную продукцию по честным ценам с профессиональным
            сервисом. У нас вы найдете широкий выбор вейпов, кальянов и энергетиков от ведущих
            мировых брендов.
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 bg-card border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-neon-orange fill-neon-orange" size={20} />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4">{review.text}</p>
                <p className="font-semibold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-primary/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-neon-purple mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-foreground/70">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-neon-magenta mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-foreground/70">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-neon-orange mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/70">info@vapezone.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-neon-cyan mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-foreground/70">Ежедневно с 10:00 до 02:00</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-card border-primary/20">
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center text-foreground/60">
          <p>© 2025 VapeUp. Все права защищены.</p>
          <p className="text-sm mt-2">Продукция предназначена для лиц старше 18 лет</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;