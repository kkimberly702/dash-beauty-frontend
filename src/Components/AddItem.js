import { useState, Link } from 'react'

function AddItem() {

const apiUrl = 'http://localhost:8000/items/'
const [newItem, setNewItem] = useState({name: "", brand: "", category: "", review: "", created_or_updated_a: "", photo: "" })

const handleChange = event => {
    event.persist()
    setNewItem(prevItem => {
      const editedItem = {...prevItem, [event.target.name]: event.target.value}
      return editedItem
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch(apiUrl + 'items', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(response => {
      fetch(apiUrl + '/items/' + response.Items._id, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(newItem)
      })
    })

    const onChange = e => {
        event.preventDefault()
    }

    const onSubmit = e => {
        e.preventDefault();

       
    };

  }

  return(
      <div>
          <form>
            <label> Name: 
                   <input type="text" name="name"/>
                </label>
        
            <label> Brand:
                    <input type="text" name="brand" />
                </label>

            <label> Category:
                    <input type="text" name="category" />
                </label>

            <label> Review:
                    <input type="text" name="review" />
                </label>

            <label> Photo:
                    <input type="url" name="image" />
                </label>
            <label> Date:
                <input type="datetime-local" name="created_or_updated_at" />
            </label>
            
        
                <button>Add Item</button>
            
        
        </form>
      </div>
  )
  }

  export default AddItem;