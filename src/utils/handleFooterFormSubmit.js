import emailjs from "@emailjs/browser";

export async function handleFooterFormSubmit({ formData}) {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    time: new Date().toLocaleString(), 
  };

  try {
    const res = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY);
    return res;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
}
