import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BlogIndex from './BlogIndex'
import BlogPost from './BlogPost'
import './index.css'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">New York Insurance Guide</h1>
            <p className="text-sm text-gray-500">Protecting Your Empire State: Essential New York Insurance Guidance.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/blog" className="hidden sm:inline text-blue-700 font-semibold hover:text-blue-900">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold transition text-sm">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden" style={{minHeight: '420px'}}>
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{zIndex: 0}}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900/75" style={{zIndex: 1, pointerEvents: 'none'}}></div>
        {/* Content */}
        <div className="relative" style={{zIndex: 2}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">New York Insurance Guide</h2>
          <p className="text-xl text-blue-200 mb-6">Your trusted source for New York insurance news, laws, and resources</p>
          <p className="text-blue-300 text-lg mb-10 max-w-2xl mx-auto">We help New Yorkers navigate a high-cost insurance market — from flood zone coverage and no-fault auto rules to co-op and condo complexity. Straightforward guidance, no sales pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#overview" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              📖 Explore the Guide
            </a>
            <a href="#tips" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              💡 New York Insurance Tips
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* State Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">New York Insurance Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">New York's insurance market is dynamic and highly regulated, reflecting its diverse population and unique challenges. From bustling urban centers to serene rural areas, residents face distinct risks, making comprehensive insurance coverage paramount. The state's Department of Financial Services (DFS) oversees the industry, ensuring fair practices and consumer protection, setting stringent requirements for everything from auto liability to health insurance.</p><p className="text-gray-700 mb-4">Navigating the New York insurance landscape requires understanding local regulations, carrier options, and specific coverage needs. Whether you're a homeowner in Long Island, a driver in Manhattan, or a business owner in Buffalo, having adequate insurance is not just a legal necessity but a crucial safeguard against unexpected financial burdens. This guide aims to demystify New York insurance, helping residents make informed decisions to protect their assets, health, and future.</p><p className="text-gray-700 mb-4">Key factors influencing insurance in New York include population density, climate risks (e.g., coastal flooding, winter storms), and a robust legal environment. Residents need good coverage to mitigate risks associated with high property values, potential natural disasters, and the cost of living. Understanding your options and obligations is the first step towards securing peace of mind in the Empire State.</p>
          </div>
        </div>
      </section>

      {/* Top Carriers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Top Insurance Carriers in New York</h2>
          <p className="text-center text-gray-600 mb-10">Leading insurance companies serving New York residents</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">GEICO</h3>
          <p className="text-gray-600">Known for competitive auto insurance rates, GEICO also offers home, renters, and other personal lines in New York.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">State Farm</h3>
          <p className="text-gray-600">A major player in New York, State Farm provides a wide array of insurance products, including auto, home, life, and business insurance through local agents.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Progressive</h3>
          <p className="text-gray-600">Progressive is a popular choice for New York drivers, offering various discounts and customizable auto insurance policies, alongside home and renters insurance.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Travelers</h3>
          <p className="text-gray-600">Travelers offers comprehensive property and casualty insurance solutions for New York residents, including home, auto, and umbrella policies.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">New York Life</h3>
          <p className="text-gray-600">A prominent life insurance provider in New York, New York Life focuses on financial planning, annuities, and long-term care solutions.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Laws & Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">New York Insurance Laws & Requirements</h2>
          <p className="text-gray-600 mb-8">Stay compliant with New York's insurance regulations</p>
          <div className="space-y-6">
            
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">No-Fault Auto Insurance Law</h4>
            <p className="text-gray-600 text-sm">Requires all drivers to carry Personal Injury Protection (PIP) coverage, providing benefits for medical expenses and lost wages regardless of fault.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Mandatory Auto Liability Insurance</h4>
            <p className="text-gray-600 text-sm">All New York registered vehicles must have minimum liability coverage: $25,000/$50,000 for bodily injury and $10,000 for property damage.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Homeowners Insurance Disclosure Requirements</h4>
            <p className="text-gray-600 text-sm">Insurers must provide clear information on coverage, deductibles, and options for flood and hurricane insurance to homeowners.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">New York State Health Insurance Mandates</h4>
            <p className="text-gray-600 text-sm">State laws dictate specific coverage requirements for health insurance plans, including mental health parity and essential health benefits.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Workers' Compensation Law</h4>
            <p className="text-gray-600 text-sm">Nearly all New York employers are legally required to provide workers' compensation insurance for their employees.</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Recent News (Blog Preview) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Recent News & Articles</h2>
            <Link to="/blog" className="text-blue-700 font-semibold hover:text-blue-900">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            
        <a href="/blog/understanding-ny-no-fault-auto-insurance" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-09-20</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Navigating New York's No-Fault Auto Insurance System</h3>
          <p className="text-gray-600 text-sm">New York's no-fault auto insurance can be confusing. This post breaks down how it works, what PIP covers, and what you need to know after an accident.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/flood-insurance-new-york-homeowners" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-11-10</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Is Flood Insurance Necessary for New York Homeowners?</h3>
          <p className="text-gray-600 text-sm">Many New York homes are vulnerable to flood damage, often not covered by standard policies. Learn why separate flood insurance is a critical consideration.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/renters-insurance-nyc-why-you-need-it" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-01-15</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Renters Insurance in NYC: Why It's More Than Just a Landlord Requirement</h3>
          <p className="text-gray-600 text-sm">Renters insurance is often overlooked but crucial for NYC residents. Discover how it protects your belongings and provides liability coverage in the city.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
          </div>
        </div>
      </section>

      {/* Insurance Tips */}
      <section id="tips" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Insurance Tips for New York Residents</h2>
          <div className="space-y-4">
            
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <p className="text-gray-700">Bundle your insurance policies (auto, home, renters) with a single carrier for potential discounts.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <p className="text-gray-700">Understand New York's no-fault auto insurance system and your PIP coverage limits.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
          <p className="text-gray-700">Review your homeowners or renters policy annually, especially if you live in a flood or hurricane-prone area.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
          <p className="text-gray-700">Utilize the New York State Department of Financial Services (DFS) website for consumer resources and to verify insurer licenses.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
          <p className="text-gray-700">Consider umbrella insurance for additional liability protection, particularly with high property values in New York.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Quote CTA — appears after all value content */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions About Your Coverage?</h2>
          <p className="text-blue-200 text-xl mb-4">If you've read through the guide and want a second opinion on your current policy — or just want to see what else is available in New York — our local agents are happy to help. No pressure, no obligation.</p>
          <p className="text-blue-300 mb-8">We work with 150+ carriers across the country, so we'll tell you honestly what's worth it and what's not.</p>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-5 rounded-xl text-xl transition transform hover:scale-105 shadow-lg">
            🚀 Get a Free, No-Obligation Quote
          </a>
          <p className="mt-4 text-blue-200 text-sm">Takes 2 minutes · Local agents · 150+ carriers compared</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">New York Insurance Guide</h3>
              <p className="text-sm">Protecting Your Empire State: Essential New York Insurance Guidance.</p>
              <p className="mt-3 text-sm">📞 <a href="tel:800-616-1418" className="hover:text-white">800-616-1418</a></p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Also from Tomlinson & Co</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tomlinsonandco.com" className="hover:text-white transition">Tomlinson & Co Insurance</a></li>
                <li><a href="https://hoinsurance.com" className="hover:text-white transition">HOInsurance.com — FL Home Specialists</a></li>
                <li><a href="https://flawc.com" className="hover:text-white transition">FLAWC.com — Florida Workers Comp</a></li>
                <li><a href="https://easycommercialinsurance.com" className="hover:text-white transition">EasyCommercialInsurance.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} New York Insurance Guide — A Tomlinson & Co Resource</p>
            <p className="mt-1 text-xs">Information provided for educational purposes only. Contact a licensed agent for personalized advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
