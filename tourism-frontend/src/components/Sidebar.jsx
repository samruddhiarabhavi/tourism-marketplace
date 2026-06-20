import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="Sidebar">
            <h2> Tourism Admin</h2>
            <ul>
                <li><Link to="/">Dashboard</Link>
                </li>
                <li><Link to="/destinations">Destination</Link>
                </li>
                <li><Link to="/packages">Packages</Link>
                </li>
                <li><Link to="/bookings">Bookings</Link>
                </li>
                <li><Link to="/users">Users</Link>
                </li>
            </ul>

        </div>

    )
}
export default Sidebar;