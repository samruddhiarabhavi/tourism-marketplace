function Sidebar(){
    return(
        <div className="sidebar">
            <h2> Tourism Admin</h2>
            <ul>
                <li><link to="/">Dashboard</link>
                </li>
                <li><link to="/destination">Destination</link>
                </li>
                <li><link to="/packages">Packages</link>
                </li>
                <li><link to="/bookings">Bookings</link>
                </li>
                <li><link to="/users">Users</link>
                </li>
            </ul>

        </div>

    )
}
export default Sidebar;