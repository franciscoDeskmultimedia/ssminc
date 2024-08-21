import IconText from "../IconText/IconText"

const ContactCards = (props: any) => {
  console.log("CARDS:")
  console.log(props.cards)
  return (
    <div className="contact-cards-component">
      <div className="contact-cards--title">
        <h2 className=" font-ptsans font-bold text-[28px] text-center uppercase">
          {props.title}
        </h2>
      </div>
      <div className="contact-cards--cards columns-3 flex justify-center gap-5 mt-5">
        {props.cards.map((item: any, index: any) => {
          return (
            <IconText
              key={index}
              icon={item.field_icon}
              description={item.field_text}
            />
          )
        })}
      </div>
      <div className="map mt-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4643507430096!2d-80.34217152402611!3d25.788250507506437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b914ed0ecd17%3A0xd418dd6b76525100!2s8801%20NW%2015th%20St%2C%20Doral%2C%20FL%2033172%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1724199429054!5m2!1ses!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactCards
