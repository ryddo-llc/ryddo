import React from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
export default function ContactSection() {
  return (
    <div className='w-full'>
      <h4 className='text-sm font-semibold mb-4'>Find us</h4>

      <div className='space-y-3'>
        {/* Phone */}
        <div className='flex items-center gap-2'>
          <FaPhone className='text-[#333333]' />
          <Link
            href='tel:+13236767433'
            className='text-[#333333] hover:text-blue-600'
          >
            (323) 676-7433
          </Link>
        </div>

        {/* Email */}
        <div className='flex items-center gap-2'>
          <FaEnvelope className='text-[#333333]' />
          <Link
            href='mailto:info@ryddo.com'
            className='text-[#333333] hover:text-blue-600'
          >
            info@ryddo.com
          </Link>
        </div>

        {/* Address */}
        <div className='flex items-start gap-2'>
          <FaMapMarkerAlt className='text-[#333333] mt-1' />
          <div className='text-[#333333]'>
            787 S Alameda St., Unit 120,
            <br />
            Los Angeles, CA 90021
          </div>
        </div>

        {/* Social Media */}
        <div className='flex gap-4 pt-2 mt-2'>
          <Link
            href='https://instagram.com/ryddo'
            aria-label='Instagram'
            className='text-[#333333] hover:text-blue-600'
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href='https://facebook.com/ryddo'
            aria-label='Facebook'
            className='text-[#333333] hover:text-blue-600'
          >
            <FaFacebook size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
