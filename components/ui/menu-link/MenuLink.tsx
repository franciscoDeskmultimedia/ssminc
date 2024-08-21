import Link from "next/link"

const MenuLink = (props)=>{
    return(
        <Link className="font-ptsans font-bold text-[27px]" href={props.url}>{props.text}</Link>
    )
}

export default MenuLink