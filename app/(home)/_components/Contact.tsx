"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader } from "@/components/Loader";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone required"),
  inquiry: z.string().min(10, "Please provide more detail"),
});

export const ContactSection = () => {
  const [isPending, setIsPending] = React.useTransition();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", inquiry: "" },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsPending(async () => {
      // Logic for /api/lademab/contact goes here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      toast.success("Logistics request received. We will contact you shortly.");
      form.reset();
    });
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-primary font-semibold uppercase text-sm mb-2">
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold uppercase text-slate-900 mb-4">
                Let’s Move Your <br />
                <span className="text-slate-400">Business Forward.</span>
              </h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                Reach out today and discover how Lademab Nigeria Limited can
                deliver seamless logistics solutions tailored to your unique
                needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <IconMail className="text-primary" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Email Us
                  </p>
                  <p className="font-bold text-slate-900">info@lademab.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <IconPhone className="text-primary" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Call Operations
                  </p>
                  <p className="font-bold text-slate-900">+234-708-418-2254</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <IconMapPin className="text-primary" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Head Office
                  </p>
                  <p className="font-bold text-slate-900 leading-tight">
                    Alhaja Shokoya Street, <br />
                    Mafoluku. Lagos, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
              <h4 className="text-white text-2xl font-bold uppercase mb-4 tracking-tight">
                Request a <span className="text-blue-500">Service Quote</span>
              </h4>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email Address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="inquiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your logistics needs (Origin, Destination, Cargo Type...)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button disabled={isPending} type="submit" className="w-full">
                    {isPending ? (
                      <Loader text="Submitting..." />
                    ) : (
                      "Submit Quote Request"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
