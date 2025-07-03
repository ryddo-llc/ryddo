import React from 'react';
import Link from 'next/link';
type ExploreLinksProps = {
  name: string;
  link: string;
};
export default function ExploreLinks() {
  const exploreLinks = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Terms & Conditions',
      link: '/terms&conditions',
    },
    {
      name: 'My Account',
      link: '/account',
    },
    {
      name: 'Contact us',
      link: '/contact',
    },
  ];
  return (
    <div className="text-center md:text-left">
      <h3 className='text-sm font-semibold mb-4'>Explore</h3>
      <div className='flex flex-col items-center md:items-start space-y-3'>
        {exploreLinks.map((exploreLink: ExploreLinksProps) => (
          <Link
            className='text-[#333333] hover:text-[#F92F7B]'
            key={exploreLink.name}
            href={exploreLink.link}
          >
            {exploreLink.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
