import type { FormEvent, ReactElement } from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import { CustomHero } from "../../components/shared/CutomHero";

import contactoImage from "../../assets/images/contacto.jpg";

const LocationIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary-blue"
    aria-hidden="true"
  >
    <path
      d="M12 21s7-5.75 7-11a7 7 0 10-14 0c0 5.25 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary-blue"
    aria-hidden="true"
  >
    <path
      d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011-.25 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary-blue"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M4 7l7.553 5.666a1 1 0 001.2 0L20 7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactDetail = {
  title: string;
  lines: string[];
  Icon: () => ReactElement;
};

const contactDetails: ContactDetail[] = [
  {
    title: "Dirección",
    lines: ["Calle falsa 12 3", "Springfield"],
    Icon: LocationIcon,
  },
  {
    title: "Teléfono",
    lines: ["+00 123 45 5678", "+00 123 45 5678"],
    Icon: PhoneIcon,
  },
  {
    title: "E-mail",
    lines: ["correo@prueba.com"],
    Icon: MailIcon,
  },
];

const inquiryReasons = [
  "Soporte clínico",
  "Implementación institucional",
  "Cursos y capacitación",
  "Otros",
];

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const fieldClasses =
    "w-full rounded-lg border border-transparent bg-white px-4 py-3 text-[#0f1b2b] text-base placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-accent-light";

  return (
    <>
      <CustomHero
        image={contactoImage}
        title="Contacto"
        description="Estamos disponibles para resolver tus dudas clínicas y acompañarte. Nuestro equipo responde de forma personalizada y confidencial para garantizar una implementación efectiva."
      />

      <section className="bg-[#f8fafc] py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactDetails.map(({ title, lines, Icon }) => (
              <Card
                key={title}
                className="flex flex-col items-center gap-4 rounded-[32px] bg-[#ebebeb] px-10 py-12 text-center shadow-[0_12px_30px_rgba(3,4,94,0.08)]"
                hover={false}
                bgColor="bg-[#EBEBEB]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-blue shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <Icon />
                </span>
                <p className="text-xl font-semibold text-[#0f172a]">{title}</p>
                <ul className="space-y-1 text-lg font-medium text-[#0f172a]">
                  {lines.map((line, index) => (
                    <li
                      key={`${line}-${index}`}
                      className={`leading-tight ${index === lines.length - 1 ? "underline underline-offset-4 decoration-primary-blue" : ""}`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#eef2f7] py-20">
        <Container>
          <div className="flex flex-col gap-10 xl:flex-row">
            <div className="flex-1 rounded-[32px] bg-[#dfe5ec] p-6 shadow-[inset_0_0_30px_rgba(3,4,94,0.08)]">
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[24px] border border-white/70 bg-white/80 p-8 text-center">
                <p className="text-xl font-heading text-primary-blue">
                  Mapa de ubicación
                </p>
                <p className="text-[#475569]">
                  Integra aquí el mapa de tu institución o un iframe de Google
                  Maps.
                </p>
                <div className="mt-4 flex h-[260px] w-full items-center justify-center rounded-2xl border border-dashed border-primary-blue/40 bg-gradient-to-br from-white to-[#caf0f8] text-primary-blue font-semibold tracking-[0.3em]">
                  MAPA
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-[32px] bg-[#061a2d] px-8 py-10 text-white shadow-[0_30px_60px_rgba(3,4,94,0.3)]">
              <div className="mb-8 space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-accent-light">
                  Consultas
                </p>
                <h3 className="text-[2rem] font-heading leading-tight">
                  Nuestro equipo especializado responderá tu consulta de forma
                  personalizada y confidencial.
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    Nombre y apellido
                    <input
                      type="text"
                      name="fullName"
                      className={fieldClasses}
                      placeholder="Escribe tu nombre"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    Institución / Centro médico
                    <input
                      type="text"
                      name="institution"
                      className={fieldClasses}
                      placeholder="Nombre de la institución"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    Email
                    <input
                      type="email"
                      name="email"
                      className={fieldClasses}
                      placeholder="correo@dominio.com"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    Teléfono
                    <input
                      type="tel"
                      name="phone"
                      className={fieldClasses}
                      placeholder="+00 123 456 789"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                  Motivo de la consulta
                  <select
                    name="reason"
                    className={`${fieldClasses} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {inquiryReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                  Mensaje
                  <textarea
                    name="message"
                    className={`${fieldClasses} min-h-[140px] resize-none`}
                    placeholder="Cuéntanos sobre tu caso o necesidades"
                  />
                </label>

                <p className="text-xs text-white/60">
                  La información enviada será tratada de forma confidencial y
                  conforme a la normativa vigente de protección de datos.
                </p>

                <Button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl py-4 text-base font-semibold"
                >
                  Enviar consulta
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
