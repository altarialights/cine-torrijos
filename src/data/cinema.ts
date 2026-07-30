export const movies = [
  {
    id: "eclipse-infinito",
    title: "Eclipse Infinito",
    genre: "Ciencia ficción",
    image: "/images/portada1.png",
    sessions: ["17:00", "19:45", "22:30"],
  },
  {
    id: "susurros-del-pasado",
    title: "Susurros del Pasado",
    genre: "Drama · Misterio",
    image: "/images/portada2.png",
    sessions: ["17:30", "20:00", "22:20"],
  },
  {
    id: "la-luz-de-san-telmo",
    title: "La Luz de San Telmo",
    genre: "Thriller",
    image: "/images/portada3.png",
    sessions: ["18:00", "20:35", "22:45"],
  },
  {
    id: "ritmo-interior",
    title: "Ritmo Interior",
    genre: "Drama musical",
    image: "/images/portada4.png",
    sessions: ["18:30", "21:15"],
  },
];

export const promotions = [
  {
    id: "menu-torrijos",
    title: "Menú Torrijos",
    image: "/images/palomitas.png",
    description: "Todo lo que necesitas para disfrutar la película de principio a fin.",
    detail: "Palomitas · Bebida · Experiencia completa",
    cta: "Descubrir el menú",
    featured: true,
  },
  {
    id: "dia-del-espectador",
    title: "Día del Espectador",
    image: "/images/butaca.png",
    description: "Una forma diferente de disfrutar tus películas favoritas entre semana.",
    cta: "Consultar condiciones",
  },
  {
    id: "fidelidad-cine-torrijos",
    title: "Fidelidad Cine Torrijos",
    image: "/images/tarjeta.png",
    description: "Muy pronto podrás acumular ventajas cada vez que vengas al cine.",
    label: "Próximamente",
  },
];

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Historia", href: "/#historia" },
  { label: "Cartelera", href: "/#cartelera" },
  { label: "Horarios", href: "/#horarios" },
  { label: "Promociones", href: "/#promociones" },
  { label: "Comida", href: "/#comida" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Cómo llegar", href: "/#ubicacion" },
  { label: "Contacto", href: "/#contacto" },
];

export const desktopNavItems = [
  { label: "Inicio", href: "/#inicio", active: true },
  { label: "Historia", href: "/#historia" },
  { label: "Cartelera", href: "/#cartelera" },
  { label: "Horarios", href: "/#horarios" },
  { label: "Promociones", href: "/#promociones" },
  { label: "Comida", href: "/#comida" },
  { label: "Cómo llegar", href: "/#ubicacion" },
];

export const historyContent = {
  eyebrow: "Una historia compartida",
  title: "El cine como recuerdo compartido en Torrijos",
  image: "/images/historia.png",
  alt: "Interior histórico de un cine con proyector, rollos de película y butacas rojas.",
  body:
    "Ir al cine en Torrijos es mucho más que elegir una película: es entrar en una sala, bajar la voz y compartir esa espera luminosa antes de que empiece la historia.",
  secondary:
    "Las historias cambian y la pantalla evoluciona, pero la emoción de sentarse frente a ella sigue teniendo algo familiar.",
  quote: "Cada película deja una historia. Cada espectador se lleva una parte.",
  note: "Cine, memoria y comunidad",
};

export const foodItems = [
  {
    id: "hotdog",
    name: "Perrito caliente + refresco",
    shortName: "Perrito caliente",
    image: "/images/hotdog.png",
    alt: "Perrito caliente acompañado de un refresco.",
    tag: "Tu combo",
    description: "Un clásico recién preparado para disfrutar antes o durante la sesión.",
  },
  {
    id: "popcorn",
    name: "Palomitas + refresco",
    shortName: "Palomitas",
    image: "/images/palomitasconrefresco.png",
    alt: "Palomitas de cine acompañadas de un refresco.",
    tag: "Clásico del cine",
    description: "El acompañamiento imprescindible de cualquier historia en pantalla grande.",
    featured: true,
  },
  {
    id: "pizza",
    name: "Pizza + refresco",
    shortName: "Pizza",
    image: "/images/pizza.png",
    alt: "Pizza acompañada de un refresco.",
    tag: "Para compartir",
    description: "Una opción completa para compartir o disfrutar mientras esperas tu película.",
  },
];

export const experienceSlides = [
  {
    id: "couple",
    image: "/images/pareja.png",
    eyebrow: "Planes en pareja",
    title: "Una película. Dos entradas. Un recuerdo compartido.",
    alt: "Pareja disfrutando de una película en una sala de cine llena",
    objectPosition: "center center",
  },
  {
    id: "friends",
    image: "/images/amigos.png",
    eyebrow: "Planes con amigos",
    title: "Las mejores historias también se comentan al salir.",
    alt: "Grupo de amigos disfrutando de una película en una sala de cine llena",
    objectPosition: "center center",
  },
  {
    id: "family",
    image: "/images/familia.png",
    eyebrow: "Planes en familia",
    title: "La emoción de la gran pantalla para todas las generaciones.",
    alt: "Familia disfrutando de una película en una sala de cine llena",
    objectPosition: "center center",
  },
];

export const locationInfo = {
  name: "Cine Redux",
  street: "C. Cubero, 37",
  city: "45500 Torrijos, Toledo",
  fullAddress: "Cine Redux, C. Cubero, 37, 45500 Torrijos, Toledo",
  mapEmbed:
    "https://www.google.com/maps?q=Cine%20Redux%2C%20C.%20Cubero%2C%2037%2C%2045500%20Torrijos%2C%20Toledo&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Cine%20Redux%2C%20C.%20Cubero%2C%2037%2C%2045500%20Torrijos%2C%20Toledo",
  searchUrl:
    "https://www.google.com/maps/search/?api=1&query=Cine%20Redux%2C%20C.%20Cubero%2C%2037%2C%2045500%20Torrijos%2C%20Toledo",
};
