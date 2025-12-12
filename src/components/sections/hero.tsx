import React from 'react';
import Link from "next/link";

const logos = [
{ src: "https://anara.com/images/landing/logos/caltech-logo.svg", alt: "Caltech Logo" },
{ src: "https://anara.com/images/logos/NVIDIA-logo.svg", alt: "Nvidia Logo" },
{ src: "https://anara.com/images/landing/logos/gsk-logo.svg", alt: "GSK Logo" },
{ src: "https://anara.com/images/logos/mit-logo-2.svg", alt: "MIT Logo" },
{ src: "https://anara.com/images/landing/logos/amazon-logo.svg", alt: "Amazon Logo" },
{ src: "https://anara.com/images/landing/logos/meta-logo.svg", alt: "Meta Logo" }];


const LogoItem = ({ logo }: {logo: {src: string;alt: string;};}) =>
<div className="relative h-16 w-20 basis-1/3 overflow-hidden sm:h-20 sm:w-24 sm:basis-auto md:h-24 md:w-28 lg:h-28 lg:w-32 xl:h-32 xl:w-36">
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <img
      alt={logo.alt}
      src={logo.src}
      className="max-h-full max-w-full object-contain text-text-secondary transition-all [filter:brightness(0)_saturate(100%)_invert(47%)_sepia(8%)_saturate(378%)_hue-rotate(183deg)_brightness(91%)_contrast(87%)] hover:[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(8%)_saturate(378%)_hue-rotate(183deg)_brightness(91%)_contrast(87%)]" />

    </div>
  </div>;


const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center text-center w-full max-w-[1280px] tracking-tight">
        <div className="w-full">
          <h1 className="text-balance text-center mx-auto leading-[40px] sm:leading-[48px] md:leading-[60px] lg:leading-[72px] xl:leading-[80px] text-[36px] sm:text-[42px] md:text-[56px] xl:text-[72px] max-w-[820px] lg:!text-6xl lg:!text-center !border-solid !font-(family-name:--font-playfair-display) !whitespace-pre-line !font-normal !tracking-[-0.1px]">Your AI companion for Medical excellence

          </h1>
          <p className="text-secondary-foreground text-lg leading-6 max-w-[750px] mt-7 mx-auto text-center text-balance">
            Empowering Medical students, Doctors, Researchers and Exam prepares
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px] mt-12 mx-auto w-full px-9 sm:px-0 sm:w-auto">
          <Link href="/signup" className="inline-flex items-center justify-center select-none whitespace-nowrap text-base font-medium ring-offset-background transition-transform duration-200 ease-in-out hover:scale-[1.02] bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 w-full sm:w-auto !whitespace-pre-line">Get Merus free
          </Link>
          <Link href="/request-demo" className="inline-flex items-center justify-center select-none whitespace-nowrap text-base font-medium ring-offset-background transition-transform duration-200 ease-in-out hover:scale-[1.02] bg-secondary text-primary hover:bg-gray-200 rounded-full px-7 h-12 w-full sm:w-auto">
            Request demo
          </Link>
        </div>

        {/* Trusted by section removed per request to reduce page height */}
      </div>
    </section>);

};

export default HeroSection;
