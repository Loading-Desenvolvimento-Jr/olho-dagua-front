/**
 * Main page for monitoring water temperature
 * This is the landing page of the application
 */
export default function TemperaturePage() {
  return (
    <main className="min-h-screen p-4 flex flex-col gap-6">
      <h1 className="text-display text-blue-dark">Water Temperature</h1>
      <p className="text-paragrafo text-black-custom">
        Check the real-time temperature of the campus fountains.
      </p>
    </main>
  );
}