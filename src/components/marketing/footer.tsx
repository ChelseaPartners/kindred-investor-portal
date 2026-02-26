import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1a2332]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <span className="text-sm font-bold text-[#c9a96e]">C</span>
              </div>
              <span className="text-lg font-semibold text-white">Chelsea Partners</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              A trusted partner in real estate investment, delivering consistent returns
              and institutional-quality reporting to our investors.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h4>
            <div className="mt-4 space-y-3">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white">About</Link>
              <Link href="/portfolio" className="block text-sm text-gray-300 hover:text-white">Portfolio</Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Investors</h4>
            <div className="mt-4 space-y-3">
              <Link href="/auth/login" className="block text-sm text-gray-300 hover:text-white">Investor Login</Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white">Become an Investor</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chelsea Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
