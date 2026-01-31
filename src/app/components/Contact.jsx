export default function Contact() {
  return (
    <section className="py-20 px-10 bg-green-600 text-white font-montserrat">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Get In Touch</h2>

        <input
          placeholder="Your Email"
          className="mt-6 p-3 rounded w-full text-black"
        />

        <textarea
          placeholder="Message"
          className="mt-4 p-3 rounded w-full text-black"
        ></textarea>

        <button className="mt-6 bg-black px-6 py-3 rounded-lg">
          Send Message
        </button>
      </div>
    </section>
  );
}
