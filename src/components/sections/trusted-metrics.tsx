import React from "react";

const metricsData = [
{
  value: "14M",
  label: "Files analyzed"
},
{
  value: "530K",
  label: "Citations generated"
},
{
  value: "27M",
  label: "Answers generated"
},
{
  value: "20H",
  label: "Hours saved per paper"
}];


const TrustedMetrics = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container">
        <h2 className="mb-16 text-center text-[48px] leading-tight tracking-tight text-foreground !font-(family-name:--font-playfair-display) !font-normal">
          Trusted by millions
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metricsData.map((metric, index) =>
          <div
            key={index}
            className="flex flex-col rounded-lg bg-secondary p-8">

              <p className="text-[56px] leading-none tracking-tight text-foreground !font-normal">
                {metric.value}
              </p>
              <p className="mt-2 text-base text-secondary-foreground">
                {metric.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TrustedMetrics;