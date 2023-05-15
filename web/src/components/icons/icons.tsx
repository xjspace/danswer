"use client";

import {
  Globe,
  SlackLogo,
  GithubLogo,
  GoogleDriveLogo,
} from "@phosphor-icons/react";

interface IconProps {
  size?: string;
  className?: string;
}

const defaultTailwindCSS = "text-blue-400 my-auto flex flex-shrink-0";

export const GlobeIcon = ({
  size = "16",
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Globe size={size} className={className} />;
};

export const SlackIcon = ({
  size = "16",
  className = defaultTailwindCSS,
}: IconProps) => {
  return <SlackLogo size={size} className={className} />;
};

export const GithubIcon = ({
  size = "16",
  className = defaultTailwindCSS,
}: IconProps) => {
  return <GithubLogo size={size} className={className} />;
};

export const GoogleDriveIcon = ({
  size = "16",
  className = defaultTailwindCSS,
}: IconProps) => {
  return <GoogleDriveLogo size={size} className={className} />;
};