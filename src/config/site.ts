export const siteConfig = {
  name: 'NEXOR Industrial',
  tagline: 'Manufactura de precisión y soluciones industriales',
  domain: 'https://www.nexorindustrial.mx',
  email: 'contacto@nexorindustrial.mx',
  whatsappNumber: '527298369274',
  city: 'Tejupilco, Estado de México',
  addressDisplay: 'Parque Industrial Tejupilco, Estado de México, México',
  hours: [
    { days: 'Lunes a Viernes', time: '8:00 – 18:00 hrs' },
    { days: 'Sábados', time: '9:00 – 13:00 hrs' },
  ],
  mapEmbedSrc: 'https://www.google.com/maps?q=Tejupilco%2C+Estado+de+M%C3%A9xico&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Tejupilco+Estado+de+Mexico',
};

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
