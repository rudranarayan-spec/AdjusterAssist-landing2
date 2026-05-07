"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, ChevronRight } from "lucide-react";

const infoItems = [
  "operate, maintain, and improve our services",
  "provide customer support",
  "respond to inquiries and requests",
  "create and manage accounts",
  "process subscriptions or payments",
  "monitor usage, performance, and security",
  "develop new features and functionality",
  "communicate with you about updates",
  "comply with legal obligations",
  "protect our rights, users, systems, and business interests"
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0c0f] transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20">
        {/* Dynamic Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-[900px] -translate-x-1/2 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-2">
            <Shield
              size={14}
              className="text-blue-600 dark:text-blue-400  shrink-0"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Legal Documentation
            </span>
          </div>

          {/* Title */}
          <h1 className="font-syne text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>

          {/* Effective Date */}
          <p className="mt-5 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 dark:text-white/50">
            Effective Date: May 6, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <article
            className="
              rounded-[2.5rem]
              border border-slate-300 dark:border-white/10
              bg-white/50 dark:bg-[#131820]/60
              backdrop-blur-xl
              p-6
              sm:p-10
              md:p-16
              lg:p-20
              shadow-xl dark:shadow-2xl
              transition-all duration-500
            "
          >
            {/* Intro */}
            <div className="mb-14 border-l-4 border-blue-500/40 pl-6 sm:pl-8">
              <p className="italic leading-relaxed text-sm sm:text-base text-slate-800 dark:text-[#a8b3c7]">
                AdjusterAssist LLC (“AdjusterAssist,” “we,” “our,” or “us”)
                respects your privacy and is committed to protecting personal
                information collected through our website, products, and related
                services.<br /><br />
                This Privacy Policy explains how we may collect, use, disclose, and safeguard information when you visit our
                website, contact us, create an account, use our services, or otherwise interact with us.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {/* SECTION TEMPLATE */}
              <PolicySection number="01" title="Who we are">
                <p>
                  AdjusterAssist LLC provides software and related services
                  intended to support professional claim workflow,
                  documentation, and communication drafting for property
                  insurance professionals and related users.
                </p>
              </PolicySection>

              <PolicySection
                number="02"
                title="Information we may collect"
              >
                <div className="space-y-8">
                  <InfoBlock
                    title="Contact information"
                    text="Name, email address, company name, phone number, and other information you provide when contacting us or submitting a form."
                  />
                  <InfoBlock
                    title="Account information"
                    text="Login credentials, subscription details, billing-related records, and account preferences if and when you create an account."
                  />
                  <InfoBlock
                    title="Usage information"
                    text="Information about how you interact with our website or services, including device information, browser type, IP address, pages viewed, session activity, referral source, and approximate location derived from IP address."
                  />
                  <InfoBlock
                    title="Content you submit"
                    text="Information, text, prompts, files, or other materials you choose to provide when using our services."
                  />
                  <InfoBlock
                    title="Communications"
                    text="Messages you send to us, support requests, and related correspondence."
                  />
                </div>
              </PolicySection>

              <PolicySection number="03" title="How we use information">
                <p className="mb-6 font-medium text-slate-800 dark:text-slate-200">
                  We may use information to:
                </p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {infoItems.map((item, index) => (
                    <li
                      key={index}
                      className="
                        flex items-start gap-3
                        rounded-2xl
                        border border-slate-300 dark:border-white/10
                        bg-slate-50/50 dark:bg-white/5
                        p-4 transition-colors hover:border-blue-500/30
                      "
                    >
                      <ChevronRight
                        size={16}
                        className="mt-1 shrink-0 text-blue-500 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-6 text-slate-800 dark:text-[#a8b3c7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection
                number="04"
                title="AI and third-party processing"
              >
                <p>
                  Our services may use third-party providers, including cloud hosting, authentication, analytics, payment
                  processors, and AI-related service providers, to help deliver functionality.<br /><br />
                  Information submitted by users may be processed by these service providers as necessary to operate the
                  service. Users are responsible for ensuring they have the appropriate authority to submit any information they
                  provide to the platform.
                </p>
              </PolicySection>

              <PolicySection
                number="05"
                title="How we may share information"
              >
                <div className="space-y-4">
                  {[
                    "with service providers performing functions on our behalf",
                    "with professional advisors such as legal, accounting, or compliance advisors",
                    "in connection with a merger, acquisition, financing, or sale of assets",
                    "when required by law, subpoena, court order, or legal process",
                    "when necessary to protect rights, safety, security, or prevent fraud",
                  ].map((item, i) => (
                    <p key={i} className="flex gap-2">
                      <span className="text-blue-500">•</span> {item}
                    </p>
                  ))}
                  <p className="pt-6 font-bold uppercase tracking-wider text-slate-900 dark:text-white text-sm">
                    We do not sell personal information.
                  </p>
                </div>
              </PolicySection>

              <PolicySection number="06" title="Data retention">
                <div className="space-y-4">
                  <p>
                    We retain information for as long as reasonably necessary to:
                  </p>
                  {[
                    "provide our services",
                    "maintain business and legal records",
                    "resolve disputes",
                    "enforce agreements",
                    "comply with legal obligations",
                  ].map((item, i) => (
                    <p key={i} className="flex gap-2">
                      <span className="text-blue-500">•</span> {item}
                    </p>
                  ))}
                  <p className="mt-4 italic opacity-80">Retention periods may vary depending on the nature of the information and the purpose for which it was collected.</p>
                </div>
              </PolicySection>

              <PolicySection number="07" title="Security">
                <p>
                  We use reasonable administrative, technical, and organizational safeguards intended to protect information
                  from unauthorized access, loss, misuse, or alteration. No method of transmission over the internet or electronic
                  storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </PolicySection>

              <PolicySection number="08" title="Your choices">
                <div className="space-y-4">
                  <p>
                    You may contact us to:
                  </p>
                  {[
                    "request access to personal information we maintain about you",
                    "request correction of inaccurate information",
                    "request deletion of information where appropriate",
                    "opt out of non-essential communications",
                  ].map((item, i) => (
                    <p key={i} className="flex gap-2">
                      <span className="text-blue-500">•</span> {item}
                    </p>
                  ))}
                  <p className="mt-4 italic opacity-80">We may need to retain certain information where required for legal, security, contractual, or operational reasons.</p>
                </div>
              </PolicySection>

              <PolicySection number="09" title="Cookies and analytics">
                <p>
                  Our website may use cookies, similar technologies, and analytics tools to understand traffic, improve
                  performance, and enhance user experience. You may be able to control cookies through your browser settings.
                </p>
              </PolicySection>

              <PolicySection number="10" title="Children’s privacy">
                <p>
                  Our website and services are not directed to children under 13, and we do not knowingly collect personal
                  information from children under 13.
                </p>
              </PolicySection>

              {/* Highlight Box */}
              <section className="rounded-3xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 p-6 sm:p-10 transition-colors">
                <SectionHeading
                  number="11"
                  title="Professional-use notice"
                />
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-[#a8b3c7]">
                  AdjusterAssist is intended for professional and business use. It is not legal advice, not insurance coverage
                  advice, and not a claim determination service. Users remain responsible for their own professional decisions,
                  compliance obligations, and final work product.
                </p>
              </section>

              <PolicySection number="12" title="Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will update the Effective Date above.
                  Continued use of our website or services after changes are posted constitutes acceptance of the updated
                  policy.
                </p>
              </PolicySection>

              <PolicySection number="13" title="Contact us">
                <p className="mb-6">If you have questions about this Privacy Policy, you may contact us at</p>
                <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-6 sm:p-8">
                  <p className="font-bold text-slate-900 dark:text-white text-lg">
                    AdjusterAssist LLC
                  </p>
                  <div className="mt-4 space-y-2 text-slate-800 dark:text-[#a8b3c7]">
                    <p className="break-all flex items-center gap-2">
                      <span className="font-semibold text-blue-500">Email:</span> info@adjusterassistapp.com
                    </p>
                    <p className="break-all flex items-center gap-2">
                      <span className="font-semibold text-blue-500">Website:</span> adjusterassistapp.com
                    </p>
                  </div>
                </div>
              </PolicySection>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- Components ---------- */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="flex items-center gap-4 text-xl sm:text-3xl font-bold text-slate-900 dark:text-white">
      <span className="font-mono text-sm sm:text-base text-blue-600 dark:text-blue-400">
        {number}.
      </span>
      <span className="font-syne leading-tight">
        {title}
      </span>
    </h2>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-32">
      <SectionHeading number={number} title={title} />
      <div className="mt-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-[#a8b3c7]">
        {children}
      </div>
    </section>
  );
}

function InfoBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group">
      <h3 className="mb-2 text-base sm:text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-[#a8b3c7]">
        {text}
      </p>
    </div>
  );
}