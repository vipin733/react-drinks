import axios from 'axios'
import {useEffect, useState} from 'react'
import chunk from 'lodash/chunk'
import Filter from '../filter'
import Card from '../card'

let baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
let intUrl = `${baseUrl}search.php?s=`
const Index = () => {

  let [drinks, setDrinks] = useState([])
  let [categories, setCategories] = useState([])
  let [ingredient, setIngredient] = useState([])

  useEffect(() => {
    _loadData(intUrl)
    _loadCategoryData()
    _loadIngredientData()
  }, [])

  const _filterData = data => {
    const name = data.target.name
    const value = data.target.value
    let url = `${baseUrl}search.php?s=`
    if (value) {
      if (name === 'search') {
        url = `${baseUrl}search.php?s=${value}`
      }
  
      if (name === 'category') {
        url = `${baseUrl}filter.php?c=${value}`
      }
  
      if (name === 'ingredient') {
        url = `${baseUrl}filter.php?i=${value}`
      }
    }
    _loadData(url)
  }

  const _chunkDrinks = drinks => {
    return chunk(drinks, 4)
  }

  const _loadData = async url => {
    try {
      let response = await axios.get(url)
      setDrinks(response.data.drinks)
    } catch (error) {
      
    }
  }

  const _loadCategoryData = async () => {
    try {
      let url = `${baseUrl}list.php?c=list`
      let response = await axios.get(url)
      setCategories(response.data.drinks)
    } catch (error) {
      
    }
  }

  const _loadIngredientData = async () => {
    try {
      let url = `${baseUrl}list.php?i=list`
      let response = await axios.get(url)
      setIngredient(response.data.drinks)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Filter categories={categories} ingredient={ingredient} onFilter={data => _filterData(data)}/>
      {
        _chunkDrinks(drinks).map((drinkChunk, chunkIndex) => {
          return <div className="row" key={chunkIndex}>
            {
              drinkChunk.map((drink, index) => {
                return (
                  <Card key={index} drink={drink}/>
                )
              })
            }
          </div>
        })
      }
    </div>
  )
}

export default Index
