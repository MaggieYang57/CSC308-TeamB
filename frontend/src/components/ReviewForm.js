import React, {useState, useEffect} from 'react';
import axios from 'axios';

async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:3001/hike/');
       return response.data[0];     
    }
    catch (error){
       //We're not handling errors. Just logging into the console.
       console.log(error); 
       return false;         
    }
  }

function ReviewForm(props) {   
    const [person, setPerson] = useState(
        {  
           name: '',
           review: '',
        }
     );

    useEffect(() => {
        fetchAll().then( result => {
        if (result)
            setPerson(result);
        });
    }, [] );

    // async function removeOneCharacter (index) {
    //     try {
    //     const response = await axios.delete('http://localhost:5000/users/'+characters[index]._id);
    //     if (response.status === 204)
    //     {
    //         const updated = characters.filter((character, i) => {
    //         return i !== index
    //         });
    //         setCharacters(updated);  
    //         return true;    
    //     }
    //     }
    //     catch (error){
    //     console.log(error); 
    //     return false;         
    //     }
    // }

    function updateList(person) { 
        makePostCall(person).then( result => {
        if (result.status === 201)
        setPerson([...person, result.data[0]] );
        });
    }

    /***************************************************** */

   

   async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:3001/hike/', person);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
  }

   function handleChange(event) {
    const { name, value } = event.target;
    if (name === "review")
        setPerson(
          {name: person['name'], review: value}
       );
    else
      setPerson(
          {name: value, review: person['review']}
       );   
  }

  function submitForm() {
    props.handleSubmit(person);
    setPerson({name: '', review: ''});
  }

   return (
    <form>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            value={person.name}
            onChange={handleChange} />
        <label htmlFor="job">Review</label>
        <input
            type="text"
            name="review"
            id="review"
            value={person.job}
            onChange={handleChange} />
        <input type="button" value="Submit" onClick={updateList} />
    </form>
); 
}
export default ReviewForm;