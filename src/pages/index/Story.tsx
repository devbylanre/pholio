import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';

export const Story = () => {
  return (
    <LightCard className='flex flex-col p-3 md:p-5 gap-y-5'>
      {/* heading */}
      <Heading className='text-2xl'>My story</Heading>
      {/* first paragraph */}
      <Paragraph>
        Once upon a time, there was a young designer named Johny. Johny had
        always been passionate about design, and after graduating from college,
        she landed a job at a large design firm. However, Johny soon realized
        that the corporate environment wasn't for him. He wanted to work on
        projects that were more meaningful to her and make a difference in the
        world.
      </Paragraph>
      {/* second paragraph */}
      <Paragraph>
        One day, Johny met a group of like-minded creatives who shared his
        passion for design and shared her vision of creating a design agency
        that focused on projects that made a positive impact on the world.
      </Paragraph>
      <div className='p-5 bg-zinc-100 rounded-xl'>
        <Heading>
          They all agreed that they wanted to create a small agency that would
          allow them to work on projects that they were truly passionate about,
          without the constraints of a large corporation.
        </Heading>{' '}
      </div>
      {/* third paragraph */}
      <Paragraph>
        As their reputation grew, so did their team. Johny and his colleagues
        hired more designers and creatives who shared their passion for design
        and their commitment to making a difference in the world. Today, their
        small design agency has become a force to be reckoned with, known for
        their innovative and impactful design solutions.
      </Paragraph>
      {/* fourth paragraph */}
      <Paragraph>
        At the heart of it all, the agency's success is rooted in Johny's vision
        and his team's commitment to using design as a tool for positive change.
        Their journey may have started small, but their passion and dedication
        have taken them far beyond their wildest dreams.
      </Paragraph>
    </LightCard>
  );
};
