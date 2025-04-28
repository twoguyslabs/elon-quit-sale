import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex gap-6">
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
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white">
            0 Pt
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
