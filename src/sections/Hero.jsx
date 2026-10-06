import { bannersCarrossel } from '../data/destaques'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-texto">
        <div className="container text-center">
          <h1 className="display-5">Mercado Zona Norte</h1>
          <p className="lead mb-4">Qualidade, preço justo e atendimento de bairro: ofertas novas toda semana.</p>
          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
            <a href="#ofertas" className="btn btn-lg btn-hero">VER OFERTAS DA SEMANA</a>
            <a
              href="https://wa.me/5521999999999"
              className="btn btn-lg btn-hero"
              target="_blank"
              rel="noreferrer"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>

      <div id="carouselBanners" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {bannersCarrossel.map((banner, i) => (
            <div key={banner.imagem} className={`carousel-item${i === 0 ? ' active' : ''}`}>
              <img src={banner.imagem} className="d-block w-100" alt={banner.alt} />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanners" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanners" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  )
}
