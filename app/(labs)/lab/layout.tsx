export default function LabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white pt-20 px-8">
            {children}
        </section>
    );
}
  