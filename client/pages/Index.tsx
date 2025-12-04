import { Link } from "react-router-dom";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";

export default function Index() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    agreed: false,
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm(prev => ({
      ...prev,
      agreed: e.target.checked,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "", agreed: false });
  };

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-12 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Design the future of automotive innovation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              We shape tomorrow's vehicles through precision design and cutting-edge technology. From concept to reality, we deliver solutions that move the industry forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100">
                Explore
              </button>
              <button className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition">
                Learn more
              </button>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
              alt="Automotive interior design"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
              Capabilities
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What we bring to your project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of automotive design, from initial sketches to production-ready models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept Development */}
            <div className="border border-gray-200">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                  alt="Concept development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Concept development</h3>
                <p className="text-gray-600">
                  We translate your vision into compelling design directions that capture market potential.
                </p>
              </div>
            </div>

            {/* Digital Modelling */}
            <div className="border border-gray-200">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                  alt="Digital modelling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Digital modelling</h3>
                <p className="text-gray-600">
                  Advanced 3D visualization and rendering bring your designs to life with photorealistic precision.
                </p>
              </div>
            </div>

            {/* Prototyping */}
            <div className="border border-gray-200">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545665225-4b8c3206dae6?w=400&h=400&fit=crop"
                  alt="Prototyping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Prototyping</h3>
                <p className="text-gray-600">
                  From clay models to functional prototypes, we validate design intent before production.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-black hover:text-gray-600 font-medium">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 max-w-2xl">
            Proven track record in automotive design excellence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-3">150+</div>
              <p className="text-lg text-gray-300">Projects delivered</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-3">18</div>
              <p className="text-lg text-gray-300">Years in industry</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-3">45</div>
              <p className="text-lg text-gray-300">Global partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Connect</p>
              <h2 className="text-4xl font-bold mb-6">Get in touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're ready to discuss your next design challenge.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:studio@atomicdesign.co.in" className="text-gray-700 hover:text-black">
                    studio@atomicdesign.co.in
                  </a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919955501471" className="text-gray-700 hover:text-black">
                    +1 91 99555 01471
                  </a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">
                    Atomic Design, HSR Layout Bangalore
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  name="agreed"
                  checked={contactForm.agreed}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border border-gray-300 bg-white cursor-pointer"
                  required
                />
                <label htmlFor="agree" className="text-sm cursor-pointer">
                  I agree to the terms
                </label>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 w-full sm:w-auto"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
