import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() =>
        alert("Grazie! Ti risponderò il prima possibile.")
      )
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* testo & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* titolo */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Parliamo <span className="text-accent">del tuo progetto.</span>
          </motion.h2>

          {/* info contatto dirette */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 text-sm md:text-base text-white/80"
          >
            <p className="mb-2">
              Puoi contattarmi direttamente via email o telefono, oppure usare il modulo qui sotto.
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:germano.papetti@gmail.com"
                className="text-accent hover:underline"
              >
                germano.papetti@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Telefono:</span>{" "}
              <a
                href="tel:+393339742488"
                className="text-accent hover:underline"
              >
                +39 333 97 42 488
              </a>
            </p>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            data-netlify="true"
            name="contact"
          >
            {/* (opzionale per Netlify: nome del form) */}
            <input type="hidden" name="form-name" value="contact" />

            {/* gruppo nome + email */}
            <div className="flex gap-x-6 w-full flex-col md:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Il tuo nome"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="La tua email"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Oggetto"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <textarea
              name="message"
              placeholder="Il tuo messaggio..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Invia messaggio
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
