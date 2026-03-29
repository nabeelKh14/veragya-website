"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/CartContext";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CartPageContent() {
  const { items, removeFromCart, updateQuantity, subtotal, gst, total } = useCart();

  if (items.length === 0) {
    return (
      <main id="main-content" className="min-h-[70vh]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="rounded-full bg-muted p-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-semibold md:text-3xl">Your cart is empty</h1>
            <p className="text-muted-foreground max-w-md">
              Looks like you haven&apos;t added anything to your cart yet. Browse our services and
              find something you&apos;ll love.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">Shopping Cart</h1>
          <p className="mt-2 text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <Card>
              <CardContent className="divide-y p-0">
                {items.map((item) => (
                  <article key={item.id} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
                    <div className="relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted sm:w-24">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h2 className="font-medium sm:text-lg">{item.title}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {formatPrice(item.price)} each
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.title}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.title}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                          <Button
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
                    </div>
                  </article>
                ))}
              </CardContent>
            </Card>

            <div className="mt-4">
              <Button variant="ghost" asChild className="text-muted-foreground">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>{formatPrice(gst)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Prices include GST calculation. Final quote confirmed within 24 hours.
                </p>
              </CardFooter>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
