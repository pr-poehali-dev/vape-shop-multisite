import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Скидка 20% на все одноразки',
      subtitle: 'Акция действует до конца месяца',
      image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/9e0c7025-da3f-4d44-bfe1-8335508a67c5.jpg',
      link: '/catalog?category=disposables'
    },
    {
      title: 'Кальянная VapeUp',
      subtitle: 'Уютная атмосфера и премиум табак',
      image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg',
      link: '/hookah'
    },
    {
      title: 'Новая коллекция вейпов',
      subtitle: 'Самые современные устройства 2024',
      image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/10ed0287-e14d-483d-b16f-b3c6fc98a672.jpg',
      link: '/catalog?category=vapes'
    }
  ];

  const popularProducts = [
    { id: 1, name: 'Elf Bar BC5000', category: 'Одноразки', price: '990 ₽', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/9e0c7025-da3f-4d44-bfe1-8335508a67c5.jpg', badge: 'Хит' },
    { id: 2, name: 'VAPE PRO X', category: 'Вейпы', price: '3 990 ₽', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/10ed0287-e14d-483d-b16f-b3c6fc98a672.jpg', badge: 'Новинка' },
    { id: 3, name: 'HOOKAH PREMIUM', category: 'Кальяны', price: '12 990 ₽', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg', badge: 'Premium' },
    { id: 4, name: 'URBN Premium', category: 'Жижа', price: '490 ₽', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/7511ed57-2dbd-4d17-9c94-cddc73e5f84a.jpg', badge: 'Хит' },
  ];

  const features = [
    { icon: 'Truck', title: 'Быстрая доставка', description: 'По всей России от 1 дня' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', description: 'Только оригинальная продукция' },
    { icon: 'Clock', title: 'Работаем 24/7', description: 'Круглосуточный приём заказов' },
    { icon: 'Gift', title: 'Бонусная программа', description: 'Накопительные скидки до 15%' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                        {slide.subtitle}
                      </p>
                      <Link to={slide.link}>
                        <Button size="lg" className="gap-2">
                          Подробнее
                          <Icon name="ArrowRight" size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <Icon name="ChevronRight" size={24} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Популярные товары</h2>
            <Link to="/catalog">
              <Button variant="outline" className="gap-2">
                Весь каталог
                <Icon name="ArrowRight" size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Badge className="absolute top-3 right-3 z-10">{product.badge}</Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/60 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button size="sm" className="gap-2">
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Кальянная VapeUp
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  Уютная атмосфера, премиум табак и профессиональные кальянщики. 
                  Забронируйте столик и насладитесь незабываемым вечером!
                </p>
                <ul className="space-y-3 mb-8">
                  {['50+ видов табака', 'Уютные VIP-кабинки', 'Настольные игры', 'Бесплатный Wi-Fi'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/hookah">
                  <Button size="lg" className="gap-2">
                    Забронировать столик
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg"
                  alt="Кальянная"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
