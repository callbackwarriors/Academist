const Title = ({ subtitle, title, description, children }) => {
    return (
    <div className="title">
      <h2 className="title__subtitle">{subtitle}</h2>
      <h2 className={description && 'mb-4'}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    )
}
export default Title


Title.defaultProps = {
    subtitle: 'ROOF PARTY POLAROID',
    title: 'Master Cleanse Reliac Heirloom',
  }
  