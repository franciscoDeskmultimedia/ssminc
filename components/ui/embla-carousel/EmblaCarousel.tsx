"use client"

import React, { useCallback } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/ui/embla-carousel-arrow-buttons/EmblaCarouselArrowButtons"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import GasStation from "/public/assets/GAS STATION.png"
import Image from "next/image"

type PropType = {
  slides: any
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const OPTIONS: EmblaOptionsType = { loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)
  console.log(slides)
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item: any, index: any) => (
            <div className="embla__slide" key={index}>
              <Image
                alt="image"
                src={
                  "http://ssminc.lndo.site/" + item.field_media_image.uri.url
                }
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
