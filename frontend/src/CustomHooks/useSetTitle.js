import { useEffect } from 'react'

const useSetTitle = (title='') => {

    const companyName='Fidenz Technologies'

    useEffect(()=>{
        document.title=title+companyName
  })
}

export default useSetTitle