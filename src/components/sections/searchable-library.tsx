import React from 'react';
import Image from 'next/image';

export default function SearchableLibrary() {
  return (
    <section className="w-full max-w-[1280px] mx-auto flex flex-col pt-24 md:pt-36 lg:pt-[220px]">
      <div className="flex flex-col items-center px-4 md:px-0">
        <h2 className="text-[32px] leading-[40px] md:text-[56px] md:leading-[60px] text-balance text-center pb-7 max-w-[700px] !font-(family-name:--font-playfair-display) !font-normal">
          Build a single, searchable library for all your projects
        </h2>
        <p className="text-sm md:text-base text-secondary-foreground text-center text-balance mx-auto max-w-[620px]">
          Whether working solo or collaborating with a team, Merus provides one organized place for all your scholarly work
        </p>
      </div>

      <div className="mt-10 md:mt-16 w-full mx-auto bg-[#F7F7F7] rounded-3xl overflow-hidden px-[36px] sm:px-[40px] md:px-[64px]">
        <div className="mt-10 md:mt-16 lg:mt-20">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/images/next-337388-full4.webp?"
            alt="Merus's searchable project library interface"
            width={1024}
            height={665}
            className="w-full h-auto rounded-t-md md:rounded-t-lg lg:rounded-t-2xl shadow-lg" />

        </div>
      </div>
    </section>);

}