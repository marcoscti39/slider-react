import { useState, useEffect } from 'react'
import './App.css'
import {FaQuoteRight} from 'react-icons/fa'
import data from './data'



import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

function App() {
  const [index, setIndex] = useState(0)
  let position = ""
  useEffect(() =>{
    if (index < 0){
      setIndex(data.length - 1)
    }
    if(index > data.length - 1){
      setIndex(0)
    }
  },[index])  
  
  return (
    <>
        <h1 className="title"> / Reviews</h1>
        <main className="reviews-container">
          <button className='previous-person' onClick={() => setIndex(index - 1)}> 
          <FiChevronLeft className='btn-icon'/> </button>

           <section className="review-people">
            {data.map((person, indexPerson) =>{
            const {id, name, quote, image, title} = person
            position = "next"
            if(indexPerson === index) {
              position = "active"
            }
            if(indexPerson === index -1 ){
              position = "last"
            }
            if(index === 0 && indexPerson === data.length -1){
              position = 'last'

            }
            return (
                <div className={`person-container ${position}`} key={id}>
                    
                    <img className="review-person-img" 
                    src={image} 
                    alt="" />

                    <h2 className="review-person-name">{name}</h2>

                    <span className="review-person-job" >{title}</span>

                    <p className="review-person-info">{quote}</p>

                    <div className="quote">{<FaQuoteRight/>}</div>
                </div>
                
            )
            })}
        </section>

          <button className="next-person" onClick={() => setIndex(index + 1)}>
            <FiChevronRight className='btn-icon' /> </button>
        </main>
    </>
  )
}

export default App
