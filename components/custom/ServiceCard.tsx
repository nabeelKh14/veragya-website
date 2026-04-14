"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { Clock, Star } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "border-border/50 bg-card",
        className
      )}
    >
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground gap-1">
            <Star className="h-3 w-3 fill-current" />
            Popular
          </Badge>
        </div>
      )}

      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
            {service.category}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold text-heading line-clamp-1">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-label line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        {/* Features List */}
        <ul className="space-y-1.5">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Delivery Time */}
        <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{service.deliveryTime}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-4 border-t">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-bold text-heading">{service.price}</p>
            {service.priceNote && (
              <p className="text-xs text-muted-foreground">{service.priceNote}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm" variant="secondary" className="gap-2">
              <Link href={`/services/${service.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function ServiceCardSkeleton({ className }: { className?: string }) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="aspect-[4/3] animate-pulse bg-muted" />
      <CardHeader className="pb-3">
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-muted" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
          <div className="h-3 w-4/6 animate-pulse rounded bg-muted" />
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <div className="flex w-full items-end justify-between">
          <div className="h-8 w-20 animate-pulse rounded bg-muted" />
          <div className="flex gap-2">
            <div className="h-9 w-24 animate-pulse rounded bg-muted" />
            <div className="h-9 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
