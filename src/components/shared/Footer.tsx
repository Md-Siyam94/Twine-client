
// import Link from 'next/link';
import { BiCalendar, BiPhone } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import Lily_Fashion from '../../../public/lilyfashionlogo2.png'
// import Image from 'next/image';


const Footer = () => {
 
  const aboutLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Resource Center', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Instructor', href: '#' },
    { label: 'Become A Teacher', href: '#' },
  ];

  const helpLinks = [
    { label: 'Payment', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Return & Replacement', href: '#' },
    { label: 'Chat With Us', href: '#' },
    { label: 'Lily Support', href: '#' },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#163634] to-[#192A29] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
           <Link to={"/"} className="">
           <h2 className='text-3xl '>Twine Were</h2>
           {/* <img className='h-18 w-28 object-cover' src={Lily_Fashion} alt="Lily fashion Logo" /> */}
           </Link>
           <p className='font-semibold text-gray-100 mt-4'>Style Starts Here.</p>
            <div className="space-y-3 mt-10 mb-6">
              <a href="tel:(702) 123-1478" className="flex items-center gap-3 text-2xl font-semibold text-white hover:text-teal-400 transition-colors">
                <BiPhone className="w-5 h-5 shrink-0" />
                <span>+880 1789478967</span>
              </a>
              <a href="mailto:info@company.com" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
                <CgMail className="w-5 h-5 shrink-0" />
                <span>siyam942404@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 ml-7 uppercase">About</h4>
            <ul className="space-y-4">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <BsArrowRight className="w-4 h-4 shrink-0 opacity-0 text-gray-400 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 ml-7 uppercase">Helps</h4>
            <ul className="space-y-4">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <BsArrowRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2026 Lily Fashion. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;