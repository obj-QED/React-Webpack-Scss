import '../assets/style/components/slide-integration.scss'

const Slide = ({ options }) => {
  return (
    <div className="block-integration">
      <div className="block-integration__block">
        <img className="block-integration__image" src={`../assets/images/logos/${options.logo}.svg`} alt="Oracle"/></div>
      <div className="block-integration__title test-sm font-medium">{options.title}</div>
    </div>
  )
}

export default Slide
