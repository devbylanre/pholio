import { useState } from 'react';
import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { Button } from '../../components/ui/Button';
import { LightCard } from '../../layouts/LightCard';
import { motion } from 'framer-motion';
import {
  PiArrowUpRightBold,
  PiDesktop,
  PiShapesBold,
  PiPolygonBold,
} from 'react-icons/pi';

const portfolios = [
  {
    layout: 'row',
    brand: 'passenger',
    category: 'Website design',
    icon: <PiDesktop className='w-5 h-5' />,
    image: './assets/images/portfolio-one.jpg',
    comment: 'A perfectly crafted website for a airline business company',
    className:
      'flex flex-col md:flex-row gap-8 items-center col-span-full pt-5 md:pt-0',
  },
  {
    layout: 'column',
    brand: 'Sassplex X',
    comment: 'A perfectly crafted website for a airline business company',
    category: 'UX design',
    icon: <PiShapesBold className='w-5 h-5' />,
    image: './assets/images/portfolio-two.jpg',
    className: 'flex-col flex gap-8 col-span-full md:col-span-6',
  },
  {
    layout: 'column',
    brand: 'OnlyRead',
    comment: 'A perfectly crafted website for a airline business company',
    category: 'Motion graphics',
    icon: <PiPolygonBold className='w-5 h-5' />,
    image: './assets/images/portfolio-three.jpg',
    className: 'flex-col flex gap-8 col-span-full md:col-span-6',
  },
];

export const Portfolio = () => {
  const [isButtonHovered, setIsButtonHovered] = useState<number | null>(null);

  return (
    <div className='flex flex-col gap-y-12'>
      <Heading
        className='text-3xl md:text-6xl'
        weight='semibold'
      >
        Making complex digital projects for people easy to use.
      </Heading>

      <div>
        <div>
          <h6 className='text-xl font-medium'>Portfolio</h6>
          <Paragraph className='mt-1 text-zinc-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Paragraph>
        </div>
      </div>

      {/* portfolio showcase */}
      <div className='grid grid-cols-12 gap-8'>
        {portfolios.map((portfolio, index: number) => (
          <LightCard
            key={portfolio.brand}
            className={portfolio.className}
            whileHover={{ y: 12 }}
            transition={{ duration: 0.25, type: 'tween' }}
          >
            {/* box content */}
            <div
              className={`${
                portfolio.layout === 'column' && 'pt-5'
              } flex flex-col items-start w-full px-5 gap-y-2`}
            >
              {/* portfolio category icon */}
              <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100'>
                {portfolio.icon}
              </div>
              {/* portfolio brand name */}
              <Paragraph className='capitalize'>{portfolio.brand}</Paragraph>
              {/* portfolio details */}
              <Heading className='text-lg font-medium capitalize'>
                {portfolio.category}
              </Heading>
              {/* portfolio comment */}
              <Paragraph>{portfolio.comment}</Paragraph>
              {/* portfolio link button */}
              <Button
                className='px-3 py-2 border rounded border-zinc-900'
                onMouseOver={() => setIsButtonHovered(index)}
                onMouseLeave={() => setIsButtonHovered(null)}
              >
                <span>Download guideline</span>
                <motion.span
                  initial={false}
                  animate={isButtonHovered === index ? { x: 4, y: -4 } : {}}
                >
                  <PiArrowUpRightBold />
                </motion.span>
              </Button>
            </div>
            {/* box image */}
            <div className='w-full'>
              <img
                className='w-full h-[250px] object-cover'
                src={portfolio.image}
                alt={portfolio.brand + ' - ' + portfolio.image}
              />
            </div>
          </LightCard>
        ))}
      </div>
    </div>
  );
};
