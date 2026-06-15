import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const[users, setUsers] = useState(0);
  const[bookings, setbookings] = useState(50);
  const[destinations, setDestinations] = useState(25);
  useEffect(() => {
     setUsers(150);
  }, []);
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Tourism Admin</h2>

        <ul>
          <li>Dashboard</li>
          <li>Destinations</li>
          <li>Packages</li>
          <li>Bookings</li>
          <li>Users</li>
        </ul>
      </aside>

      <main className="content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Users</h3>
            <p>{users}</p>
            <button onClick={() => setUsers(users + 1)}>
  Add User
</button>
          </div>

          <div className="card">
            <h3>Total Bookings</h3>
            <p>{bookings}</p>
            <button onClick={() => setbookings(bookings + 1)}>
  Add Booking
</button>
          </div>

          <div className="card">
            <h3>Destinations</h3>
            <p>{destinations}</p>
            <button onClick={() => setDestinations(destinations + 1)}>
  Add Destination
</button>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;