'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import {
  BarChart01,
  Target01,
  TrendUp01,
  Lock01,
  Users01,
  Zap,
} from '@untitledui/icons';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white font-bold text-lg">
                n
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-50">nrml.io</span>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link href="#signup">
                <Button size="sm" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
              Strategic Initiative Advisory & Management
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Evaluate, prioritize, and execute initiatives with data-driven frameworks.
              Make better strategic decisions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="#signup" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              No credit card required • Development environment • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to manage initiatives effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart01,
                title: 'Initiative Assessment',
                description:
                  'Evaluate initiatives across 6 key dimensions with objective scoring methodology.',
              },
              {
                icon: Target01,
                title: 'Prioritization Framework',
                description:
                  'Use weighted scoring to objectively rank and prioritize initiatives for maximum impact.',
              },
              {
                icon: TrendUp01,
                title: 'Performance Tracking',
                description:
                  'Monitor initiative progress, outcomes, and organizational value delivery.',
              },
              {
                icon: Lock01,
                title: 'Data-Driven Decisions',
                description:
                  'Make informed decisions based on comprehensive assessment data and analytics.',
              },
              {
                icon: Users01,
                title: 'Stakeholder Management',
                description:
                  'Manage approvals, ownership, and governance across your organization.',
              },
              {
                icon: Zap,
                title: 'Execution Support',
                description:
                  'Plan resource allocation, timelines, and sequencing for successful delivery.',
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950"
                >
                  <IconComponent className="h-10 w-10 mb-4 text-primary-400" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Framework */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Six-Dimension Assessment Model
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive evaluation framework for objective initiative assessment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Core Attributes', description: 'Name, service, pain point, and description' },
              { title: 'Strategic Alignment', description: 'Linkage to organizational strategy' },
              { title: 'Outcome Evaluation', description: 'Beneficiary identification and impact measurement' },
              { title: 'Ownership & Governance', description: 'Owner, enabler, and authority approval' },
              { title: 'Capability Assessment', description: 'Resource availability and lag times' },
              { title: 'Cost Evaluation', description: 'Time estimates and cost analysis' },
            ].map((dim, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-2">
                  {dim.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{dim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple, effective process for managing initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Initiative',
                description: 'Submit your initiative for assessment.',
              },
              {
                step: '2',
                title: 'Complete Assessment',
                description: 'Evaluate across six key dimensions.',
              },
              {
                step: '3',
                title: 'Generate Score',
                description: 'Get objective prioritization score.',
              },
              {
                step: '4',
                title: 'Execute & Track',
                description: 'Monitor progress and outcomes.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Built for Every Organization
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              From strategy to execution, support every phase of initiative management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategic Planning',
                description:
                  'Align initiatives with organizational strategy and long-term goals.',
              },
              {
                title: 'Digital Transformation',
                description:
                  'Assess and prioritize digital transformation initiatives.',
              },
              {
                title: 'Operational Improvement',
                description:
                  'Evaluate process improvement and efficiency initiatives.',
              },
              {
                title: 'Investment Decisions',
                description:
                  'Make data-driven decisions on capital allocation.',
              },
              {
                title: 'Risk Management',
                description:
                  'Identify and prioritize risk mitigation initiatives.',
              },
              {
                title: 'Change Management',
                description:
                  'Plan and track organizational change initiatives.',
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900/20 border-y border-primary-200 dark:border-primary-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Built with cutting-edge technologies for performance, reliability, and security.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Frontend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>✓ Next.js 16 & React 19</li>
                  <li>✓ Tailwind CSS 4</li>
                  <li>✓ TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Backend & Data</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>✓ Supabase (PostgreSQL)</li>
                  <li>✓ Real-time features</li>
                  <li>✓ Enterprise security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'How does the assessment framework work?',
                a: 'The framework evaluates initiatives across six dimensions: core attributes, strategic alignment, outcome evaluation, ownership, capability assessment, and cost evaluation. Each dimension generates scores that feed into an overall priority score.',
              },
              {
                q: 'Can nrml integrate with existing systems?',
                a: 'Yes, nrml is built to integrate with your existing tools and systems. We support both REST APIs and real-time data synchronization through Supabase.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. All data is stored on secure Supabase infrastructure with enterprise-grade security, encryption, and regular backups.',
              },
              {
                q: 'How long does implementation take?',
                a: 'You can get started immediately with our development environment. Enterprise deployments typically take 2-4 weeks with our team support.',
              },
              {
                q: 'What support is available?',
                a: 'We provide comprehensive documentation, development support, and dedicated assistance for enterprise customers.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-gray-200 dark:border-gray-800 p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-gray-50">
                  {faq.q}
                  <svg
                    className="h-5 w-5 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="signup" className="py-20 bg-primary-500 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Improve Initiative Management?</h2>
          <p className="text-xl mb-8 text-primary-50">
            Start your free trial today. No credit card required.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-primary-500 hover:bg-gray-100"
              >
                Get Started
              </Button>
            </div>
            {submitted && (
              <p className="mt-3 text-sm text-primary-100">
                ✓ Thanks! We'll be in touch soon.
              </p>
            )}
          </form>
          <p className="text-sm text-primary-100">
            Cancel anytime • Development environment • Support available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white font-bold">
                  n
                </div>
                <span className="text-lg font-bold text-white">nrml.io</span>
              </div>
              <p className="text-sm text-gray-400">
                Strategic initiative advisory and management platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-50 hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 nrml.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
