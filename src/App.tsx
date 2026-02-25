import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Database,
  Cpu,
  Globe2,
  Users,
  FileText,
  Bot,
  GraduationCap,
  Activity,
  Search,
  ChevronRight,
  ShieldCheck,
  Check,
  ArrowRight,
  MapPin,
  Stethoscope,
  Microscope,
  Baby,
  BrainCircuit,
  HeartPulse,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Sub-components
const WorkflowStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative z-10 flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
    <div className="mb-6 rounded-full bg-slate-50 p-4">{icon}</div>
    <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
    <p className="leading-relaxed text-slate-600">{description}</p>
  </div>
);

const FeatureItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <li className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0">{icon}</div>
    <span className="text-slate-700">{text}</span>
  </li>
);

const PricingCard = ({
  title,
  price,
  features,
  description,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  description: string;
  highlighted?: boolean;
}) => (
  <div
    className={`rounded-2xl p-8 border ${highlighted ? "bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20 scale-105 z-10" : "bg-slate-50 border-slate-200 shadow-sm"} flex flex-col h-full transition-all duration-300`}
  >
    <div className="mb-4">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
    <div className="mb-6">
      <span className="text-3xl font-bold text-slate-900">{price}</span>
      {price !== "Free" && price !== "Partner" && (
        <span className="text-slate-500">/project</span>
      )}
    </div>
    <div className="flex-grow">
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
            <Check
              className={`w-5 h-5 flex-shrink-0 ${highlighted ? "text-blue-600" : "text-slate-400"}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button
      className={`mt-8 w-full py-3 px-4 rounded-lg font-bold transition-colors ${highlighted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"}`}
    >
      Choose Plan
    </button>
  </div>
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-shrink-0 items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">
                Chang Puak Platform
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#research"
                className="text-slate-600 transition-colors hover:text-blue-600"
              >
                Research & Innovation
              </a>
              <a
                href="#one-health"
                className="text-slate-600 transition-colors hover:text-blue-600"
              >
                One Health
              </a>
              <a
                href="#cohort"
                className="text-slate-600 transition-colors hover:text-blue-600"
              >
                Cohort Builder
              </a>
              <a
                href="#education"
                className="text-slate-600 transition-colors hover:text-blue-600"
              >
                Education
              </a>
            </div>
            <button className="rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              Empowering Medical Research & Innovation
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Unified Medical Data <br />
              <span className="text-blue-600">Standardized on OMOP</span>
            </h1>
            <p className="mx-auto mb-10 mt-4 max-w-3xl text-xl text-slate-600">
              Connecting leading institutions like{" "}
              <span className="font-semibold text-slate-800">Khon Kaen U.</span>{" "}
              and <span className="font-semibold text-slate-800">Siriraj</span>{" "}
              to accelerate discovery through synthetic data, AI models, and
              collaborative research.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl">
                Explore Platform <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition hover:bg-slate-50">
                View Documentation <FileText className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Workflow Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              From raw hospital data to actionable insights through
              standardization.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full bg-slate-200 md:block"></div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <WorkflowStep
                icon={<Building2 className="h-10 w-10 text-blue-600" />}
                title="Data Sources"
                description="Secure integration with Khon Kaen U. and Siriraj Hospital."
              />
              <WorkflowStep
                icon={<Database className="h-10 w-10 text-indigo-600" />}
                title="OMOP Standardization"
                description="Transforming diverse datasets into the Same Data Model (OMOP) for consistency."
              />
              <WorkflowStep
                icon={<Cpu className="h-10 w-10 text-purple-600" />}
                title="Platform Product"
                description="Generating synthetic data, AI models, and cohort builders for end-users."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation (Pricing) */}
      <section id="research" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Research & Innovation
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Access high-fidelity synthetic data for your research needs.
              Choose the tier that fits your computational requirements.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <PricingCard
              title="Free Tier"
              price="Free"
              description="Perfect for exploration and small-scale testing."
              features={[
                "20% Access to Synthetic Data",
                "Low Computational Power",
                "Basic Community Support",
                "Standard Documentation",
              ]}
            />
            <PricingCard
              title="Pro / Pro+"
              price="Custom"
              highlighted={true}
              description="For serious researchers requiring full dataset access."
              features={[
                "100% Access to Synthetic Data",
                "Middle - High Computational Power",
                "Priority Support",
                "Advanced Analysis Tools",
              ]}
            />
            <PricingCard
              title="Collaborator"
              price="Partner"
              description="Join the Medical AI Consortium."
              features={[
                "Full Platform Access",
                "Collaborative Model Development",
                "Custom AI Pipeline Integration",
                "Direct Institutional Partnership",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
            id="one-health"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                <Globe2 size={16} /> One Health Initiative
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                Environmental & Social Health Intelligence
              </h3>
              <p className="mb-6 text-lg text-slate-600">
                Understand health in context. We integrate Social Determinants
                of Health (SDOH), environmental features, and geo-spatial data
                to provide a holistic view.
              </p>
              <ul className="space-y-4">
                <FeatureItem
                  icon={<MapPin className="text-green-600" />}
                  text="Geo-spatial analysis & Environment features"
                />
                <FeatureItem
                  icon={<Activity className="text-green-600" />}
                  text="Digital Twin technology (e.g., Rice Field monitoring)"
                />
                <FeatureItem
                  icon={<Users className="text-green-600" />}
                  text="Social Network Analysis & SDOH integration"
                />
              </ul>
            </div>
            <div className="order-1 flex h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-8 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-green-200 opacity-30 blur-3xl"></div>
                <Globe2
                  size={200}
                  className="relative z-10 text-green-600 drop-shadow-2xl"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>

          <div
            className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
            id="cohort"
          >
            <div className="flex h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 p-8">
              <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-4 border-b border-gray-100 pb-4">
                  <Users className="text-orange-600" size={32} />
                  <div>
                    <h4 className="text-lg font-bold">Cohort Builder</h4>
                    <p className="text-sm text-gray-500">
                      Filter pariticipants by criteria
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full rounded bg-gray-100"></div>
                  <div className="h-2 w-5/6 rounded bg-gray-100"></div>
                  <div className="mt-4 flex gap-2">
                    <div className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                      Age {">"} 50
                    </div>
                    <div className="rounded-full bg-red-50 px-3 py-1 text-xs text-red-600">
                      Diabetes Type 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                <Users size={16} /> Dataset & Cohort Builder
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                Comprehensive Data Access for Institutions
              </h3>
              <p className="mb-6 text-lg text-slate-600">
                Connecting major healthcare and social organizations including
                NHSO (สปสช.), HITAP, Social Security, and HR departments.
              </p>
              <ul className="space-y-4">
                <FeatureItem
                  icon={<Database className="text-orange-600" />}
                  text="Seamless Data Browser integration"
                />
                <FeatureItem
                  icon={<ShieldCheck className="text-orange-600" />}
                  text="Secure Policy & Access Control"
                />
                <FeatureItem
                  icon={<Search className="text-orange-600" />}
                  text="Advanced filtering and cohort definition"
                />
              </ul>
            </div>
          </div>

          <div
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
            id="education"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                <GraduationCap size={16} /> Education & Training
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                Next-Gen Medical Education
              </h3>
              <p className="mb-6 text-lg text-slate-600">
                Leveraging synthetic data and AI for safe, effective learning
                environments.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-purple-50 p-4">
                  <BrainCircuit className="mb-2 text-purple-600" />
                  <h4 className="font-bold text-purple-900">RAG System</h4>
                  <p className="text-sm text-purple-700">
                    "Arinth the Wise" - AMBOSS model integration.
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <Microscope className="mb-2 text-blue-600" />
                  <h4 className="font-bold text-blue-900">
                    Case-based Learning
                  </h4>
                  <p className="text-sm text-blue-700">
                    Practice on realistic synthetic patient data.
                  </p>
                </div>
                <div className="rounded-xl bg-pink-50 p-4 sm:col-span-2">
                  <Bot className="mb-2 text-pink-600" />
                  <h4 className="font-bold text-pink-900">
                    Project Genie & World Model
                  </h4>
                  <p className="text-sm text-pink-700">
                    Responsive simulation and 3D structure generation from
                    X-ray/CT scans.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 flex h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-8 lg:order-2">
              <div className="relative text-center">
                <div className="absolute right-0 top-0 animate-bounce delay-75">
                  <div className="rounded-lg bg-white p-2 text-xs font-bold text-purple-600 shadow-lg">
                    AI Tutor
                  </div>
                </div>
                <GraduationCap
                  size={160}
                  className="text-purple-600 drop-shadow-xl"
                  strokeWidth={1}
                />
                <div className="mt-8 rounded-full bg-white/80 px-6 py-3 font-medium text-slate-700 shadow-sm backdrop-blur">
                  Interactive Learning Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-500/20 p-3">
            <Bot size={32} className="text-blue-400" />
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Minimal AI Assistant
          </h2>
          <p className="mb-8 text-xl text-blue-200">
            Powered by Deep Learning and NLP for social analysis. Get instant
            summaries and insights from complex datasets.
          </p>
          <button className="transform rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition-all hover:scale-105 hover:bg-blue-500">
            Try the Assistant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <Activity className="text-blue-600" />
                <span className="text-xl font-bold text-slate-800">
                  Chang Puak Platform
                </span>
              </div>
              <p className="max-w-sm text-slate-500">
                Empowering the future of medical research and healthcare through
                standardized data and AI innovation.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-slate-900">Platform</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Data Browser
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Cohort Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Research Tiers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-slate-900">Connect</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Khon Kaen U.
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Siriraj Hospital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Chang Puak Platform. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components moved to top
// End of file
export default App;
