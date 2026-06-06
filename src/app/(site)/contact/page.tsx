import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import InquiryForm from "@/components/site/InquiryForm";
import FAQ from "@/components/site/FAQ";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/contact";
import { FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact & FAQ",
  description:
    "Talk to a Sanchaari travel planner. Call, WhatsApp or send an enquiry, and find answers to the most common questions in our FAQ.",
};

export default function ContactPage() {
  return (
    <>
      <section className="site-section contact-hero">
        <div className="site-container">
          <BreadcrumbTrail items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h1>Let&rsquo;s plan something memorable.</h1>
            <p className="contact-hero__lead">
              We answer enquiries personally, usually within a few hours.
              Choose whichever channel feels easiest: phone, WhatsApp,
              email, or fill in the form below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <div className="contact-channels">
            <Reveal>
              <a className="contact-channel" href={`tel:${BUSINESS.phoneHref}`}>
                <span className="contact-channel__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                </span>
                <span className="contact-channel__label">Call us</span>
                <span className="contact-channel__value">{BUSINESS.phone}</span>
                <span className="contact-channel__sub">{BUSINESS.hours}</span>
              </a>
            </Reveal>
            <Reveal delay={1}>
              <a
                className="contact-channel"
                href={buildWhatsAppUrl(
                  `Hello Sanchaari, I'd like to enquire about a journey.`
                )}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-channel__icon contact-channel__icon--wa" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.815 11.815 0 0 1 3.488 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                </span>
                <span className="contact-channel__label">WhatsApp</span>
                <span className="contact-channel__value">{BUSINESS.phone}</span>
                <span className="contact-channel__sub">Fastest response · usually within an hour</span>
              </a>
            </Reveal>
            <Reveal delay={2}>
              <a className="contact-channel" href={`mailto:${BUSINESS.email}`}>
                <span className="contact-channel__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <span className="contact-channel__label">Email</span>
                <span className="contact-channel__value">{BUSINESS.email}</span>
                <span className="contact-channel__sub">For detailed proposals and group queries</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container contact-form-block">
          <Reveal>
            <span className="eyebrow">Send an enquiry</span>
            <h2>Tell us a little about your journey</h2>
            <p className="section-lead">
              Even a few lines is enough. We&rsquo;ll come back with options,
              answers, and (if you&rsquo;d like) a phone call.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <InquiryForm source="Contact page" />
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Visit us</span>
            <h2 className="section-title">Our office</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="contact-address">{BUSINESS.address}</p>
            <p>
              <Link href="/about" className="btn btn--ghost">
                Learn more about Sanchaari
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Common questions</span>
            <h2 className="section-title">Things travellers usually ask</h2>
          </Reveal>
          <FAQ groups={FAQS} />
        </div>
      </section>

      <style>{`
        .contact-hero h1 { max-width: 26ch; margin-block: 0.75rem 1.25rem; }
        .contact-hero__lead { max-width: 52ch; font-size: var(--font-size-lg); }
        .contact-channels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
          gap: 1.5rem;
        }
        .contact-channel {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 2rem 1.75rem;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          color: var(--heritage-ink);
          text-decoration: none;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium);
          height: 100%;
        }
        .contact-channel:hover {
          transform: translateY(-4px);
          box-shadow: var(--heritage-shadow-lg);
          color: var(--heritage-ink);
        }
        .contact-channel__icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--heritage-rust-tint);
          color: var(--heritage-rust);
        }
        .contact-channel__icon svg { width: 1.4rem; height: 1.4rem; fill: currentColor; }
        .contact-channel__icon--wa { background: rgba(37, 211, 102, 0.12); color: #1ebe5b; }
        .contact-channel__label {
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--heritage-muted);
          margin-top: 0.5rem;
        }
        .contact-channel__value {
          font-family: var(--font-fraunces), serif;
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--heritage-ink);
        }
        .contact-channel__sub {
          font-size: 0.875rem;
          color: var(--heritage-sub);
        }
        .contact-form-block { max-width: 50rem; }
        .contact-address { font-size: var(--font-size-lg); margin-bottom: 1.5rem; }
      `}</style>
    </>
  );
}
