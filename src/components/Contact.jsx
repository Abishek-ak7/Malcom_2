const ContactForm = () => {
  return (
    <>
      <form className='flex flex-col items-center justify-center  w-full bg-gray-950 rounded-xl'>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring w-3/4 px-3 m-7 py-3 text-sm text-gray-600 placeholder-gray-400   bg-black border-2  border-gray-500 rounded shadow outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring w-3/4 px-3 m-7 py-3 text-sm text-gray-600 placeholder-gray-400 bg-black border-2 border-gray-500 rounded shadow outline-none"
            required
          />
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring  w-3/4  px-3 py-3 m-7 text-sm text-gray-600 placeholder-gray-400 bg-black border-2   border-gray-500 rounded shadow outline-none"
            required
          />
          <button
            className=" hover:shadow-lg  focus:outline-none px-6 py-3 mb-4 text-sm font-bold hover:bg-lime-400 border-purple-800 text-white uppercase border-2 rounded-2xl shadow outline-none"
            type="submit">
            Send a message
          </button>
      </form>
    </>
  );
};

export default ContactForm;