import { useEffect, useState } from "react";
function Destinations() {
  
    const [destinations, setDestinations] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/destinations")
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);
    const addDestination = async () => {
      if (!name || !location || !price) {
  alert("Please fill all fields");
  return;
}

  const response = await fetch(
    "http://localhost:5000/destinations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        location,
        price
      })
    }
  );

  const data = await response.json();

  alert(data.message);

  setName("");
  setLocation("");
  setPrice("");

  fetch("http://localhost:5000/destinations")
    .then(res => res.json())
    .then(data => setDestinations(data));
};
const deleteDestination = async (id) => {

  const response = await fetch(
    `http://localhost:5000/destinations/${id}`,
    {
      method: "DELETE"
    }
  );

  const data = await response.json();

  alert(data.message);

  fetch("http://localhost:5000/destinations")
    .then(res => res.json())
    .then(data => setDestinations(data));
};
    return(
        
        <div>
            <h1>Destinations</h1>
            <h2>Add Destination</h2>
            <input type="text" placeholder="destination name"value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="destination location"value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="number" placeholder="destination price"value={price} onChange={(e) => setPrice(e.target.value)} />

            <button onClick={addDestination}>
  Add Destination
</button>
            <h2>Destination List</h2>

      {destinations.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.location}</p>
          <p>₹ {item.price}</p>
          <button
      onClick={() => deleteDestination(item.id)}
    >
      Delete
    </button>
          
        </div>
      ))}
      

    </div>
  );
}



export default Destinations;