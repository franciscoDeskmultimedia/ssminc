import { ArticleTeaser } from "@/components/drupal/ArticleTeaser"
import { drupal } from "@/lib/drupal"
import type { Metadata } from "next"
import type { DrupalNode } from "next-drupal"
import ImageGrid from "@/components/ui/image-grid/ImageGrid"
import EmblaCarousel from "@/components/ui/embla-carousel/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"
import CategoryGrid from "@/components/ui/category-grid/CategoryGrid"

export const metadata: Metadata = {
  description: "A Next.js site powered by a Drupal backend.",
}

export default async function Home() {
  const nodes = await drupal.getResourceCollection<DrupalNode[]>(
    "node--article",
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  )

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      <ImageGrid />
      <CategoryGrid />
      {nodes?.length ? (
        nodes.map((node) => (
          <div key={node.id}>
            <ArticleTeaser node={node} />
            <hr className="my-20" />
          </div>
        ))
      ) : (
        <p className="py-4">No nodes found</p>
      )}
    </>
  )
}
