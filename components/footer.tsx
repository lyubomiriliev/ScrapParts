import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={400}
                height={100}
                alt="/"
                src="/scrapFiguresLogo.png"
                className="w-40"
              />
            </Link>
            <p className="mt-4 text-sm lg:max-w-[250px] text-gray-400">
              Transforming automotive scrap into unique works of art. Each piece
              tells a story of rebirth and creativity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Sofia, Bulgaria</li>
              <li>+359 888 123 456</li>
              <li>contact@metalart.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ScrapFigures. All rights reserved.</p>
          <p>
            Website created by{" "}
            <a
              href="https://lyubomir-iliev-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline"
            >
              Lyubomir.Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
