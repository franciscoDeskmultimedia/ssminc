import Image from "next/image"
import Link from "next/link"

const CategoryCard=(props)=>{
    return(
        <div className="category-card border-2 border-[#3A93D0] max-w-[415px] w-full aspect-square"><Link href="#" className="">
        <Image src={props.image}></Image>
        <p className="category-name">{props.name}</p>
    </Link></div>
        
    )
}

export default CategoryCard