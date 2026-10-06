import { numeros, valores, horarios } from '../data/quemSomos'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="secao">
      <div className="container">
        <h2 className="titulo-secao">Quem Somos</h2>
        <p className="lead">Um mercado de bairro, feito por gente da Zona Norte para gente da Zona Norte.</p>

        <div className="row g-4 align-items-center mb-5">
          <div className="col-12 col-lg-7">
            <h3 className="h4 titulo-secao">Nossa história</h3>
            <p>
              O <strong>Mercado Zona Norte</strong> nasceu como uma pequena mercearia de família,
              com poucas prateleiras e muita vontade de atender bem os vizinhos do bairro.
            </p>
            <p>
              Com o passar dos anos, a confiança dos clientes fez a loja crescer. Hoje oferecemos
              açougue, padaria, hortifruti fresquinho todos os dias e milhares de produtos,
              sem perder o <em>atendimento próximo</em> que sempre foi a nossa marca.
            </p>
            <p className="mb-0">
              Nosso compromisso continua o mesmo desde o primeiro dia: qualidade, preço justo
              e respeito a quem escolhe comprar com a gente.
            </p>
          </div>

          <div className="col-12 col-lg-5">
            <div className="row g-3 text-center">
              {numeros.map((numero) => (
                <div key={numero.rotulo} className="col-6">
                  <div className="border rounded-4 p-4 bg-white">
                    <p className="display-6 numero-destaque mb-0">{numero.valor}</p>
                    <small className="text-secondary">{numero.rotulo}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="h4 titulo-secao text-center">No que acreditamos</h3>
        <div className="row g-4 mb-5">
          {valores.map((item) => (
            <div key={item.titulo} className="col-12 col-md-4">
              <div className="card card-valor">
                <div className="card-body">
                  <h4 className="h5 card-title">{item.titulo}</h4>
                  {item.texto && <p className="mb-0">{item.texto}</p>}
                  {item.lista && (
                    <ul className="mb-0 ps-3">
                      {item.lista.map((valor) => (
                        <li key={valor}>{valor}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="h4 titulo-secao">Onde estamos</h3>
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Zona+Norte,+Rio+de+Janeiro&output=embed"
                title="Mapa da Zona Norte do Rio de Janeiro"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <h4 className="h5 fw-bold">Horário de funcionamento</h4>
            <table className="table tabela-horarios">
              <tbody>
                {horarios.map((h) => (
                  <tr key={h.dia}>
                    <th>{h.dia}</th>
                    <td>{h.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="h5 fw-bold mt-4">Fale com a gente</h4>
            <p className="mb-1">Telefone: <a href="tel:+5521999999999">(21) 99999-9999</a></p>
            <p>
              E-mail:{' '}
              <a href="mailto:atendimento@mercadozonanorte.com.br">atendimento@mercadozonanorte.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
