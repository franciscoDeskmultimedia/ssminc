import Envelope from "/public/assets/envelop.svg"
import Phone from "/public/assets/phone.svg"
import Pin from "/public/assets/location.svg"
import Image from "next/image"

const IconText = (props: any) => {
  return (
    <div className="icon-text-component max-w-[288px] flex flex-wrap justify-center">
      <div className="icon w-full flex justify-center mb-2">
        {props.icon == "envelope" && (
          <div className=" bg-[#3A93D0] flex justify-center items-center h-[120px] w-[120px] rounded-full ">
            <Image alt="envelope" src={Envelope} />
          </div>
        )}
        {props.icon == "location_pin" && (
          <div className=" bg-[#3A93D0] flex justify-center items-center h-[120px] w-[120px] rounded-full ">
            <Image alt="pin" src={Pin} />
          </div>
        )}
        {props.icon == "phone" && (
          <div className=" bg-[#3A93D0] flex justify-center items-center h-[120px] w-[120px] rounded-full ">
            <Image alt="Phone" src={Phone} />
          </div>
        )}
      </div>
      <div className="icon-text--title w-full font-ptsans font-bold text-[25px]">
        {props.icon == "envelope" && (
          <p className="flex justify-center w-full text-center">Email:</p>
        )}
        {props.icon == "location_pin" && (
          <p className="flex justify-center w-full text-center">
            Shipping Address:
          </p>
        )}
        {props.icon == "phone" && (
          <p className="flex justify-center w-full text-center">Phone:</p>
        )}
      </div>
      <p className="flex justify-center w-full text-center font-inter text-[25px]">
        {props.description}
      </p>
    </div>
  )
}

export default IconText
