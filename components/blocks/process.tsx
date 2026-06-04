"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Map, Truck, Radio, PackageCheck, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    title: "Request Quote",
    description: "Contact us with cargo details",
    icon: MessageSquare,
    content: {
      heading: "Tell Us About Your Cargo",
      body: "Reach out to our team with details about your shipment - origin, destination, cargo type, volume, and timeline. Our logistics experts will respond within 2 hours with a tailored quote that fits your requirements and budget.",
    },
  },
  {
    title: "Route Assessment",
    description: "Optimal route planning",
    icon: Map,
    content: {
      heading: "Strategic Route Planning",
      body: "Our operations team analyzes the optimal route for your cargo, factoring in road conditions, regulatory requirements, load restrictions, and delivery windows. We ensure full compliance with state transport regulations before a single wheel turns.",
    },
  },
  {
    title: "Cargo Pickup",
    description: "Secure collection at source",
    icon: Truck,
    content: {
      heading: "On-Time Pickup & Secure Loading",
      body: "Our fleet arrives at your facility at the scheduled time. Cargo is handled with specialized equipment and loaded under strict safety protocols. Our drivers are trained in hazardous material handling and chemical transport compliance.",
    },
  },
  {
    title: "In Transit",
    description: "Real-time tracking",
    icon: Radio,
    content: {
      heading: "Full Visibility, Every Mile",
      body: "Your shipment is monitored in real-time throughout the journey. Our fleet uses GPS tracking and our team maintains constant communication with drivers. You get proactive updates at every checkpoint, so you are never left guessing.",
    },
  },
  {
    title: "Safe Delivery",
    description: "On-time, every time",
    icon: PackageCheck,
    content: {
      heading: "Confirmed Safe Delivery",
      body: "Cargo is delivered to your destination on schedule with full handover documentation. Our delivery confirmation process ensures accountability at every step. We follow up post-delivery to ensure complete satisfaction with our service.",
    },
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-24 bg-[#1e3a5f] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-400 mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            How Our <span className="text-orange-400">Freight Process</span> Works
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            From quote to confirmed delivery — a transparent, safety-first
            road transport workflow you can rely on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Stepper
            value={activeStep}
            onValueChange={setActiveStep}
            className="space-y-10"
          >
            <StepperNav className="overflow-x-auto pb-2">
              {steps.map((step, index) => (
                <StepperItem
                  key={index}
                  step={index + 1}
                  className="relative min-w-0"
                >
                  <StepperTrigger className="flex flex-col items-center gap-2 px-2 py-1 group">
                    <StepperIndicator className="size-10">
                      {index + 1}
                    </StepperIndicator>
                    <div className="hidden md:flex flex-col items-center gap-0.5">
                      <StepperTitle>{step.title}</StepperTitle>
                      <StepperDescription>{step.description}</StepperDescription>
                    </div>
                  </StepperTrigger>
                  {steps.length > index + 1 && (
                    <StepperSeparator className="mx-1 md:mx-3" />
                  )}
                </StepperItem>
              ))}
            </StepperNav>

            <div className="md:hidden text-center">
              <p className="text-orange-400 font-bold text-lg">
                {steps[activeStep - 1].title}
              </p>
              <p className="text-white/60 text-sm">
                {steps[activeStep - 1].description}
              </p>
            </div>

            <StepperPanel>
              {steps.map((step, index) => (
                <StepperContent
                  key={index}
                  value={index + 1}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-orange-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-2">
                        Step {index + 1}
                      </p>
                      <h3 className="text-2xl font-black text-white mb-4">
                        {step.content.heading}
                      </h3>
                      <p className="text-white/65 text-base leading-relaxed max-w-2xl">
                        {step.content.body}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    {activeStep > 1 && (
                      <button
                        onClick={() => setActiveStep(activeStep - 1)}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm font-medium transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </button>
                    )}
                    {activeStep < steps.length && (
                      <button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-400 text-sm font-medium transition-colors"
                      >
                        Next Step
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </StepperContent>
              ))}
            </StepperPanel>
          </Stepper>
        </motion.div>
      </div>
    </section>
  );
}
