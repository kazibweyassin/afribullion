"use client"

import AcmeLogo from "@/assets/brands/acme-corp-logo.svg"
import EchoValleyLogo from "@/assets/brands/echo-valley-logo.svg"
import QuantumLogo from "@/assets/brands/quantum-logo.svg"
import PulseLogo from "@/assets/brands/pulse-logo.svg"
import OutsideLogo from "@/assets/brands/outside-logo.svg"
import CelestialLogo from "@/assets/brands/celestial-logo.svg"
import JulienGournayLogo from "@/assets/brands/julien-gournay-logo.svg"
import TwiceLogo from "@/assets/brands/twice-logo.svg"
import Image from "next/image";
import {SectionWrapperBorder, SectionWrapperContent} from "@/components/section-wrapper";
import {motion} from "motion/react"

export function LogoTickerSection() {
  const COMPANIES = [
    {name: "Acme Corp", logo: AcmeLogo},
    {name: "Twice", logo: TwiceLogo},
    {name: "Julien Gournay", logo: JulienGournayLogo},
    {name: "Echo Valley", logo: EchoValleyLogo},
    {name: "Quantum", logo: QuantumLogo},
    {name: "Pulse", logo: PulseLogo},
    {name: "Outside", logo: OutsideLogo},
    {name: "Celestial", logo: CelestialLogo}
  ] satisfies Array<{
    name: string,
    logo: SVGElement
  }>

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder>
          <SectionWrapperContent className="!pt-0">
            <h2 className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">Trusted by leading gold industry partners</h2>
            <div
              className="flex mt-14 overflow-x-clip -mx-4 lg:-mx-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                initial={{x: 0}}
                animate={{x: "-50%"}}
                transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                className="flex flex-none gap-18 md:gap-36 px-9 md:px-18"
              >
                {[...COMPANIES, ...COMPANIES].map((company, index) => (
                  <div key={index}>
                    <Image src={company.logo} alt={company.name} className="w-auto h-8"/>
                  </div>
                ))}
              </motion.div>
            </div>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  )
}
