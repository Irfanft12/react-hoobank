import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => (
    <footer>
      <div className='flex pb-5 border-b md:flex-row flex-col' style={{borderColor: "rgb(255 255 255 / 20% )"}}>
        <div className='md:w-[40%] w-[100%] md:mb-0 mb-3'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px]' />
          <p className={`${styles.paragraph} mt-5 max-w-[400px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='md:w-[60%] w-[100%] flex md:flex-row flex-col md:justify-between justify-start'>
          {footerLinks.map((footerLink, index) => (
              <div className='' key={index}>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-3'>{footerLink.title}</h4>
                <ul>
                  {footerLink.links.map((footerlink1, index) => (
                    <li key={index} className='mb-1 font-poppins font-normal text-[16px] leading-[24px]'>
                      <a href={footerlink1.link} className='text-dimWhite hover:text-white'>{footerlink1.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              ))}
        </div>
      </div>
      <div className='flex py-4 md:justify-between justify-start'>
        <p className='text-dimWhite font-poppins font-normal'>
          <span className='font-abel font-normal text-[18px] leading-[27px]'>Copyright</span>
          <span className='px-2'>&copy;</span>
          <span className='font-poppins text-[18px] leading-[27px]' style={{fontWeight: "100"}}>2021 HooBank. All Rights Reserved.</span>
        </p>
        <p className='flex'>
          {socialMedia.map(social => (
              <a key={social.id} href={social.link} className="px-4" target="_blank">
                <img src={social.icon} alt="icon" />
              </a>
            )
          )}
        </p>
      </div>
    </footer>
  )

export default Footer