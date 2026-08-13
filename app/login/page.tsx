"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login Data:", {
      ...formData,
      rememberMe,
    });

    // Connect your login API here later.
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


          {/* Back Home */}

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-600 transition hover:border-[#e9477c] hover:text-[#e9477c]"
          >
            ← Back to Home
          </Link>

        </div>

      </header>


      {/* =====================================================
          LOGIN AREA
      ===================================================== */}

      <section className="relative flex min-h-[calc(100vh-78px)] w-full items-center justify-center overflow-hidden px-5 py-12">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#ffe4ed] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f5e9ff] opacity-60 blur-3xl" />


        <div className="relative grid w-full max-w-[1100px] overflow-hidden rounded-[28px] bg-white shadow-[0_25px_80px_rgba(45,25,50,0.10)] lg:grid-cols-[45%_55%]">


          {/* =================================================
              LEFT VISUAL PANEL
          ================================================= */}

          <div className="relative hidden min-h-[650px] overflow-hidden lg:block">

            <img
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1200&q=90"
              alt="Happy family"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1e28]/80 via-[#3a2531]/20 to-transparent" />


            <div className="absolute bottom-0 left-0 right-0 p-9 text-white">

              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-[10px] font-semibold backdrop-blur-md">
                ♡ Trusted Childcare Platform
              </div>

              <h2 className="font-serif text-[38px] font-bold leading-tight">
                Safe care.
                <br />

                <span className="text-[#ff83aa]">
                  Happy childhood.
                </span>
              </h2>

              <p className="mt-4 max-w-[390px] text-sm leading-6 text-white/85">
                Find trusted daycare centers and verified caregivers
                who care for your little one, day or night.
              </p>


              <div className="mt-7 flex gap-3">

                <TrustBadge
                  icon="🛡️"
                  title="Verified"
                />

                <TrustBadge
                  icon="◷"
                  title="24×7 Care"
                />

                <TrustBadge
                  icon="♡"
                  title="Trusted"
                />

              </div>

            </div>

          </div>


          {/* =================================================
              LOGIN FORM
          ================================================= */}

          <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14">

            <div className="w-full max-w-[440px]">

              {/* Mobile Logo */}

              <div className="mb-8 text-center lg:hidden">

                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f5] text-2xl">
                  👣
                </div>

                <div className="font-serif text-2xl font-bold text-[#e9477c]">
                  Little Steps
                </div>

              </div>


              {/* Heading */}

              <div className="text-center lg:text-left">

                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#e9477c]">
                  Welcome Back
                </p>

                <h1 className="mt-2 font-serif text-[34px] font-bold leading-tight text-[#1d2638]">
                  Sign in to your account
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Welcome back! Please enter your details to continue.
                </p>

              </div>


              {/* Google Button */}

              <button
                type="button"
                className="mt-7 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
              >

                <span className="text-lg font-bold">
                  G
                </span>

                Continue with Google

              </button>


              {/* Divider */}

              <div className="my-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-[11px] text-gray-400">
                  OR CONTINUE WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-gray-200" />

              </div>


              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Email */}

                <div>

                  <label className="mb-2 block text-xs font-bold text-[#283044]">
                    Email Address
                  </label>

                  <div className="flex h-[54px] items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

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
                      className="h-full w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>


                {/* Password */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-xs font-bold text-[#283044]">
                      Password
                    </label>

                    <Link
                      href="#"
                      className="text-[11px] font-semibold text-[#e9477c] hover:underline"
                    >
                      Forgot password?
                    </Link>

                  </div>


                  <div className="flex h-[54px] items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#e9477c] focus-within:ring-4 focus-within:ring-[#e9477c]/10">

                    <span className="text-[#e9477c]">
                      🔒
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      placeholder="Enter your password"
                      className="h-full w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 transition hover:text-[#e9477c]"
                    >
                      {showPassword ? "◉" : "○"}
                    </button>

                  </div>

                </div>


                {/* Remember Me */}

                <label className="flex cursor-pointer items-center gap-3">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="h-4 w-4 accent-[#e9477c]"
                  />

                  <span className="text-xs text-gray-500">
                    Remember me
                  </span>

                </label>


                {/* Login Button */}

                <button
                  type="submit"
                  className="h-[54px] w-full rounded-xl bg-[#e9477c] text-sm font-bold text-white shadow-[0_10px_25px_rgba(233,71,124,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d9366d] hover:shadow-[0_14px_30px_rgba(233,71,124,0.28)]"
                >
                  Sign In →
                </button>

              </form>


              {/* Signup */}

              <p className="mt-7 text-center text-sm text-gray-500">

                Don't have an account?{" "}

                <Link
                  href="/signup"
                  className="font-bold text-[#e9477c] hover:underline"
                >
                  Create an account
                </Link>

              </p>


              {/* Safety */}

              <div className="mt-7 flex items-center justify-center gap-2 text-[10px] text-gray-400">

                <span>🛡️</span>

                <span>
                  Your information is secure and protected
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
   TRUST BADGE
============================================================= */

function TrustBadge({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {

  return (

    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">

      <span className="text-sm">
        {icon}
      </span>

      <span className="text-[10px] font-semibold">
        {title}
      </span>

    </div>

  );

}