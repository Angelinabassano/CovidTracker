function NavBarHome(){
    return (
        <>
        <nav className="nav">
        <div className="leftNavbar">
            <img src="./src/assets/generalHome/logoConTextoBlanco.png"className="iconNavbar"/>
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