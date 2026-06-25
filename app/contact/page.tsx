import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      <h1 className="text-h1 text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-sm border border-card-border">
          <Mail className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-h4 mb-2">Email</h2>
          <p className="text-body text-muted-foreground">info@veragya.com (Placeholder)</p>
        </div>

        {/* Phone Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-sm border border-card-border">
          <Phone className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-h4 mb-2">Phone</h2>
          <p className="text-body text-muted-foreground">+91 95992 23568</p>
        </div>

        {/* Address Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-card rounded-xl shadow-sm border border-card-border">
          <MapPin className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-h4 mb-2">Address</h2>
          <p className="text-body text-muted-foreground">123 Business Rd, New Delhi, India (Placeholder)</p>
        </div>
      </div>

      {/* Optional: Add a contact form section here later */}
      <div className="mt-16 text-center text-muted-foreground">
        <p>We'd love to hear from you! Please reach out with any inquiries.</p>
      </div>
    </div>
  );
}