import MenuLink from "@/components/ui/menu-link/MenuLink"

const TopMenu = (props: any) => {
  const links = [
    { url: "/about-us", text: "About Us" },
    { url: "/return", text: "Return" },
    { url: "/contact-us", text: "Contact us" },
    { url: "/faq", text: "FAQ" },
  ]
  return (
    <div className="menu-pill bg-[#BFDBEA] rounded-full py-4 px-4 w-full flex gap-4 justify-around">
      {links.map((item, index) => {
        return <MenuLink key={index} url={item.url} text={item.text} />
      })}
    </div>
  )
}

export default TopMenu
