import { useEffect, useState } from 'react'
import popupStyles from './custom-popup.module.css'
import PropTypes from 'prop-types'
const CustomPopup = props => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  const closeHandler = e => {
    setShow(false)
    props.onClose(false)
  }

  return (
    <div
      onClick={closeHandler}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0'
      }}
      className={popupStyles.overlay}
    >
      <div
        className={popupStyles.popup}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          X
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  )
}

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default CustomPopup
