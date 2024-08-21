import Headings from "../headings/Headings"

const RichText = (props: any) => {
  return (
    <div className="rich-text">
      {props.title && <Headings title={props.title} />}
      <div
        className=" border-b-[4px] border-[#3A93D0] py-7 mb-5 text-[22px] font-bold"
        dangerouslySetInnerHTML={{
          __html: props.description,
        }}
      ></div>
    </div>
  )
}

export default RichText
