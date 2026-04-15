export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/234802343780"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
    >
      💬 <span className="hidden sm:inline">Chat With Us</span>
    </a>
  );
}