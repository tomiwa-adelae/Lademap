"use client";

import { useState } from "react";
import {
  IconBoxSeam,
  IconTruck,
  IconShip,
  IconCheck,
  IconMapPinFilled,
  IconSearch,
} from "@tabler/icons-react";
import { ComingSoon } from "@/components/ComingSoon";

export const TrackingUI = () => {
  const [trackingId, setTrackingId] = useState("");

  const milestones = [
    { status: "Order Processed", date: "Oct 24, 08:30 AM", completed: true },
    { status: "Cleared Customs", date: "Oct 26, 14:15 PM", completed: true },
    {
      status: "In Transit - Sea Freight",
      date: "Oct 27, 09:00 AM",
      completed: true,
      current: true,
    },
    { status: "Arrived at Mafoluku Hub", date: "Pending", completed: false },
    { status: "Final Delivery", date: "Pending", completed: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Search */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase mb-4">
                Live Visibility
              </h2>
              <h3 className="text-4xl font-bold uppercase text-slate-900 leading-tight">
                Control Your <br />
                <span className="text-blue-500">Supply Chain.</span>
              </h3>
              <p className="mt-4 text-slate-600 font-medium">
                Experience the transparency LADEMAB brings to global trade.
                Enter a demo ID to see our real-time tracking interface.
              </p>
            </div>

            <div className="relative group">
              <ComingSoon />
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g., LDM-8829)"
                className="w-full h-16 pl-14 pr-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all font-bold text-slate-900"
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <IconSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                size={24}
              />
            </div>

            <div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-900/20">
              <div className="flex items-center gap-4 mb-4">
                <IconShip size={32} stroke={1.5} />
                <p className="font-black uppercase tracking-tight">
                  Active Vessel: LDM-EMPRESS
                </p>
              </div>
              <p className="text-sm text-blue-100 font-medium">
                Currently navigating South Atlantic. Estimated arrival at Apapa
                Port: 48 Hours.
              </p>
            </div>
          </div>

          {/* Right: The Visual Timeline */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] relative shadow-xl border border-slate-100">
            <ComingSoon />
            <div className="flex justify-between items-center mb-12">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  Shipment Reference
                </p>
                <p className="text-xl font-black text-slate-900">
                  LDM-SK-992011
                </p>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                On Schedule
              </div>
            </div>

            <div className="relative space-y-10">
              {/* The Vertical Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100" />

              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8 items-start">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors ${m.completed ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-300"}`}
                  >
                    {m.completed ? (
                      <IconCheck size={18} stroke={3} />
                    ) : (
                      <div className="w-2 h-2 bg-slate-300 rounded-full" />
                    )}
                  </div>

                  <div
                    className={`flex-1 pb-2 ${m.current ? "border-b border-blue-100" : ""}`}
                  >
                    <p
                      className={`font-black uppercase tracking-tight ${m.completed ? "text-slate-900" : "text-slate-300"}`}
                    >
                      {m.status}
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {m.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
