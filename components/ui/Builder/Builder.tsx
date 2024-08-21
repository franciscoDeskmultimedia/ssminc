import ContactCards from "../ContactCards/ContactCards"
import EmblaCarousel from "../embla-carousel/EmblaCarousel"
import ImageGrid from "../image-grid/ImageGrid"
import RichText from "../RichText/RichText"

const Builder = (props: any) => {
  return (
    <div className="blocks">
      {props.blocks.map((item: any, index: any) => {
        if (item.type == "paragraph--slider") {
          return (
            <div key={index} className="slider">
              <EmblaCarousel slides={item.field_slider_images}></EmblaCarousel>
            </div>
          )
        } else if (item.type == "paragraph--rich_text") {
          return (
            <RichText
              key={index}
              title={item.field_title}
              description={item.field_description.value}
            />
          )
        } else if (item.type == "paragraph--brand_logos") {
          return (
            <ImageGrid
              key={index}
              logos={item.field_logo_images}
              title={item.field_title}
            />
          )
        } else if (item.type == "paragraph--contact") {
          return (
            <div key={index}>
              <ContactCards
                title={item.field_title}
                cards={item.field_contact_card}
              />
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default Builder
