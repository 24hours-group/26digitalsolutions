import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    id: "acceptance",
    num: "1",
    title: "Acceptance of These Terms",
    content: [
      "These Terms & Conditions (the “Terms”) form a binding agreement between you and 26 Digital Solutions (“Company,” “we,” “us,” or “our”) governing your access to and use of our websites, platforms, applications, content, and services (collectively, the “Services”). By accessing or using the Services, creating an account, signing an order form or statement of work that references these Terms, or otherwise engaging us, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not access or use the Services.",
      "If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity, in which case “you” and “your” refer to that entity."
    ]
  },
  {
    id: "definitions",
    num: "2",
    title: "Definitions",
    content: [
      "“Client” means any person or entity that purchases, orders, or obtains Services from us, however referenced in an order form (including “Customer” or “Advertiser”).",
      "“Client Data” means any data, content, materials, or information provided or made available to us by or on behalf of a Client, or accessed or used by us in performing the Services, including website and social media content, advertising and marketing materials, creative assets, trademarks, source code, analytics, campaign goals, and any personal data or online identifiers relating to a Client’s consumers or site visitors.",
      "“Services” means the digital and performance marketing, technology, and related services we provide, which may include search and social advertising, paid media, SEO, lead generation, web development, hosting, maintenance, analytics, automation, and other services described on our website, in an order form, or in a statement of work.",
      "“Order”, “Order Form”, or “SOW” means a statement of work, insertion order, proposal, or order form executed by or accepted by a Client describing specific Services.",
      "“Company Parties” means the Company and its affiliates, and their respective subcontractors, suppliers, service providers, officers, directors, owners, managers, employees, representatives, and agents."
    ]
  },
  {
    id: "eligibility",
    num: "3",
    title: "Eligibility and Accounts",
    content: [
      "You must be at least 18 years old and capable of forming a binding contract to use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account, and you agree to notify us immediately of any unauthorized use. We may suspend, restrict, or terminate accounts at our discretion as described in these Terms."
    ]
  },
  {
    id: "services-scope",
    num: "4",
    title: "Services, Orders, and Scope",
    content: [
      "The specific Services, deliverables, fees, and timelines are described in the applicable Order or SOW. Your execution or acceptance of an Order constitutes authorization for us to commence the Services and, where applicable, to act as your agent for purchasing media, production, talent, and third-party services and materials reasonably required to fulfill the Services. Any services requested beyond the scope of an Order must be set out in a new or amended Order and are subject to additional fees. We may use subcontractors and third-party providers to perform any portion of the Services.",
      "Recommendations, strategies, budgets, and projections we provide are estimates based on available information and market conditions and are not guarantees. You are responsible for timely providing access, approvals, assets, and information necessary for us to perform, and we are not responsible for delays or results attributable to your acts, omissions, or third parties."
    ]
  },
  {
    id: "term-termination",
    num: "5",
    title: "Term, Renewal, and Termination",
    content: [
      "The term for Services begins on the start date stated in the applicable Order and continues for the term specified therein. Unless an Order states otherwise, either party may terminate Services upon thirty (30) days’ prior written notice, subject to any minimum-term commitment in the Order. If a Client terminates before the end of a contracted minimum term, an early-termination fee equivalent to the remaining minimum-term fees (or, at minimum, one month’s fees) becomes immediately due. We may suspend or terminate the Services or your access immediately, without liability, if you breach these Terms, fail to pay amounts when due, or engage in conduct we determine may harm us, other users, or third parties. Provisions that by their nature should survive termination (including payment obligations, ownership, disclaimers, limitations of liability, indemnification, and dispute resolution) survive."
    ]
  },
  {
    id: "fees-payment",
    num: "6",
    title: "Fees, Payment, and Late Amounts",
    content: [
      "You agree to pay all fees stated in the applicable Order. Unless otherwise stated, fees are due in advance, are non-refundable, and are exclusive of taxes, which are your responsibility. Media and third-party costs may be billed in addition to service fees. We may reconcile variable spend (such as ad budgets) periodically and bill or credit differences. Late amounts accrue interest at the lesser of 1.5% per month or the maximum permitted by law, and you are responsible for all costs of collection, including reasonable attorneys’ fees. We may suspend Services, withhold deliverables or work product, and/or take down hosted properties until all amounts due are paid in full. We may change rates upon prior written notice as stated in the applicable Order or upon sixty (60) days’ notice."
    ]
  },
  {
    id: "client-resp",
    num: "7",
    title: "Client Responsibilities; Data, Tags, and Privacy Compliance",
    content: [
      "You are solely responsible for the legality, accuracy, and quality of Client Data and of your websites, properties, products, and offers. You authorize the Company Parties to access, use, store, process, reproduce, and share Client Data as necessary or appropriate to provide the Services and as otherwise described in these Terms and our Privacy Policy.",
      "The Services may involve cookies, pixels, web beacons, tags, and similar technologies (“Tags”) deployed on your sites. You are solely responsible for your privacy policies and legal compliance on your sites. You represent, warrant, and covenant that you maintain and comply with a compliant, conspicuous privacy policy, that you have provided all required notices and obtained all required consents (including for the placement and use of Tags and for the collection, use, sale, and sharing of data), and that your sites and Client Data comply with all applicable laws, including data protection, advertising, consumer protection, CAN-SPAM, TCPA, COPPA, and similar laws. You will not cause Tags to collect sensitive information or information regulated under HIPAA, GLBA, COPPA, the Video Privacy Protection Act, or similar laws without appropriate legal basis. You acknowledge and agree that, notwithstanding anything to the contrary, the Company Parties may use and share information collected through the Tags, including for advertising and other lawful purposes."
    ]
  },
  {
    id: "ip-ownership",
    num: "8",
    title: "Intellectual Property and Ownership",
    content: [
      "As between the parties, we and our licensors own all right, title, and interest in and to the Services, our website, our software, tools, methodologies, templates, know-how, and all related intellectual property, including any improvements and derivatives. No rights are granted except as expressly stated. You may not copy, reproduce, modify, distribute, reverse engineer, or create derivative works from any part of the Services or our content without our prior written consent.",
      "You represent and warrant that you own or have all rights, licenses, and permissions necessary in the Client Data for us to provide the Services, and that the Client Data is not defamatory, infringing, deceptive, fraudulent, or otherwise unlawful and does not violate any privacy, publicity, intellectual property, or other rights. Subject to full payment of all amounts due, deliverables created specifically for you under an Order will transfer or be licensed to you as stated in the applicable Order; until full payment, all such work product remains our property. You grant us a perpetual, worldwide, royalty-free license to use your name, logo, and the work performed for portfolio, case study, and promotional purposes unless an Order states otherwise."
    ]
  },
  {
    id: "disclaimers",
    num: "9",
    title: "No Guarantee of Results; Disclaimers",
    content: [
      "YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY PARTIES MAKE NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES REGARDING THE RESULTS, BENEFITS, RANKINGS, LEADS, CONVERSIONS, REVENUE, PROFITABILITY, OR EFFECTIVENESS OF THE SERVICES, AND CANNOT DO SO. THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.",
      "THE COMPANY PARTIES DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR SECURE. THE COMPANY PARTIES HAVE NO CONTROL OVER, AND DISCLAIM ALL LIABILITY FOR THE ACTS, POLICIES, ALGORITHM CHANGES, PRICING, OR OUTCOMES OF, THIRD PARTIES, INCLUDING SEARCH ENGINES, ADVERTISING PLATFORMS, SOCIAL MEDIA NETWORKS, AND HOSTING OR TECHNOLOGY PROVIDERS. YOU REMAIN SOLELY RESPONSIBLE FOR LEGAL COMPLIANCE OF YOUR SITES, PRODUCTS, AND OFFERS."
    ]
  },
  {
    id: "limitation-liability",
    num: "10",
    title: "Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE COMPANY PARTIES BE LIABLE FOR ANY LOST PROFITS, LOST REVENUE, LOST BUSINESS, LOST DATA, LOSS OF GOODWILL, OR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS, UNDER ANY THEORY OF LIABILITY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "THE COMPANY PARTIES’ TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE AMOUNTS ACTUALLY PAID BY YOU TO THE COMPANY FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM. THESE LIMITATIONS ARE A FUNDAMENTAL BASIS OF THE BARGAIN AND APPLY EVEN IF A LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU."
    ]
  },
  {
    id: "indemnification",
    num: "11",
    title: "Indemnification",
    content: [
      "YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD HARMLESS THE COMPANY PARTIES FROM AND AGAINST ANY AND ALL CLAIMS, LIABILITIES, LOSSES, DAMAGES, JUDGMENTS, FINES, COSTS, AND EXPENSES (INCLUDING REASONABLE ATTORNEYS’ FEES) ARISING OUT OF OR RELATED TO: (A) CLIENT DATA AND OUR ACCESS TO AND USE OF IT; (B) YOUR SITES, PRODUCTS, OFFERS, OR ADVERTISING; (C) YOUR BREACH OF THESE TERMS OR ANY REPRESENTATION, WARRANTY, OR COVENANT; (D) YOUR VIOLATION OF ANY APPLICABLE LAW OR THE RIGHTS OF ANY THIRD PARTY, INCLUDING PRIVACY, PUBLICITY, INTELLECTUAL PROPERTY, CONSUMER PROTECTION, CAN-SPAM, TCPA, AND DATA PROTECTION LAWS; AND (E) YOUR USE OF THE SERVICES. WE RESERVE THE RIGHT, AT YOUR EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER SUBJECT TO INDEMNIFICATION, AND YOU AGREE TO COOPERATE."
    ]
  },
  {
    id: "confidentiality",
    num: "12",
    title: "Confidentiality",
    content: [
      "Each party may have access to the other’s confidential information. Each party agrees to use the other’s confidential information only as necessary to perform under these Terms and to protect it using reasonable care, except where disclosure is required by law or legal process. This section does not limit our right to use aggregated, anonymized, or de-identified data or general knowledge, skills, and experience retained in performing the Services."
    ]
  },
  {
    id: "third-party-services",
    num: "13",
    title: "Third-Party Services and Platforms",
    content: [
      "The Services rely on and interoperate with third-party platforms and providers (such as advertising networks, search engines, social media platforms, and hosting and analytics providers). We are not responsible for, and disclaim all liability arising from, the availability, performance, policies, pricing, suspension, or termination of any third-party service, or any agreement between you and a third party, even if we introduced you. Your use of third-party services may be subject to their separate terms."
    ]
  },
  {
    id: "acceptable-use",
    num: "14",
    title: "Acceptable Use",
    content: [
      "You agree not to use the Services to: violate any law or third-party right; transmit unlawful, infringing, deceptive, or harmful content; distribute malware or interfere with the Services; attempt to gain unauthorized access; or engage in any activity that could expose the Company Parties to liability. We may investigate and take any action we deem appropriate, including suspending or terminating access and disclosing information as described in our Privacy Policy."
    ]
  },
  {
    id: "force-majeure",
    num: "15",
    title: "Force Majeure",
    content: [
      "The Company Parties will not be liable for any delay or failure to perform due to causes beyond their reasonable control, including acts of God, natural disasters, labor disputes, civil unrest, acts of terror, war, government action, pandemic or epidemic, utility or internet failures, or third-party platform outages or changes."
    ]
  },
  {
    id: "dispute-resolution",
    num: "16",
    title: "Governing Law and Dispute Resolution",
    subsections: [
      {
        id: "dispute-governing-law",
        num: "16.1",
        title: "Governing Law",
        content: [
          "These Terms, and any dispute or claim arising out of or relating to them, the Services, or our relationship (whether in contract, tort, statute, or otherwise), are governed by the laws of the State of Florida and applicable U.S. federal law, including the Federal Arbitration Act, without regard to conflict-of-laws principles."
        ]
      },
      {
        id: "dispute-arbitration",
        num: "16.2",
        title: "Binding Arbitration",
        content: [
          "PLEASE READ THIS SECTION CAREFULLY. Except as provided in Section 16.5, you and the Company agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Services will be resolved exclusively by final and binding arbitration, rather than in court, administered by the American Arbitration Association (the “AAA”) under its Commercial Arbitration Rules then in effect. The arbitration will be conducted by a single arbitrator, will take place in Broward County, Florida (or by remote means if the arbitrator so directs), and will be conducted in English. The arbitrator has exclusive authority to resolve any dispute relating to the interpretation, applicability, enforceability, or formation of this arbitration agreement, including any claim that all or any part of it is void or voidable. Judgment on the award may be entered in any court having jurisdiction. By agreeing to arbitration, you and the Company waive the right to a trial by jury and the right to have disputes decided in court, except as set out below."
        ]
      },
      {
        id: "dispute-class-action",
        num: "16.3",
        title: "Class Action Waiver",
        content: [
          "YOU AND THE COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. The arbitrator may not consolidate more than one person’s claims and may not preside over any form of class, collective, or representative proceeding. If a court or arbitrator decides that this class action waiver is unenforceable as to any claim, then that claim (and only that claim) will be severed and may proceed in court, while all other claims remain subject to arbitration."
        ]
      },
      {
        id: "dispute-venue",
        num: "16.4",
        title: "Exclusive Venue for Court Proceedings",
        content: [
          "For any dispute that is not subject to arbitration, or to compel arbitration or enforce an arbitration award, you and the Company agree to submit to the exclusive jurisdiction of, and venue in, the state and federal courts located in Broward County, Florida, and waive any objection to such jurisdiction or venue on grounds of inconvenient forum or otherwise."
        ]
      },
      {
        id: "dispute-exceptions",
        num: "16.5",
        title: "Exceptions",
        content: [
          "Notwithstanding the foregoing, either party may (a) bring an individual claim in small-claims court if it qualifies, and (b) seek injunctive or other equitable relief in the state or federal courts located in Broward County, Florida to protect its intellectual property, confidential information, or other proprietary rights, or to collect amounts owed, without first submitting to arbitration."
        ]
      },
      {
        id: "dispute-prevailing-party",
        num: "16.6",
        title: "Prevailing Party; Limitations Period",
        content: [
          "In any arbitration or court proceeding arising out of or relating to these Terms or the Services, the prevailing party will be entitled to recover its reasonable attorneys’ fees and costs. Any claim must be brought within one (1) year after the claim arises, to the extent permitted by law, after which it is permanently barred."
        ]
      }
    ]
  },
  {
    id: "changes-terms",
    num: "17",
    title: "Changes to These Terms",
    content: [
      "We may modify these Terms at any time in our sole discretion. Updated Terms become effective when posted with a revised “Last Updated” date, and your continued use of the Services after that date constitutes acceptance. If you do not agree to the updated Terms, you must stop using the Services."
    ]
  },
  {
    id: "general",
    num: "18",
    title: "General",
    content: [
      "These Terms, together with any applicable Order and our Privacy Policy, are the entire agreement between the parties regarding the subject matter and supersede all prior understandings; provided that a signed master services agreement or SOW controls over these Terms to the extent of any conflict. If any provision is held unenforceable, the remaining provisions remain in effect and the unenforceable provision will be modified to the minimum extent necessary. Our failure to enforce any provision is not a waiver. You may not assign these Terms without our consent; we may assign them freely, including in connection with a merger, acquisition, or sale of assets. There are no third-party beneficiaries except the Company Parties. Notices to us must be sent to the contact below."
    ]
  },
  {
    id: "contact-us",
    num: "19",
    title: "Contact Us",
    content: [
      "If you have questions about these Terms, contact us at:"
    ],
    address: [
      "26 Digital Solutions",
      "Email: legal@26digitalsolutions.com"
    ]
  }
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const scrollPos = window.scrollY + 160;
      let currentSection = "";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section.id;
        }
        if (section.subsections) {
          for (const sub of section.subsections) {
            const subEl = document.getElementById(sub.id);
            if (subEl && subEl.offsetTop <= scrollPos) {
              currentSection = sub.id;
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatText = (text) => {
    // Replace emails with mailto links
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const parts = text.split(emailRegex);
    return parts.map((part, i) => {
      if (part.match(emailRegex)) {
        return (
          <a key={i} href={`mailto:${part}`} className="text-[#1B49FF] hover:underline font-medium">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <Head>
        <title>Terms & Conditions — 26 Digital Solutions</title>
        <meta name="description" content="Read the Terms & Conditions of 26 Digital Solutions governing your access and use of our digital marketing services." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Navbar />

      <main className="pt-0">
        {/* Header Hero Section */}
        <section className="terms-hero-premium">
          <div className="wrap">
            <span className="label on-dark">Legal Document</span>
            <h1 className="mb-8! text-neutral-900 dark:text-white text-7xl">Terms & <em>Conditions<span className="dot">.</span></em></h1>
            <p className="font-mono text-[11px] text-[rgba(0,0,0,0.84)] tracking-wider uppercase">
              Effective Date: June 1, 2020 &nbsp;|&nbsp; Last Updated: August 10, 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="terms-body-premium grain">
          <div className="wrap">
            <div className="flex flex-col lg:flex-row gap-12 items-start relative">
              {/* Table of Contents Sidebar (Desktop) */}
              <aside className="w-full lg:w-1/4 hidden lg:block toc-sidebar-premium">
                <h4 className="toc-title-premium">Contents</h4>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <div key={sec.id} className="space-y-1">
                      <a
                        href={`#${sec.id}`}
                        className={`toc-link-premium ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        {sec.num}. {sec.title}
                      </a>
                      {sec.subsections && (
                        <div className="space-y-1">
                          {sec.subsections.map((sub) => (
                            <a
                              key={sub.id}
                              href={`#${sub.id}`}
                              className={`toc-sub-link-premium ${activeSection === sub.id ? 'active' : ''}`}
                            >
                              {sub.num} {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Document Body Content */}
              <article className="w-full lg:w-3/4 terms-card-premium">
                <div className="terms-content-premium">
                  {sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-36">
                      <h2>
                        {sec.num}. {sec.title}
                      </h2>
                      {sec.content && sec.content.map((p, idx) => (
                        <p key={idx}>
                          {formatText(p)}
                        </p>
                      ))}

                      {/* Address Box for section 19 */}
                      {sec.address && (
                        <div className="terms-address-box-premium">
                          {sec.address.map((line, idx) => (
                            <p key={idx} className="mb-0">{formatText(line)}</p>
                          ))}
                        </div>
                      )}

                      {/* Subsections Render */}
                      {sec.subsections && (
                        <div className="space-y-6 mt-6 pl-4 border-l border-[rgba(255,255,255,0.04)]">
                          {sec.subsections.map((sub) => (
                            <div key={sub.id} id={sub.id} className="scroll-mt-36">
                              <h3>
                                {sub.num} {sub.title}
                              </h3>
                              {sub.content && sub.content.map((p, idx) => (
                                <p key={idx}>
                                  {formatText(p)}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-premium ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <Footer />
    </>
  );
}
