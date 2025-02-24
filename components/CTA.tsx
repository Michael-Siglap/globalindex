const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Informed with Economic Pulse</h2>
        <p className="text-xl text-white mb-8">Get the latest economic insights delivered straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-200 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default CTA

