import { linksMenu } from '../data/menu'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light" href="#inicio">
          Mercado Zona Norte
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="menuPrincipal">
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
            {linksMenu.map((link) => (
              <a key={link.id} className="nav-menu" href={`#${link.id}`}>
                <img src={link.icone} alt="" className="nav-icon" />
                <span>{link.rotulo}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
