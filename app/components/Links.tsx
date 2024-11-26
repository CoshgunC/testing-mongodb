"use client"
import { useEffect, useState } from 'react';
import LinkComponent from './LinkComponent';

import { LinkProps } from '@/lib/types';

const Links = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch('/api/links');
      const data: LinkProps[] = await response.json();
      setLinks(data);
    };

    fetchLinks();
  }, []);

  return (
    <div>
      <h1>Your Links</h1>
      <ul>
        {links.map((link) => (
          <LinkComponent _id={link._id} key={link._id} url={link.url} title={link.title} />
        ))}
      </ul>
    </div>
  );
};

export default Links;
