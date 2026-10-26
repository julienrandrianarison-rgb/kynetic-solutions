import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { Approach } from "@/components/approach"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Careers } from "@/components/careers"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <Approach />
        <Portfolio />
        <About />
        <Careers />
      </main>
      <ContactFooter />
    </>
  )
}
