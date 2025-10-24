import React from "react";
function SocialLinkCard({
  socialLink,
}: {
  socialLink: {
    id: number;
    href: string;
    icon: React.JSX.Element;
    text: string;
  };
}) {
  return (
    <div>
      <a href={socialLink.href} target="_blank">
        {socialLink.icon}
      </a>
    </div>
  );
}

export default SocialLinkCard;
