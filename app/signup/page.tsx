"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<"parent" | "provider">(
    "parent"
  );
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    console.log("Signup Data:", {
      ...formData,
      accountType,
    });

    // Connect your registration API here later.
  };

  return (
    <main className="min-h-screen bg-[#fff9fb] text-[#283044]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-gray-100 bg-white">

        <div className="flex h-[78px] w-full items-center justify-between px-5">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff719c] to-[#e63e76] text-xl text-white shadow-sm">
              👣
            </div>

            <div>

              <div className="font-serif text-[24px] font-bold leading-none text-[#e9477c]">
                Little Steps
              </div>

              <div className="mt-1 text-[9px] font-semibold tracking-wide text-[#273044]">
                Trusted 24×7 Childcare
              </div>

            </div>

          </Link>


          {/* Login */}

          <div className="flex items-center gap-3">

            <span className="hidden text-xs text-gray-500 sm:block">
              Already have an account?
            </span>

            <Link
              href="/login"
              className="rounded-lg border border-[#e9477c] px-4 py-2.5 text-xs font-bold text-[#e9477c] transition hover:bg-[#fff0f5]"
            >
              Log In
            </Link>

          </div>

        </div>

      </header>


      {/* =====================================================
          SIGNUP
      ===================================================== */}

      <section className="relative flex w-full items-center justify-center overflow-hidden px-5 py-10 sm:py-14">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ffe4ed] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#edf8ef] opacity-70 blur-3xl" />


        <div className="relative grid w-full max-w-[1150px] overflow-hidden rounded-[28px] bg-white shadow-[0_25px_80px_rgba(45,25,50,0.10)] lg:grid-cols-[42%_58%]">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative hidden overflow-hidden bg-[#fff1f6] p-10 lg:block">

            {/* Decorative circles */}

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ffd9e6]" />

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#ffe7ef]" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  👣
                </div>


                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#e9477c]">
                  Welcome to Little Steps
                </p>


                <h2 className="mt-3 font-serif text-[40px] font-bold leading-[1.08] text-[#1d2638]">

                  Every little step
                  <br />

                  <span className="text-[#e9477c]">
                    deserves great care.
                  </span>

                </h2>


                <p className="mt-5 max-w-[370px] text-sm leading-7 text-gray-600">

                  Join thousands of parents and trusted
                  childcare providers building a safer,
                  more flexible childcare experience.

                </p>

              </div>


              {/* Features */}

              <div className="mt-10 space-y-4">

                <SignupFeature
                  icon="🛡️"
                  title="Verified & Safe"
                  text="Trusted childcare centers and caregivers"
                />

                <SignupFeature
                  icon="◷"
                  title="Available 24×7"
                  text="Day, night and emergency childcare"
                />

                <SignupFeature
                  icon="♡"
                  title="Parent First"
                  text="Simple booking and transparent plans"
                />

              </div>


              {/* Bottom illustration */}

              <div className="mt-10 flex justify-end">

                <div className="relative h-[110px] w-[180px]">

                  <div className="absolute bottom-0 right-0 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white text-5xl shadow-sm">
                    🧸
                  </div>

                  <div className="absolute bottom-0 left-0 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#e9477c] text-3xl shadow-lg">
                    ♡
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <div className="px-6 py-9 sm:px-10 lg:px-14 lg:py-10">

            <div className="mx-auto w-full max-w-[500px]">

              {/* Heading */}

              <div>

                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#e9477c]">
                  Get Started
                </p>

                <h1 className="mt-2 font-serif text-[34px] font-bold leading-tight text-[#1d2638]">
                  Create your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Join Little Steps and find childcare you can trust.
                </p>

              </div>


              {/* Account Type */}

              <div className="mt-7">

                <label className="mb-3 block text-xs font-bold text-[#283044]">
                  I want to
                </label>


                <div className="grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() => setAccountType("parent")}
                    className={`rounded-xl border p-4 text-left transition ${
                      accountType === "parent"
                        ? "border-[#e9477c] bg-[#fff0f5] ring-2 ring-[#e9477c]/10"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >

                    <div className="text-xl">
                      👨‍👩‍👧
                    </div>

                    <div className="mt-2 text-xs font-bold text-[#283044]">
                      Find Childcare
                    </div>

                    <div className="mt-1 text-[9px] text-gray-500">
                      I'm a parent
                    </div>

                  </button>


                  <button
                    type="button"
                    onClick={() => setAccountType("provider")}
                    className={`rounded-xl border p-4 text-left transition ${
                      accountType === "provider"
                        ? "border-[#39824e] bg-[#f1f9f3] ring-2 ring-[#39824e]/10"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >

                    <div className="text-xl">
                      🏠
                    </div>

                    <div className="mt-2 text-xs font-bold text-[#283044]">
                      Offer Childcare
                    </div>

                    <div className="mt-1 text-[9px] text-gray-500">
                      I'm a provider
                    </div>

                  </button>

                </div>

              </div>


              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >

                {/* Full Name */}

                <div>

                  <label className="mb-2 block text-xs font-bold text-[#283044]">
                    Full Name
                  </label>

                  <div className="flex h-[52px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

                    <span className="text-[#e9477c]">
                      👤
                    </span>

                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      placeholder="Enter your full name"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>


                {/* Email */}

                <div>

                  <label className="mb-2 block text-xs font-bold text-[#283044]">
                    Email Address
                  </label>

                  <div className="flex h-[52px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

                    <span className="text-[#e9477c]">
                      ✉
                    </span>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>


                {/* Phone */}

                <div>

                  <label className="mb-2 block text-xs font-bold text-[#283044]">
                    Phone Number
                  </label>

                  <div className="flex h-[52px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

                    <span className="text-[#e9477c]">
                      ☎
                    </span>

                    <span className="border-r border-gray-200 pr-3 text-xs text-gray-500">
                      +91
                    </span>

                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Enter your phone number"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>


                {/* Password */}

                <div>

                  <label className="mb-2 block text-xs font-bold text-[#283044]">
                    Password
                  </label>

                  <div className="flex h-[52px] items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

                    <span className="text-[#e9477c]">
                      🔒
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      placeholder="Create a password"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="text-gray-400 transition hover:text-[#e9477c]"
                    >
                      {showPassword ? "◉" : "○"}
                    </button>

                  </div>

                  <p className="mt-2 text-[9px] text-gray-400">
                    Use at least 8 characters with a mix of letters and numbers.
                  </p>

                </div>


                {/* Terms */}

                <label className="flex cursor-pointer items-start gap-3 pt-1">

                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) =>
                      setAgreeTerms(e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#e9477c]"
                  />

                  <span className="text-[10px] leading-5 text-gray-500">

                    I agree to the{" "}

                    <Link
                      href="#"
                      className="font-semibold text-[#e9477c]"
                    >
                      Terms & Conditions
                    </Link>

                    {" "}and{" "}

                    <Link
                      href="#"
                      className="font-semibold text-[#e9477c]"
                    >
                      Privacy Policy
                    </Link>

                  </span>

                </label>


                {/* Submit */}

                <button
                  type="submit"
                  className={`h-[53px] w-full rounded-xl text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 ${
                    accountType === "provider"
                      ? "bg-[#39824e] shadow-[0_10px_25px_rgba(57,130,78,0.20)] hover:bg-[#2f703f]"
                      : "bg-[#e9477c] shadow-[0_10px_25px_rgba(233,71,124,0.20)] hover:bg-[#d9366d]"
                  }`}
                >
                  {accountType === "provider"
                    ? "Create Provider Account →"
                    : "Create Parent Account →"}
                </button>

              </form>


              {/* Login */}

              <p className="mt-6 text-center text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-bold text-[#e9477c] hover:underline"
                >
                  Sign in
                </Link>

              </p>


              {/* Security */}

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400">

                <span>
                  🛡️
                </span>

                <span>
                  Your personal information is kept safe and secure
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   SIGNUP FEATURE
============================================================= */

function SignupFeature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {

  return (

    <div className="flex items-center gap-4 rounded-2xl bg-white/75 p-4 shadow-sm">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f5] text-lg">
        {icon}
      </div>

      <div>

        <div className="text-xs font-bold text-[#283044]">
          {title}
        </div>

        <div className="mt-1 text-[10px] leading-4 text-gray-500">
          {text}
        </div>

      </div>

    </div>

  );

}