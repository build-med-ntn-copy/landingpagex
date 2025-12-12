import Image from "next/image";

const ScholarlyAnswersSection = () => {
  return (
    <section className="flex w-full max-w-[1280px] mx-auto flex-col items-center pt-24 md:pt-36 lg:pt-[220px]">
      <div className="flex flex-col items-center px-4 text-center">
        <h2 className="w-full max-w-[700px] pb-7 text-[32px] leading-[40px] text-balance md:text-[56px] md:leading-[60px] !font-(family-name:--font-playfair-display) !font-normal">
          Get concise, scholarly answers to any question
        </h2>
        <p className="mx-auto max-w-[620px] text-balance text-sm text-secondary-foreground md:text-base">
          When you ask a question, Merus searches major academic databases like
          PubMed, arXiv and JSTOR to deliver a comprehensive response
        </p>
      </div>
      <div className="mx-auto mt-10 rounded-2xl bg-sidebar px-9 sm:px-10 md:mt-16 md:px-16 w-full max-w-[1004px]">
        <div className="mt-10 md:mt-16 lg:mt-20">
          <Image
            alt="Merus - Main Section Poster"
            width={1024}
            height={665}
            className="mt-[60px] rounded-t-md md:mt-[85px] md:rounded-t-lg lg:mt-16 lg:rounded-t-2xl w-full"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/full1-9.svg?" />

        </div>
      </div>
    </section>);

};

export default ScholarlyAnswersSection;