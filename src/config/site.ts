export const siteConfig = {
  name: 'NEXOR Industrial',
  tagline: 'Manufactura de precisión y soluciones industriales',
  domain: 'https://www.nexorindustrial.mx',
  email: 'contacto@tudominio.com',
  whatsappNumber: '527298369274',
  city: 'Ciudad de México',
  addressDisplay: 'Av. Principal #123, Colonia Centro, Ciudad de México.',
  hours: [
    { days: 'Lunes a Viernes', time: '8:00 – 18:00 hrs' },
    { days: 'Sábados', time: '9:00 – 13:00 hrs' },
  ],
  mapEmbedSrc: 'https://www.google.com/maps?q=Centro%2C+Ciudad+de+M%C3%A9xico&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Centro+Ciudad+de+Mexico',
};

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/** Strips angle brackets so form values can't inject HTML tags or break the wa.me message format. */
export function sanitizeInput(value: string): string {
  return value.replace(/[<>]/g, '').trim();
}
