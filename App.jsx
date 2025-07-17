import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Bot, 
  MessageCircle, 
  Instagram, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Zap,
  Target,
  BarChart3,
  Play,
  MessageSquare,
  UserCheck,
  Calendar,
  Lightbulb
} from 'lucide-react';
import logoImage from './assets/logo.png';
import matijaImage from './assets/matija.webp';
import caseStudyVideo from './assets/case-study-video.mp4';
import chatbotCaseStudyVideo from './assets/chatbot-case-study.mp4';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="INVOX.AI Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold gradient-text">INVOX.AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Usluge
              </button>
              <button onClick={() => scrollToSection('case-study')} className="text-foreground hover:text-primary transition-colors">
                Case Study
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                O nama
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Kontakt
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="gradient-bg text-white">
              Kontaktiraj nas
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section section-padding pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 gradient-bg text-white">AI Automatizacije</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformišemo vaš biznis sa{' '}
              <span className="gradient-text">AI automatizacijama</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Pomažemo lokalnim biznisima da najbolje iskoriste svoj potencijal kroz napredne AI tehnologije i automatizacije
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="gradient-bg text-white text-lg px-8 py-6">
                Zakažite konsultaciju
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('case-study')} className="text-lg px-8 py-6 logo-accent border-primary-blue text-primary-blue">
                Pogledajte rezultate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-float stats-card-dark p-8 rounded-xl shadow-lg">
              <div className="stats-number">150%</div>
              <p className="text-lg text-gray-200">Povećanje angažmana</p>
            </div>
            <div className="animate-float stats-card-dark p-8 rounded-xl shadow-lg" style={{ animationDelay: '1s' }}>
              <div className="stats-number-alt">24/7</div>
              <p className="text-lg text-gray-200">Dostupnost za klijente</p>
            </div>
            <div className="animate-float stats-card-dark p-8 rounded-xl shadow-lg" style={{ animationDelay: '2s' }}>
              <div className="stats-number">250%</div>
              <p className="text-lg text-gray-200">ROI povrat investicije</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-bg-alt text-white">Naše Usluge</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI rešenja koja <span className="gradient-text-alt">transformišu</span> vaš biznis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specijalizovani smo za kreiranje AI automatizacija koje donose konkretne rezultate i povećavaju profitabilnost
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* AI Chatbotovi - First, full width */}
            <Card className="service-card-purple">
              <CardHeader>
                <Bot className="h-12 w-12 primary-purple mb-4" />
                <CardTitle className="text-2xl">AI Chatbotovi</CardTitle>
                <CardDescription>
                  Inteligentni chatbotovi koji prodaju umesto vas 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {/* Text content - left on desktop */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-dark-gray">Problemi koje rešavamo:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Gubljenje klijenata van radnog vremena</li>
                        <li>• Ponavljanje istih odgovora</li>
                        <li>• Nemogućnost kvalifikovanja lidova</li>
                        <li>• Propuštene prodajne prilike</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold primary-purple">Finansijske dobiti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 dostupnost</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automatska kvalifikacija lidova</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />25-35% povećanje konverzije</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />50-100+ novih lidova mesečno</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personalizovane preporuke</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Video content - right on desktop */}
                  <div className="lg:order-last">
                    <h4 className="font-semibold primary-purple mb-2">Primer: Klima Servis</h4>
                    <div className="chatbot-video-container">
                      <video 
                        controls 
                        className="w-full h-auto"
                      >
                        <source src={chatbotCaseStudyVideo} type="video/mp4" />
                        Vaš browser ne podržava video tag.
                      </video>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      AI chatbot pita pitanja, preporučuje klimu i kvalifikuje lidove automatski
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram and WhatsApp side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Instagram Automatizacije */}
              <Card className="service-card-blue">
                <CardHeader>
                  <Instagram className="h-12 w-12 primary-blue mb-4" />
                  <CardTitle className="text-2xl">Instagram Automatizacije</CardTitle>
                  <CardDescription>
                    Automatizujemo vaše Instagram aktivnosti 24/7
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-dark-gray">Problemi koje rešavamo:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Nedoslednost u objavljivanju</li>
                        <li>• Sporo odgovaranje na poruke</li>
                        <li>• Propuštene prilike za konverziju</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold primary-blue">Finansijske dobiti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />150-250% povećanje angažmana</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />10-20 novih lidova mesečno</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />15+ sati uštede nedeljno</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />25-40% povećanje konverzije</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Automatizacije */}
              <Card className="service-card-mixed">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 primary-blue mb-4" />
                  <CardTitle className="text-2xl">WhatsApp Automatizacije</CardTitle>
                  <CardDescription>
                    Follow-up sekvence i retargeting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-dark-gray">Problemi koje rešavamo:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Zaboravljanje follow-up komunikacije</li>
                        <li>• Manualno slanje podsetnika</li>
                        <li>• Neorganizovana komunikacija</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold primary-blue">Finansijske dobiti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />30% povećanje retention rate</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />200+ automatizovanih kontakata</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />20-30% povećanje repeat sales</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />10+ sati uštede nedeljno</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Chatbot Benefits Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Zašto AI chatbotovi <span className="gradient-text">revolucionišu</span> prodaju?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="service-card-purple text-center">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 primary-purple mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Instant odgovori</h4>
                  <p className="text-sm text-muted-foreground">
                    Klijenti dobijaju odgovore odmah, bez čekanja do sutra
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card-blue text-center">
                <CardContent className="p-6">
                  <UserCheck className="h-12 w-12 primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Kvalifikacija lidova</h4>
                  <p className="text-sm text-muted-foreground">
                    Samo zainteresovani klijenti dolaze do vas
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card-mixed text-center">
                <CardContent className="p-6">
                  <Calendar className="h-12 w-12 primary-purple mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Automatsko zakazivanje</h4>
                  <p className="text-sm text-muted-foreground">
                    Chatbot zakazuje termine i konsultacije
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card-purple text-center">
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Personalizovane preporuke</h4>
                  <p className="text-sm text-muted-foreground">
                    Svaki klijent dobija prilagođen odgovor
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-bg text-white">Case Study</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">20 lidova</span> za 7 dana
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pogledajte kako smo fitness treneru pomogli da automatizuje proces i postigne neverovatne rezultate
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="case-study-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Fitness Trener @misel_bezek</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Target className="h-6 w-6 primary-blue" />
                        <span className="text-lg">20 kvalifikovanih lidova u prvoj nedelji</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-6 w-6 primary-purple" />
                        <span className="text-lg">85% povećanje Instagram reach-a</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="h-6 w-6 primary-blue" />
                        <span className="text-lg">60% povećanje konverzije iz DM-ova</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="h-6 w-6 primary-purple" />
                        <span className="text-lg">Potpuna automatizacija početne komunikacije</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 flex items-center justify-center animate-pulse-slow">
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text">20</div>
                          <div className="text-sm text-muted-foreground">Lidova</div>
                          <div className="text-xs text-muted-foreground">za 7 dana</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="video-container">
                      <video 
                        controls 
                        poster="/api/placeholder/600/400"
                        className="w-full h-auto"
                      >
                        <source src={caseStudyVideo} type="video/mp4" />
                        Vaš browser ne podržava video tag.
                      </video>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Pogledajte detaljnu analizu rezultata u našem case study videu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section dark-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white">O nama</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Stručnost u <span className="gradient-text-alt">AI tehnologijama</span>
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  INVOX.AI agencija se fokusira na kreiranje prilagođenih AI rešenja koja donose konkretne rezultate 
                  i povećavaju profitabilnost vaših poslovnih procesa. Naš tim, predvođen stručnjakom Matijom Ivkovićem, 
                  specijalizovan je za primenu AI tehnologije u lokalnim biznisima.
                </p>
                <p className="text-lg text-gray-200 mb-8">
                  Naša misija je da svaki biznis, bez obzira na veličinu, može da iskoristi moć 
                  veštačke inteligencije za automatizaciju procesa, poboljšanje komunikacije sa 
                  klijentima i povećanje prodaje.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-white">Specijalizacija za lokalne biznise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-white">Prilagođena AI rešenja</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span className="text-white">Konkretni rezultati i ROI</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src={matijaImage} 
                  alt="Matija Ivković" 
                  className="rounded-2xl shadow-2xl max-w-sm mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="section-padding why-ai-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-bg text-white">Zašto AI Automatizacije</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformišite svoj biznis <span className="gradient-text">danas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="problems-card">
              <CardHeader>
                <CardTitle className="text-2xl text-dark-gray">Problemi bez AI automatizacija</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-dark-gray mt-1" />
                    <span>Vremenska ograničenja - previše vremena na repetitivne zadatke</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-dark-gray mt-1" />
                    <span>Nekonzistentnost - ljudska greška dovodi do propuštenih prilika</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-dark-gray mt-1" />
                    <span>Ograničena dostupnost - biznis "spava" kada vi spavate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-dark-gray mt-1" />
                    <span>Skalabilnost - teško održati kvalitet sa rastom broja klijenata</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="benefits-card">
              <CardHeader>
                <CardTitle className="text-2xl primary-purple">Finansijske dobiti sa AI rešenjima</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span><strong>ROI 200-300%</strong> - svaki uloženi dinar donosi 2-3 dinara povrata</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span><strong>Ušteda vremena</strong> - 15-25 sati nedeljno oslobođeno za strategiju</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span><strong>Povećanje prodaje</strong> - 25-50% rast prihoda kroz bolje nurturing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span><strong>Skalabilnost</strong> - 5x više klijenata bez dodatnog osoblja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white">Kontakt</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Spremni ste da transformišete svoj biznis?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Zakažite besplatnu konsultaciju i saznajte kako AI može da unapredi vaš biznis već sutra!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <a 
                href="https://instagram.com/matija.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 logo-accent"
              >
                <Instagram className="h-8 w-8" />
                <div className="text-left">
                  <div className="font-semibold">Instagram</div>
                  <div className="opacity-80">@matija.ai</div>
                </div>
              </a>
              
              <a 
                href="https://wa.me/381656652264" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 logo-accent"
              >
                <Phone className="h-8 w-8" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="opacity-80">+381 65 665 2264</div>
                </div>
              </a>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 logo-accent"
              onClick={() => window.open('https://wa.me/381656652264', '_blank')}
            >
              Zakažite besplatnu konsultaciju
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="service-card-blue border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logoImage} alt="INVOX.AI Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold gradient-text">INVOX.AI</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 INVOX.AI Technology. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

