import Image from 'next/image';

type Logo = {
  name: string;
  src: string | null;
  alt: string;
};

// Replicating the 6 logos found in the HTML structure to maintain layout.
// Using available assets and creating placeholders for missing ones,
// while incorporating names from design instructions and screenshot (Biogen).
const logosData: Logo[] = [
  {
    name: 'Caltech',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/caltech-logo-1.svg?',
    alt: 'Caltech Logo',
  },
  {
    name: 'NVIDIA',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/NVIDIA-logo-2.svg?',
    alt: 'Nvidia Logo',
  },
  {
    name: 'Roche', // From HTML structure
    src: null,
    alt: 'Roche Logo',
  },
  {
    name: 'MIT',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/mit-logo-2-4.svg?',
    alt: 'MIT Logo',
  },
  {
    name: 'Biogen', // From design instructions & screenshot
    src: null,
    alt: 'Biogen Logo',
  },
  {
    name: 'Meta',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/60bb2816-a860-4d05-abc4-1dcd9790628f-anara-com/assets/svgs/meta-logo-5.svg?',
    alt: 'Meta Logo',
  },
];

const CompanyLogos = () => {
  return (
    <div className="mt-16 w-full mx-auto max-w-[1280px] h-[128px] overflow-hidden">
      <div className="w-full h-full">
        <p className="text-sm text-center text-secondary-foreground">
          Trusted by 2,000,000+ researchers and students
        </p>
        <div className="mt-4 w-full flex flex-wrap justify-between sm:flex-nowrap">
          {logosData.map((logo, index) => (
            <div
              key={index}
              className="relative h-16 w-20 basis-1/3 overflow-hidden sm:h-20 sm:w-24 sm:basis-auto md:h-24 md:w-28 lg:h-28 lg:w-32 xl:h-32 xl:w-36"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 100px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
                    className="object-contain [filter:brightness(0)_saturate(100%)_invert(47%)_sepia(8%)_saturate(378%)_hue-rotate(183deg)_brightness(91%)_contrast(87%)] hover:[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(8%)_saturate(378%)_hue-rotate(183deg)_brightness(91%)_contrast(87%)] transition-all duration-200"
                  />
                ) : (
                  <span className="font-semibold text-xl text-secondary-foreground transition-colors duration-200 hover:text-primary">
                    {logo.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;