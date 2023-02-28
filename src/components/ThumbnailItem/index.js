import './index.css'

const ThumbnailItem = props => {
  const {eachList, onChaning, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachList
  const onClicking = () => {
    onChaning(id)
  }
  const forClass = isActive ? 'forButtonActivated' : ''
  return (
    <>
      <button className="forButton" type="button" onClick={onClicking}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`forImage_imag  ${forClass}`}
        />
      </button>
    </>
  )
}
export default ThumbnailItem
