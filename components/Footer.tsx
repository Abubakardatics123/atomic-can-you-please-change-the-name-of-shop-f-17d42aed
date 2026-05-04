import { Mail, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
  Help: ["FAQs", "Shipping Info", "Returns", "Track Order"],
  Company: ["About Us", "Careers", "Press", "Contact"],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Toby&apos;s Shop
            </span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Curated products for everyday life. We believe great quality shouldn&apos;t cost a fortune — and we&apos;re here to prove it.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:hello@tobysshop.co.uk" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay in the loop</h4>
              <p className="text-sm text-gray-400">Get the latest deals and new arrivals straight to your inbox.</p>
            </div>
            <form className="flex w-full sm:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Toby&apos;s Shop. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
