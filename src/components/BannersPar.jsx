export default function BannersPar({ banners }) {
  return (
    <div className="row g-3 mt-4">
      {banners.map((banner) => (
        <div key={banner.imagem} className="col-12 col-md-6">
          <div className="rounded-4 overflow-hidden">
            <img src={banner.imagem} className="d-block w-100" alt={banner.alt} loading="lazy" />
          </div>
        </div>
      ))}
    </div>
  )
}
