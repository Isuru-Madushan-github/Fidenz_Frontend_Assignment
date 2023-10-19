import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import ErrorContainer from './ErrorContainer'
import Cards from './Cards'
import Cookies from 'js-cookie'
import './CardContainer.css'

const CardContainer = ({idList}) => {

    const [cityList,setCityList]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    let expiration=new Date()
    expiration.setTime(expiration.getTime()+(1000*5*60))
    expiration=expiration.toUTCString()

    const apiKey='e22e0660736a1909866a43f40022af84'

    const url=`https://api.openweathermap.org/data/2.5/group?id=${idList}&units=metric&appid=${apiKey}`
    
    useEffect(()=>{

        const getData=()=>{
            console.log('function runninf')
            axios.get(url).then((res)=>{
                if(!res.status===200){
                    throw new Error("Failed to fetch data")
                }
                
                setLoading(false)
                setCityList(res.data.list)
                document.cookie=`weatherList=${JSON.stringify(res.data.list)}; expires=${expiration}`
    
            }).catch(()=>{
                setLoading(false)
                setError("Failed to fetch data")
            })
        }

        if(Cookies.get('weatherList')){
            setLoading(false)

            if(idList.length===1){
                const id=JSON.parse(Cookies.get('weatherList')).filter((g)=>{return g.id===Number(idList[0])})
                
                id.length>0 ? setCityList(id) : setError("Failed to fetch data")
                
            }else{
                const listCount=(JSON.parse(Cookies.get('weatherList'))).length

                if(listCount===1){
                    getData()
                }else{
                    setCityList(JSON.parse(Cookies.get('weatherList')))
                }
            }

            
        }else{
            getData()
        }
        

        // eslint-disable-next-line
    },[])

  return (
    <div className='card-container'>

    {
        loading ?

        <Spinner/>:

        error ? 

        <ErrorContainer error={error}/>:

        <Cards cityList={cityList}/>
        
    }

    </div>
  )
}

export default CardContainer