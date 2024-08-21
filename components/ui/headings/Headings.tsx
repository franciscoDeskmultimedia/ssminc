

const Headings = (props)=>{
    return (<div className="heading flex items-baseline">
        <p className=" font-ptsans font-bold text-[28px] mr-1 min-w-fit">{props.title}</p><div className="heading-line h-1 bg-[#3A93D0] w-full"></div>
    </div>)
}

export default Headings