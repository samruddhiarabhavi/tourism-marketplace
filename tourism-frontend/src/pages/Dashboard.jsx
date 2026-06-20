import { useState } from "react";
import Layout from "../components/Layout";
import "./Dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState(150);
  const [bookings, setBookings] = useState(50);
  const [destinations, setDestinations] = useState(25);

  return (
    <Layout>
      <div className="dashboard">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Users</h3>
            <p>{users}</p>

            <button
              onClick={() => setUsers(users + 1)}
            >
              Add User
            </button>
          </div>

          <div className="card">
            <h3>Total Bookings</h3>
            <p>{bookings}</p>

            <button
              onClick={() => setBookings(bookings + 1)}
            >
              Add Booking
            </button>
          </div>

          <div className="card">
            <h3>Destinations</h3>
            <p>{destinations}</p>

            <button
              onClick={() =>
                setDestinations(destinations + 1)
              }
            >
              Add Destination
            </button>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;