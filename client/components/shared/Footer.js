import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Hotel Reservation</h3>
            <p className="text-sm">
              A comprehensive hotel reservation system to help you find the perfect accommodation for your stay.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className="hover:text-gray-500 cursor-pointer">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/hotels">
                  <p className="hover:text-gray-500 cursor-pointer">Hotels</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-gray-500 cursor-pointer">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:text-gray-500 cursor-pointer">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">
                  <p className="hover:text-gray-500 cursor-pointer">Terms of Service</p>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <p className="hover:text-gray-500 cursor-pointer">Privacy Policy</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">123 Hotel Street, City, Country</p>
            <p className="text-sm">contact@example.com</p>
            <p className="text-sm">+1 123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hotel Reservation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
