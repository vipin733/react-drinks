import {useState} from 'react'

const Index = ({drink}) => {
  return (
    <div className="col-md-3"  style={{paddingBottom: '10px'}}>
        <div className="card">
          <img src={drink.strDrinkThumb} loading="lazy" className="card-img-top" alt={drink.strDrink}/>
          <div className="card-body">
            <h5 className="card-title">{drink.strDrink}</h5>
          </div>
        </div>
    </div>
  )
}

export default Index