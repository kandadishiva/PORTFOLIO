import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { github,website } from '../assets';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard = ({index,name,description,tags,source_code_link,image,liveserver_link}) => {
  return (
    <motion.div variants={fadeIn("up","spring",0.5*index,0.75)} >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            <div
              onClick={()=> window.open(liveserver_link,"_blank")}
              className='white-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={website} alt='website' className='w-8 h-8 object-contain rounded-full' />
               
            </div>
            <div
              onClick={()=> window.open(source_code_link,"_blank")}
              className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-6 h-6 object-contain' />
               
            </div>
          </div>
          
        </div>

        <div className='mt-5'>
          <h3 className='text-white text-[20px] font-bold'>
            {name}
          </h3>
          <p className='text-secondary text-[14px] mt-2'>
            {description}
          </p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
               <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
               </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant} >
        <p className={styles.sectionSubText}>
          My Projects
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my projects that I have worked on. I have worked on
          many projects but these are some of my best projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((project,index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects,"Projects");