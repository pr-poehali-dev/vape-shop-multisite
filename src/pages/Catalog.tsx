import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'disposables', name: 'Одноразки', icon: 'Cigarette' },
    { id: 'vapes', name: 'Вейпы', icon: 'Wind' },
    { id: 'liquids', name: 'Жижа', icon: 'Droplet' },
    { id: 'cigarettes', name: 'Сигареты', icon: 'Flame' },
    { id: 'hookahs', name: 'Кальяны', icon: 'Sparkles' },
    { id: 'energy', name: 'Энергетики', icon: 'Zap' },
  ];

  const products = {
    disposables: [
      { id: 1, name: 'Elf Bar BC5000', price: '990 ₽', flavor: 'Арбуз', puffs: '5000', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/9e0c7025-da3f-4d44-bfe1-8335508a67c5.jpg', badge: 'Хит' },
      { id: 2, name: 'Lost Mary BM600', price: '790 ₽', flavor: 'Черника', puffs: '600', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/66140e1c-2a17-4664-b9df-0a7cf5713abd.jpg', badge: null },
      { id: 3, name: 'HQD Cuvie Plus', price: '890 ₽', flavor: 'Манго-лёд', puffs: '1200', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/878b9353-f824-4c8c-b76c-c2e6b9c9618a.jpg', badge: null },
      { id: 4, name: 'Vaporlax Sirius', price: '1090 ₽', flavor: 'Клубника', puffs: '2200', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/9e0c7025-da3f-4d44-bfe1-8335508a67c5.jpg', badge: 'Новинка' },
    ],
    vapes: [
      { id: 1, name: 'VAPE PRO X', price: '3 990 ₽', flavor: 'Ледяная мята', puffs: '5000', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/10ed0287-e14d-483d-b16f-b3c6fc98a672.jpg', badge: 'Новинка' },
      { id: 2, name: 'VAPE ULTRA', price: '4 590 ₽', flavor: 'Манго-маракуя', puffs: '7000', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/10ed0287-e14d-483d-b16f-b3c6fc98a672.jpg', badge: 'Premium' },
      { id: 3, name: 'VAPE MINI', price: '2 490 ₽', flavor: 'Вишня', puffs: '3000', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/10ed0287-e14d-483d-b16f-b3c6fc98a672.jpg', badge: null },
    ],
    liquids: [
      { id: 1, name: 'URBN Premium', price: '490 ₽', volume: '60мл', nicotine: '3мг', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/7511ed57-2dbd-4d17-9c94-cddc73e5f84a.jpg', badge: 'Хит' },
      { id: 2, name: 'Jam Monster', price: '690 ₽', volume: '100мл', nicotine: '6мг', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/7511ed57-2dbd-4d17-9c94-cddc73e5f84a.jpg', badge: null },
      { id: 3, name: 'Naked 100', price: '590 ₽', volume: '60мл', nicotine: '0мг', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/7511ed57-2dbd-4d17-9c94-cddc73e5f84a.jpg', badge: null },
    ],
    cigarettes: [
      { id: 1, name: 'Marlboro Red', price: '250 ₽', type: 'Красные', strength: 'Крепкие', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/94152ad1-7546-4c74-903f-dca3b4eaa28c.jpg', badge: null },
      { id: 2, name: 'Parliament Aqua Blue', price: '280 ₽', type: 'Синие', strength: 'Легкие', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/94152ad1-7546-4c74-903f-dca3b4eaa28c.jpg', badge: null },
    ],
    hookahs: [
      { id: 1, name: 'HOOKAH PREMIUM', price: '12 990 ₽', height: '70см', type: 'Стеклянный', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg', badge: 'Premium' },
      { id: 2, name: 'HOOKAH CLASSIC', price: '8 490 ₽', height: '60см', type: 'Металл', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/19632d2f-5b04-4cfe-af49-07e3864aeb13.jpg', badge: null },
    ],
    energy: [
      { id: 1, name: 'RED BULL', price: '189 ₽', volume: '250мл', caffeine: '80мг', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/ceb1d2a3-57de-4bbe-af0f-380055c01e7a.jpg', badge: 'Хит' },
      { id: 2, name: 'MONSTER', price: '229 ₽', volume: '500мл', caffeine: '160мг', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/ceb1d2a3-57de-4bbe-af0f-380055c01e7a.jpg', badge: null },
    ],
  };

  const getAllProducts = () => {
    return Object.values(products).flat();
  };

  const getDisplayProducts = () => {
    if (activeCategory === 'all') {
      return getAllProducts();
    }
    return products[activeCategory as keyof typeof products] || [];
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Каталог</h1>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getDisplayProducts().map((product: any) => (
              <Card key={`${activeCategory}-${product.id}`} className="group hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 z-10">{product.badge}</Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="text-sm text-foreground/60 mb-3 space-y-1">
                      {product.flavor && <p>Вкус: {product.flavor}</p>}
                      {product.puffs && <p>Затяжек: {product.puffs}</p>}
                      {product.volume && <p>Объем: {product.volume}</p>}
                      {product.nicotine && <p>Никотин: {product.nicotine}</p>}
                      {product.type && <p>Тип: {product.type}</p>}
                      {product.strength && <p>Крепость: {product.strength}</p>}
                      {product.height && <p>Высота: {product.height}</p>}
                      {product.caffeine && <p>Кофеин: {product.caffeine}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button size="sm" className="gap-2">
                        <Icon name="ShoppingCart" size={16} />
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {getDisplayProducts().length === 0 && (
            <div className="text-center py-20">
              <Icon name="PackageX" size={64} className="mx-auto text-foreground/30 mb-4" />
              <p className="text-xl text-foreground/60">Товары не найдены</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
