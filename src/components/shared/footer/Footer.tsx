import {
  FacebookIcon,
  FileAxis3D,
  GitBranchIcon,
  Github,
  GithubIcon,
  Linkedin,
  LocateOffIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 overflow-x-hidden mt-10 border-t shadow-md">
      <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
        <div className="grid grid-cols-10 gap-8 sm:gap-6">
          <div className="lg:col-span-2 col-span-5">
            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase dark:text-white">
              CONSUMER POLICY
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Security
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Categories
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-3">
                <Link href="/products" className="hover:underline">
                  Mens
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products" className="hover:underline">
                  Womens
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products" className="hover:underline">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-5">
            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-3">
                <Link href="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  E-shop Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Help
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Payments
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#" className="hover:underline">
                  Cancellation & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <h2 className="mb-5 text-sm font-bold text-gray-900 uppercase dark:text-white">
              Customer Care
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-3">
                <Link
                  href="#"
                  className="hover:underline flex items-center gap-2"
                >
                  <span className="">
                    <PhoneCallIcon className="w-5 h-5" />{" "}
                  </span>{" "}
                  123-456-7898
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="hover:underline flex items-center gap-2"
                >
                  <span className="">
                    <MailIcon className="w-5 h-5" />{" "}
                  </span>{" "}
                  tareq125@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              E-Shop Fashion
            </Link>
            . All Rights Reserved. tareqlpu5@gmail
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Youtube className="w-5 h-5" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <GitBranchIcon className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
