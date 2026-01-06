"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type TreatmentCategory =
  | "All"
  | "Facials"
  | "Advanced Skin"
  | "Brows & Lips"
  | "Massage"
  | "Consultation";

type Treatment = {
  id: string;
  title: string;
  category: Exclude<TreatmentCategory, "All">;
  duration: string;
  price: string;
  summary: string;
  bestFor: string[];
  highlights: string[];
  downtime: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeInOut" as const },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeInOut" as const },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeInOut" as const },
  }),
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const TreatmentsPageContainer = () => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: TreatmentCategory[] = useMemo(
    () => ["All", "Facials", "Advanced Skin", "Brows & Lips", "Massage", "Consultation"],
    []
  );

  const treatments: Treatment[] = useMemo(
    () => [
      {
        id: "signature-facial",
        title: "Signature Facial",
        category: "Facials",
        duration: "60 mins",
        price: "From £—",
        summary:
          "A tailored, results-led facial focused on deep cleanse, exfoliation and hydration for a calm, healthy glow.",
        bestFor: ["Dullness", "Dehydration", "Congested skin", "First-time clients"],
        highlights: [
          "Double cleanse + skin analysis",
          "Targeted exfoliation",
          "Mask + finishing products",
        ],
        downtime: "None",
      },
      {
        id: "dmk-enzyme-therapy",
        title: "DMK Enzyme Therapy Facial",
        category: "Advanced Skin",
        duration: "75–90 mins",
        price: "From £—",
        summary:
          "A professional skin revision treatment designed to support skin function and visible firmness, texture and tone.",
        bestFor: ["Sensitivity", "Acne-prone", "Ageing concerns", "Skin rebuilding"],
        highlights: [
          "Function-first approach",
          "Supports circulation + oxygenation",
          "Boosts firmness from within",
        ],
        downtime: "Minimal (varies)",
      },
      {
        id: "microdermabrasion",
        title: "Microdermabrasion Facial",
        category: "Advanced Skin",
        duration: "45–60 mins",
        price: "From £—",
        summary:
          "A controlled exfoliation treatment to smooth texture, brighten tone, and refine the look of pores.",
        bestFor: ["Rough texture", "Dull skin", "Mild pigmentation", "Visible pores"],
        highlights: ["Gentle resurfacing", "Instant glow", "No needles"],
        downtime: "None to minimal",
      },
      {
        id: "dermaplaning",
        title: "Dermaplaning Facial",
        category: "Advanced Skin",
        duration: "45–60 mins",
        price: "From £—",
        summary:
          "Removes dead skin and peach fuzz to leave skin silky-smooth and makeup sitting flawlessly.",
        bestFor: ["Dry/flaky skin", "Dullness", "Peach fuzz", "Event-ready glow"],
        highlights: ["Smoother finish", "Brighter look", "Pairs well with masks/LED"],
        downtime: "None",
      },
      {
        id: "microneedling",
        title: "Microneedling Facial",
        category: "Advanced Skin",
        duration: "60–75 mins",
        price: "From £—",
        summary:
          "Collagen-stimulation treatment to support visible improvements in texture, fine lines and overall skin quality.",
        bestFor: ["Acne scarring", "Fine lines", "Enlarged pores", "Texture issues"],
        highlights: ["Targeted stimulation", "Supports rejuvenation", "Course recommended"],
        downtime: "24–72 hrs redness (typical)",
      },
      {
        id: "chemical-peel",
        title: "Chemical Peel",
        category: "Advanced Skin",
        duration: "30–45 mins",
        price: "From £—",
        summary:
          "A professional exfoliation treatment to improve skin texture and tone with minimal disruption to your schedule.",
        bestFor: ["Congestion", "Pigmentation", "Acne-prone", "Uneven tone"],
        highlights: ["Gentle, controlled resurfacing", "Brightening effect", "Course options"],
        downtime: "Minimal (varies by peel)",
      },
      {
        id: "dmk-quick-peel",
        title: "DMK Enzyme Therapy + Quick Peel",
        category: "Advanced Skin",
        duration: "75–90 mins",
        price: "From £—",
        summary:
          "A combined approach for refined texture and visible glow—ideal for clients wanting a stronger refresh with sensible downtime.",
        bestFor: ["Congestion", "Pigmentation", "Texture", "Ageing concerns"],
        highlights: ["Enhanced exfoliation", "Skin function support", "Noticeable brightness"],
        downtime: "Minimal to moderate (varies)",
      },
      {
        id: "brow-wax-shape",
        title: "Brow Wax & Shape",
        category: "Brows & Lips",
        duration: "15–25 mins",
        price: "From £—",
        summary:
          "Clean, balanced shaping to lift the face and define your natural brow line.",
        bestFor: ["Brow tidy-up", "Brow mapping", "Regular maintenance", "Sharper definition"],
        highlights: ["Precision shaping", "Clean finish", "Low maintenance"],
        downtime: "None",
      },
      {
        id: "semi-permanent-brows",
        title: "Semi-Permanent Brows",
        category: "Brows & Lips",
        duration: "Consult + treatment",
        price: "From £—",
        summary:
          "Natural-looking brow enhancement designed around your face shape, existing hair and desired finish.",
        bestFor: ["Sparse brows", "Uneven brows", "Busy clients", "Long-lasting definition"],
        highlights: ["Consultation-led", "Mapped to your features", "Aftercare guidance included"],
        downtime: "Mild redness initially (typical)",
      },
      {
        id: "semi-permanent-lips",
        title: "Semi-Permanent Lip Blush",
        category: "Brows & Lips",
        duration: "Consult + treatment",
        price: "From £—",
        summary:
          "Soft tint and definition to enhance natural lip tone and shape with a subtle, polished result.",
        bestFor: ["Pale tone", "Uneven border", "Definition", "Natural enhancement"],
        highlights: ["Colour-matched", "Soft, natural finish", "Aftercare guidance included"],
        downtime: "Mild swelling initially (typical)",
      },
      {
        id: "relaxing-massage",
        title: "Relaxing Massage",
        category: "Massage",
        duration: "30–60 mins",
        price: "From £—",
        summary:
          "A calming, tension-relief massage tailored to your pressure preference and focus areas.",
        bestFor: ["Stress", "Tension", "Recovery", "General wellbeing"],
        highlights: ["Custom pressure", "Focused areas", "Relaxation-led"],
        downtime: "None",
      },
      {
        id: "skin-consultation",
        title: "Skin Consultation",
        category: "Consultation",
        duration: "20–30 mins",
        price: "From £—",
        summary:
          "Not sure what to book? We’ll assess your skin goals and recommend the best treatment plan and homecare.",
        bestFor: ["Unsure what to book", "Sensitive skin", "Acne-prone", "Results planning"],
        highlights: ["Clear plan", "Treatment pathway", "Product guidance"],
        downtime: "None",
      },
    ],
    []
  );

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "All") return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory, treatments]);

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      className="min-h-screen flex items-start overflow-x-hidden"
    >
      <div className="container mx-auto pt-36 pb-16 xl:pt-28">
        {/* Top split: copy + image */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="w-full xl:max-w-[680px] text-center xl:text-left"
          >
            <h2 className="h2 mb-4 mx-auto xl:mx-0 max-w-[620px] xl:max-w-none">
              Treatments designed for real skin results
            </h2>

            <p className="lead max-w-[680px] mx-auto xl:mx-0">
              Pureskn &amp; Beauty offers advanced skin treatments and beauty services focused on
              healthy skin function, visible glow, and confidence. Explore facials, DMK Enzyme Therapy,
              microdermabrasion, dermaplaning, microneedling, chemical peels, and semi-permanent enhancements.
            </p>

            {/* Quick stats */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { k: "Consultation-led", v: "Personalised plans" },
                { k: "Results-focused", v: "Skin-first approach" },
                { k: "Minimal downtime", v: "When possible" },
              ].map((item) => (
                <motion.div
                  key={item.k}
                  variants={cardAnim}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left"
                >
                  <div className="text-sm opacity-80">{item.k}</div>
                  <div className="text-base font-semibold">{item.v}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Category filters */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="mt-10 flex flex-wrap items-center justify-center xl:justify-start gap-2"
            >
              {categories.map((cat) => {
                const active = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      "px-4 py-2 rounded-full text-sm transition border",
                      active
                        ? "bg-accent text-black border-accent"
                        : "bg-transparent border-white/15 hover:border-white/30",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {cat}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            custom={0.25}
            className="hidden xl:flex w-[420px] h-[560px] relative"
          >
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute -top-3 -left-3 w-24 h-24 rounded-3xl bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-3 -right-3 w-28 h-28 rounded-3xl bg-accent/20 blur-2xl" />

            {/* Replace with your real image */}
            <Image
              src={"/assets/treatments/img.jpg"}
              fill
              quality={100}
              alt="Treatment room aesthetic"
              className="object-contain p-6"
            />
          </motion.div>
        </div>

        {/* Treatments grid */}
        <div className="mt-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <motion.h3
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-2xl font-semibold"
            >
              Browse treatments
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="text-sm opacity-80 text-center md:text-right"
            >
              Tip: Start with a <span className="font-semibold">Skin Consultation</span> if you’re unsure what to book.
            </motion.div>
          </div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filteredTreatments.map((t) => {
              const expanded = expandedId === t.id;

              return (
                <motion.div
                  key={t.id}
                  variants={cardAnim}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-[12px] h-[12px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]" />
                        <div className="text-xs uppercase tracking-wide opacity-70">
                          {t.category}
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold leading-snug">
                        {t.title}
                      </h4>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm opacity-85">
                        <span className="rounded-full border border-white/10 px-3 py-1">
                          {t.duration}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1">
                          {t.price}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1">
                          Downtime: {t.downtime}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpanded(t.id)}
                      className="shrink-0 rounded-xl border border-white/15 px-3 py-2 text-sm hover:border-white/30 transition"
                      aria-expanded={expanded}
                      aria-controls={`treatment-${t.id}`}
                    >
                      {expanded ? "Less" : "Details"}
                    </button>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed opacity-90">
                    {t.summary}
                  </p>

                  <div
                    id={`treatment-${t.id}`}
                    className={[
                      "grid transition-all duration-300 ease-in-out",
                      expanded ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr] mt-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 border-t border-white/10">
                        <div className="mt-4">
                          <div className="text-sm font-semibold mb-2">
                            Best for
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {t.bestFor.map((b) => (
                              <span
                                key={b}
                                className="text-xs rounded-full bg-black/20 border border-white/10 px-3 py-1"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5">
                          <div className="text-sm font-semibold mb-2">
                            What’s included
                          </div>
                          <ul className="space-y-2 text-sm opacity-90">
                            {t.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2">
                                <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <a
                            href="/contact"
                            className="btn w-full sm:w-auto text-center"
                          >
                            Book / Enquire
                          </a>

                          {/* Optional: change this to your WhatsApp click-to-chat */}
                          <a
                            href="#"
                            className="w-full sm:w-auto text-center rounded-xl border border-white/15 px-5 py-3 text-sm hover:border-white/30 transition"
                            aria-label="Enquire on WhatsApp"
                          >
                            WhatsApp enquiry
                          </a>
                        </div>

                        <p className="mt-4 text-xs opacity-70">
                          Pricing and suitability can vary. A consultation is recommended for advanced treatments.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* FAQ + CTA */}
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <h3 className="text-2xl font-semibold mb-4">Common questions</h3>

            <div className="space-y-4">
              {[
                {
                  q: "I’m not sure what to book—what do I do?",
                  a: "Start with a Skin Consultation. You’ll get a clear plan and the right treatment pathway for your goals and skin type.",
                },
                {
                  q: "Do advanced treatments have downtime?",
                  a: "Some do. Downtime varies by treatment and skin. You’ll be guided clearly before booking so you can plan around work, events and travel.",
                },
                {
                  q: "How many sessions will I need?",
                  a: "Some treatments deliver an instant glow, but the best results often come from a course. Your plan will be tailored during consultation.",
                },
              ].map((item) => (
                <div key={item.q} className="border border-white/10 rounded-2xl p-5">
                  <div className="font-semibold">{item.q}</div>
                  <div className="mt-2 text-sm opacity-90 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />

            <h3 className="text-2xl font-semibold mb-3">Ready to book?</h3>
            <p className="text-sm opacity-90 leading-relaxed max-w-[520px]">
              If you want visible skin improvements with a calm, professional experience,
              book your appointment or send an enquiry. We’ll recommend the most suitable
              treatment based on your skin goals.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="btn w-full sm:w-auto text-center">
                Book appointment
              </a>
              <a
                href="https://wa.me/447748974103"
                className="w-full sm:w-auto text-center rounded-xl border border-white/15 px-5 py-3 text-sm hover:border-white/30 transition"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-4 text-xs opacity-70">
              Note: Replace the WhatsApp links (#) with your click-to-chat URL when ready.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TreatmentsPageContainer;
