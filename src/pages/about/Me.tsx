import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';

export const Me = () => {
  return (
    <LightCard className='flex flex-col p-5 gap-y-5'>
      <Heading className='text-xl'>About me</Heading>
      <Paragraph className='text-zinc-900'>
        Hello there! My name is Matt. As a digital designer, I have a passion
        for crafting visually stunning and engaging experiences digital realm.
        With a strong background in design principles and a keen eye for
        aesthetics, I specialize in creating seamless user interfaces,
        captivating visuals, and innovative branding strategies. I thrive on
        staying up-to-date with the latest design trends and technologies to
        deliver cutting-edge solutions that not only meet client objectives but
        also leave a lasting impact on users.
      </Paragraph>
      <Paragraph className='text-zinc-900'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
        nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
        cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
        posuere.
      </Paragraph>
    </LightCard>
  );
};
