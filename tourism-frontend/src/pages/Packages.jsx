import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  // Load all packages
  const loadPackages = () => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  };

  useEffect(() => {
    loadPackages();
  }, []);

  // Add Package
  const addPackage = async () => {
    if (!name || !location || !duration || !price) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch("http://localhost:5000/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        duration,
        price,
      }),
    });

    const data = await response.json();

    alert(data.message);

    setName("");
    setLocation("");
    setDuration("");
    setPrice("");

    loadPackages();
  };

  // Delete Package
  const deletePackage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this package?"
    );

    if (!confirmDelete) {
      return;
    }

    const response = await fetch(
      `http://localhost:5000/packages/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    alert(data.message);

    loadPackages();
  };

  // Update Package
  const updatePackage = async () => {
    if (!name || !location || !duration || !price) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch(
      `http://localhost:5000/packages/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          duration,
          price,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    setEditId(null);
    setName("");
    setLocation("");
    setDuration("");
    setPrice("");

    loadPackages();
  };

  return (
    <Layout>
      <div>
        <h1>Packages</h1>

        <h2>
          {editId ? "Update Package" : "Add Package"}
        </h2>

        <input
          type="text"
          placeholder="Package Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        {editId ? (
          <button onClick={updatePackage}>
            Update Package
          </button>
        ) : (
          <button onClick={addPackage}>
            Add Package
          </button>
        )}

        <hr />

        <h2>Package List</h2>

        {packages.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>

            <p>Location: {item.location}</p>

            <p>Duration: {item.duration}</p>

            <p>₹ {item.price}</p>

            <button
              onClick={() => {
                setEditId(item.id);
                setName(item.name);
                setLocation(item.location);
                setDuration(item.duration);
                setPrice(item.price);
              }}
            >
              Edit
            </button>

            {" "}

            <button
              onClick={() => deletePackage(item.id)}
            >
              Delete
            </button>

            <hr />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Packages;