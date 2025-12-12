import Image from "next/image";

const features = [
{
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/feat1-6.svg?",
  title: "Get answers you can trust",
  description: "Every insight links to original sources so you can verify information with a single click"
},
{
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/feat2-7.svg?",
  title: "Responds using your files",
  description: "Eliminate hallucinations by limiting responses to your uploaded files"
},
{
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/feat3-8.svg?",
  title: "Find citations automatically",
  description: "Merus searches for relevant papers and books based on your writing"
}];


const AcademicWorkflows = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto flex flex-col pt-36 lg:pt-[220px]">
      <div className="flex flex-col items-stretch gap-16">
        <h2 className="text-[40px] leading-tight md:leading-[50px] pb-7 text-center !font-(family-name:--font-playfair-display) md:!text-[53px] !font-normal">
          How people are using Merus 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 w-full">
          {features.map((feature, index) =>
          <div key={index} className="w-full flex flex-col gap-7">
              <div className="relative w-full aspect-[405/260] overflow-hidden rounded-lg">
                <Image
                src={feature.imageSrc}
                alt="Merus - Built specifically for academic workflows"
                fill
                className="object-cover" />

              </div>
              <div className="flex flex-col items-center mx-auto md:mt-7">
                <p className="text-lg font-medium text-foreground text-center">
                  {feature.title}
                </p>
                <p className="pt-3 text-sm text-secondary-foreground text-balance text-center max-w-[300px]">
                  {feature.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AcademicWorkflows;
