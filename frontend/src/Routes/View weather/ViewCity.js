import { useParams } from "react-router-dom"
import CardContainer from "../../Components/CardContainer"
import { Helmet } from "react-helmet"
import './ViewCity.css'

const ViewCity = ({title}) => {

  const {id}=useParams()

  return (
    <div className="view-container">

      <Helmet>
          
        <title>{title}</title>
                
      </Helmet>

      <CardContainer idList={[id]}/>

    </div>
  )
}

export default ViewCity