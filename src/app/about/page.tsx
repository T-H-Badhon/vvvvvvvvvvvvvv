import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — NovaTech",
  description:
    "Learn about NovaTech — a passionate team of software engineers building innovative solutions with MERN, PERN, and Next.js.",
};

const values = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of the curve by continuously exploring new technologies and approaches to deliver cutting-edge solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our success. We work closely with our clients to understand their unique needs and deliver tailored solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Driven",
    description:
      "We adhere to the highest standards of code quality, testing, and documentation to ensure reliable, maintainable software.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Agile & Transparent",
    description:
      "We follow agile methodologies with transparent communication, ensuring you are always in the loop on project progress.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const team = [
  { name: "Alex Johnson", role: "CEO & Founder", initials: "AJ" },
  { name: "Sarah Chen", role: "CTO", initials: "SC" },
  { name: "Michael Rivera", role: "Lead Developer", initials: "MR" },
  { name: "Emily Brooks", role: "UX/UI Designer", initials: "EB" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              We Build Software That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              NovaTech is a full-service software development firm dedicated to
              helping businesses succeed in the digital age. With expertise in
              MERN, PERN, and Next.js, we deliver scalable and innovative
              solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                From a Small Team to a Trusted Partner
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between business needs
                and technology, NovaTech started as a small team of passionate
                developers. Today, we have grown into a full-fledged software
                firm serving clients across industries.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our journey has been defined by a relentless focus on quality,
                innovation, and client satisfaction. We specialize in building
                web applications, mobile apps, and enterprise solutions that
                help businesses streamline operations and reach new heights.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-blue-600">150+</div>
                <p className="mt-1 text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-indigo-600">50+</div>
                <p className="mt-1 text-sm text-gray-500">Happy Clients</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-purple-600">5+</div>
                <p className="mt-1 text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-cyan-600">25+</div>
                <p className="mt-1 text-sm text-gray-500">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Meet the People Behind NovaTech
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              A passionate team of engineers, designers, and strategists
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Want to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            We&apos;re always looking for exciting projects and great
            partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
