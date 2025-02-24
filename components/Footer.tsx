import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Economic Pulse</h3>
            <p className="text-sm text-muted-foreground">Tracking global economic trends through innovative indices.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/indices" className="text-sm hover:text-primary transition-colors">
                  Indices
                </Link>
              </li>
              <li>
                <Link href="/market-trends" className="text-sm hover:text-primary transition-colors">
                  Market Trends
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/market-trends" className="text-sm hover:text-primary transition-colors">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm hover:text-primary transition-colors">
                  Economic Glossary
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-sm hover:text-primary transition-colors">
                  Methodology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Economic Pulse. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

