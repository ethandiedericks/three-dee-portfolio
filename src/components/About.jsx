/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-5 min-w-[400px]'
        >
          <img src={icon} alt={title} className='object-fill' />
        
        </div>

      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}
          >Introduction</p>
          <h2 className={styles.sectionHeadText}
          >About me:</h2>
      </motion.div>

      

      <div className='mt-20 flex flex-wrap gap-10'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px] text-wrap'
        >
         I'm a dynamic backend developer with a unique journey—from studying towards a Computer Science degree to pursuing a Meta Backend Professional Certification. Specializing in version control with Git, databases, APIs, and the full stack using Django, Python, and MySQL. My passion lies in crafting efficient and robust digital solutions. Continuously learning and adapting to the evolving tech landscape, I thrive on transforming ideas into seamless, user-centric experiences. Let's build the future of technology together.
        </motion.p>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index= {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')