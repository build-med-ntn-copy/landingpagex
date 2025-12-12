import Image from 'next/image';

const FlashcardsSection = () => {
  return (
    <section className="flex flex-col items-center pt-24 md:pt-36 lg:pt-[220px] w-full mx-auto max-w-[1280px] px-6 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <h2 className="whitespace-break-spaces text-[32px] leading-[40px] md:text-[56px] md:leading-[60px] !max-w-[700px] text-balance w-full pb-7 text-center max-w-full !font-(family-name:--font-playfair-display) !font-normal">
          Generate flashcards and multiple choice questions
        </h2>
        <p className="text-sm md:text-base text-secondary-foreground text-center text-balance mx-auto max-w-[620px]">
          Upload lecture slides, textbooks, or videos, and Merus will create
          flashcards and practice quizzes tailored to your specific materials
        </p>
      </div>
      <div className="md:mt-16 mt-10 mx-auto bg-sidebar rounded-3xl px-9 sm:px-10 md:px-16 w-full max-w-[1004px]">
        <div className="lg:mt-20 mt-10 md:mt-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/images/next-963115-full3.webp"
            alt="Merus - Main Section Poster"
            width={1024}
            height={665}
            className="w-full mt-[60px] md:mt-[85px] lg:mt-16 rounded-t-md md:rounded-t-lg lg:rounded-t-2xl" />

        </div>
      </div>
    </section>);

};

export default FlashcardsSection;