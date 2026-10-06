import { useState } from 'react'
import { ofertasSemana, hortifruti, bannersOfertas } from '../data/ofertas'
import BannersPar from '../components/BannersPar'

const faixas = [
  { rotulo: 'Todas', minimo: 0 },
  { rotulo: 'Acima de 15%', minimo: 15 },
]

export default function Ofertas() {
  const [minimo, setMinimo] = useState(0)

  const visiveis = ofertasSemana.filter(
    (oferta) => Math.abs(parseInt(oferta.desconto, 10)) >= minimo,
  )

  return (
    <section id="ofertas" className="secao secao-alt">
      <div className="container">
        <h2 className="titulo-secao">Ofertas da Semana</h2>
        <p>Preços baixos em carnes, frios, hortifruti e muito mais.</p>

        <div className="alert alert-warning text-center" role="alert">
          <strong>Atenção!</strong> Ofertas válidas de 21/09 a 27/09/2026 ou enquanto durarem os estoques.
        </div>

        <h3 className="h4 titulo-secao mt-4">Destaques da semana</h3>

        <div className="d-flex gap-2 mb-3" role="group" aria-label="Filtrar por desconto">
          {faixas.map((faixa) => (
            <button
              key={faixa.rotulo}
              type="button"
              className={`btn btn-sm ${minimo === faixa.minimo ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setMinimo(faixa.minimo)}
            >
              {faixa.rotulo}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {visiveis.map((oferta) => (
            <div key={oferta.titulo} className="col-12 col-md-6 col-lg-3">
              <div className="card card-oferta">
                <span className="selo-desconto">{oferta.desconto}</span>
                <img src={oferta.imagem} className="card-img-top" alt={oferta.alt} loading="lazy" />
                <div className="card-body">
                  <h4 className="h5 card-title">{oferta.titulo}</h4>
                  <p className="preco-antigo">de <del>{oferta.de}</del></p>
                  <p className="preco-oferta">{oferta.por}</p>
                  <a href="#contato" className="btn btn-produto">QUERO ESSA OFERTA</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="h4 titulo-secao mt-5">Feira do Hortifruti</h3>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle tabela-ofertas">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Unidade</th>
                <th>De</th>
                <th>Por</th>
              </tr>
            </thead>
            <tbody>
              {hortifruti.map((item) => (
                <tr key={item.produto}>
                  <td>{item.produto}</td>
                  <td>{item.unidade}</td>
                  <td><del>{item.de}</del></td>
                  <td><strong>{item.por}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BannersPar banners={bannersOfertas} />
      </div>
    </section>
  )
}
