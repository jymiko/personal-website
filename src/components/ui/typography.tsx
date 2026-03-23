import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva(
  'leading-relaxed antialiased',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight',
        h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
        h6: 'scroll-m-20 text-base font-semibold tracking-tight',
        p: 'text-base', // Default paragraph style
        blockquote: 'mt-6 border-l-2 pl-6 italic',
        code: 'relative rounded bg-muted px-[0.6rem] py-[0.2rem] font-mono text-sm font-semibold',
        lead: 'text-xl text-muted-foreground',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-sm text-muted-foreground',
      },
      // Responsive font sizes for different screen sizes (mobile first)
      // Default is explicitly set for mobile, md and lg are overrides
      responsive: {
        default: 'text-base',
        md: 'md:text-lg',
        lg: 'lg:text-xl',
      }
    },
    defaultVariants: {
      variant: 'p',
      responsive: 'default'
    },
  }
);

export interface TypographyProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLOrSVGElement, TypographyProps>(
  ({ className, variant, responsive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p'; // Default to 'p' tag

    // Determine the appropriate class based on the responsive variant
    let responsiveClass = '';
    if (responsive === 'md') {
      responsiveClass = 'md:text-lg';
    } else if (responsive === 'lg') {
      responsiveClass = 'lg:text-xl';
    } else {
      responsiveClass = 'text-base'; // Default to base size for mobile
    }

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }), responsiveClass)}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
