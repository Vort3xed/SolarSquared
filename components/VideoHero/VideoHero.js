/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './video-hero.module.css'
import ButtonV2 from '../buttonv2/ButtonV2'
import SlidingComponent from '../SlidingComponent/Slider'
import VerticalSlider from '../SlidingComponentVert/Slider'
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2'
import StyledTextSuperSmallV2 from '../StyledTextSuperSmallV2/StyledTextSuperSmallV2'

export default function VideoHero() {
    const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 1300) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 1300) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="text-center pb-12 md:pb-16">

                    <VerticalSlider direction="down">
                        <StyledTextV2Small text="Presentation" />
                    </VerticalSlider>
                    {/* <StyledTextSuperSmallV2 text="SolarSquared" data-aos="fade-down" data-aos-delay="300"/> */}
                    <div align="center" className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8 mt-2" data-aos="zoom-y-out" data-aos-delay="300">A debreif of our product. Grab some popcorn.</p>
                        <iframe className="text-xl text-gray-600 mb-8 mt-2" width="600" height="315" src="https://www.youtube.com/embed/6Vl7Zl5qz64?si=4PbYNUkIFGj7sngu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>

            </div>

            <SlidingComponent direction="right">
                <div className="flex flex-col items-center justify-center" />
            </SlidingComponent>


        </div>
    )
}