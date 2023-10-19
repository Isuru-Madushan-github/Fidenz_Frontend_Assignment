import Cities from '../../cities.json'
import SearchWrapper from './Components/SearchWrapper'
import CardContainer from '../../Components/CardContainer'
import {Helmet} from 'react-helmet'
import './Dashboard.css'

const Dashboard = ({title}) => {
  const idList=Cities.List.map((city)=>city.CityCode)

  return (
    
    <div className='container dashboard'>

        <Helmet>
          
          <title>{title}</title>
                
        </Helmet>

        <SearchWrapper/>

        <CardContainer idList={idList}/>

    </div>
  )
}

export default Dashboard