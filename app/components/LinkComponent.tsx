import { LinkProps } from '@/lib/types';
import React from 'react';



const LinkComponent: React.FC<LinkProps> = async ({ url, title, _id }) => {
  return (
    <div className="flex items-center justify-between p-">
      <b className=''>{title}</b>
      <a href={url}>{url}</a>
    </div>
  );
};

export default LinkComponent;