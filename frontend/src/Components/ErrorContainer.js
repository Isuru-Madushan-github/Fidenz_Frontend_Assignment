import {BiError} from 'react-icons/bi'

const ErrorContainer = ({error}) => {
  return (
    <div className="loading-container">
        <p><BiError/> &nbsp; {error}...</p>
    </div>
  )
}

export default ErrorContainer