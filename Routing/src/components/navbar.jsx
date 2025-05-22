import { NavLink } from "react-router-dom";


const Navbar=()=>{
    const Links=[
        {path:'/',element:"Home"},
        {path:"/products", element:"Products"},
        {path:"/contact", element:"Contact"},
        {path:"/login", element:"Login"}
    ]
    return(
        <>
        <div style={{
            width:"100%",height:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center",border:"1px solid black"
        }}>
            {
                Links.map((link)=>(
                    <NavLink key={link.path} to={link.path} style={{textDecoration:"none",color:"black"}}>{link.element}</NavLink>  
                ))
            }
        </div>
        </>
    )
}

export default Navbar;