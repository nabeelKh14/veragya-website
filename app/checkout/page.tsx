"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useCart } from "@/lib/CartContext";
import { Check, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDescription: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectDescription?: string;
  agreeToTerms?: string;
}

export default function CheckoutPage() {
  const { items, updateQuantity, removeFromCart, subtotal, gst, total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription =
        "Please provide more details about your project (at least 20 characters)";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOrderTotal(total);
    setShowSuccessModal(true);
    clearCart();
  };

  const handleQuantityChange = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        removeFromCart(id);
      } else {
        updateQuantity(id, newQuantity);
      }
    }
  };

  if (items.length === 0 && !showSuccessModal) {
    return (
      <main id="main-content" className="min-h-screen py-16">
        <div className="container mx-auto max-w-4xl px-5">
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
              <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Add some services to your cart to proceed with checkout.
              </p>
              <Button asChild>
                <a href="/services">Browse Services</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <>
      <main id="main-content" className="min-h-screen py-16">
        <div className="container mx-auto max-w-6xl px-5">
          <header className="mb-10">
            <h1 className="text-3xl font-bold md:text-4xl">Checkout</h1>
            <p className="text-muted-foreground mt-2">
              Review your order and complete your purchase
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Cart Items & Form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Cart Items */}
              <section aria-labelledby="cart-heading">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Cart Items ({items.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-4 py-4 border-b last:border-0"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {formatPrice(item.price)} per unit
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 border rounded-md">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, -1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="font-medium w-24 text-right">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.title} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>

              {/* Checkout Form */}
              <section aria-labelledby="details-heading">
                <Card>
                  <CardHeader>
                    <CardTitle id="details-heading">Your Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                          Personal Information
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleInputChange}
                              aria-invalid={!!errors.name}
                              aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                              <p id="name-error" className="text-sm text-destructive">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">
                              Email Address <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              aria-invalid={!!errors.email}
                              aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && (
                              <p id="email-error" className="text-sm text-destructive">
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone">
                              Phone Number <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={handleInputChange}
                              aria-invalid={!!errors.phone}
                              aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {errors.phone && (
                              <p id="phone-error" className="text-sm text-destructive">
                                {errors.phone}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name (Optional)</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                          Project Details
                        </h3>

                        <div className="space-y-2">
                          <Label htmlFor="projectDescription">
                            Project Description <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="projectDescription"
                            name="projectDescription"
                            placeholder="Describe your project requirements, garment types, quantities, and any specific needs..."
                            rows={4}
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            aria-invalid={!!errors.projectDescription}
                            aria-describedby={
                              errors.projectDescription ? "project-error" : undefined
                            }
                          />
                          {errors.projectDescription && (
                            <p id="project-error" className="text-sm text-destructive">
                              {errors.projectDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Terms Agreement */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) =>
                              setFormData((prev) => ({
                                ...prev,
                                agreeToTerms: checked === true,
                              }))
                            }
                            aria-invalid={!!errors.agreeToTerms}
                            aria-describedby={errors.agreeToTerms ? "terms-error" : undefined}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="agreeToTerms"
                              className="text-sm font-normal cursor-pointer"
                            >
                              I agree to the{" "}
                              <a
                                href="/terms"
                                className="text-primary underline-offset-4 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Terms and Conditions
                              </a>{" "}
                              and{" "}
                              <a
                                href="/privacy"
                                className="text-primary underline-offset-4 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Privacy Policy
                              </a>{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                          </div>
                        </div>
                        {errors.agreeToTerms && (
                          <p id="terms-error" className="text-sm text-destructive">
                            {errors.agreeToTerms}
                          </p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Order Summary */}
            <aside className="lg:col-span-2" aria-labelledby="summary-heading">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle id="summary-heading">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.title} × {item.quantity}
                        </span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span>{formatPrice(gst)}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Final pricing may vary based on project complexity.
                      We'll confirm the exact quote within 24 hours of receiving your order.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <Card className="mx-4 max-w-md w-full">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h2 id="success-title" className="text-2xl font-semibold mb-2">
                  Order Placed Successfully!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your order. We've received your request and will get back to you
                  within 24 hours with a detailed quote and project timeline.
                </p>
                <div className="w-full space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Order Total</span>
                    <span className="font-medium">{formatPrice(orderTotal)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                </div>
                <Button className="mt-6 w-full" onClick={() => setShowSuccessModal(false)}>
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
