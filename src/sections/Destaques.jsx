import { destaques, bannersDestaques } from '../data/destaques'
import BannersPar from '../components/BannersPar'

export default function Destaques() {
  return (
    <section id="destaques" className="secao">
      <div className="container">
        <h2 className="titulo-secao">Produtos em destaque</h2>

        <div className="row g-4">
          {destaques.map((produto) => (
            <div key={produto.titulo} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100">
                <img src={produto.imagem} className="card-img-top" alt={produto.alt} loading="lazy" />
                <div className="card-body">
                  <h3 className="h5 card-title">{produto.titulo}</h3>
                  <p className="card-text">{produto.preco}</p>
                  <a href="#ofertas" className="btn btn-produto">VER OFERTAS</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BannersPar banners={bannersDestaques} />
      </div>
    </section>
  )
}
