function Contact() {
  return (
    <>
      <div className="">
        <section className="bg-gray-100 py-12 px-6 ">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our products? We’re here to help!
            </p>
            <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-white shadow-md rounded-lg p-6 w-64">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">support@myshop.com</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 w-64">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 w-64">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="mt-8 text-gray-700">
              <h3 className="font-semibold mb-1">Working Hours</h3>
              <p>Monday – Saturday | 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
