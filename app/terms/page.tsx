"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ChevronRight } from "lucide-react";

const useItems = [
  "use the service only for lawful professional or business purposes",
  "provide accurate account and billing information",
  "maintain the confidentiality of login credentials",
  "review all generated content before use",
  "ensure submitted information may lawfully be uploaded or processed",
  "comply with applicable laws, regulations, employer policies, and claim-handling standards",
];

const prohibitedItems = [
  "use AdjusterAssist as the sole basis for claim decisions",
  "represent AI-generated content as a final coverage determination",
  "upload information you are not authorized to use",
  "attempt to reverse engineer, disrupt, overload, or misuse the service",
  "use the service for unlawful, fraudulent, or misleading purposes",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0c0f] transition-colors duration-500 overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-[900px] -translate-x-1/2 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-2">
            <FileText
              size={14}
              className="text-blue-600 dark:text-blue-400 shrink-0"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Legal Documentation
            </span>
          </div>

          <h1 className="font-syne text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 dark:text-white/50">
            Effective Date: May 6, 2026
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <article
            className="
              rounded-[2.5rem]
              border border-slate-300 dark:border-white/10
              bg-white/50 dark:bg-[#131820]/60
              backdrop-blur-xl
              p-6 sm:p-10 md:p-16 lg:p-20
              shadow-xl dark:shadow-2xl
              transition-all duration-500
            "
          >
            <div className="mb-14 border-l-4 border-blue-500/40 pl-6 sm:pl-8">
              <p className="italic leading-relaxed text-sm sm:text-base text-slate-800 dark:text-[#a8b3c7]">
                These Terms of Service govern your access to and use of AdjusterAssist LLC
                (“AdjusterAssist,” “we,” “our,” or “us”), including our website, products,
                software, and related services.
                <br /><br />
                By accessing or using AdjusterAssist, you agree to these Terms. If you do not
                agree, you should not use the service.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              <TermsSection number="01" title="Service overview">
                <p>
                  AdjusterAssist provides software tools intended to support professional claim
                  workflow, documentation, organization, and communication drafting for property
                  insurance professionals and related users.
                </p>
              </TermsSection>

              <TermsSection number="02" title="Professional-use disclaimer">
                <p>
                  AdjusterAssist is a drafting and workflow support tool only. It is not a claim
                  decision-maker, legal advisor, coverage authority, payment authority, insurer,
                  carrier system, public adjuster, or substitute for professional judgment.
                  <br /><br />
                  Users remain solely responsible for reviewing, editing, approving, and relying
                  on any content generated or organized through the service.
                </p>
              </TermsSection>

              <TermsSection number="03" title="No claim decisions or legal advice">
                <p>
                  AdjusterAssist does not make coverage determinations, payment decisions,
                  liability decisions, claim approvals, claim denials, or legal conclusions.
                  Any AI-assisted output must be reviewed by qualified professionals before use.
                  <br /><br />
                  Nothing provided by AdjusterAssist should be interpreted as legal advice,
                  insurance coverage advice, regulatory guidance, or an instruction to take or
                  avoid any claim-handling action.
                </p>
              </TermsSection>

              <TermsSection number="04" title="User responsibilities">
                <p className="mb-6 font-medium text-slate-800 dark:text-slate-200">
                  When using AdjusterAssist, you agree to:
                </p>

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {useItems.map((item, index) => (
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
              </TermsSection>

              <TermsSection number="05" title="Submitted content">
                <p>
                  You are responsible for all information, prompts, files, claim details,
                  documents, images, and other materials you submit to AdjusterAssist. You
                  represent that you have the necessary rights, permissions, authority, and
                  lawful basis to submit such information for processing.
                  <br /><br />
                  You should not submit information that violates applicable law, privacy
                  obligations, confidentiality requirements, contractual restrictions, or claim
                  handling rules.
                </p>
              </TermsSection>

              <TermsSection number="06" title="AI-generated output">
                <p>
                  AI-generated content may be incomplete, inaccurate, outdated, or unsuitable for
                  a particular claim, jurisdiction, policy, client, carrier, or business workflow.
                  Users must independently review all generated content before relying on it,
                  sharing it, storing it, or including it in a claim file.
                  <br /><br />
                  AdjusterAssist does not guarantee that any generated output is accurate,
                  compliant, complete, or appropriate for any specific use.
                </p>
              </TermsSection>

              <TermsSection number="07" title="Prohibited uses">
                <div className="space-y-4">
                  {prohibitedItems.map((item, index) => (
                    <p key={index} className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      {item}
                    </p>
                  ))}
                </div>
              </TermsSection>

              <TermsSection number="08" title="Accounts and access">
                <p>
                  You are responsible for maintaining the confidentiality of your account
                  credentials and for all activity occurring under your account. You must notify
                  us promptly if you believe your account has been accessed without authorization.
                  <br /><br />
                  We may suspend or restrict access if we believe an account is being misused,
                  presents a security risk, violates these Terms, or may expose AdjusterAssist,
                  users, systems, or third parties to harm.
                </p>
              </TermsSection>

              <TermsSection number="09" title="Subscriptions and payments">
                <p>
                  Certain features may require a paid subscription or usage-based access. Pricing,
                  billing terms, plan limits, renewal terms, and cancellation options may be
                  provided at checkout, inside the product, or through related subscription
                  documentation.
                  <br /><br />
                  Fees are generally non-refundable except where required by law or expressly
                  stated otherwise.
                </p>
              </TermsSection>

              <TermsSection number="10" title="Third-party services">
                <p>
                  AdjusterAssist may rely on third-party providers for hosting, authentication,
                  analytics, payments, communications, storage, AI processing, and related
                  functionality. Use of the service may involve processing by such providers as
                  described in our Privacy Policy.
                  <br /><br />
                  We are not responsible for third-party services that we do not control.
                </p>
              </TermsSection>

              <section className="rounded-3xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 p-6 sm:p-10 transition-colors">
                <SectionHeading number="11" title="Important professional limitation" />
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-[#a8b3c7]">
                  AdjusterAssist supports drafting, documentation, and workflow efficiency.
                  It does not replace professional review, claim-handling judgment, carrier
                  authority, legal review, policy interpretation, regulatory compliance review,
                  or final approval by authorized personnel.
                </p>
              </section>

              <TermsSection number="12" title="Disclaimers">
                <p>
                  The service is provided on an “as is” and “as available” basis. To the maximum
                  extent permitted by law, AdjusterAssist disclaims warranties of any kind,
                  whether express, implied, statutory, or otherwise, including warranties of
                  accuracy, reliability, fitness for a particular purpose, availability, or
                  non-infringement.
                </p>
              </TermsSection>

              <TermsSection number="13" title="Limitation of liability">
                <p>
                  To the maximum extent permitted by law, AdjusterAssist will not be liable for
                  indirect, incidental, consequential, special, punitive, exemplary, or similar
                  damages arising from or related to use of the service, generated content,
                  submitted information, interruptions, errors, or reliance on outputs.
                </p>
              </TermsSection>

              <TermsSection number="14" title="Changes to these terms">
                <p>
                  We may update these Terms from time to time. When we do, we will update the
                  Effective Date above. Continued use of our website or services after updated
                  Terms are posted constitutes acceptance of the revised Terms.
                </p>
              </TermsSection>

              <TermsSection number="15" title="Contact us">
                <p className="mb-6">
                  If you have questions about these Terms, you may contact us at:
                </p>

                <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-6 sm:p-8">
                  <p className="font-bold text-slate-900 dark:text-white text-lg">
                    AdjusterAssist LLC
                  </p>

                  <div className="mt-4 space-y-2 text-slate-800 dark:text-[#a8b3c7]">
                    <p className="break-all flex items-center gap-2">
                      <span className="font-semibold text-blue-500">Email:</span>
                      info@adjusterassistapp.com
                    </p>
                    <p className="break-all flex items-center gap-2">
                      <span className="font-semibold text-blue-500">Website:</span>
                      adjusterassistapp.com
                    </p>
                  </div>
                </div>
              </TermsSection>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
      <span className="font-syne leading-tight">{title}</span>
    </h2>
  );
}

function TermsSection({
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