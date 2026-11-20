// ─── Datos de contacto: reemplazar los placeholders acá y se actualiza todo el sitio ───
export const WA_NUMBER = '549XXXXXXXXXX';
export const EMAIL = '[EMAIL]';
export const HORARIO = 'lunes a viernes de 7:30 a 13:30 y de 16 a 21 h';
export const FECHA_LEGAL = '[FECHA]';
export const INSTAGRAM = 'https://instagram.com/norda.latam';

// Sección "Proyectos": apagada por defecto. También se prende con ?proyectos=1
export const SHOW_PROYECTOS = false;

export const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Raíz del sitio (con barra final): '/norda-web/' en GitHub Pages, '/' con dominio propio.
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const NAV = [
  ['Webs', 'webs'],
  ['Sistemas', 'sistemas'],
  ['Cómo trabajamos', 'proceso'],
  ['Nosotros', 'nosotros'],
  ['Preguntas', 'preguntas'],
] as const;

// Productos en desarrollo: tabs del navbar con etiqueta "Pronto" y página /<slug> de Próximamente.
export const PRODUCTS = [
  { slug: 'nordi', name: 'Nordi', tagline: 'Un sistema de gestión simple para tu negocio.' },
  { slug: 'agendi', name: 'Agendi', tagline: 'Tu turnero online: tus clientes reservan solos, vos te olvidás de la agenda.' },
] as const;

export const WEB_INCLUDES = [
  'Diseño a medida, nada de plantillas genéricas',
  'Hasta 5 secciones',
  'Adaptada a celular y computadora',
  'Botón de WhatsApp y formulario de contacto',
  'Ubicación en Google Maps',
  'Optimización básica para aparecer en Google',
  'Vinculación con tus redes',
  '2 rondas de cambios incluidas',
];

export const COMBO_INCLUDES = [
  'Página web a medida de tu negocio',
  'Catálogo online para vender tus productos',
  'Sistema para controlar tu stock',
  'Funciona en celulares y computadoras',
];

export const EXAMPLES = [
  { ph: 'EJEMPLO WEB 1', title: 'Web para un local', desc: 'Horarios, ubicación, fotos del lugar y un botón para que te escriban.', alt: 'Ejemplo de página web para un local a la calle' },
  { ph: 'EJEMPLO WEB 2', href: 'https://hildmannn.github.io/mile-ramello/', shot: 'img/ejemplo-mile-ramello.webp', title: 'Web para un profesional', desc: 'Tus servicios, tu experiencia y turnos que se piden por WhatsApp.', alt: 'Página web de una nutricionista, recorrida de arriba a abajo' },
  { ph: 'EJEMPLO WEB 3', href: 'https://maquinassanmartino.com/', shot: 'img/ejemplo-sanmartino-catalogo.webp', title: 'Catálogo online', desc: 'Uno de los pasos más importantes para hacer crecer tu negocio: tener tu catálogo actualizado y al alcance de todos.', alt: 'Catálogo online de máquinas para gimnasio, recorrido de arriba a abajo' },
];

export const SYSTEMS = [
  { icon: 'truck', title: 'Gestión de pedidos y entregas', desc: 'Cada pedido, quién lo lleva y cuándo llega, a la vista.' },
  { icon: 'calendar-check', title: 'Turnos y reservas', desc: 'Tus clientes reservan solos y vos ves la agenda del día.' },
  { icon: 'package', title: 'Control de stock y depósitos', desc: 'Sabés qué tenés, dónde está y qué te falta reponer.' },
  { icon: 'wallet', title: 'Cuentas corrientes y cobranzas', desc: 'Quién te debe, cuánto y desde cuándo, sin cuadernos.' },
  { icon: 'chart-column', title: 'Paneles para ver tus números', desc: 'Ventas, gastos y ganancias claros, de un vistazo.' },
  { icon: 'plug', title: 'Conectar con lo que ya usás', desc: 'Planillas, WhatsApp y Mercado Pago, todo conectado.' },
];

export const STEPS = [
  { n: 1, title: 'Charlamos', desc: 'Nos contás tu negocio y lo que necesitás.' },
  { n: 2, title: 'Te proponemos', desc: 'Te mandamos una propuesta clara, con precio y tiempos.' },
  { n: 3, title: 'Lo construimos con vos', desc: 'Te mostramos avances y lo ajustamos juntos.' },
  { n: 4, title: 'Te acompañamos', desc: 'Lo publicamos y seguimos al lado tuyo.' },
];

export const PROJECTS = [1, 2, 3].map((i) => ({
  ph: 'PROYECTO ' + i,
  name: `[Nombre del negocio ${i}]`,
  rubro: '[Rubro]',
  result: '[Resultado en una línea]',
  alt: `Foto del proyecto ${i}: [describir negocio y web]`,
}));

export const TEAM = [
  { name: 'Valentín', role: 'Fundador y desarrollador', ph: 'FOTO VALENTÍN', alt: 'Retrato de Valentín, fundador y desarrollador de Norda, con luz natural', quote: 'Me encanta entender cómo funciona cada negocio y armar algo que de verdad le simplifique el día.' },
  { name: 'Nico', role: 'Ventas y atención a clientes', ph: 'FOTO NICO', alt: 'Retrato de Nico, de ventas y atención a clientes de Norda, sonriendo', quote: 'Soy el que te contesta el WhatsApp. Si tenés una duda, por chiquita que sea, preguntame.' },
  { name: 'Zoe', role: 'Comunidad y redes', ph: 'FOTO ZOE', alt: 'Retrato de Zoe, de comunidad y redes de Norda, en el estudio', quote: 'Cuento lo que hacemos y festejo cada negocio que crece con nosotros.' },
];

export const FAQS: [string, string][] = [
  ['¿Cuánto cuesta una página web?', 'Arranca desde USD 99 sin IVA. El precio final depende de lo que necesites: charlamos y te pasamos un presupuesto cerrado, para que sepas desde el principio cuánto vas a pagar.'],
  ['¿Qué incluye la web desde USD 99?', 'Diseño a medida de hasta 5 secciones, adaptada a celular y compu, botón de WhatsApp y formulario de contacto, ubicación en Google Maps, vínculo con tus redes, optimización básica para Google y 2 rondas de cambios.'],
  ['¿El dominio y el hosting están incluidos?', 'No, se cotizan aparte porque dependen de lo que elijas. Te ayudamos a elegir el nombre de tu web y nos encargamos de configurar todo.'],
  ['¿Cuánto tarda en estar lista mi web?', 'Depende de cada proyecto. En la propuesta te decimos los tiempos concretos, y si algo se demora, te avisamos antes.'],
  ['¿Cuánto cuesta un sistema a medida?', 'Depende de lo que necesites resolver. Nos contás cómo trabaja tu negocio y te armamos una propuesta clara, sin compromiso.'],
  ['¿Por qué los precios están en dólares?', 'Para que el precio se mantenga estable mientras trabajamos. Lo pagás en pesos, al tipo de cambio que figura en tu presupuesto.'],
  ['¿Los precios incluyen IVA?', 'No, todos los precios que ves en la web son sin IVA.'],
  ['¿Tengo que saber de computación?', 'Para nada. Te explicamos todo paso a paso, con palabras simples, y seguimos a mano para lo que necesites.'],
  ['¿Trabajan con negocios de otras ciudades?', 'Sí. Charlamos por videollamada y WhatsApp, y te acompañamos igual de cerca que si estuvieras a la vuelta.'],
];

export const LEGAL = {
  terminos: {
    title: 'Términos y condiciones',
    paras: [
      'Estos términos regulan el uso de este sitio y la contratación de los servicios de Norda (páginas web y sistemas a medida).',
      'Cada trabajo a medida se define en una propuesta escrita con alcance, precio y plazos. Lo que no figura en la propuesta se cotiza aparte.',
      'Los precios están expresados en dólares estadounidenses, sin IVA, y se abonan en pesos al tipo de cambio indicado en el presupuesto.',
      'Dominio y hosting se contratan aparte. Norda puede ayudarte a gestionarlos, pero su titularidad es tuya.',
      `Para cualquier duda sobre estos términos, escribinos a ${EMAIL}.`,
    ],
  },
  privacidad: {
    title: 'Política de privacidad',
    paras: [
      'En Norda cuidamos los datos que nos compartís. Esta política explica qué datos recolectamos y para qué los usamos.',
      'Solo usamos los datos que nos mandás por WhatsApp, email o formulario (nombre, negocio y consulta) para responderte y armar tu propuesta.',
      'No vendemos ni compartimos tus datos con terceros, salvo los proveedores necesarios para prestar el servicio.',
      `Podés pedir acceso, corrección o eliminación de tus datos cuando quieras, escribiendo a ${EMAIL}, según la Ley 25.326 de Protección de Datos Personales.`,
    ],
  },
};
