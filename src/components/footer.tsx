import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="mb-6 md:mb-0">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
          </Link>

          <nav className="flex gap-6">
            <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              ABOUT
            </Link>
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
              FEATURES
            </Link>
            <Link href="#tokenomics" className="text-foreground/70 hover:text-foreground transition-colors">
              TOKENOMICS
            </Link>
            <Link href="#roadmap" className="text-foreground/70 hover:text-foreground transition-colors">
              ROADMAP
            </Link>
            <Link href="#how-to-buy" className="text-foreground/70 hover:text-foreground transition-colors">
              HOW TO BUY
            </Link>
            <Link href="#faq" className="text-foreground/70 hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border/20">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="https://twitter.com" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </Link>
            <Link href="https://telegram.org" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </Link>
            <Link href="https://discord.com" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="12" r="1"/>
                <circle cx="15" cy="12" r="1"/>
                <path d="M7.5 7.5c3.5-1 5.5-1 9 0"/>
                <path d="M7.5 16.5c3.5 1 5.5 1 9 0"/>
                <path d="M15.5 17.5v.5a3.5 3.5 0 0 1-7 0v-.5"/>
                <path d="M8.5 14.5V17c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-2.5"/>
                <path d="M20 8v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z"/>
              </svg>
            </Link>
          </div>

          <div className="text-foreground/50 text-sm">
            $RAGE HOLDINGS LLC © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
