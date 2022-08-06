export const CopyrightText = `© ${new Date().getFullYear()} Mercury Templates. All rights reserved`;

interface IFooterLinks {
  title: string;
  items: {
    title: string;
    href: string;
    tag?: string;
  }[];
}

export const Company: IFooterLinks = {
  title: "Company",
  items: [
    { title: "About us", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact us", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Testimonials", href: "#" },
  ],
};

export const Support: IFooterLinks = {
  title: "Support",
  items: [
    { title: "Help Center", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Legal", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Community Guidelines", href: "#" },
  ],
};

export const Product: IFooterLinks = {
  title: "Product",
  items: [
    { title: "Overview", href: "#" },
    { title: "Features", href: "#", tag: "new" },
    { title: "Tutorials", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Releases", href: "#" },
  ],
};

export const Legal: IFooterLinks = {
  title: "Legal",
  items: [
    { title: "Cookies Policy", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Law Enforcement", href: "#" },
    { title: "Status", href: "#" },
  ],
};

export const Follow: IFooterLinks = {
  title: "Follow Us",
  items: [
    { title: "Facebook", href: "https://Facebook.com/themebiotic" },
    { title: "Twitter", href: "https://Twitter.com/themebiotic" },
    { title: "Dribbble", href: "https://Dribbble.com/themebiotic" },
    { title: "Instagram", href: "https://Instagram.com/themebiotic" },
    { title: "LinkedIn", href: "https://LinkedIn.com/themebiotic" },
  ],
};

export const Social: IFooterLinks = {
  title: "Social Media Links",
  items: [
    { title: "Twitter", href: "https://twitter.com/themebiotic" },
    { title: "Youtube", href: "https://youtube.com/themebiotic" },
    { title: "Instagram", href: "https://instagram.com/themebiotic" },
    { title: "Dribbble", href: "https://dribbble.com/themebiotic" },
    { title: "LinkedIn", href: "https://LinkedIn.com/themebiotic" },
  ],
};
