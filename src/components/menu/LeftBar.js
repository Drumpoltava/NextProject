import { usePathname } from 'next/navigation';
import styles from './LeftBar.module.css';
import Link from 'next/link';
import { classes } from '@/utils/common';

export default function LeftBar() {
  const pathname = usePathname();

  const links = [
    {
      href: '/',
      name: 'Start First Project',
    },
    {
      href: '/details',
      name: 'Project Details',
    },
    {
      href: '/project',
      name: 'Create Project',
    },
  ];

  const currentLinkIndex = links.findIndex((link) => link.href === pathname);

  return (
    <div className={styles.container}>
      <ul>
        {links.map((link, index) => {
          const isActive = link.href === pathname;
          const isVisited = index < currentLinkIndex;
          const liStyle = isActive
            ? styles.white
            : isVisited
            ? styles.blue
            : styles.grey;
          const linkStyle = isActive
            ? styles.linkActive
            : isVisited
            ? styles.linkVisited
            : styles.link;

          return (
            <li key={link.name} className={classes(liStyle, styles.listItem)}>
              <Link href={link.href} className={linkStyle}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
