import LogoImage from "@/assets/images/sphereal-logo.svg?url"
import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

type SpherealLogoProps = ComponentPropsWithoutRef<"div"> & {}

export function SpherealLogo({className, style, ...props}: SpherealLogoProps) {
  return (
    <div
      className={cn("size-10 rounded-full bg-[radial-gradient(circle,#FFD700_60%,#bfa76a_100%)] border-2 border-[#FFC300] flex items-center justify-center", className)}
      style={style}
      {...props}
    >
      <span className="sr-only">Gold Company Logo</span>
    </div>
  )
}
