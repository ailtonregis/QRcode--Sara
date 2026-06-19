import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  function saveContact() {
    var nome = "Sara de Paiva";
    var telefone = "11999631185";
    var email = "sara.lima@starkeparts.com";
    var site = "https://www.mercadolivre.com.br/pagina/starkeparts2600";

    var vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:" + nome,
      "N:" + nome + ";;;",
      "ORG:Stärke Parts",
      "TITLE:E-commerce Stärke Parts",
      "TEL;TYPE=CELL,VOICE:+55" + telefone,
      "TEL;TYPE=WORK,VOICE:+55" + telefone,
      "EMAIL;TYPE=WORK:" + email,
      "URL:" + site,
      "NOTE:E-commerce Stärke Parts - Atendimento especializado em peças premium para veículos importados, esportivos e de alto padrão.",
      "END:VCARD",
    ].join("\r\n");

    var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "starke-parts-" + telefone + ".vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <AnimatedBackground />
      <div className="container">
        <header className="header">
          <img
            src="/assets/logo-starke-parts.png"
            alt="Stärke Parts"
            className="brand-logo"
          />
          <h1>E-commerce Stärke Parts</h1>
          <p>
            Atendimento especializado em peças premium para veículos
            importados, esportivos e de alto padrão.
          </p>
        </header>

        <section className="contact-card glass">
          <div className="name">Sara de Paiva</div>
          <div className="role">E-commerce Stärke Parts</div>
          <div className="contact-details">
            <a href="https://wa.me/5511999631185" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (11) 99963-1185
            </a>
            <a href="mailto:sara.lima@starkeparts.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              sara.lima@starkeparts.com
            </a>
            <a href="https://www.mercadolivre.com.br/pagina/starkeparts2600" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              starkeparts2600
            </a>
          </div>
        </section>

        <div className="actions">
          <a
            href="https://wa.me/5511999631185"
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-full"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chamar no WhatsApp
          </a>

          <a href="tel:+5511999631185" className="btn btn-phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Ligar agora
          </a>

          <a href="mailto:sara.lima@starkeparts.com" className="btn btn-email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Enviar e-mail
          </a>

          <a
            href="https://www.mercadolivre.com.br/pagina/starkeparts2600"
            target="_blank"
            rel="noopener"
            className="btn btn-ecommerce"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Acessar E-commerce
          </a>

          <button
            className="btn btn-contact btn-full"
            id="saveContactBtn"
            onClick={saveContact}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Salvar contato
          </button>
        </div>

        <section className="about glass">
          <h2>Sobre o E-commerce</h2>
          <p>
            No E-commerce da Stärke Parts você encontra peças de alta qualidade
            para veículos premium e importados, com atendimento especializado,
            agilidade na cotação e suporte técnico para encontrar a peça certa.
          </p>
        </section>

        <section className="services glass">
          <h2>Trabalhamos com</h2>
          <div className="services-grid">
            <div className="service-tag"><span className="dot"></span>Freios</div>
            <div className="service-tag"><span className="dot"></span>Suspensão</div>
            <div className="service-tag"><span className="dot"></span>Motor</div>
            <div className="service-tag"><span className="dot"></span>Arrefecimento</div>
            <div className="service-tag"><span className="dot"></span>Filtros</div>
            <div className="service-tag"><span className="dot"></span>Elétrica</div>
            <div className="service-tag"><span className="dot"></span>Ignição e Injeção</div>
            <div className="service-tag"><span className="dot"></span>Premium/Importados</div>
          </div>
        </section>

        <section className="brands glass">
          <h2>Montadoras</h2>
          <div className="brands-grid">
            <span className="brand-badge">Porsche</span>
            <span className="brand-badge">BMW</span>
            <span className="brand-badge">Mercedes-Benz</span>
            <span className="brand-badge">Audi</span>
            <span className="brand-badge">Land Rover</span>
            <span className="brand-badge">Volvo</span>
            <span className="brand-badge">Jaguar</span>
            <span className="brand-badge">Mini</span>
            <span className="brand-badge">Premium</span>
          </div>
        </section>

        <section className="brands-logos glass">
          <h2>Marcas que trabalhamos</h2>
          <div className="brands-logos-grid">
            <div className="brand-item">
              <img src="/assets/brands/brembo.png" alt="Brembo" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Brembo</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/bilstein.png" alt="Bilstein" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Bilstein</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/bosch.webp" alt="Bosch" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Bosch</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/mahle.webp" alt="Mahle" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Mahle</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/textar.webp" alt="Textar" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Textar</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/zf.png" alt="ZF" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>ZF</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/trw.webp" alt="TRW" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>TRW</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/hengst.webp" alt="Hengst" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Hengst</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/hella.webp" alt="Hella" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Hella</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/geba.webp" alt="GEBA" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>GEBA</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/hoffer-products.webp" alt="Hoffer" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Hoffer</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/pierburg.webp" alt="Pierburg" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Pierburg</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/ufi-filters.webp" alt="UFI" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>UFI</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/uro-parts.webp" alt="URO Parts" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>URO Parts</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/hepu.webp" alt="HEPU" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>HEPU</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/bga.webp" alt="BGA" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>BGA</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/forschen.webp" alt="Forschen" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Forschen</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/bilstein-group.webp" alt="Bilstein Group" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Bilstein Group</span>
            </div>
            <div className="brand-item">
              <img src="/assets/brands/fremax.webp" alt="Fremax" loading="lazy" onError={(e) => e.target.style.display = "none"} />
              <span>Fremax</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="tagline">
            Stärke Parts — Potência em Qualidade, Excelência em Cada Detalhe.
          </div>
          <div className="subtagline">
            Oferecemos peças, entregamos confiança.
          </div>
          <div className="copyright">
            &copy; 2026 Stärke Parts. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </>
  );
}
