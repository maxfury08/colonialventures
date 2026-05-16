import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div className="text-center">
        {/* 404 */}

        <h1
          className="
          text-[120px]
          md:text-[180px]
          font-bold
          text-[#D4AF37]
          leading-none
          "
        >
          404
        </h1>

        {/* TITLE */}

        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          mb-6
          "
        >
          Page Not Found
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
          text-gray-400
          text-lg
          max-w-2xl
          mx-auto
          mb-10
          "
        >
          The page you are looking for does not
          exist or may have been moved.
        </p>

        {/* BUTTON */}

        <Link
          to="/"
          className="
          inline-block
          bg-[#D4AF37]
          hover:bg-[#c49c22]
          text-black
          px-8
          py-4
          rounded-full
          font-semibold
          transition-all
          "
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}