import React from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

type ContactInfopTypes = {
  type: string;
  value: string;
};
export default function ContactSection() {
  const contactInfo: ContactInfopTypes[] = [
    { type: 'phone', value: '(323) 676-7433' },
    { type: 'email', value: 'info@ryddo.com' },
    {
      type: 'adress',
      value: '787 S Alameda St., Unit 120, Los Angeles, CA 90021',
    },
  ];
  return (
    <div className="text-center md:text-left">
      <section className='w-full' aria-labelledby='contact-heading'>
        <h2 id='contact-heading' className='text-sm font-semibold mb-4'>
          Contact Us
        </h2>

        <div className='space-y-3'>
          {/* Phone */}
          <div className='flex items-center justify-center md:justify-start gap-2 w-full'>
            <FaPhone className='text-[#333333]' aria-hidden='true' />
            <Link
              href='tel:+13236767433'
              className='text-[#333333] hover:text-[#F92F7B]'
              title='Call Ryddo'
            >
              (323) 676-7433
            </Link>
          </div>

          {/* Email */}
          <div className='flex items-center justify-center md:justify-start gap-2 w-full'>
            <FaEnvelope className='text-[#333333]' aria-hidden='true' />
            <Link
              href='mailto:info@ryddo.com'
              className='text-[#333333] hover:text-[#F92F7B]'
              title='Email Ryddo'
            >
              info@ryddo.com
            </Link>
          </div>

          {/* Address */}
          <div className='flex items-start justify-center md:justify-start gap-2 w-full'>
            <FaMapMarkerAlt
              className='text-[#333333] mt-1'
              aria-hidden='true'
            />
            <address className='text-[#333333] not-italic'>
              <Link
                href='https://maps.google.com/?q=787+S+Alameda+St.,+Unit+120,+Los+Angeles,+CA+90021'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-[#F92F7B]'
                title='View Ryddo location on Google Maps'
              >
                787 S Alameda St., Unit 120,
                <br />
                Los Angeles, CA 90021
              </Link>
            </address>
          </div>

          {/* Social Media */}
          <div className='flex justify-center md:justify-start gap-4 pt-2 mt-2' aria-label='Social Media Links'>
            <Link
              href='https://instagram.com/ryddo'
              aria-label='Follow Ryddo on Instagram'
              title='Instagram'
              className='text-[#333333] hover:text-[#F92F7B]'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram size={22} aria-hidden='true' />
            </Link>
            <Link
              href='https://facebook.com/ryddo'
              aria-label='Follow Ryddo on Facebook'
              title='Facebook'
              className='text-[#333333] hover:text-[#F92F7B]'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook size={22} aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
