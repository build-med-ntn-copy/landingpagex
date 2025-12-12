import type { FC } from 'react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
{
  name: 'Anne',
  title: 'Research Scientist, GSK',
  quote: 'I love it! It accomplishes in minutes what would take me ages to do manually. What really impresses me is how Merus recognizes themes and patterns I\'ve completely missed. It\'s particularly good at pointing out important details and research gaps that aren\'t immediately obvious.'
},
{
  name: 'Tylar',
  title: 'PhD Student, Stanford University',
  quote: 'As a Doctor myself, Merusx is my number one app for annotations, lit reviews and manuscripts.'
},
{
  name: 'Jeremy',
  title: 'Research Assistant, PwC',
  quote: 'This website is simply awesome. Every researcher should employ it to ease and power their research!'
},
{
  name: 'Paul',
  title: 'Research Scientist, Biogen',
  quote: 'With Merus, I\'m able to do in 30 mins what used to take 3 hours. There\'s nothing else like it.'
},
{
  name: 'Alamin',
  title: 'Dermatologist, Mayo Clinic',
  quote: 'Merus makes diving into research papers so much easier and quicker. A must-try tool.'
},
{
  name: 'Ruby',
  title: 'Student, UCLA',
  quote: 'Merus is the best AI tool ever. SO SO efficient, easy to use, amazing for research, and is saving me so much time, especially with my busy degree! This is the only AI tool I like and use.'
},
{
  name: 'Ethan',
  title: 'Senior Scientist, Roche',
  quote: 'I\'m very impressed. Delighted by the tool you made… It\'s reassuring when we have the model that is justifying, like, "Okay. You made that point. It\'s actually cited here. But it\'s contradicted by this one," and then we can start to brainstorm better.'
},
{
  name: 'Samantha',
  title: 'Neuroscientist, NIH',
  quote: 'Merus makes life easier for anyone new to the team. It breaks down complex information so effectively that newcomers can contribute and feel included right from the start.'
},
{
  name: 'Michael',
  title: 'Physician, Cedars Sinai',
  quote: 'Interacting with documents on Merus is like speaking to the team who wrote the research paper. It\'s fantastic.'
}];


const TestimonialsSection: FC = () => {
  return (
    <section className="bg-transparent py-24 !w-full !h-[1424px]">
      <div className="container">
        <h2 className="text-center text-[48px] leading-tight mb-16 !font-(family-name:--font-playfair-display) !whitespace-pre-line !font-normal">What people think of Merus

        </h2>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {testimonialsData.map((testimonial, index) =>
          <div
            key={index}
            className="break-inside-avoid rounded-lg border bg-card p-8 shadow-sm">

              <div className="mb-4">
                <p className="font-semibold text-base">{testimonial.name}</p>
                <p className="text-sm text-secondary-foreground">{testimonial.title}</p>
              </div>
              <p className="text-base text-card-foreground/90">
                {testimonial.quote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;