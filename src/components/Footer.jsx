export default function Footer() {
  return (
    <footer id="contato" className="footer-site text-light py-4">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-4 text-center text-md-start">
            <div className="d-flex flex-column gap-2">
              <a href="#quem-somos" className="rodape-link">
                <h3 className="h6 fw-bold text-uppercase mb-0">Quem Somos</h3>
              </a>
              <a href="#ofertas" className="rodape-link">
                <h3 className="h6 fw-bold text-uppercase mb-0">Ofertas da Semana</h3>
              </a>
              <a href="#clube" className="rodape-link">
                <h3 className="h6 fw-bold text-uppercase mb-0">Clube Zona Norte</h3>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="h6 fw-bold text-uppercase mb-2">Central de Atendimento</h3>

            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <img src="/icones/telefone.svg" alt="Telefone" className="footer-icon me-2" />
              <a className="rodape-link small" href="tel:+5521999999999">(21) 99999-9999</a>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img src="/icones/email.svg" alt="E-mail" className="footer-icon me-2" />
              <a className="rodape-link small" href="mailto:atendimento@mercadozonanorte.com.br">
                atendimento@mercadozonanorte.com.br
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="h6 fw-bold text-uppercase mb-2">Acompanhe o Zona Norte nas redes sociais</h3>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com.br" className="rodape-link d-flex align-items-center gap-2">
                <img src="/icones/facebook.svg" alt="" className="footer-icon" />
                <span className="small">Facebook</span>
              </a>
              <a href="https://www.instagram.com" className="rodape-link d-flex align-items-center gap-2">
                <img src="/icones/instagram.svg" alt="" className="footer-icon" />
                <span className="small">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center small opacity-75 mt-4">
          &copy; 2026 Mercado Zona Norte. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
