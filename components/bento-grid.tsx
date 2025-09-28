"use client"

import type React from "react"

import { useMemo } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { cn } from "@/lib/utils"
import { TbLayoutGrid } from 'react-icons/tb';
import { Button } from "./ui/button"
import InsightPicker from "./ui/instant-picker"
import EventCard from "./ui/event-card"
type TaskRow = {
  task: string
  assignees: string[]
  status: "Progress" | "Done" | "Paused" | "Not started"
  priority: "High" | "Medium" | "Low"
}

function SectionIntro() {
  return (
    <header className="pt-10 ml-8 sm:pt-16 lg:pt-20">
      <div className="mb-4">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <TbLayoutGrid className="size-4" />
          Adaptive
        </Button>
      </div>
      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Stay agile with adaptive workflows
      </h1>
      <p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
        AI streamlines your processes to adjust as priorities shift.
      </p>
    </header>
  )
}

function FeatureColumn({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-6 p-6 sm:p-8", className)}>
      <div>
        <p className="text-sm text-neutral-800 dark:text-neutral-300 ">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-neutral-800 dark:text-neutral-300 leading-relaxed">{children}</p>
      </div>
    </section>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-6 rounded-xl border border-border bg-neutral-50 dark:bg-neutral-950 text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  )
}

/* --- Demo Card 1: Tasks Table --- */
function TasksCard() {
  const rows: TaskRow[] = useMemo(
    () => [
      { task: "Main Flow Design", assignees: ["AB", "RA"], status: "Progress", priority: "High" },
      { task: "Prototype", assignees: ["AB"], status: "Progress", priority: "Medium" },
      { task: "User Onboarding", assignees: ["AB", "RA"], status: "Progress", priority: "Medium" },
      { task: "User Flow", assignees: ["AB"], status: "Done", priority: "Low" },
      { task: "Brand Guideline", assignees: ["AB"], status: "Paused", priority: "Low" },
      { task: "Defining MVP", assignees: [], status: "Not started", priority: "High" },
    ],
    [],
  )

  return (
    <Card>
      <div className="overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-secondary/60 text-xs">
            <tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left">
              <th className="w-[40%]">Task</th>
              <th className="w-[20%]">Assigned</th>
              <th className="w-[20%]">Status</th>
              <th className="w-[20%]">Priority</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r, i) => (
              <tr key={r.task} className={cn("border-t border-border/70", i % 2 === 1 && "bg-secondary/30")}>
                <td className="truncate px-3 py-2">{r.task}</td>
                <td className="px-3 py-2">
                  <div className="flex -space-x-2">
                    {r.assignees.length === 0 ? (
                      <span className="text-muted-foreground">Unassigned</span>
                    ) : (
                      r.assignees.map((a) => (
                        <span
                          key={a}
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-accent text-[10px] font-medium"
                          aria-label={`Assignee ${a}`}
                          title={a}
                        >
                          {a}
                        </span>
                      ))
                    )}
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs",
                      r.status === "Done"
                        ? "bg-[color:var(--color-chart-2)]/15 text-foreground"
                        : r.status === "Paused"
                          ? "bg-[color:var(--color-chart-4)]/15 text-foreground"
                          : r.status === "Progress"
                            ? "bg-[color:var(--color-chart-1)]/15 text-foreground"
                            : "bg-muted text-foreground",
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    {r.status}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="text-foreground/80">{r.priority}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

/* --- Demo Card 2: Meeting Reminder --- */
function MeetingCard() {
  return (
    <div className="mt-6">
      <InsightPicker />
    </div>
    // <Card>
    //   <div className="p-4 sm:p-5">
    //     <div className="flex items-center gap-3 text-sm text-muted-foreground">
    //       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent">
    //         <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    //           <path
    //             d="M7 2v3m10-3v3M3 9h18M5 7h14a2 2 0 012 2v9a3 3 0 01-3 3H6a3 3 0 01-3-3V9a2 2 0 012-2z"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </span>
    //       <span>Summarize Last Meeting</span>
    //     </div>

    //     <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
    //       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent">
    //         <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    //           <path
    //             d="M12 6v6l4 2"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </span>
    //       <span>Set Reminders for Up-coming Meetings</span>
    //     </div>

    //     <div className="mt-5 rounded-lg border border-border">
    //       <div className="px-4 py-3 text-sm font-medium">11 September 2023</div>
    //       <div
    //         className="border-t border-border px-4 py-5"
    //         style={{ backgroundColor: "color-mix(in oklab, var(--color-chart-5) 12%, var(--color-card) 88%)" }}
    //       >
    //         <div className="flex items-center justify-between">
    //           <div>
    //             <div className="font-medium">Discovery Meeting</div>
    //             <div className="mt-1 text-sm text-muted-foreground">10:00 – 11:00</div>
    //           </div>
    //           <div
    //             className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent"
    //             aria-hidden="true"
    //           >
    //             <span className="sr-only">Participant</span>
    //             <svg viewBox="0 0 24 24" width="18" height="18">
    //               <circle cx="12" cy="8" r="4" fill="currentColor" />
    //               <path d="M4 22c0-4 4-7 8-7s8 3 8 7" fill="currentColor" />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Card>
  )
}

/* --- Demo Card 3: Analytics Bar Chart --- */
const chartData = [
  { name: "Mon", a: 30, b: 18, c: 8 },
  { name: "Tue", a: 24, b: 21, c: 9 },
  { name: "Wed", a: 26, b: 25, c: 10 },
  { name: "Thu", a: 28, b: 23, c: 12 },
  { name: "Fri", a: 22, b: 20, c: 9 },
  { name: "Sat", a: 18, b: 16, c: 7 },
  { name: "Sun", a: 20, b: 15, c: 6 },
]

function AnalyticsCard() {
  return (
    <div className="mt-6">

      <EventCard
        firstEvent="Solana Meet: BLR"
        firstEventTime="8:30–11PM"
        secondEvent="UX Testing Slot"
        secondEventTime="5:30–8:30PM"
        cardTitle="Event Timeline"
        cardDescription="Visualize and navigate your daily flow with beautifully animated, color-coded time blocks."
      />
    </div>
    // <Card>
    //   <div className="p-4 sm:p-5">
    //     <div className="flex items-baseline justify-between">
    //       <div className="text-3xl font-semibold tracking-tight">12,3K</div>
    //       <div className="text-xs text-muted-foreground">Last 7 days</div>
    //     </div>

    //     <div className="mt-4 h-40 w-full">
    //       <ResponsiveContainer width="100%" height="100%">
    //         <BarChart data={chartData} margin={{ top: 0, right: 8, left: 8, bottom: 0 }}>
    //           <CartesianGrid stroke="hsl(var(--color-border))" vertical={false} />
    //           <XAxis
    //             dataKey="name"
    //             tickLine={false}
    //             axisLine={false}
    //             tick={{ fontSize: 12, fill: "hsl(var(--color-muted-foreground))" }}
    //           />
    //           <YAxis hide />
    //           <Tooltip
    //             cursor={{ fill: "hsl(var(--color-secondary))" }}
    //             contentStyle={{
    //               background: "hsl(var(--color-card))",
    //               border: "1px solid hsl(var(--color-border))",
    //               borderRadius: "10px",
    //             }}
    //             labelStyle={{ color: "hsl(var(--color-muted-foreground))" }}
    //           />
    //           <Bar dataKey="a" stackId="s" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
    //           <Bar dataKey="b" stackId="s" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
    //           <Bar dataKey="c" stackId="s" fill="var(--color-chart-3)" radius={[6, 6, 0, 0]} />
    //         </BarChart>
    //       </ResponsiveContainer>
    //     </div>

    //     <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
    //       <div className="flex items-center gap-2">
    //         <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-chart-2)" }} />
    //         In Progress
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-chart-1)" }} />
    //         Review
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-chart-3)" }} />
    //         Completed
    //       </div>
    //     </div>
    //   </div>
    // </Card>
  )
}

export default function BentoSection() {
  return (
    <div className="pb-16">
      <SectionIntro />

      {/* Features grid */}
      <div className="mt-10 grid grid-cols-1 divide-y divide-border overflow-hidden  border border-border sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        <FeatureColumn eyebrow="Unified Scheduling" title="Unified Scheduling">
          Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.
          <TasksCard />
        </FeatureColumn>

        <FeatureColumn
          eyebrow="Insightful Performance"
          title="Insightful Performance"
          className="border-t border-border md:border-t-0"
        >
          Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.
          <MeetingCard />
        </FeatureColumn>

        <FeatureColumn
          eyebrow="Effortless Tool Integrations"
          title="Effortless Tool Integrations"
          className="border-t border-border md:border-t-0"
        >
          Link your favorite apps and services to streamline work without switching between platforms.
          <AnalyticsCard />
        </FeatureColumn>
      </div>
    </div>
  )
}
