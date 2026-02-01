import type { FormEvent } from "react";
import Container from "../../components/shared/Container";
import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import { CustomHero } from "../../components/shared/CutomHero";

import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import botiquinIcon from "../../assets/icons/botiquin.svg";
import contactoImage from "../../assets/images/contacto.jpg";

type ContactDetail = {
  title: string;
  lines: string[];
  icon: string;
};

const contactDetails: ContactDetail[] = [
  {
    title: "Dirección",
    lines: ["Calle falsa 12 3", "Springfield"],
    icon: locationIcon,
  },
  {
    title: "Teléfono",
    lines: ["+00 123 45 5678", "+00 123 45 5678"],
    icon: phoneIcon,
  },
  {
    title: "E-mail",
    lines: ["correo@prueba.com"],
    icon: botiquinIcon,
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

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
            {contactDetails.map(({ title, lines, icon }) => (
              <Card
                key={title}
                className="flex flex-col items-center gap-2 rounded-[32px] bg-[#ebebeb] px-10 py-12 text-center shadow-[0_12px_30px_rgba(3,4,94,0.08)]"
                hover={false}
                bgColor="bg-[#EBEBEB]"
              >
                <span className="flex h-30 w-30 items-center justify-center rounded-full text-primary-blue">
                  <img src={icon} />
                </span>
                <p className="text-xl font-semibold text-[#0f172a]">{title}</p>
                <ul className="space-y-1 text-lg font-medium text-[#0f172a]">
                  {lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="mb-[200px]">
        <Container className="bg-[#374151] rounded-[32px]">
          <div className="flex flex-col xl:flex-row xl:gap-0">
            <div className="flex-1 rounded-[32px] bg-white/90">
              <div className="relative flex h-full min-h-[360px] w-full overflow-hidden rounded-[24px] border border-primary-blue/30 shadow-[0_18px_40px_rgba(3,4,94,0.12)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.51670828418!2d-80.22539344999998!3d25.782414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1769985601338!5m2!1ses!2sco"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Revitalize Medical"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="flex-1 rounded-[32px] bg-[#374151] px-8 py-10 text-white shadow-[0_30px_60px_rgba(3,4,94,0.3)]">
              <div className="mb-8 space-y-2">
                <p className="text-[1rem] font-heading leading-tight">
                  Nuestro equipo especializado responderá tu consulta de forma
                  personalizada y confidencial.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                  <input
                    type="text"
                    name="fullName"
                    className={fieldClasses}
                    placeholder="Nombre y apellido"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                  <input
                    type="text"
                    name="institution"
                    className={fieldClasses}
                    placeholder="Institución / Centro médico"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    <input
                      type="email"
                      name="email"
                      className={fieldClasses}
                      placeholder="Email"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                    <input
                      type="tel"
                      name="phone"
                      className={fieldClasses}
                      placeholder="Teléfono"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold tracking-wide text-white/80">
                  <select
                    name="reason"
                    className={`${fieldClasses} appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Motivo de la consulta
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
