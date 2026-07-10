import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">

      <Container>

        <div className="flex flex-col items-center gap-8">

          {/* Name */}

          <div className="text-center">

            <h3 className="text-xl font-semibold text-white">
              Mohd Khalid
            </h3>

            <p className="mt-2 text-zinc-500">
              Backend Engineer • AI Applications • Distributed Systems
            </p>

          </div>

          {/* Copyright */}

          <div className="text-center text-sm text-zinc-500">

            <p>
              © {new Date().getFullYear()} Mohd Khalid.
            </p>

            <p className="mt-2">
              Built with React, TypeScript & Tailwind CSS.
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}
