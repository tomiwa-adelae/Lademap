"use client";

import {
  IconSend,
  IconClock,
  IconShieldCheck,
  IconWorld,
} from "@tabler/icons-react";

export const ContactForm = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Branding & Trust Pillars */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-3xl font-bold uppercase mb-4">
                Direct Support for <br />
                <span className="text-primary">Global Operations.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our logistics coordinators are standing by to analyze your
                supply chain requirements. Expect a response within **2 business
                hours.**
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Rapid Response",
                  desc: "Dedicated desk for urgent freight inquiries.",
                  icon: <IconClock />,
                },
                {
                  title: "Secure Data",
                  desc: "Your shipment details are handled with strict confidentiality.",
                  icon: <IconShieldCheck />,
                },
                {
                  title: "Global Reach",
                  desc: "Coordinating across all major international trade routes.",
                  icon: <IconWorld />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-primary flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Logistics Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Full Name
                  </label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Company
                  </label>
                  <input type="text" placeholder="Enterprise Ltd" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Email Address
                  </label>
                  <input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Inquiry Type
                  </label>
                  <select className="contact-input appearance-none">
                    <option>General Freight</option>
                    <option>Customs Clearing</option>
                    <option>Warehousing</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Describe your logistics needs, origin, or destination..."
                    className="contact-input min-h-[150px] py-4"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full h-16 bg-blue-600 hover:bg-slate-950 text-white font-black uppercase rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                    Send Inquiry
                    <IconSend size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
