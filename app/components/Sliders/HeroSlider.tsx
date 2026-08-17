"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image, { StaticImageData } from "next/image";

import image1 from "../../../public/images/HeroSlider1.jpg";
import image2 from "../../../public/images/HeroSlider2.jpg";
import image3 from "../../../public/images/HeroSlider3.jpg";

const ImageArray: StaticImageData[] = [image1, image2, image3];

const Page: React.FC = () => {
  const [midImage, setMidImage] = useState<number>(0);
  const [rightImage, setRightImage] = useState<number>(0);
  const [leftImage, setLeftImage] = useState<number>(0);

  // interval tipi
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(ImageArray.length - 1);
      setRightImage(1);
    } else if (midImage === ImageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".middleImage",
        { x: 200, opacity: 0, scale: 0.6 },
        { x: 0, opacity: 1, scale: 1, duration: 2 }
      );

      gsap.fromTo(
        ".rightImage",
        { x: 600, opacity: 0, scale: 0.6 },
        { x: 0, opacity: 1, scale: 1, duration: 2 }
      );

      gsap.fromTo(
        ".leftImage",
        { x: -500, opacity: 0, scale: 0.6 },
        { x: 0, opacity: 1, scale: 1, duration: 2 }
      );
    },
    [midImage]
  );

  const increment = useCallback((): void => {
    setMidImage((prev) =>
      prev === ImageArray.length - 1 ? 0 : prev + 1
    );
  }, []);

  const decrement = useCallback((): void => {
    setMidImage((prev) =>
      prev === 0 ? ImageArray.length - 1 : prev - 1
    );
  }, []);

  const resetAutoPlay = useCallback((): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setMidImage((prev) =>
        prev === ImageArray.length - 1 ? 0 : prev + 1
      );
    }, 6000);
  }, []);

  useEffect(() => {
    resetAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetAutoPlay]);

  return (
    <div className="ImageSlider">
      <div className="ImageSliderContainer">
        <div className="Images">
          <Image
            src={ImageArray[rightImage]}
            alt="Right Slide"
            className="rightImage border-2 border-gray-300"
          />

          <Image
            onClick={() => {
              decrement();
              resetAutoPlay();
            }}
            src={ImageArray[midImage]}
            alt="Middle Slide"
            className="middleImage  border-2 border-gray-300"
          />

          <Image
            src={ImageArray[leftImage]}
            alt="Left Slide"
            className="leftImage border-2 border-gray-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;