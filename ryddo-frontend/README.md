# E-Commerce Platform

A modern e-commerce platform built with Next.js, featuring a product catalog, shopping cart, checkout process, and user account management.

## Project Structure
```
├── app/                       # Next.js App Router
│   ├── api/                   # API routes
│   ├── (auth)/                # Authentication pages (grouped route)
│   ├── products/              # Product-related pages
│   │   ├── [slug]/            # Dynamic product page
│   │   └── category/[slug]/   # Category pages
│   ├── cart/                  # Cart page
│   ├── checkout/              # Checkout flow
│   ├── account/               # User account pages
│   ├── page.tsx               # Homepage
│   └── layout.tsx             # Root layout
├── components/                # Reusable components
│   ├── ui/                    # Generic UI components
│   ├── product/               # Product-specific components
│   ├── cart/                  # Cart-related components
│   ├── checkout/              # Checkout components
│   └── layout/                # Layout components (header, footer)
├── lib/                       # Utility functions and shared logic
│   ├── api/                   # API client functions
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   └── validations/           # Form validations
├── models/                    # Data models and types
├── providers/                 # Context providers
├── store/                     # State management (if using Redux/Zustand)
├── styles/                    # Global styles and themes
├── public/                    # Static assets
└── config/                    # Configuration files
```
