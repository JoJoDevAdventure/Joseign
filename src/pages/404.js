import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Joseign</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <main className="w-full min-h-[80vh] flex items-center justify-center px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <p className="text-[120px] md:text-[80px] font-extrabold leading-none text-dark/5">
            404
          </p>
          <h1 className="text-3xl md:text-2xl font-extrabold text-dark -mt-4 mb-4">
            Page not found
          </h1>
          <p className="text-dark/50 mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-dark text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </main>
    </>
  );
}
