import Link from 'next/link';
import NavLinks from '@/app/auxiliares/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import styles from './auxiliares.module.css';

export default function SideNav() {
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-red-700 p-4 md:h-40">
        <p className={styles.logo}><span style={{ color: 'white'}}>Off-Line</span></p>
        </div>
          <div className="w-32 text-white md:w-40"></div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <form>
          <Link href="http://localhost:3000"></Link>
          </form>
        </div>
      </div>
    );
  }
