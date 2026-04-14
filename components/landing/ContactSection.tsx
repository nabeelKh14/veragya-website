"use client";

import "@/lib/GSAPAnimations";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Concept & Research",
  "2D Pattern Development",
  "CLO 3D Design & Rendering",
  "Production Handoff",
  "Styling",
  "Merchandising / Branding",
  "Animation",
  "Video Editing",
  "E-Invite",
  "Procreate",
  "Learning Software",
  "Marketing",
];

function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (formRef.current) {
      gsap.effects.staggerFadeUpOnScroll(formRef.current, {
        start: "top 85%",
        duration: 0.5,
        yOffset: 40,
        ease: "sine.out",
        once: true,
        stagger: 0.15,
        childSelector: "form > *",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        aria-labelledby="contact-heading"
        role="region"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        {/* Header - Removed "Contact" badge */}
        <SectionHeading
          ref={headingRef}
          badge=""
          heading="Let's Build Your Collection"
          description="Tell us about your project — from single styles to full collections, we'll bring your designs to life."
          size="md"
          align="center"
          as="h2"
          id="contact-heading"
          className="mb-6 sm:mb-8 md:mb-8"
          showDescriptionToScreenReaders={true}
        />

        <div className="relative w-full">
          {/* Full width background image - extends to full height */}
          <div
            style={{
              backgroundImage: `url(https://pbs.twimg.com/media/GqMIQdAXgAA_C4K?format=jpg&name=4096x4096)`,
            }}
            className="bg-background relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-cover opacity-85 sm:h-[600px] lg:h-[700px]"
          >
            <InteractiveGridPattern
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />

            {/* Form completely inside the image - centered */}
            <div className="relative z-10 mx-auto max-w-md px-4 sm:px-6 lg:px-8 w-full">
              <div
                ref={formRef}
                className="space-y-4 sm:space-y-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8"
              >
                <h3 id="contact-form-title" className="sr-only">
                  Contact us form
                </h3>
                <p id="contact-form-description" className="sr-only">
                  Use this form to contact Veragya. Tell us about your project scope, timeline, and
                  the types of services you need.
                </p>
                <form
                  className="space-y-4 sm:space-y-5"
                  aria-labelledby="contact-form-title"
                  aria-describedby="contact-form-description"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-text-heading text-sm font-medium sm:text-base"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="focus:border-primary focus:ring-primary w-full border-gray-200 h-10 sm:h-11"
                      name="name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      itemProp="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-text-heading text-sm font-medium sm:text-base"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="focus:border-primary focus:ring-primary w-full border-gray-200 h-10 sm:h-11"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      aria-required="true"
                      itemProp="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contactNumber"
                      className="text-text-heading text-sm font-medium sm:text-base"
                    >
                      Contact Number
                    </label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      placeholder="Enter your contact number"
                      className="focus:border-primary focus:ring-primary w-full border-gray-200 h-10 sm:h-11"
                      name="contactNumber"
                      autoComplete="tel"
                      inputMode="tel"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="serviceRequired"
                      className="text-text-heading text-sm font-medium sm:text-base"
                    >
                      Service Required
                    </label>
                    <Select name="serviceRequired" required>
                      <SelectTrigger className="w-full border-gray-200 h-10 sm:h-11">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 w-full py-3 sm:py-4 font-medium text-white text-sm sm:text-base"
                    aria-label="Submit contact form"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
