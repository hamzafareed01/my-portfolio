export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        <li className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Portfolio Website</h2>
          <p>Built with Next.js, Tailwind CSS, and deployed on Vercel.</p>
        </li>
        <li className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Cybersecurity Lab</h2>
          <p>Hands-on project to practice networking and security tools.</p>
        </li>
      </ul>
    </main>
  );
}
