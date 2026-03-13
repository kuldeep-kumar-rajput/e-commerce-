function About() {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="download.png"
            alt="About MyShop"
            className="w-100 h-40 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full  md:w-1/2 text-center md:text-left bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            About MyShop
          </h2>

          <p className="text-gray-700 mb-4 font-medium text-sm sm:text-base">
            Welcome to MyShop – your one-stop destination for the latest iPhones
            and premium cosmetics. We believe in providing high-quality products
            that enhance your lifestyle and confidence.
          </p>

          <p className="text-gray-700 mb-4 font-medium text-sm sm:text-base">
            Our mission is to deliver an easy, secure, and enjoyable online
            shopping experience. From electronics to beauty essentials, we
            carefully select every product to meet your needs.
          </p>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            Shop with us and experience convenience, reliability, and top-notch
            customer service. We’re committed to making your online shopping
            simple and delightful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
