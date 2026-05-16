export default function TermsConditions() {
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
            Terms & Conditions
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
          {/* SECTION */}

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
              These Terms & Conditions govern the
              use of the Colonial Ventures website
              and related plantation investment
              services. By accessing this website,
              users agree to comply with the terms
              outlined below.
            </p>
          </div>

          {/* SECTION */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Investment Information
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Information presented on this website
              is provided for general informational
              purposes only and should not be
              considered financial or legal advice.
              Investment returns may vary depending
              on market conditions, plantation
              performance, and operational factors.
            </p>
          </div>

          {/* SECTION */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Website Usage
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Users agree not to misuse this
              website, attempt unauthorized access,
              or engage in activities that may
              disrupt website functionality or
              compromise security.
            </p>
          </div>

          {/* SECTION */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Intellectual Property
            </h2>

            <p className="text-gray-300 leading-relaxed">
              All content, branding, images, logos,
              and materials displayed on this
              website are the property of Colonial
              Ventures unless otherwise stated.
              Unauthorized reproduction or
              distribution is prohibited.
            </p>
          </div>

          {/* SECTION */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Limitation of Liability
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Colonial Ventures shall not be held
              liable for any direct or indirect
              losses arising from the use of this
              website or reliance on any
              information presented herein.
            </p>
          </div>

          {/* SECTION */}

          <div>
            <h2
              className="
              text-3xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Contact Information
            </h2>

            <p className="text-gray-300 leading-relaxed">
              For questions regarding these Terms &
              Conditions, please contact:
              <br />
              info@colonialventures.lk
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}