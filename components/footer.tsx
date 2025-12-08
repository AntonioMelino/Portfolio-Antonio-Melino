export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio Antonio Melino. Todos los
            derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con ❤️ usando Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
