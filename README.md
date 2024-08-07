# Next.js boilerplate with CVA, ESLint, Prettier, and Tailwind CSS

This project is a Next.js application configured with Class Variance Authority (CVA), ESLint, Prettier, and Tailwind CSS.

## Installation

To get started, clone the repository and install the dependencies:

    git clone https://github.com/your-username/repo-name.git
    cd repo-name
    pnpm i

## Scripts

- `pnpm run dev` - Runs the development server.
- `pnpm run build` - Builds the application for production.
- `pnpm run start` - Runs the production build.
- `pnpm run lint` - Lints the code using ESLint.

## Configuration

### ESLint

ESLint is configured to ensure code quality and consistency. You can find the configuration in the `.eslintrc.json` file.

### Prettier

Prettier is set up to format code according to defined rules. Configuration is located in the `prettier.config.js` file.

### Tailwind CSS

Tailwind CSS is integrated for utility-first CSS styling. Configuration can be found in the `tailwind.config.js` file.

### CVA (Class Variance Authority)

CVA is used for managing CSS class names efficiently. Configuration and usage examples can be found in the project's components.

## Usage

Start the development server:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Directory Structure

- `actions/` - Contains action functions.
- `app/` - Contains the main application files.
- `components/` - Contains the React components.
- `lib/` - Contains utility libraries and helper functions.
- `hooks/` - Contains custom React hooks.
- `public/` - Contains public assets like images and fonts.
