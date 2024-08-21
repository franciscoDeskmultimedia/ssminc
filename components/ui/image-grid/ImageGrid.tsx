import Logo1 from "/public/assets/LOGO CATLOW.png"
import Logo2 from "/public/assets/LOGO GILBARCO.png"
import Logo3 from "/public/assets/LOGO RED JACKET.png"
import Logo4 from "/public/assets/LOGO VEEDER ROOT.png"
import Logo5 from "/public/assets/LOGO VERIFONE.png"

import Image from "next/image"
import Headings from "@/components/ui/headings/Headings"

const ImageGrid = (props: any) => {
  const logoImages = props.logos
  console.log(props.logos)

  return (
    <div className=" image-grid ">
      <Headings title="Featured Brand" />
      <div className="image-grid__container pl-5 pr-5 mt-5 columns-1 sm:columns-2 md:columns-3 xl:columns-5 gap-5">
        {logoImages.map((item: any, index: any) => {
          return (
            <Image
              alt={"image-" + index}
              className=" mb-8"
              key={index}
              src={"http://ssminc.lndo.site" + item.field_media_image.uri.url}
              width={250}
              height={45}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageGrid
