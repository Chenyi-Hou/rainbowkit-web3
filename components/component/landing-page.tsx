/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lGoYwAKbwxZ
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="h-dvh bg-cover bg-[url('/landing-banner.jpg')] bg-no-repeat bg-slate-50 w-full flex flex-column items-center justify-center">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold tracking-tighter lg:text-6xl/none">Your Bank. Your Control.</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the future of banking with secure, transparent, and decentralized finance.
              </p>
            </div>
            <div className="mx-auto space-y-2 min-[400px]:flex md:space-y-0 md:gap-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg_white px-8 text-lg font-medium shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="/dashboard"
              >
                Save Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
            <div className="grid gap-4 min-[400px]:grid-cols-2 md:gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Introducing Acme Bank</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Why Choose Acme Bank?</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:py-24 xl:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
            <div className="grid gap-4 min-[400px]:grid-cols-2 md:gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Mobile Banking</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Customer Support</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
            <div className="grid gap-4 min-[600px]:grid-cols-3 md:gap-2">
              <div className="flex flex-col items-center gap-2">
                <PieChartIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">View your portfolio</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CreditCardIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Cards</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your cards</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSignIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Transfers</h3>
                <p className="text-sm text_gray-500 dark:text-gray-400">Send money</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}



function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}


function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}