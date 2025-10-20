import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const team = [
    { name: 'Алексей Иванов', role: 'Основатель', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/e12135f1-ccda-4e80-a294-87bba9bb8706.jpg' },
    { name: 'Мария Петрова', role: 'Главный кальянщик', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/e12135f1-ccda-4e80-a294-87bba9bb8706.jpg' },
    { name: 'Дмитрий Сидоров', role: 'Менеджер по продажам', image: 'https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/e12135f1-ccda-4e80-a294-87bba9bb8706.jpg' },
  ];

  const values = [
    {
      icon: 'ShieldCheck',
      title: 'Качество',
      description: 'Работаем только с проверенными поставщиками оригинальной продукции'
    },
    {
      icon: 'Heart',
      title: 'Забота о клиентах',
      description: 'Индивидуальный подход к каждому покупателю и профессиональные консультации'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрая доставка и оперативная обработка заказов без задержек'
    },
    {
      icon: 'TrendingUp',
      title: 'Развитие',
      description: 'Постоянно расширяем ассортимент и улучшаем качество обслуживания'
    },
  ];

  const stats = [
    { value: '5000+', label: 'Довольных клиентов' },
    { value: '500+', label: 'Товаров в наличии' },
    { value: '3', label: 'Года на рынке' },
    { value: '6', label: 'Городов доставки' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8">О нас</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground/80 mb-6">
                  <strong>VapeUp</strong> — это современный вейп-шоп с кальянной, работающий на рынке с 2021 года. 
                  Мы создали пространство, где каждый найдет качественную продукцию по доступным ценам.
                </p>
                <p className="text-lg text-foreground/80 mb-6">
                  Наша миссия — предоставлять клиентам только оригинальную продукцию от проверенных 
                  производителей и создавать комфортную атмосферу для отдыха в нашей кальянной.
                </p>
                <p className="text-lg text-foreground/80">
                  Мы гордимся тем, что помогаем людям делать осознанный выбор и всегда готовы 
                  проконсультировать по любым вопросам.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/33594ccd-314e-433c-b60e-e330ca040a58/files/e12135f1-ccda-4e80-a294-87bba9bb8706.jpg"
                  alt="VapeUp"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                    <p className="text-foreground/70">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
