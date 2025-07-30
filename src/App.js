import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const translations = {
  en: {
    title: "Goldstein - Gold Purchase",
    nav: {
      home: "Home",
      watch: "Watch",
      coats: "Coats",
      jewelry: "Jewelry",
      gold: "Gold",
      contact: "Contact"
    },
    hero: {
      title: "PREMIUM GOLD PURCHASE",
      subtitle: "Your Trusted Partner for Valuable Items",
      description: "We specialize in purchasing gold, jewelry, watches, and other valuable items. Professional, discreet, and fair pricing for all your precious possessions."
    },
    availability: {
      title: "Our experts are available to you:",
      days: "Purchase days",
      time: "10:00-17:00"
    },
    goldSection: {
      title: "Gold Purchase",
      description: "We currently pay competitive prices for gold items"
    },
    furSection: {
      title: "Fur and Leather Items",
      description: "We buy leather jackets, leather coats, leather pants and lambskin coats!",
      furCoats: "For fur coats we pay competitive prices",
      disclaimer: "PURCHASE OF FURS AND LEATHER - Only with simultaneous sale of gold. For your fur coat and gold, we offer quick, discreet and honest service."
    },
    weBuy: {
      title: "We Buy:",
      items: [
        "Rings and chains",
        "Gold jewelry",
        "Old gold",
        "Broken gold",
        "White gold",
        "Dental gold (also with tooth)",
        "Silver",
        "Silver cutlery",
        "Sewing machines",
        "Silver jewelry",
        "Designer handbags",
        "Amber jewelry",
        "Coins",
        "Platinum",
        "Tin",
        "Watches",
        "Diamonds",
        "Fashion jewelry",
        "Old art paintings",
        "Leather jackets/coats"
      ]
    },
    coatsSection: {
      title: "Premium Coats Collection",
      subtitle: "We purchase high-quality fur and leather coats",
      description: "From luxurious fur coats to premium leather jackets, we offer competitive prices for all types of outerwear."
    },
    jewelrySection: {
      title: "Exquisite Jewelry Collection",
      subtitle: "Professional jewelry evaluation and purchase",
      description: "We specialize in purchasing all types of jewelry including gold, silver, platinum, and precious stones."
    },
    footer: {
      title: "Goldstein",
      description: "Premium Gold Purchase"
    }
  },
  hr: {
    title: "Goldstein - Otkup zlata",
    nav: {
      home: "Početna",
      watch: "Satovi",
      coats: "Kaputi",
      jewelry: "Nakit",
      gold: "Zlato",
      contact: "Kontakt"
    },
    hero: {
      title: "PREMIJNI OTKUP ZLATA",
      subtitle: "Vaš pouzdani partner za vrijedne predmete",
      description: "Specijalizirani smo za otkup zlata, nakita, satova i drugih vrijednih predmeta. Pružamo profesionalnu, diskretnu i poštenu uslugu za sve vaše dragocjene predmete."
    },
    availability: {
      title: "Naši stručnjaci su vam dostupni:",
      days: "dan otkupa",
      time: "10:00-17:00"
    },
    goldSection: {
      title: "Otkup zlata",
      description: "Trenutno plaćamo konkurentne cijene za zlatne predmete"
    },
    furSection: {
      title: "Krzneni i kožni predmeti",
      description: "Otkupljujemo kožne jakne, kožne kapute, kožne pantalone i kapute od jagnjeće kože!",
      furCoats: "Za krzneni kaput plaćamo konkurentne cijene",
      disclaimer: "OTKUP KRZNA I KOŽE - Samo uz istovremenu prodaju zlata. Za vašu bundu i zlato nudimo brzu, diskretnu i poštenu uslugu."
    },
    weBuy: {
      title: "Kupujemo:",
      items: [
        "Prstenje i lančići",
        "Nakit od zlata",
        "Staro zlato",
        "Lomljeno zlato",
        "Bijelo zlato",
        "Zubno zlato (takođe sa zubom)",
        "Srebro",
        "Srebrni pribor za jelo",
        "Šivaće mašine",
        "Nakit od srebra",
        "Dizajnerske torbice",
        "Nakit od jantara",
        "Kovanice",
        "Platina",
        "Kositar",
        "Satovi",
        "Dijamanti",
        "Modni nakit",
        "Stare umjetničke slike",
        "Kožne jakne/kapute"
      ]
    },
    coatsSection: {
      title: "Premium kolekcija kaputa",
      subtitle: "Otkupljujemo visokokvalitetne krzne i kožne kapute",
      description: "Od luksuznih krznenih kaputa do premium kožnih jakni, nudimo konkurentne cijene za sve vrste gornje odjeće."
    },
    jewelrySection: {
      title: "Ekskluzivna kolekcija nakita",
      subtitle: "Profesionalna procjena i otkup nakita",
      description: "Specijalizirani smo za otkup svih vrsta nakita uključujući zlato, srebro, platinu i drago kamenje."
    },
    footer: {
      title: "Goldstein",
      description: "Premijni otkup zlata"
    }
  },
  de: {
    title: "Goldstein - Goldankauf",
    nav: {
      home: "Startseite",
      watch: "Uhren",
      coats: "Mäntel",
      jewelry: "Schmuck",
      gold: "Gold",
      contact: "Kontakt"
    },
    hero: {
      title: "PREMIUM GOLDANKAUF",
      subtitle: "Ihr vertrauensvoller Partner für wertvolle Gegenstände",
      description: "Wir sind spezialisiert auf den Ankauf von Gold, Schmuck, Uhren und anderen wertvollen Gegenständen. Professioneller Service, diskrete Abwicklung und faire Preisgestaltung für alle Ihre wertvollen Besitztümer."
    },
    availability: {
      title: "Unsere Experten stehen Ihnen zur Verfügung:",
      days: "Ankaufstag",
      time: "10:00-17:00"
    },
    goldSection: {
      title: "Goldankauf",
      description: "Wir zahlen derzeit wettbewerbsfähige Preise für Goldgegenstände."
    },
    furSection: {
      title: "Pelz- und Lederwaren",
      description: "Wir kaufen Lederjacken, Ledermäntel, Lederhosen und Lammfellmäntel!",
      furCoats: "Für Pelzmäntel zahlen wir wettbewerbsfähige Preise.",
      disclaimer: "ANKAUF VON PELZEN UND LEDER – Nur bei gleichzeitigem Verkauf von Gold. Wir bieten eine schnelle, diskrete und faire Abwicklung für Ihren Pelzmantel und Ihr Gold."
    },
    weBuy: {
      title: "Wir kaufen:",
      items: [
        "Ringe und Ketten",
        "Goldschmuck",
        "Altes Gold",
        "Bruchgold",
        "Weißgold",
        "Zahngold (auch mit Zahn)",
        "Silber",
        "Silberbesteck",
        "Nähmaschinen",
        "Silberschmuck",
        "Designer-Taschen",
        "Bernsteinschmuck",
        "Münzen",
        "Platin",
        "Zinn",
        "Uhren",
        "Diamanten",
        "Modeschmuck",
        "Alte Kunstgemälde",
        "Lederjacken/-mäntel"
      ]
    },
    coatsSection: {
      title: "Premium Mäntel-Kollektion",
      subtitle: "Wir kaufen hochwertige Pelz- und Ledermäntel",
      description: "Von luxuriösen Pelzmänteln bis hin zu Premium-Lederjacken bieten wir wettbewerbsfähige Preise für alle Arten von Oberbekleidung."
    },
    jewelrySection: {
      title: "Exklusive Schmuck-Kollektion",
      subtitle: "Professionelle Schmuckbewertung und -ankauf",
      description: "Wir sind spezialisiert auf den Ankauf aller Arten von Schmuck, einschließlich Gold, Silber, Platin und Edelsteinen."
    },
    footer: {
      title: "Goldstein",
      description: "Premium Goldankauf"
    }
  },  
  ro: {
    title: "Goldstein - Cumpărare de aur",
    nav: {
      home: "Acasă",
      watch: "Ceasuri",
      coats: "Paltoane",
      jewelry: "Bijuterii",
      gold: "Aur",
      contact: "Contact"
    },
    hero: {
      title: "CUMPĂRARE DE AUR PREMIUM",
      subtitle: "Partenerul tău de încredere pentru obiecte valoroase",
      description: "Suntem specializați în cumpărarea de aur, bijuterii, ceasuri și alte obiecte valoroase. Oferim un serviciu profesional, discret și prețuri corecte pentru toate bunurile tale prețioase."
    },
    availability: {
      title: "Experții noștri sunt la dispoziția ta:",
      days: "Zi de cumpărare",
      time: "10:00-17:00"
    },
    goldSection: {
      title: "Cumpărare de aur",
      description: "Plătim în prezent prețuri competitive pentru obiectele din aur."
    },
    furSection: {
      title: "Obiecte din blană și piele",
      description: "Cumpărăm jachete din piele, paltoane din piele, pantaloni din piele și paltoane din piele de miel!",
      furCoats: "Pentru paltoanele din blană plătim prețuri competitive.",
      disclaimer: "CUMPĂRAREA BLĂNURILOR ȘI PIELII – Doar împreună cu vânzarea de aur. Pentru paltonul tău din blană și aur oferim un serviciu rapid, discret și corect."
    },
    weBuy: {
      title: "Cumpărăm:",
      items: [
        "Inele și lanțuri",
        "Bijuterii din aur",
        "Aur vechi",
        "Aur spart",
        "Aur alb",
        "Aur dentar (și cu dinte)",
        "Argint",
        "Tacâmuri din argint",
        "Mașini de cusut",
        "Bijuterii din argint",
        "Genți de designer",
        "Bijuterii din chihlimbar",
        "Monede",
        "Platină",
        "Cositor",
        "Ceasuri",
        "Diamante",
        "Bijuterii de modă",
        "Picturi vechi",
        "Jachete/paltoane din piele"
      ]
    },
    coatsSection: {
      title: "Colecția premium de paltoane",
      subtitle: "Cumpărăm paltoane din blană și piele de înaltă calitate",
      description: "De la paltoane luxoase din blană până la jachete premium din piele, oferim prețuri competitive pentru toate tipurile de îmbrăcăminte exterioară."
    },
    jewelrySection: {
      title: "Colecția exclusivă de bijuterii",
      subtitle: "Evaluare și cumpărare profesională de bijuterii",
      description: "Suntem specializați în cumpărarea tuturor tipurilor de bijuterii, inclusiv aur, argint, platină și pietre prețioase."
    },
    footer: {
      title: "Goldstein",
      description: "Cumpărare de aur premium"
    }
  }
  
};

function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  // Function to handle language switching with proper cleanup
  const handleLanguageChange = (newLanguage) => {
    console.log('Switching language to:', newLanguage);
    console.log('Available translations:', Object.keys(translations));
    console.log('Selected translation:', translations[newLanguage]);
    
    // Clear any potential text rendering issues
    document.documentElement.lang = newLanguage;
    document.body.lang = newLanguage;
    
    // Force a re-render to ensure proper text display
    setLanguage(newLanguage);
    
    // Clear any potential browser text rendering cache
    if (window.getComputedStyle) {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.fontFamily) {
          el.style.fontFamily = style.fontFamily;
        }
      });
    }
  };

  // Monitor language changes
  useEffect(() => {
    console.log('Current language:', language);
    console.log('Current translations:', t);
    console.log('Hero subtitle:', t.hero.subtitle);
    console.log('Hero description:', t.hero.description);
  }, [language, t]);

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const navbarRef = useRef(null);
  const availabilityRef = useRef(null);
  const goldRef = useRef(null);
  const coatsRef = useRef(null);
  const jewelryRef = useRef(null);
  const weBuyRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // GSAP Animations
  useEffect(() => {
    // Initial page load animations
    const tl = gsap.timeline();
    
    tl.fromTo(navbarRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(heroRef.current.querySelector('.hero-title'), 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(heroRef.current.querySelector('.hero-card'), 
      { scale: 0.8, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.8"
    )
    .fromTo(heroRef.current.querySelector('.hero-right'), 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.6"
    );

    // Scroll-triggered animations
    gsap.fromTo(availabilityRef.current.querySelectorAll('.availability-card'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: availabilityRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(goldRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: goldRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(coatsRef.current.querySelectorAll('.coat-item'),
      { y: 50, opacity: 0, rotation: -5 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: coatsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(jewelryRef.current.querySelectorAll('.jewelry-item'),
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: jewelryRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(weBuyRef.current.querySelectorAll('.we-buy-item'),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: weBuyRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for interactive elements
    const buttons = document.querySelectorAll('.hero-button, .nav-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Language selector animations
    const langButtons = document.querySelectorAll('.language-selector button');
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        gsap.to(button, { scale: 0.9, duration: 0.1, ease: "power2.out" });
        gsap.to(button, { scale: 1, duration: 0.1, ease: "power2.out", delay: 0.1 });
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [language]); // Re-run animations when language changes

  return (
    <div className="App" lang={language}>
      {/* Navigation */}
      <nav ref={navbarRef} className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-circle">
              <span>G</span>
            </div>
            <span className="logo-text">Goldstein</span>
          </div>
          
          <div className="nav-menu">
            <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>{t.nav.home}</a>
            <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>{t.nav.watch}</a>
            <a href="#coats" className="nav-link" onClick={() => scrollToSection('coats')}>{t.nav.coats}</a>
            <a href="#jewelry" className="nav-link" onClick={() => scrollToSection('jewelry')}>{t.nav.jewelry}</a>
            <a href="#gold" className="nav-link" onClick={() => scrollToSection('gold')}>{t.nav.gold}</a>
        
          </div>

          <div className="language-selector">
            <button 
              className={language === 'en' ? 'active' : ''} 
              data-lang="en"
              aria-label="English"
              onClick={() => handleLanguageChange('en')}
            >
              <span>EN</span>
            </button>
            <button 
              className={language === 'hr' ? 'active' : ''} 
              data-lang="hr"
              aria-label="Croatian"
              onClick={() => handleLanguageChange('hr')}
            >
              <span>HR</span>
            </button>
            <button 
              className={language === 'de' ? 'active' : ''} 
              data-lang="de"
              aria-label="German"
              onClick={() => handleLanguageChange('de')}
            >
              <span>DE</span>
            </button>
            <button 
              className={language === 'ro' ? 'active' : ''} 
              data-lang="ro"
              aria-label="Romanian"
              onClick={() => handleLanguageChange('ro')}
            >
              <span>RO</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="hero">
        <div className="hero-background">
          <h1 className="hero-title">{t.hero.title}</h1>
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-card">
              <div className="hero-image">
                <div className="watch-background">
                
                <img  id="imager"src="./hw.webp"></img>
                  
                </div>
                <div className="overlay-text">
         
                </div>
              </div>
            
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-text">
              <h2>{t.hero.subtitle}</h2>
              <p>{t.hero.description}</p>
            </div>
            <div className="hero-products">
              <div className="product-item">
                <img id="heighterr" src="https://uk.nixon.com/cdn/shop/files/A045-000-view1.png?v=1687220288&width=500"></img>

              </div>
              <div className="product-item">
              <img id="heighter" src="https://m.media-amazon.com/images/I/71LWxb4S7uL._AC_SL1500_.jpg"></img>

              </div>
            </div>
        
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section ref={availabilityRef} className="availability">
        <div className="container">
          <h2>{t.availability.title}</h2>
          <div className="availability-cards">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
              <div key={day} className="availability-card">
                <div className="card-header">{t.availability.days}</div>
                <div className="card-day">{day}</div>
                <div className="card-time">{t.availability.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Section */}
      <section ref={goldRef} id="gold" className="gold-section">
        <div className="container">
          <div className="gold-content">
            <div className="gold-text">
              <h2>{t.goldSection.title}</h2>
              <p>{t.goldSection.description}</p>
            </div>
        
               <img id="lkj" src="https://i.pinimg.com/originals/16/7d/5c/167d5ca76e57660bf428ecd307bafe76.png" alt="Gold Items" />
          
          </div>
        </div>
      </section>

      {/* Fur Section */}
      <section className="fur-section">
        <div className="container">
          <h2>{t.furSection.title}</h2>
          <p>{t.furSection.description}</p>
          <div className="fur-items">
            <img src="https://img.joomcdn.net/57aa8f8bf841763758f6f45875554f032fd42f24_original.jpeg" alt="Fur Coats" />
            <img src="https://cdn11.bigcommerce.com/s-6n0mu/images/stencil/1280x1280/products/803/3965/Cool_Sheepskin_015A__17860.1732721217.jpg?c=2" alt="Leather Jackets" />
          </div>
          <div className="fur-highlight">
            <h3>{t.furSection.furCoats}</h3>
          </div>
          <p className="fur-disclaimer">{t.furSection.disclaimer}</p>
        </div>
      </section>

      {/* We Buy Section */}
      <section ref={weBuyRef} id="services" className="we-buy">
        <div className="container">
          <div className="we-buy-card">
            <h2>{t.weBuy.title}</h2>
            <div className="we-buy-grid">
              {t.weBuy.items.map((item, index) => (
                <div key={index} className="we-buy-item">
                  <span className="bullet">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coats Section */}
      <section ref={coatsRef} id="coats" className="coats-section">
        <div className="container">
          <div className="coats-content">
            <div className="coats-text">
              <h2>{t.coatsSection.title}</h2>
              <h3>{t.coatsSection.subtitle}</h3>
              <p>{t.coatsSection.description}</p>
            </div>
            <div className="coats-gallery">
              <div className="coat-item">
                <img src="https://img.joomcdn.net/35caaf60934cc591dd757b16fdbfe8e47035334c_963_1024.jpeg" alt="Fur Coat" />

              </div>
              <div className="coat-item">
                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Leather Jacket" />
  
              </div>
              <div className="coat-item">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sheepskin Coat" />
    
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry Section */}
      <section ref={jewelryRef} id="jewelry" className="jewelry-section">
        <div className="container">
          <div className="jewelry-content">
            <div className="jewelry-text">
              <h2>{t.jewelrySection.title}</h2>
              <h3>{t.jewelrySection.subtitle}</h3>
              <p>{t.jewelrySection.description}</p>
            </div>
            <div className="jewelry-gallery">
              <div className="jewelry-item">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Gold Jewelry" />

              </div>
              <div className="jewelry-item">
                <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Diamond Ring" />
  
              </div>
              <div className="jewelry-item">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Silver Jewelry" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-center">
              <div className="footer-logo">
                <div className="logo-circle">
                  <span>G</span>
                </div>
                <span className="logo-text">{t.footer.title}</span>
              </div>
              <div className="company-info">
                <div className="company-name">GOLDSTONE ART S.R.L</div>
                <div className="company-address">București, Sector 2, Șoseaua Pantelimon, Nr.127, camera 4, Bl. 201C, Ap.5</div>
              </div>
              <div className="contact-info">
                <div className="phone-numbers">
                  <div className="phone-number">
                    <span className="phone-label">+49 177 4444 232</span>
                    <span className="country-label">(International Number) - Germany</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+04 733 753 924</span>
                    <span className="country-label">Romania</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+386-1 600 93 42</span>
                    <span className="country-label">Slovenia</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+386-2 600 14 04</span>
                    <span className="country-label">Slovenia</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+386-2 888 42 31</span>
                    <span className="country-label">Slovenia</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+386-597 90404</span>
                    <span className="country-label">Slovenia</span>
                  </div>
                  <div className="phone-number">
                    <span className="phone-label">+40-31 630 4061</span>
                    <span className="country-label">Romania</span>
                  </div>
                </div>
                <div className="email">info@goldstein.site</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
