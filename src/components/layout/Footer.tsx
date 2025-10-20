import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">VapeUp</h3>
            <p className="text-foreground/70 mb-4">
              Вейп-шоп с кальянной и энергетиками. Доставка по всей России.
            </p>
            <div className="flex gap-3">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/hookah" className="hover:text-primary transition-colors">Кальянная</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/delivery" className="hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Вологда, ул. Пугачева, д. 71
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 900 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@vapeup.ru" className="hover:text-primary transition-colors">
                  info@vapeup.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-foreground/60 text-sm">
          <p>© 2024 VapeUp. Все права защищены.</p>
          <p className="mt-2">18+ Продажа табачной продукции несовершеннолетним запрещена</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
