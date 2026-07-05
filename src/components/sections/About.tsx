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
                Throughout my journey, I've developed applications in different
                domains, including social trading, marine services, e-commerce,
                education, and news. Each project has strengthened my technical
                skills and taught me how to convert business requirements into
                intuitive user experiences.
              </p>

              <p>
                Beyond development, I'm passionate about software engineering
                principles. I continuously improve my knowledge of architecture,
                design patterns, and system design because I believe great
                software is built through thoughtful engineering, not just
                writing code.
              </p>

              <p>
                My long-term goal is to become a software engineer who builds
                products that make a real impact while contributing to teams
                that value quality, collaboration, and continuous learning.
              </p>
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
                I'm currently deepening my knowledge of Software Architecture,
                System Design, Backend Development with Node.js, Docker, and
                CI/CD while continuing to improve my Flutter expertise and build
                production-ready applications.
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
