'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { LINKS } from '@/app/links'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='border-b border-border/40 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-50'>
      <div className='container flex items-center justify-between py-4'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='flex items-center'>
            <span className='font-bold text-3xl'>$QUIT</span>
          </Link>
          <nav className='hidden md:flex gap-6'>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-foreground/70 hover:text-foreground transition-colors'
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-x-3'>
          <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
            Connect Wallet
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden bg-primary text-primary-foreground hover:bg-primary/90'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm'>
          <nav className='container flex flex-col gap-4 py-4'>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-foreground/70 hover:text-foreground transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
