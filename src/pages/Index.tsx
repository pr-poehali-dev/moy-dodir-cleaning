import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setName("");
    setPhone("");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Sparkles" size={28} className="text-secondary" />
              МойДоДыр
            </h1>
            <div className="hidden md:flex gap-6">
              {["О компании", "Услуги", "Этапы работы", "Отзывы", "Контакты"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Широкий спектр клининговых услуг
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Уборка на дом</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы справимся с любыми загрязнениями в помещении и оставим после клининга только чистоту и хорошее
              настроение
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("контакты")}
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto animate-slide-up">
            За 6 лет работы мы были вознаграждены большим опытом уборочных процессов и вашим доверием!
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "Zap",
                title: "Быстро",
                description: "Мы знаем, как создать в вашем доме ощущение чистоты в кратчайшие сроки",
              },
              {
                icon: "CheckCircle2",
                title: "Качественно",
                description: "Мы используем только гипоаллергенные средства для уборки высшего качества",
              },
              {
                icon: "Shield",
                title: "Надежно",
                description: "Все клинеры работают в штате компании, проходят тщательную проверку и профессиональное обучение",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наш персонал — самые лучшие мастера своего дела из всех! Поэтому всегда выбирают нас!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Генеральная уборка",
                duration: "от 6 до 8 часов",
                price: "от 4 250 руб",
                features: [
                  "Вытираем пыль на всех доступных поверхностях",
                  "Раскладываем вещи по местам",
                  "Моем пол и подоконники, чистим ковровые покрытия пылесосом",
                  "Моем все поверхности на кухне, посуду и холодильник",
                  "Убираем ванну и туалет, чистим ванну, раковину, унитаз",
                ],
              },
              {
                title: "Поддерживающая уборка",
                duration: "от 2 до 4 часов",
                price: "от 3 500 руб",
                features: [
                  "Вытираем пыль на всех доступных поверхностях",
                  "Раскладываем вещи по местам",
                  "Моем пол и подоконники, чистим ковровые покрытия пылесосом",
                  "Моем все поверхности на кухне, посуду и холодильник",
                  "Убираем ванну и туалет, чистим ванну, раковину, унитаз",
                  "Обеспыливаем люстры во всей квартире",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all border-2 hover:border-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-white/90 text-lg">{service.duration}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2">
                        <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-gray-50">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button onClick={() => scrollToSection("контакты")}>ЗАКАЗАТЬ</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="этапы-работы" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Как мы работаем</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Заявка", description: "Оставьте заявку на нашем сайте или по телефону", icon: "FileText" },
              { step: "2", title: "Подтверждение", description: "Менеджер свяжется с вами для уточнения деталей", icon: "Phone" },
              { step: "3", title: "Уборка", description: "Наши клинеры приедут в ближайшее время", icon: "Sparkles" },
              { step: "4", title: "Оплата", description: "Вы принимаете работу после проверки и оплачиваете", icon: "CreditCard" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Остались вопросы?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { number: "1600+", label: "Убранных домов", description: "Мы вернем вашему дому чистоту и презентабельный вид в кратчайшие сроки" },
              { number: "95%", label: "Хороших отзывов", description: "За 6 лет работы мы были вознаграждены большим опытом уборочных процессов и вашим доверием" },
              { number: "40+", label: "Видов услуг", description: "Уборка в среднем длится от 3 до 8 часов и включает в себя более 40 видов работ" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white/80 backdrop-blur animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">{stat.number}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы</h3>
          <div className="max-w-3xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle>Лена</CardTitle>
                    <CardDescription>Главный менеджер</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Клинер была вовремя и я в восторге от ее работы. Во первых, очень тщательно. Во вторых, промыла даже труднодоступные места. А уж про технику на кухне: она теперь такая, как когда я ее покупала. Все разводы, капли, загрязнения исчезли. Рекомендую.
                </p>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-primary">МойДоДыр номер 1 среди всех клининговых компаний</p>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h3>
          <p className="text-center text-muted-foreground mb-12">Оставляйте заявку — мы вам перезвоним и подробно ответим на них</p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Новочеркасск, Ростовский Выезд 16</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:+79604583084" className="text-primary hover:underline">
                      +7 960-458-30-84
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:dimka.konovalov207@gmail.com" className="text-primary hover:underline">
                      dimka.konovalov207@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">График работы</p>
                    <p className="text-muted-foreground">пн-пт: 9:00-18:00</p>
                    <p className="text-muted-foreground">сб-вс: 10:00-16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 123 45 77"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 МойДоДыр. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;