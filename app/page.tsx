"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState("All Age Groups");
  const [timing, setTiming] = useState("Any Time");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!location.trim()) {
      alert("Please enter your location.");
      return;
    }

    alert(
      `Searching daycare in ${location} for ${ageGroup} with ${timing} care.`
    );
  };

  const setPopularSearch = (value: string) => {
    if (value === "24×7 Daycare") {
      setTiming("24×7 Care");
    } else if (value === "Night Care") {
      setTiming("Night Care");
    } else if (value === "Emergency Care") {
      setTiming("Emergency Care");
    }

    document
      .getElementById("find-daycare")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#283044]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">

        <div className="flex h-[82px] w-full items-center justify-between px-5">

          {/* Logo */}

          <a href="#" className="flex shrink-0 items-center gap-3">

            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff719c] to-[#e63e76] text-[28px] text-white shadow-sm">
              👣
            </div>

            <div>
              <div className="font-serif text-[28px] font-bold leading-none text-[#e9477c]">
                Little Steps
              </div>

              <div className="mt-1 text-[12px] font-semibold tracking-wide text-[#273044]">
                Trusted 24×7 Childcare
              </div>
            </div>

          </a>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-6 xl:flex">

            <a
              href="#"
              className="relative py-7 text-[15px] font-semibold text-[#e9477c]"
            >
              Home

              <span className="absolute bottom-3 left-0 right-0 mx-auto h-[2px] w-8 rounded-full bg-[#e9477c]" />
            </a>

            <a
              href="#find-daycare"
              className="py-7 text-[15px] font-medium text-[#202534] transition hover:text-[#e9477c]"
            >
              Find Daycare
            </a>

            <a
              href="#how-it-works"
              className="py-7 text-[15px] font-medium text-[#202534] transition hover:text-[#e9477c]"
            >
              How It Works
            </a>

            <a
              href="#providers"
              className="py-7 text-[15px] font-medium text-[#202534] transition hover:text-[#e9477c]"
            >
              For Providers
            </a>

            <a
              href="#about"
              className="py-7 text-[15px] font-medium text-[#202534] transition hover:text-[#e9477c]"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="py-7 text-[15px] font-medium text-[#202534] transition hover:text-[#e9477c]"
            >
              Contact Us
            </a>

          </nav>


          {/* Right Actions */}

          <div className="hidden items-center gap-2 md:flex">

            <button className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-[14px] font-medium text-[#e9477c] transition hover:border-[#e9477c]">
              📍 Pune, India
              <span className="ml-1 text-[11px]">▼</span>
            </button>

            <Link
              href="/login"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-[12px] font-medium text-[#303646] transition hover:border-[#e9477c] hover:text-[#e9477c]"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-[#e9477c] px-5 py-2.5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#d9366d]"
            >
              Sign Up
            </Link>

          </div>


          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-[24px] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Navigation */}

        {mobileMenu && (
          <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="#"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                Home
              </a>

              <a
                href="#find-daycare"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                Find Daycare
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                How It Works
              </a>

              <a
                href="#providers"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                For Providers
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                About Us
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="font-medium"
              >
                Contact Us
              </a>

              <div className="flex gap-2 pt-2">

                <button className="flex-1 rounded-lg border border-gray-200 py-3 text-[16px]">
                  Log In
                </button>

                <button className="flex-1 rounded-lg bg-[#e9477c] py-3 text-[16px] font-semibold text-white">
                  Sign Up
                </button>

              </div>

            </div>

          </div>
        )}

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-[#fff8fa]">

        <div className="grid w-full lg:grid-cols-[48%_52%]">

          {/* Hero Content */}

          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-5 lg:py-20">

            <h1 className="font-serif text-[50px] font-bold leading-[1.08] text-[#1d2638] sm:text-[60px] lg:text-[68px]">

              Peace of Mind

              <br />

              <span className="text-[#e9477c]">
                Anytime, Anywhere.
              </span>

            </h1>


            <div className="mt-6 h-[3px] w-[42px] rounded-full bg-[#e9477c]" />


            <p className="mt-5 max-w-[560px] text-[17px] leading-7 text-[#4a505d] sm:text-[18px]">

              Little Steps connects parents with verified 24×7
              daycare centers and caregivers so your child is
              always in safe, loving hands.

            </p>


            {/* Hero Benefits */}

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">

              <HeroBenefit
                icon="🛡️"
                text={
                  <>
                    Verified &
                    <br />
                    Background
                    <br />
                    Checked
                  </>
                }
                color="green"
              />

              <HeroBenefit
                icon="◷"
                text={
                  <>
                    24×7
                    <br />
                    Availability
                  </>
                }
                color="pink"
              />

              <HeroBenefit
                icon="👥"
                text={
                  <>
                    Safe, Hygienic &
                    <br />
                    Secure Centers
                  </>
                }
                color="orange"
              />

              <HeroBenefit
                icon="♡"
                text={
                  <>
                    Caring & Experienced
                    <br />
                    Caregivers
                  </>
                }
                color="blue"
              />

            </div>

          </div>


          {/* Hero Image */}

          <div className="relative min-h-[390px] overflow-hidden lg:min-h-[515px]">

            <img
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1600&q=90"
              alt="Happy family"
              className="absolute inset-0 h-full w-full object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />


            {/* Trust Card */}

            <div className="absolute bottom-5 right-5 w-[165px] rounded-2xl bg-white/95 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm">

              <div className="mb-2 text-[20px] text-[#e9477c]">
                ♡
              </div>

              <div className="text-[13px] text-gray-500">
                Trusted by
              </div>

              <div className="text-[26px] font-bold text-[#1d2638]">
                5,000+
              </div>

              <div className="text-[13px] text-gray-500">
                Happy Parents
              </div>


              <div className="mt-3 flex">

                <div className="h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="-ml-2 h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="-ml-2 h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                  <img
                    src="https://i.pravatar.cc/100?img=44"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="-ml-2 h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SEARCH
      ========================================================= */}

      <section
        id="find-daycare"
        className="relative z-10 -mt-4 w-full px-5 lg:-mt-7"
      >

        <div className="w-full rounded-[22px] border border-gray-100 bg-white p-5 shadow-[0_18px_50px_rgba(40,30,60,0.10)] sm:p-7">

          <form onSubmit={handleSearch}>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_auto]">

              <SearchField label="Where are you looking?">

                <span className="text-[#e9477c]">
                  📍
                </span>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="w-full bg-transparent text-[16px] outline-none placeholder:text-gray-400"
                />

              </SearchField>


              <SearchField label="Age Group">

                <span className="text-[#e9477c]">
                  👶
                </span>

                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="w-full bg-transparent text-[16px] outline-none"
                >
                  <option>All Age Groups</option>
                  <option>Infant</option>
                  <option>Toddler</option>
                  <option>Preschool</option>
                </select>

              </SearchField>


              <SearchField label="Care Timing">

                <span className="text-[#e9477c]">
                  ◷
                </span>

                <select
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full bg-transparent text-[16px] outline-none"
                >
                  <option>Any Time</option>
                  <option>Day Care</option>
                  <option>Night Care</option>
                  <option>Emergency Care</option>
                  <option>24×7 Care</option>
                </select>

              </SearchField>


              <button
                type="submit"
                className="h-[54px] rounded-xl bg-[#e9477c] px-7 text-[16px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9366d] hover:shadow-lg"
              >
                🔍 Search Daycare
              </button>

            </div>

          </form>


          {/* Popular Searches */}

          <div className="mt-5 flex flex-wrap items-center gap-2">

            <span className="mr-1 text-[14px] font-semibold text-[#252b38]">
              Popular Searches:
            </span>

            {[
              "24×7 Daycare",
              "Night Care",
              "Emergency Care",
              "Hourly Care",
              "Monthly Plans",
            ].map((item) => (

              <button
                key={item}
                onClick={() => setPopularSearch(item)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-600 transition hover:border-[#e9477c] hover:text-[#e9477c]"
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="w-full px-5 pt-6">

        <div className="grid w-full grid-cols-2 rounded-[20px] border border-[#edf0e9] bg-[#fdfdf8] p-5 md:grid-cols-5">

          <Stat
            icon="👥"
            number="5,000+"
            label="Happy Parents"
          />

          <Stat
            icon="🏢"
            number="250+"
            label="Verified Centers"
          />

          <Stat
            icon="🛡️"
            number="1,000+"
            label="Verified Caregivers"
          />

          <Stat
            icon="◷"
            number="24×7"
            label="Care Available"
          />

          <Stat
            icon="★"
            number="4.8/5"
            label="Parent Rating"
          />

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section
        id="how-it-works"
        className="w-full px-5 py-20"
      >

        <SectionTitle
          title={
            <>
              How{" "}
              <span className="text-[#e9477c]">
                Little Steps
              </span>{" "}
              Works?
            </>
          }
        />


        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          <Step
            number="01"
            icon="⌕"
            title="Search"
            description="Find trusted daycare near you"
            color="green"
          />

          <Step
            number="02"
            icon="☷"
            title="Filter & Compare"
            description="Compare centers, timings and pricing"
            color="pink"
          />

          <Step
            number="03"
            icon="▣"
            title="Book & Confirm"
            description="Select time slot or subscription plan"
            color="orange"
          />

          <Step
            number="04"
            icon="🛡️"
            title="Safe & Trusted Care"
            description="Your child is in safe, loving hands"
            color="blue"
          />

          <Step
            number="05"
            icon="♥"
            title="Happy Parenting"
            description="Peace of mind, every day"
            color="green"
          />

        </div>

      </section>


      {/* =========================================================
          PARENT + PROVIDER
      ========================================================= */}

      <section
        id="providers"
        className="w-full px-5 pb-20"
      >

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Parent Card */}

          <div className="grid overflow-hidden rounded-[22px] bg-[#fff5f8] sm:grid-cols-2">

            <div className="p-7">

              <h2 className="font-serif text-[27px] font-bold leading-tight text-[#1d2638]">

                The Best Care
                <br />

                For What{" "}

                <span className="text-[#e9477c]">
                  Matters Most
                </span>

              </h2>


              <p className="mt-4 text-[14px] leading-6 text-gray-600">

                We ensure your child gets a safe,
                nurturing and joyful environment
                even when you are not around.

              </p>


              <ul className="mt-4 space-y-2 text-[13px]">

                <li>✓ Trained & Verified Caregivers</li>

                <li>✓ Hygienic & Child-friendly Environment</li>

                <li>✓ Nutritious Meals & Activities</li>

                <li>✓ First Aid & Emergency Support</li>

              </ul>


              <button className="mt-5 rounded-lg bg-[#e9477c] px-4 py-3 text-[13px] font-bold text-white transition hover:bg-[#d9366d]">
                Find Daycare Near You →
              </button>

            </div>


            <div className="min-h-[280px]">

              <img
                src="https://images.unsplash.com/photo-1599629954294-14df1a8a4e95?auto=format&fit=crop&w=900&q=90"
                alt="Happy child"
                className="h-full w-full object-cover"
              />

            </div>

          </div>


          {/* Provider Card */}

          <div className="grid overflow-hidden rounded-[22px] bg-[#f2f9f4] sm:grid-cols-2">

            <div className="p-7">

              <h2 className="font-serif text-[27px] font-bold leading-tight text-[#1d2638]">

                Are You a
                <br />

                <span className="text-[#39824e]">
                  Childcare Provider?
                </span>

              </h2>


              <p className="mt-4 text-[14px] leading-6 text-gray-600">

                Join Little Steps and grow your
                daycare business with us.

              </p>


              <ul className="mt-4 space-y-2 text-[13px]">

                <li>✓ Get More Bookings</li>

                <li>✓ Manage Easily</li>

                <li>✓ Build Trust & Credibility</li>

                <li>✓ Grow Your Business</li>

              </ul>


              <button className="mt-5 rounded-lg bg-[#39824e] px-4 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f703f]">
                Join as Provider →
              </button>

            </div>


            <div className="min-h-[280px]">

              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=90"
                alt="Childcare center"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>


        {/* Benefit Strip */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <MiniBenefit
            icon="🛡️"
            title="Safety First"
            text="Strict verification and safety protocols"
          />

          <MiniBenefit
            icon="📍"
            title="Nearby & Convenient"
            text="Find daycare centers near you"
          />

          <MiniBenefit
            icon="▣"
            title="Flexible Plans"
            text="Hourly, daily & monthly plans"
          />

          <MiniBenefit
            icon="🎧"
            title="24×7 Support"
            text="We're here to help you anytime"
          />

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="w-full bg-[#fffafb] px-5 py-20"
      >

        <div className="grid w-full items-center gap-12 md:grid-cols-2">

          <div>

            <p className="text-[16px] font-bold uppercase tracking-[3px] text-[#e9477c]">
              Why Little Steps
            </p>

            <h2 className="mt-3 font-serif text-[42px] font-bold leading-tight text-[#1d2638]">

              Childcare you can
              <br />

              <span className="text-[#e9477c]">
                trust completely.
              </span>

            </h2>

            <p className="mt-5 max-w-[700px] text-[16px] leading-7 text-gray-600">

              Little Steps brings parents, verified childcare
              centers and experienced caregivers together on
              one trusted platform.

            </p>


            <div className="mt-7 grid max-w-[700px] grid-cols-2 gap-4">

              <TrustPoint
                icon="🛡️"
                title="Verified"
                text="Centers & caregivers"
              />

              <TrustPoint
                icon="◷"
                title="24×7"
                text="Flexible childcare"
              />

              <TrustPoint
                icon="♡"
                title="Caring"
                text="Child-first approach"
              />

              <TrustPoint
                icon="✓"
                title="Transparent"
                text="Plans & availability"
              />

            </div>

          </div>


          <div className="relative">

            <div className="overflow-hidden rounded-[30px] shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&w=1000&q=90"
                alt="Childcare"
                className="h-[430px] w-full object-cover"
              />

            </div>


            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl">

              <div className="text-[28px] font-bold text-[#e9477c]">
                24×7
              </div>

              <div className="text-[14px] font-semibold text-gray-600">
                Care when you need it
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="w-full px-5 py-16">

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-r from-[#fff0f5] to-[#fff9fb] px-6 py-10 text-center md:flex-row md:gap-14 md:text-left">

          <div className="absolute left-5 top-3 text-[56px] text-[#f6c4d4]">
            ♡
          </div>


          <div>

            <h2 className="font-serif text-[30px] font-bold text-[#1d2638]">

              Because Every Child Deserves
              <br />

              <span className="text-[#e9477c]">
                the Best Care & Attention
              </span>

            </h2>

            <p className="mt-2 text-[14px] text-gray-600">
              Trusted by Parents. Loved by Kids.
            </p>

          </div>


          <button className="mt-5 rounded-lg bg-[#e9477c] px-6 py-3 text-[14px] font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#d9366d] md:mt-0">
            Get Started Now →
          </button>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer
        id="contact"
        className="w-full bg-[#171c29] px-5 pb-7 pt-14 text-white"
      >

        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="font-serif text-[28px] font-bold text-[#ff6e9c]">
              Little Steps
            </div>

            <p className="mt-4 max-w-[350px] text-[14px] leading-6 text-gray-400">

              Connecting parents with verified
              childcare centers and caregivers
              offering safe and flexible 24×7 care.

            </p>

          </div>


          <FooterColumn
            title="For Parents"
            links={[
              "Find Daycare",
              "Search Centers",
              "Book Childcare",
              "Subscriptions",
              "Booking History",
            ]}
          />


          <FooterColumn
            title="For Providers"
            links={[
              "Become a Provider",
              "Provider Login",
              "Manage Center",
              "Manage Bookings",
              "Pricing Plans",
            ]}
          />


          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Safety Standards",
              "Privacy Policy",
              "Terms & Conditions",
              "Contact Us",
            ]}
          />

        </div>


        <div className="mt-12 border-t border-gray-700 pt-5 text-center text-[12px] text-gray-500">

          © {new Date().getFullYear()} Little Steps.
          All rights reserved.

        </div>

      </footer>

    </main>
  );
}


/* =============================================================
   HERO BENEFIT
============================================================= */

function HeroBenefit({
  icon,
  text,
  color,
}: {
  icon: string;
  text: React.ReactNode;
  color: "green" | "pink" | "orange" | "blue";
}) {

  const colors = {
    green: "bg-[#eff8e9] text-[#579343]",
    pink: "bg-[#fff0f5] text-[#e9477c]",
    orange: "bg-[#fff7e8] text-[#ec991d]",
    blue: "bg-[#eef6fd] text-[#4184c2]",
  };

  return (

    <div className="text-center">

      <div
        className={`mx-auto mb-3 flex h-[58px] w-[58px] items-center justify-center rounded-full text-[24px] ${colors[color]}`}
      >
        {icon}
      </div>

      <p className="text-[12px] font-semibold leading-[1.5] text-[#30343d] sm:text-[13px]">
        {text}
      </p>

    </div>

  );
}


/* =============================================================
   SEARCH FIELD
============================================================= */

function SearchField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {

  return (

    <div>

      <label className="mb-2 block text-[14px] font-bold text-[#252b38]">
        {label}
      </label>

      <div className="flex h-[54px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-[#e9477c]">
        {children}
      </div>

    </div>

  );

}


/* =============================================================
   STAT
============================================================= */

function Stat({
  icon,
  number,
  label,
}: {
  icon: string;
  number: string;
  label: string;
}) {

  return (

    <div className="flex items-center justify-center gap-3 border-gray-200 px-3 py-4 md:border-r">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[20px]">
        {icon}
      </div>

      <div>

        <strong className="block text-[20px] font-bold text-[#293043]">
          {number}
        </strong>

        <span className="text-[12px] text-gray-500">
          {label}
        </span>

      </div>

    </div>

  );

}


/* =============================================================
   SECTION TITLE
============================================================= */

function SectionTitle({
  title,
}: {
  title: React.ReactNode;
}) {

  return (

    <div className="mb-14 text-center">

      <h2 className="font-serif text-[34px] font-bold text-[#1d2638]">
        {title}
      </h2>

    </div>

  );

}


/* =============================================================
   STEP
============================================================= */

function Step({
  number,
  icon,
  title,
  description,
  color,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
  color: "green" | "pink" | "orange" | "blue";
}) {

  const colors = {
    green: "bg-[#f2f8e9] text-[#579442]",
    pink: "bg-[#fff0f5] text-[#e9477c]",
    orange: "bg-[#fff7e8] text-[#ed9e22]",
    blue: "bg-[#edf6fc] text-[#3f81bd]",
  };

  return (

    <div className="relative text-center">

      <div
        className={`mx-auto mb-4 flex h-[78px] w-[78px] items-center justify-center rounded-full text-[28px] ${colors[color]}`}
      >
        {icon}
      </div>


      <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e9477c] text-[11px] font-bold text-white">
        {number}
      </span>


      <h3 className="text-[16px] font-bold text-[#272d3c]">
        {title}
      </h3>


      <p className="mx-auto mt-2 max-w-[180px] text-[13px] leading-5 text-gray-500">
        {description}
      </p>

    </div>

  );

}


/* =============================================================
   MINI BENEFIT
============================================================= */

function MiniBenefit({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {

  return (

    <div className="flex items-center gap-3 rounded-xl px-2 py-4">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3f9ec] text-[20px]">
        {icon}
      </div>


      <div>

        <strong className="block text-[14px] font-bold text-[#242a38]">
          {title}
        </strong>

        <span className="mt-1 block text-[12px] leading-4 text-gray-500">
          {text}
        </span>

      </div>

    </div>

  );

}


/* =============================================================
   TRUST POINT
============================================================= */

function TrustPoint({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {

  return (

    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f5] text-[#e9477c]">
        {icon}
      </div>


      <div>

        <strong className="block text-[14px] font-bold text-[#252b38]">
          {title}
        </strong>

        <span className="text-[11px] text-gray-500">
          {text}
        </span>

      </div>

    </div>

  );

}


/* =============================================================
   FOOTER COLUMN
============================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {

  return (

    <div>

      <h3 className="mb-5 text-[16px] font-bold">
        {title}
      </h3>


      <div className="space-y-3">

        {links.map((link) => (

          <a
            key={link}
            href="#"
            className="block text-[13px] text-gray-400 transition hover:text-[#ff6e9c]"
          >
            {link}
          </a>

        ))}

      </div>

    </div>

  );

}