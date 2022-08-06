import { components } from "./components";

const Demo = {
  title: "Home",
  href: "#",
  subitems: [
    {
      title: "Business",
      href: "/demo/business",
    },
    {
      title: "Marketing",
      href: "/demo/marketing",
    },
    {
      title: "Mobile App",
      href: "/demo/mobile-app",
    },
    {
      title: "SaaS",
      href: "/demo/saas",
    },
    {
      title: "Personal Portfolio",
      href: "/demo/personal-portfolio",
    },
    {
      title: "Web App",
      href: "/demo/web-app",
    },
    {
      title: "Furniture Shop",
      href: "/demo/furniture-shop",
    },
    {
      title: "More Demo",
      href: "",
    },
  ],
};

const Blog = {
  title: "Blog",
  href: "#",
  subitems: [
    {
      title: "Classic",
      href: "/blog/classic",
    },
    {
      title: "Modern",
      href: "/blog/modern",
    },
    {
      title: "Grid",
      href: "/blog/grid",
    },
    {
      title: "---",
      href: "#",
    },
    {
      title: "Article",
      href: "/blog/article",
    },
  ],
};

const Company = {
  title: "Company",
  href: "#",
  subitems: [
    {
      title: "About us",
      href: "/company/about",
    },
    {
      title: "Pricing",
      href: "/company/pricing",
    },
    {
      title: "Services",
      href: "/company/services",
    },
    {
      title: "Careers",
      href: "/company/careers",
    },
    {
      title: "Careers Overview",
      href: "/company/careers-overview",
    },
    {
      title: "Hire Us",
      href: "/company/hire-us",
    },
    {
      title: "Join our Team",
      href: "/company/join-our-team",
    },
    {
      title: "Contact us",
      href: "/company/contact",
    },
    {
      title: "Customer Stories",
      href: "/company/customer-stories",
    },
    {
      title: "Customer Story Overview",
      href: "/company/customer-story-overview",
    },
    {
      title: "Invoice",
      href: "/company/invoice",
    },
    {
      title: "Affiliates",
      href: "/company/affiliates",
    },
  ],
};

const Account = {
  title: "Account",
  href: "#",
  subitems: [
    {
      title: "Account Forms",
      href: { query: { modal: "account", form: "signin" } },
    },
    // {
    //   title: "Sign In Modal",
    //   href: { query: { modal: "account", form: "signin" } },
    // },
    // {
    //   title: "Sign Up Modal",
    //   href: { query: { modal: "account", form: "signup" } },
    // },
    // {
    //   title: "Forgot Password Modal",
    //   href: { query: { modal: "account", form: "forgot" } },
    // },
    {
      title: "---",
      href: "#",
    },
    {
      title: "Sign In",
      href: "/account/sign-in",
    },
    {
      title: "Sign Up",
      href: "/account/sign-up",
    },
    {
      title: "Forgot Password",
      href: "/account/forgot-password",
    },
    {
      title: "Reset Password",
      href: "/account/reset-password",
    },
    {
      title: "---",
      href: "#",
    },
    {
      title: "Account Overview",
      href: "/account/account-overview",
    },
  ],
};

const Pages = {
  title: "Pages",
  href: "#",
  subitems: [
    {
      title: "FAQ",
      href: "/pages/faq",
    },
    {
      title: "Terms & Conditions",
      href: "/pages/terms",
    },
    {
      title: "Privacy & Policy",
      href: "/pages/privacy",
    },
    {
      title: "Coming Soon",
      href: "/pages/coming-soon",
    },
    {
      title: "Maintenance",
      href: "/pages/maintenance",
    },
    {
      title: "Status",
      href: "/pages/status",
    },
    {
      title: "Error 404",
      href: "/pages/error-404",
    },
  ],
};

const Portfolio = {
  title: "Portfolio",
  href: "#",
  subitems: [
    {
      title: "Gird Layout",
      href: "/portfolio/grid",
    },
    {
      title: "Masonry Layout",
      href: "/portfolio/masonry",
    },
    {
      title: "---",
      href: "#",
    },
    {
      title: "Product Article",
      href: "/portfolio/product-article",
    },
  ],
};

export const main = [
  // { title: "Home", href: "/" },
  Demo,
  Blog,
  Company,
  Account,
  Pages,
  Portfolio,
  { title: "Components", href: "#", subitems: components },
];

// Add Tag to any navigiation item
export const ItemsTag: {
  title: string;
  badge?: string;
  colorScheme?: string;
}[] = [
  {
    title: "More Demo",
    badge: "Soon",
    colorScheme: "green",
  },
  {
    title: "Account Forms",
    badge: "Modal",
    colorScheme: "pink",
  },
  // {
  //   title: "Account Overview",
  //   badge: "Hot",
  //   colorScheme: "pink",
  // },
];
