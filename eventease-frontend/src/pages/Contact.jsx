function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-4">
        Have questions or need support? Reach out to our team!
      </p>
      <p className="text-gray-600 mb-4">
        Email: <a href="mailto:support@eventease.com" className="text-blue-600 hover:underline">support@eventease.com</a>
      </p>
      <p className="text-gray-600">
        Phone: +65 1234 5678
      </p>
    </div>
  );
}

export default Contact;