"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building meaningful mobile experiences."
          description="Flutter Developer passionate about building scalable applications, solving real-world problems, and continuously growing as a software engineer."
        />

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8 text-lg leading-9 text-foreground/70">
              <p>
                My journey into software development started with a simple
                curiosity about how mobile applications are built. That
                curiosity quickly turned into a passion for Flutter, where I
                discovered the excitement of creating fast, beautiful, and
                reliable applications that people use every day.
              </p>

              <p>
                I specialize in building cross-platform mobile applications
                using Flutter and Dart, with practical experience in Firebase,
                REST APIs, Riverpod, Bloc, and Clean Architecture. I enjoy
                transforming ideas into polished products while writing clean,
                maintainable, and scalable code.
              </p>

              <p>
                Throughout my journey, I&apos;ve developed applications in
                different domains, including social trading, marine services,
                e-commerce, education, and news. Each project has strengthened
                my technical skills and taught me how to convert business
                requirements into intuitive user experiences.
              </p>

              <p>
                Beyond development, I&apos;m passionate about software
                engineering principles. I continuously improve my knowledge of
                architecture, design patterns, and system design because I
                believe great software is built through thoughtful engineering,
                not just writing code.
              </p>

              <p>
                My long-term goal is to become a software engineer who builds
                products that make a real impact while contributing to teams
                that value quality, collaboration, and continuous learning.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/mohamed-ibrahim-3734b2330/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary-500/40 hover:bg-primary-500/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 11.62a1.56 1.56 0 0 0 0-3.12ZM5.5 9.66h1.44V15H5.5zM10.1 9.66h1.38v.73h.02c.19-.36.66-.74 1.36-.74 1.45 0 2.72 1 2.72 3.16V15H14.2v-4.6c0-1.09-.02-2.5-1.52-2.5-1.53 0-1.76 1.19-1.76 2.42V15H10.1z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/elsankary02"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit GitHub profile"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary-500/40 hover:bg-primary-500/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.55v-2.17c-3.2.69-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-8">
              <div className="grid grid-cols-2 gap-8">
                <AnimatedCounter to={8} suffix="+" label="Projects" />

                <AnimatedCounter to={1} suffix="+" label="Years Learning" />

                <AnimatedCounter to={10} suffix="+" label="Core Technologies" />
              </div>
            </div>

            <div className="rounded-2xl border border-primary-500/20 bg-primary-500/5 p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Currently Exploring
              </h3>

              <p className="mt-4 leading-7 text-foreground/70">
                I&apos;m currently deepening my knowledge of Software
                Architecture, System Design, Backend Development with Node.js,
                Docker, and CI/CD while continuing to improve my Flutter
                expertise and build production-ready applications.
              </p>
            </div>

            <div className="rounded-2xl border border-overlay/10 bg-overlay/[0.03] p-8">
              <h3 className="text-lg font-semibold text-foreground">
                What Drives Me
              </h3>

              <p className="mt-4 leading-7 text-foreground/70">
                I enjoy solving complex problems, learning modern technologies,
                and building software that delivers real value. Every project is
                an opportunity to improve my skills and create better user
                experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
