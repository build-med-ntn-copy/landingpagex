import Image from "next/image";

export default function UnderstandFiles() {
  return (
    <section className="w-full max-w-[1280px] mx-auto flex flex-col pt-24 md:pt-36 lg:pt-[220px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[32px] leading-[40px] md:text-[56px] md:leading-[60px] text-balance w-full pb-7 text-center max-w-[700px] !font-(family-name:--font-playfair-display) !font-normal">
          Understand any file or group of files, instantly
        </h2>
        <p className="text-sm md:text-base text-secondary-foreground text-center text-balance mx-auto max-w-[620px]">
          Whether it's a dense 200-page textbook, a new clinical study, or a
          technical research paper, just upload it and start asking questions
        </p>
      </div>
      <div className="mt-10 md:mt-16 w-full mx-auto bg-[#F7F7F7] rounded-md px-9 sm:px-10 md:px-16">
        <div className="mt-10 md:mt-16 lg:mt-20">
          <Image
            alt="Merus - Main Section Poster"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/images/next-107398-full2.webp?"
            width={1024}
            height={665}
            className="w-full mt-[60px] md:mt-[85px] lg:mt-16 rounded-t-md md:rounded-t-lg lg:rounded-t-2xl" />

        </div>
      </div>
    </section>);

}