import { Icon } from '@iconify/react';
import React from 'react';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';

function Card({ icon, title, description, bgColor, href, aosDelay }) {
  return (
    <div className="bg-white rounded-tl-[100px] rounded-br-[100px] w-full max-w-sm overflow-hidden" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className={`${bgColor} text-white text-5xl rounded-br-full flex justify-center py-4`}>
        <Icon icon={icon} />
      </div>
      <div className="m-10">
        <h3 className="text-center text-2xl font-bold sm:text-4xl" data-aos="fade-left" data-aos-delay={aosDelay}>{title}</h3>
        <p className="mt-4" data-aos="fade-left" data-aos-delay={aosDelay}>{description}</p>
        <div className="flex justify-center" data-aos="fade-left" data-aos-delay={aosDelay}>
          <Button className="mt-4" text="Selengkapnya" href={href} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Card;