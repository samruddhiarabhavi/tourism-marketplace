function Layout({children}){
    return(
        <div style ={{
            display : "flex"
        }}>
            <sideBar/>
            <div
            style={{
          padding: "20px",
          flex: 1,
        }}>
            {children}
            </div>
        </div>
    )
}
export default Layout;