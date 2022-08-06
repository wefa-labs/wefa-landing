import React from "react";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

interface StaticI18nLinkProps {
  locale?: string;
  href: string;
}

const StaticI18nLink: React.FC<StaticI18nLinkProps> = (props) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const locale = props.locale || i18n.language || "";

  if (!locale) {
    const href = props.href || router.asPath;
    return <Link {...props} href={href} passHref></Link>;
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname.replace("[locale]", locale);
    return <Link {...props} href={href} locale={undefined} passHref></Link>;
  }
};

export default StaticI18nLink;
