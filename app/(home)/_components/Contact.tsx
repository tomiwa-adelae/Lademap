"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { EMAIL, PHONE } from "@/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone required"),
  inquiry: z.string().min(10, "Please provide more detail"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", inquiry: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const nameParts = values.name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName =
        nameParts.length > 1 ? nameParts.slice(1).join(" ") : "-";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          company: values.company || null,
          email: values.email,
          phone: values.phone,
          message: values.inquiry,
          subject: "general",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      toast.success("Request received! We'll be in touch shortly.");
      form.reset();
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-bold inline-block text-slate-900 hover:text-primary hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <IconPhone className="text-primary" size={24} />
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Call Operations
                  </p>
                  <p className="font-bold text-slate-900">{PHONE}</p>
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
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input
                              className="text-white"
                              placeholder="Full Name"
                              {...field}
                            />
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
                          <FormLabel className="text-white">
                            Company name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="text-white"
                              placeholder="Company Name"
                              {...field}
                            />
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
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="text-white"
                              placeholder="Email Address"
                              {...field}
                            />
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
                          <FormLabel className="text-white">
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="text-white"
                              placeholder="Phone Number"
                              {...field}
                            />
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
                        <FormLabel className="text-white">Inquiry</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your logistics needs (Origin, Destination, Cargo Type...)"
                            {...field}
                            className="text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <IconLoader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
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
