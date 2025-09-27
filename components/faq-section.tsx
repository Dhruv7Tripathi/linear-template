import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { faqData } from "@/contants"
export default function FAQ() {
  return (
    <div className="min-h-screen border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black">
      {/* FAQ Button */}
      <div className=" ml-8 mt-6">

        <div className="mb-8">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <HelpCircle className="size-4" />
            FAQ
          </Button>
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-balance">
            Everything You Need to Know
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl">
            Looking for quick answers? Check out our{" "}
            <span className="text-foreground underline cursor-pointer ">FAQ section</span>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* FAQ Accordion */}
        <div className="space-y-4 mb-4 ">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 mb-4 last:mb-0"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
