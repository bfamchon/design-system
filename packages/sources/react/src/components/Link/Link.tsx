import * as React from 'react';
import { LinkSize } from './types';

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * The size of the link.
   * @defaultValue 'medium'
   */
  size?: LinkSize;

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @defaultValue false
   */
  standalone?: boolean;

  /**
   * Whether link is reversed or not.
   * @type {boolean}
   * @defaultValue false
   */
  reversed?: boolean;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @defaultValue false
   */
  iconAlong?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
}

export const Link = ({
  iconAlong = false,
  standalone = false,
  reversed = false,
  size = 'medium',
  children,
  className,
  ...props
}: LinkProps) => {
  const relAttrValues = Array.from(
    new Set([
      // If component has a given "rel" attribute, keep values
      ...(props?.rel?.split(' ') ?? []),
      // If comp has "target" set to "blank", add some values
      ...(props?.target === '_blank' ? ['noopener', 'noreferrer'] : [])
    ])
  )
    .join(' ')
    .trim();

  return (
    <a className={'link'} {...(relAttrValues && { rel: relAttrValues })} {...props}>
      {children}
    </a>
  );
};

const MemoLink = React.memo(Link);

MemoLink.displayName = 'Link';

export default MemoLink;
