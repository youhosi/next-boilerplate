import Link from "next/link";

export function FeatureCard({ title, description, link }) {
  return (
    <Link
      href={link}
      className="w-full grow rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-neutral-700 dark:bg-neutral-800 sm:w-column-md lg:w-column-lg"
    >
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Link>
  );
}
