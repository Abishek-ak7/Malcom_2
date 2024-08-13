import { EmailJSResponseStatus } from "@emailjs/browser";
import React,{useState,useRef} from "react";



const ContactForm = () => {
  const form = useRef();
  const [successMessage,setSuccessMessage] = useState(null);
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  });
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('','',form.current,{
      publicKey:'',
    })
    .then(() =>{
      setSuccessMessage('Message sent to the Company Officials.');
      setFormData({
        name:'',
        email:'',
        message:''
      })
    })
    .catch((error)=>{
      console.log('FAILED...',error.text);
    });
  }
  
  
  return (
    <>
      <form ref={form} className='flex flex-col items-center justify-center  w-full bg-gray-950 rounded-xl' onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your name"
            value = {formData.name}
            onChange={(e)=>setFormData({ ...formData,name:e.target.value})}
            name="name"
            id="name"
            className="focus:outline-none focus:ring w-3/4 px-3 m-7 py-3 text-sm text-gray-600 placeholder-gray-400   bg-black border-2  border-gray-500 rounded shadow outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e)=> setFormData({ ...formData,email:e.target.value})}
            name="email"
            id="email"
            className="focus:outline-none focus:ring w-3/4 px-3 m-7 py-3 text-sm text-gray-600 placeholder-gray-400 bg-black border-2 border-gray-500 rounded shadow outline-none"
            required
          />
          <textarea
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({...formData,message:e.target.value})}
            name="message"
            id = "msg"
            className="focus:outline-none focus:ring  w-3/4  px-3 py-3 m-7 text-sm text-gray-600 placeholder-gray-400 bg-black border-2   border-gray-500 rounded shadow outline-none"
            required
          />
          <button
            className=" hover:shadow-lg  focus:outline-none px-6 py-3 mb-4 text-sm font-bold hover:bg-lime-400 border-purple-800 text-white uppercase border-2 rounded-2xl shadow outline-none"
            type="submit"
            value="Send">
            Send a message
          </button>
      </form>
      {successMessage && (
                                <div className="text-green-500 text-center mt-4">{successMessage}</div>
                            )}
    </>
  );
};

export default ContactForm;