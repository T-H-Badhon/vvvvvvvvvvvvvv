import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — NovaTech",
  description:
    "Explore our comprehensive software services including web development, mobile apps, CRM, ERP, HRM, and POS solutions.",
};

const services = [
  {
    title: "Website Development",
    description:
      "We build modern, responsive, and high-performance websites tailored to your brand and business goals. From corporate portals to e-commerce platforms, our websites are crafted with best practices in SEO, accessibility, and performance optimization.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Optimization",
      "Performance Focused",
      "CMS Integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Create powerful native and cross-platform mobile applications for iOS and Android. We focus on intuitive UI/UX, smooth performance, and seamless integration with backend services to deliver apps that users love.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform (React Native)",
      "Push Notifications",
      "Offline Capabilities",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Landing Page Creation",
    description:
      "High-converting landing pages designed for lead generation and marketing campaigns. Our landing pages are A/B tested, fast-loading, and optimized for conversion with compelling copy and design.",
    features: [
      "Conversion Optimized",
      "A/B Testing Ready",
      "Fast Load Times",
      "Analytics Integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "CRM — Customer Relationship Management",
    description:
      "Streamline your customer interactions with our custom CRM solutions. Track leads, manage contacts, automate sales pipelines, and gain valuable insights into customer behavior — all in one unified platform.",
    features: [
      "Lead & Contact Management",
      "Sales Pipeline Automation",
      "Customer Analytics & Reports",
      "Email & Communication Tracking",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "ERP — Enterprise Resource Planning",
    description:
      "Unify your business operations with our comprehensive ERP systems. From finance and accounting to supply chain and manufacturing — we build integrated solutions that improve efficiency and reduce costs.",
    features: [
      "Financial Management",
      "Supply Chain Management",
      "Inventory Tracking",
      "Business Intelligence Dashboards",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "HRM — Human Resource Management",
    description:
      "Manage your workforce effectively with our HRM platforms. From recruitment and onboarding to payroll and performance tracking — we help you build a productive and engaged team.",
    features: [
      "Employee Management",
      "Payroll Processing",
      "Attendance & Leave Tracking",
      "Performance Reviews",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "POS — Point of Sale",
    description:
      "Modern point-of-sale solutions that simplify transactions, manage inventory, and provide real-time business insights. Perfect for retail stores, restaurants, and service businesses.",
    features: [
      "Transaction Processing",
      "Inventory Management",
      "Sales Analytics & Reports",
      "Multi-location Support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Software Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            From web and mobile development to enterprise-grade CRM, ERP, HRM,
            and POS solutions — we deliver end-to-end software services.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-blue-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Card */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10 flex items-center justify-center min-h-[250px]">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-sm text-blue-600 flex items-center justify-center mx-auto mb-4">
                        {service.icon}
                      </div>
                      <p className="text-gray-500 font-medium">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Technology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Built with Modern Tech Stacks
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            We use industry-leading technologies to ensure reliability, scalability, and performance.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">MERN Stack</h3>
              <p className="mt-2 text-gray-500 text-sm">
                MongoDB &bull; Express.js &bull; React &bull; Node.js
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">PERN Stack</h3>
              <p className="mt-2 text-gray-500 text-sm">
                PostgreSQL &bull; Express.js &bull; React &bull; Node.js
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Next.js</h3>
              <p className="mt-2 text-gray-500 text-sm">
                Full-stack React framework for production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a free consultation
            and quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
