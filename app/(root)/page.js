import { cookies } from "next/headers";

import { FeatureCard } from "@/components/feature-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { updateUsernameAction } from "@/actions/user";

export default function RootPage() {
  const username = cookies().get("username")?.value;

  return (
    <div className="min-h-full w-full">
      <header className="border-b border-gray-200 bg-gray-50 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="container flex max-w-screen-lg items-center justify-between px-3">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Next boilerplate
          </h1>
          {username ? (
            <div>Hello, {username} 🙃</div>
          ) : (
            <form
              action={updateUsernameAction}
              spellCheck={false}
              autoCorrect="off"
              autoComplete="off"
            >
              <input
                type="text"
                name="username"
                placeholder="Your name"
                className="rounded px-3 py-1 outline-none dark:placeholder:text-gray-200"
              />
            </form>
          )}
        </div>
      </header>
      <main className="container max-w-screen-lg px-3">
        <div className="flex w-full max-w-[480px] flex-col justify-start gap-5 py-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Welcome to Next boilerplate
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This project is configured with CVA, ESLint, Prettier, and Tailwind
            CSS.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl font-bold">Features</h1>
          <div className="flex flex-wrap justify-start gap-3">
            <FeatureCard
              title="ESLint"
              description="Ensure code quality and consistency with ESLint."
              link="https://eslint.org/"
            />
            <FeatureCard
              title="Prettier"
              description="Format your code automatically with Prettier."
              link="https://prettier.io/"
            />
            <FeatureCard
              title="Tailwind CSS"
              description="Style your application with utility-first CSS."
              link="https://tailwindcss.com/"
            />
            <FeatureCard
              title="Class Variance Authority"
              description="Manage CSS class names efficiently with CVA."
              link="https://beta.cva.style/"
            />
            <FeatureCard
              title="Next.js"
              description="A React framework for building server-side rendered and statically generated web applications."
              link="https://nextjs.org/"
            />
            <FeatureCard
              title="React"
              description="A JavaScript library for building user interfaces, maintained by Facebook."
              link="https://reactjs.org/"
            />
          </div>
        </div>
      </main>
      <footer className="container flex max-w-screen-lg justify-end px-3 py-8">
        <ThemeToggle size="small" />
      </footer>
    </div>
  );
}
