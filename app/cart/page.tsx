import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import CartPageContent from "./CartPageContent";

export const metadata: Metadata = generatePageMetadata("cart");

export default function CartPage() {
  return <CartPageContent />;
}
