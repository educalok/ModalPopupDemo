import { useEffect, useState } from 'react'

import CustomPopup from './components/CustomPopup'
import './styles.css'

export default function App () {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        popupCloseHandler()
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const popupCloseHandler = () => {
    setVisibility(false)
  }

  return (
    <div className='container'>
      <ul>
        <li>Close with Scape Key</li>
        <li>Close clicking outside the modal surface</li>
      </ul>
      <button onClick={() => setVisibility(true)}>Open Modal</button>
      <CustomPopup
        onClick={popupCloseHandler}
        onClose={popupCloseHandler}
        show={visibility}
        title='[TITLE]'
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </CustomPopup>
    </div>
  )
}
