function Header(props) {
    return (
        <div>
            <h1 className="header" id={props.id}>{props.pageTitle}</h1>
        </div>
    )
}

export default Header;