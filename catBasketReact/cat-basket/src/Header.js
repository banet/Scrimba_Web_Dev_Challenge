import react from 'react'
import CatCard from './CatCard'
import {cats} from './cats'

function Header() {
    const catsInfo = cats.map( item => {
    return <CatCard key={item.id}  {...item} />
  })

  return (
    <div className="container">
         <h1><span>C</span>at<span>B</span>asket</h1>
         
        <p className="subtitle">Social Media for cats</p>
        <div className="cards">
      {cats.map( item => (<CatCard key={item.id}  {...item} />))}
      </div>
    </div>
    )

    
}


export default Header