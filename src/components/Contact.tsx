import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const contacts = [
  {
    label: "E-mail",
    value: "danielvitor.dev@gmail.com",
    icon: HiMail,
    href: "mailto:danielvitor.dev@gmail.com",
    color: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    glow: "hover:shadow-cyan-400/10",
  },
  {
    label: "LinkedIn",
    value: "/in/daniel-vitor-7a8b92247",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/daniel-vitor-7a8b92247/",
    color: "text-blue-400",
    border: "hover:border-blue-400/40",
    glow: "hover:shadow-blue-400/10",
  },
  {
    label: "GitHub",
    value: "github.com/DanielVbrn",
    icon: FaGithub,
    href: "https://github.com/DanielVbrn",
    color: "text-slate-300",
    border: "hover:border-slate-400/40",
    glow: "hover:shadow-slate-400/10",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Vamos Conversar
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Aberto a oportunidades, projetos freelance ou só uma boa conversa sobre tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`group bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 ${contact.border} hover:shadow-lg ${contact.glow}`}
              >
                <Icon className={`text-3xl ${contact.color} transition-transform duration-300 group-hover:scale-110`} />
                <div>
                  <p className="text-slate-200 font-semibold text-sm">{contact.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5 break-all">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
