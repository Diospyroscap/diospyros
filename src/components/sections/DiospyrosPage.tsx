import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import {
  assets,
  founders,
  footer,
  hero,
  investmentApproach,
  originOfCapital,
  ourName,
} from "@/content/siteContent";

function ReferenceLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span className="reference-line" key={line}>
          {line}
          {index < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

function SectionBackground({
  src,
  className,
  preload = false,
}: {
  src: string;
  className: string;
  preload?: boolean;
}) {
  return (
    <div className="section-background" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        quality={90}
        preload={preload}
        className={className}
      />
    </div>
  );
}

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={assets.logoWhite}
      alt="Diospyros"
      width={663}
      height={115}
      className={className}
    />
  );
}

function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`kicker ${className}`}>{children}</p>;
}

function Hero() {
  return (
    <section className="hero section-dark" id="top" aria-labelledby="hero-heading">
      <SectionBackground src={assets.heroEbony} className="hero__background" preload />
      <div className="layout-container hero__layout">
        <Reveal className="hero__brand">
          <BrandLogo className="brand-logo" />
        </Reveal>
        <Reveal className="hero__heading" index={1}>
          <h1 id="hero-heading" className="display-heading">
            <ReferenceLines lines={hero.heading} />
          </h1>
        </Reveal>
        <div className="hero__copy body-copy">
          <p><ReferenceLines lines={hero.paragraphs[0]} /></p>
          <p><ReferenceLines lines={hero.paragraphs[1]} /></p>
        </div>
      </div>
    </section>
  );
}

function OriginOfCapital() {
  return (
    <section className="origin section-light" aria-labelledby="origin-heading">
      <div className="layout-container origin__layout">
        <Reveal className="origin__title">
          <Kicker>{originOfCapital.kicker}</Kicker>
          <h2 id="origin-heading" className="display-heading">
            {originOfCapital.heading}
          </h2>
        </Reveal>
        <Reveal className="origin__copy body-copy" index={1}>
          {originOfCapital.paragraphs.map((paragraph) => (
            <p key={paragraph[0]}>
              <ReferenceLines lines={paragraph} />
            </p>
          ))}
        </Reveal>
        <Reveal className="origin__interests body-copy" index={2}>
          <h3 className="body-heading">{originOfCapital.interestsHeading}</h3>
          <p>{originOfCapital.interestsIntro}</p>
          <div className="origin__interest-columns">
            {originOfCapital.investmentColumns.map((column) => (
              <ul key={column[0]}>
                {column.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InvestmentApproach() {
  return (
    <section className="investment section-light" aria-labelledby="investment-heading">
      <SectionBackground src={assets.lightEbony} className="investment__background" />
      <div className="layout-container investment__layout">
        <Reveal className="investment__content">
          <Kicker>{investmentApproach.kicker}</Kicker>
          <div className="investment__body body-copy">
            <h2 id="investment-heading" className="body-heading">
              {investmentApproach.heading}
            </h2>
            <div className="investment__stage">
              {investmentApproach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="investment__support">
              <h3 className="body-heading">{investmentApproach.supportHeading}</h3>
              <p>{investmentApproach.supportIntro}</p>
              <ul>
                {investmentApproach.supportPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="material section-dark" aria-labelledby="material-heading">
      <SectionBackground src={assets.materialEbony} className="material__background" />
      <div className="layout-container material__layout">
        <Reveal className="material__title">
          <h2 id="material-heading" className="kicker">
            {founders.kicker}
          </h2>
        </Reveal>
        <Reveal className="material__copy body-copy" index={1}>
          <h3 className="body-heading">{founders.heading}</h3>
          <div className="material__criteria">
            {founders.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="material__for-founders">
            <h3 className="body-heading">{founders.forFoundersHeading}</h3>
            <p>{founders.forFoundersParagraph}</p>
            <div className="material__objective">
              <p className="body-heading">{founders.objectiveIntro}</p>
              <p className="body-heading">{founders.objective}</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="material__closing body-copy" index={2}>
          <p className="body-heading">{founders.company}</p>
          <p className="body-heading">{founders.tagline}</p>
        </Reveal>
      </div>
    </section>
  );
}

function OurName() {
  return (
    <section className="our-name section-light" aria-labelledby="name-kicker">
      <div className="layout-container our-name__layout">
        <Reveal className="our-name__copy">
          <h2 id="name-kicker" className="kicker">
            {ourName.kicker}
          </h2>
          <div className="our-name__body body-copy">
            <h3 className="body-heading">{ourName.heading}</h3>
            {ourName.paragraphs.map((paragraph) => (
              <p key={paragraph[0]}>
                <ReferenceLines lines={paragraph} />
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal className="our-name__mark" index={1}>
          <Image
            src={assets.symbolBlack}
            alt=""
            width={180}
            height={180}
            className="symbol-logo"
          />
          <Image
            src={assets.logotypeBlack}
            alt="Diospyros"
            width={516}
            height={47}
            className="wordmark-logo"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-dark" id="inquiries" aria-labelledby="footer-heading">
      <SectionBackground src={assets.footerEbony} className="footer__background" />
      <div className="layout-container footer__layout">
        <Reveal className="footer__heading">
          <h2 id="footer-heading" className="display-heading">
            {footer.heading}
          </h2>
        </Reveal>
        <Reveal className="footer__copy body-copy" index={1}>
          <h3 className="body-heading">{footer.contactHeading}</h3>
          <p>
            <ReferenceLines lines={footer.contactParagraph} />
          </p>
          <a className="footer__email body-heading" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          <div className="footer__address">
            <p className="body-heading">{footer.company}</p>
            <p>{footer.location}</p>
          </div>
        </Reveal>
        <Reveal className="footer__brand" index={2}>
          <a href="#top" aria-label="Back to top">
            <BrandLogo className="brand-logo" />
          </a>
        </Reveal>
        <Reveal className="footer__copyright" index={3}>
          <p>{footer.copyright}</p>
        </Reveal>
      </div>
    </footer>
  );
}

export function DiospyrosPage() {
  return (
    <main id="main-content">
      <Hero />
      <OriginOfCapital />
      <InvestmentApproach />
      <Founders />
      <OurName />
      <Footer />
    </main>
  );
}
