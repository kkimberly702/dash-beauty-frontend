import { useState } from 'react';



const SearchBar = () => {
const [searchInput, setSearchInput] = useState("");

const beautyItem = [
    { name: "Maybelline", skintype: "Oily" },
    { name: "Tarte", skintype: "Dry" },
    { name: "Armani Beauty", skintype: "Combination" },
    { name: "Revlon", skintype: "Mature" }
]

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    beautyItem.filter((item) => {
        return beautyItem.name.match(searchInput);
    });
}

const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Clickeddd", beautyItem);
        setSearchInput(e.target.value);
};


return (
    <div>
<input
   type="search"
   placeholder="Search"
   onChange={handleChange}
   value={searchInput} />
   <form onClick={handleSubmit}>
   <button type="submit">Search</button></form> 

   

   </div>)
};

export default SearchBar;