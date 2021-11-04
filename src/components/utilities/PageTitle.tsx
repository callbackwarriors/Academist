interface IPtitle {
    subtitle: String;
    title: String;
    background: String;
  }
  const PageTitle = ({ title, subtitle, background }: IPtitle) => {
      return (
      <section className={`text-center section-padding ${background}`}>
          <div className="container">
              <div className="row">
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
              </div>
          </div>

      </section>
      )
  }
  export default PageTitle
  
  
  PageTitle.defaultProps = {
    title: 'Master Cleanse Reliac Heirloom',
    subtitle: 'ROOF PARTY POLAROID',
    background: 'bg-gray-50',
}
    