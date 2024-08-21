import Image from "next/image"
import Link from "next/link"

const Product = (props: any) => {
  console.log("PRODUCT")
  console.log(props.node)
  return (
    <div className="product">
      <div className="product-container flex flex-wrap">
        <div className="md:w-2/5 w-full product-image-container relative">
          <Image
            alt="image alt"
            src={
              "http://ssminc.lndo.site/" +
              props.node.field_product_image.field_media_image.uri.url
            }
            width={500}
            height={500}
            className="w-full"
          ></Image>
          <Link
            className=" absolute right-0 bottom-0"
            href={
              "http://ssminc.lndo.site/" +
              props.node.field_document.field_media_document.uri.url
            }
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V18M26 4L40 18M26 4V18H40"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="product-meta-container">
          <h2 className="product-title font-ptsans uppercase font-bold text-[25px]">
            {props.node.title}
          </h2>
          {props.node.field_description ? (
            <p className="product-description font-inter text-[20px] mt-3 border p-4 rounded-md">
              {props.node.field_description.value}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Product
