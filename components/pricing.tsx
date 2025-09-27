// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardHeader } from "@/components/ui/card"

// export default function PricingPage() {
//   const plans = [
//     {
//       name: "Hobby",
//       price: 99,
//       featured: false,
//       features: [
//         "Access to basic analytics reports",
//         "Up to 10,000 data points per month",
//         "Email support",
//         "Community forum access",
//         "Cancel anytime",
//       ],
//     },
//     {
//       name: "Promise",
//       price: 299,
//       featured: true,
//       features: [
//         "Access to basic analytics reports",
//         "Up to 10,000 data points per month",
//         "Email support",
//         "Community forum access",
//         "Cancel anytime",
//         "Access to basic analytics reports",
//         "Up to 10,000 data points per month",
//         "Email support",
//         "Community forum access",
//         "Cancel anytime",
//       ],
//     },
//     {
//       name: "Pro",
//       price: 199,
//       featured: false,
//       features: [
//         "Access to basic analytics reports",
//         "Up to 10,000 data points per month",
//         "Email support",
//         "Community forum access",
//         "Cancel anytime",
//       ],
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-[#0c0c0] py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-100 text-gray-900 mb-4">
//             <span className="text-orange-500">Simple</span> Pricing for Everyone
//           </h1>
//           <p className="text-gray-950 dark:text-gray-100 text-lg max-w-2xl mx-auto">
//             Here, we are going to make the middle one much more attractive than the rest of the pricing tiers so you buy
//             what we want you to buy
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative ${plan.featured ? "transform md:scale-105 z-10" : "transform md:scale-95"}`}
//             >
//               <Card
//                 className={`h-full ${plan.featured
//                   ? "border-6 border-orange-400 shadow-2xl bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-900"
//                   : "border-3 border-neutral-600 shadow-lg bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-900"} rounded-4xl transition-transform duration-300"
//                   }`}
//               >
//                 <CardHeader className="text-center pb-4">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{plan.name}</h3>
//                   <div className="mb-6">
//                     <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">${plan.price}</span>
//                     <span className="text-gray-600 dark:text-gray-100 ml-1">/month</span>
//                   </div>
//                   <Button
//                     className="w-full bg-gray-800 dark:bg-neutral-700  hover:bg-gray-900 text-white py-3 text-base font-medium"
//                     size="lg"
//                   >
//                     Get Started
//                   </Button>
//                 </CardHeader>

//                 <CardContent className="pt-0">
//                   <ul className="space-y-4">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start gap-3">
//                         <div className="flex-shrink-0 mt-0.5">
//                           <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
//                             <Check className="w-3 h-3 text-black dark:text-white stroke-[3]" />
//                           </div>
//                         </div>
//                         <span className="text-gray-600 dark:text-neutral-300 text-sm leading-relaxed">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div >
//   )
// }
