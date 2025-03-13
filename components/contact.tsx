"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasBeenInView = useInView(sectionRef, { threshold: 0.25 }); // Trigger when 25% of the section is visible

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-neutral-900" id="contact">
      <motion.div
        initial="hidden"
        animate={hasBeenInView ? "show" : "hide"}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Interested in commissioning a unique piece or have questions about
              our work? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@atart.bg</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+359 888 123 456</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Sofia, Bulgaria</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <FaFacebookF className="scale-150" />
                </a>
                <h3>/ atart</h3>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <RiInstagramFill className="scale-150" />
                </a>
                <h3>/ at.art</h3>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-neutral-800 border-none"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-neutral-800 border-none"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-neutral-800 border-none"
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
