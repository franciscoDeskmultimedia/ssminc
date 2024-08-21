import CategoryCard from "@/components/ui/category-card/CategoryCard"
import Headings from "@/components/ui/headings/Headings"
import Nozzel from '/public/assets/nozzle.jpg'

const CategoryGrid = ()=>{

    const Categories = [
        {name:'Breakaways',image:Nozzel},
        {name:'Nozzles',image:Nozzel},
        {name:'Hoses',image:Nozzel},
        {name:'Breakaways',image:Nozzel},
        {name:'Nozzles',image:Nozzel},
        {name:'Hoses',image:Nozzel},
    ]

    return(
        <div className="category-grid ">
            <Headings title="Popular Categories"/>
            <div className="columns-2 md:columns-3 gap-4 justify-between mt-4">
            {Categories.map((item,index)=>{
                return(
                    <div key={index} className="category-grid-cards mb-4"><CategoryCard  name={item.name} image={item.image}></CategoryCard></div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default CategoryGrid