import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* About */}
        <div>
          <h4 className="mb-4 text-md font-bold">ABOUT US</h4>

          <p className="text-sm leading-6 text-gray-300">
            BookBazaar is your one-stop destination for discovering and buying
            books across every genre. We make it easy to find your next great
            read, explore new authors, and bring your favorite stories home.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 text-md font-bold">NEWSLETTER</h4>

          <p className="mb-4 text-sm text-gray-300">
            Subscribe to our newsletter for the latest books, exclusive offers,
            and reading recommendations delivered straight to your inbox.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-md bg-white px-3 py-2 text-sm text-gray-800 outline-none"
            />

            <button className="flex items-center justify-center rounded-r-md bg-orange-400 px-4 py-2 transition hover:bg-orange-500">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-md font-bold">LET US BE SOCIAL</h4>

          <p className="mb-4 text-sm text-gray-300">
            Follow us on social media for book recommendations, new arrivals,
            updates, and everything happening at BookBazaar.
          </p>

          <div className="flex items-center gap-5">
            <FaFacebook
              size={18}
              className="cursor-pointer transition hover:text-blue-400"
            />

            <FaInstagram
              size={18}
              className="cursor-pointer transition hover:text-pink-400"
            />

            <FaXTwitter
              size={18}
              className="cursor-pointer transition hover:text-gray-400"
            />

            <FaLinkedin
              size={18}
              className="cursor-pointer transition hover:text-blue-400"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
