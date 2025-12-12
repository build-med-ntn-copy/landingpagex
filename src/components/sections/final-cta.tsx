import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TextPressure from "@/components/ui/text-pressure";

const FinalCta = () => {
  return (
    <section className="w-full relative flex items-center justify-center py-8 md:py-12">
            <div className="relative bg-transparent w-full mx-4 md:mx-8 lg:mx-12 flex items-center justify-center !text-white">
                <div className="w-full h-[600px] md:h-[800px] lg:h-[1000px] flex items-center justify-center">
                    <TextPressure 
                        text="MERUS"
                        textColor="#FFFFFF"
                        width={true}
                        weight={true}
                        italic={true}
                        alpha={false}
                        flex={true}
                        stroke={false}
                        scale={true}
                        minFontSize={300}
                        className="w-full h-full flex items-center justify-center"
                    />
                </div>
            </div>
        </section>);

};

export default FinalCta;