import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Form from '../Form/Form';
import styles from './Footer.module.css';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Border */}
      <div className={styles.topBorder} />

      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.logoContainer}>
             <Image
              src="/icons/BLive Logo.png"
              alt="BLive Logo"
              width={100}
              height={32}
              className={styles.logo}
            />
          </div>
          
          <address className={styles.address}>
            Jl. Uma Buluh, Canggu,
            Kec. Kuta Utara<br />
            Kabupaten Badung,
            Bali 80361
          </address>

          <div className={styles.formWrapper}>
             <p className={styles.formLabel}>Join our newsletter to stay up to date on features and releases.</p>
             <Form placeholder="Enter your email" variant="footer" />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
            <div className={styles.linksGroup}>
                <h4 className={styles.columnTitle}>BLife Ecosystem</h4>
                <div className={styles.linkList}>
                    <Link href="https://bwork.id" target="_blank" className={styles.linkItem}>BWork</Link>
                    <Link href="https://bfriends.id" target="_blank" className={styles.linkItem}>BFriends</Link>
                    <Link href="https://bnesta.id" target="_blank" className={styles.linkItem}>BNesta</Link>
                </div>
            </div>

            <div className={styles.linksGroup}>
                <h4 className={styles.columnTitle}>Contact Us</h4>
                <div className={styles.contactList}>
                    <Link href="https://instagram.com/blive.id" target="_blank" className={styles.contactItem}>
                        <Instagram size={18} />
                        <span>blive.id</span>
                    </Link>
                    <Link href="mailto:hello@blive.id" className={styles.contactItem}>
                        <Mail size={18} />
                        <span>hello@blive.id</span>
                    </Link>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          ©2025. All right reserved.
        </div>
        <div className={styles.legalLinks}>
             <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
             <Link href="#" className={styles.legalLink}>Terms of Service</Link>
             <Link href="#" className={styles.legalLink}>Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

