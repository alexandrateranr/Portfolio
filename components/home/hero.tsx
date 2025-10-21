import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";

const HERO_STYLES = {
  SECTION:
    "w-full flex items-center justify-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col items-center text-center select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-3xl sm:text-4xl md:text-5xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    return typed.destroy;
  }, [typedSpanElement, targetSection]);


  const renderSocialLinks = (): React.ReactNode => {
    const allowed = ["linkedin", "github", "instagram"];
    return allowed.map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={HERO_STYLES.SOCIAL_LINK}
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="text-6xl seq text-shimmer">Hello 👋🏻</h2>
        <h1 className="text-5xl seq text-shimmer">I am Alexandra Teran</h1>
      </div>
      <p className="mb-4">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5">{renderSocialLinks()}</div>
      <div className="flex seq">
        <Button
          classes="mr-3 hover-glow"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/Resume6.0.pdf"
        ></Button>
        <Button
          classes="ml-3 hover-glow"
          type={ButtonTypes.PRIMARY}
          name="Let's Talk"
          href={`mailto:${EMAIL}`}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-30 floating-element"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-25 floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-20 floating-element" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-60 right-40 w-3 h-3 bg-indigo-400 rounded-full opacity-30 floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 right-10 w-2 h-2 bg-pink-400 rounded-full opacity-25 floating-element" style={{ animationDelay: '3s' }}></div>
      
      {/* Background particles */}
      <div className="bg-particles"></div>
      
      {renderHeroContent()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
