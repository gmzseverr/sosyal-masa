import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white hover:bg-destructive/90",
        outline:
          "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",

        // ✅ Tailwind renkli badge’ler
        gray: "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
        blue: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
        green:
          "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
        purple:
          "border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200",
        yellow:
          "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        red: "border-transparent bg-red-100 text-red-800 hover:bg-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
