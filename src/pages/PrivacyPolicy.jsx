export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section
        className="
        bg-[#081C15]
        h-[40vh]
        flex
        items-center
        justify-center
        text-center
        px-6
        "
      >
        <div>
          <p
            className="
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            mb-4
            "
          >
            Legal Information
          </p>

          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            "
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* CONTENT */}

      <section className="py-24 px-6">
        <div
          className="
          max-w-5xl
          mx-auto
          space-y-12
          "
        >
          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Introduction
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Colonial Ventures respects your
              privacy and is committed to protecting
              your personal information. This
              Privacy Policy explains how we
              collect, use, and safeguard your
              information when using our website
              and services.
            </p>
          </div>

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Information We Collect
            </h2>

            <p className="text-gray-300 leading-relaxed">
              We may collect information such as
              your name, email address, phone
              number, and investment inquiries when
              you contact Colonial Ventures through
              our website.
            </p>
          </div>

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Use of Information
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Information collected is used solely
              for communication, investor
              consultation, and improving our
              services and website experience.
            </p>
          </div>

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Data Protection
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Colonial Ventures implements
              reasonable security measures to
              protect personal information from
              unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Contact
            </h2>

            <p className="text-gray-300 leading-relaxed">
              For any privacy-related concerns,
              please contact:
              <br />
              info@colonialventures.lk
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}