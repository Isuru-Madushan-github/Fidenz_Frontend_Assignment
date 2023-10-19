import moment from 'moment'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>{moment().format('YYYY')} Fidenz Technologies</p>
    </div>
  )
}

export default Footer