"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LINKS } from "@/app/links";
import { useState } from "react";
import { ChevronDown, CircleHelp, Menu, X } from "lucide-react";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
} from "@reown/appkit/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { caipNetwork } = useAppKitNetwork();

  const formatAddress = address?.slice(0, 4) + "..." + address?.slice(-4);

  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-3xl">$QUIT</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-x-3">
          {isConnected ? (
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => open({ view: "Account" })}
            >
              {formatAddress}
            </Button>
          ) : (
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => open({ view: "Connect" })}
            >
              Connect Wallet
            </Button>
          )}
          {isConnected && (
            <Button
              variant="outline"
              onClick={() => open({ view: "Networks" })}
              className="hidden md:flex"
            >
              {caipNetwork?.name}
              <ChevronDown />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col gap-4 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            {isConnected && (
              <Button
                variant="outline"
                onClick={() => open({ view: "Networks" })}
                className="md:hidden"
              >
                {caipNetwork?.name}
                <ChevronDown />
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
