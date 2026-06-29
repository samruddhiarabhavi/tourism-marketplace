import { useEffect, useState } from "react";
function Packages(){
       const [packages, setPackages] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const[editId, setEditId] = useState(null);

    useEffect(()=>{
        fetch("https://localhost:5000/packages")
        .then(res => res.json())
        
        .then(data => setPackages(data));
    },[])
    const addPackage = async() => {
        if(!name || !location || !price || !duration){
            alert("fill all the details");
            return;
        }
        const response = await fetch(
            "https://localhost:5000/packages",
            {
                method: "POST",
                header:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({
                    name,
                    location,
                    price,
                    duration
                })
            }
        );
        const data = await response.json();
        alert(data.message);
        setDuration(""),
        setLocation(""),
        setPrice(""),
        setName("")
        fetch("http://localhost:5000/packages")
    .then(res => res.json())
    .then(data => setDestinations(data));
    };

    const deletePackage = async (id) => {
        const respone = await fetch (
            `http://localhost:5000/packages/${id}`,
            {
                method: "Delete"
            }
        );
        const data = await response.json();

  alert(data.message);

  fetch("http://localhost:5000/destinations")
    .then(res => res.json())
    .then(data => setDestinations(data));
    }


    }

}