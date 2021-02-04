import debounce from 'lodash/debounce'

const Index = ({ categories, ingredient, onFilter }) => {
  
  const _slug = (tile) => {
    return tile.toLowerCase().replace(/ /g, '_') 
    .replace(/[^\w-]+/g, '')
  }

  const _searchData = debounce( (e) => {
    onFilter(e)
  }, 1000)

  return (
    <div className="row" style={{paddingBottom:"10px"}}>
      <div className="col-md-6">
        <input type="text" defaultValue="" placeholder="search drink" onChange={_searchData} className="form-control" name="search"/>
      </div>

      <div className="col-md-3">
        <select className="form-select" aria-label="Default select example" onChange={onFilter} name="category">
          <option defaultValue="" value="">
            -- select category --
          </option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={_slug(category.strCategory)}>
                {category.strCategory}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col-md-3">
        <select className="form-select" aria-label="Default select example" onChange={onFilter} name="ingredient">
          <option defaultValue="" value="">
            -- select ingredient --
          </option>
          {ingredient.map((ingredien, index) => {
            return (
              <option key={index} value={_slug(ingredien.strIngredient1)}>
                {ingredien.strIngredient1}
              </option>
            );
          })}
        </select>
      </div>

    </div>
  )
}

export default Index;
