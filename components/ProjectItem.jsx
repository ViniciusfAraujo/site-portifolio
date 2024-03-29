import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectItem = ({title, backgroudImg, projectUrl}) => {
  return (
    <div className=' relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#888C81]  hover:scale-105 ease-in duration-300'>
        <Image className=' rounded-xl group-hover:opacity-10' src={backgroudImg} alt='Projeto Rick And Morty'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <Link href={projectUrl} target='_blank'>
                <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer '>Saiba mais!</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem