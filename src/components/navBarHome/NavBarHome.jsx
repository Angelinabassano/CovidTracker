function NavBarHome(){
    return (
        <>
        <nav className="nav">
        <div className="leftNavbar">
            <h1 className="titleNavbar"><i className="iconNavbar"></i>COVIMAP</h1>
        </div>
        <div className="rightNavbar">
            <ul>
                <li>Home</li>
                <li>Prevention</li>
                <li>Quarantine</li>
                <li>Pages</li>
                <li>About</li>
                <li>Help</li>
                <button className="trackerNavbar">Tracker</button>
            </ul>
        </div>
        </nav>
        </>
    )
}
export default NavBarHome