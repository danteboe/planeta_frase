export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
}

const questions: Question[] = [
  // ──────────────── EASY ────────────────
  {
    id: 1,
    question: "¿Qué es una oración?",
    options: [
      "Cualquier grupo de palabras con sentido",
      "Una unidad gramatical con sujeto y predicado que comunica ideas con sentido completo",
      "Un verbo conjugado acompañado de complementos",
      "Un enunciado delimitado por signos de puntuación",
    ],
    correctAnswer: 1,
    explanation:
      "La oración es una unidad gramatical que comunica ideas con sentido completo a partir de la unión entre un sujeto y un predicado.",
    hint: "Piensa en los dos componentes esenciales que toda oración necesita para existir.",
    difficulty: "easy",
  },
  {
    id: 2,
    question:
      "¿Cuál es la diferencia principal entre un enunciado y una oración?",
    options: [
      "El enunciado siempre es más largo que la oración",
      "La oración siempre lleva signos de puntuación, el enunciado no",
      "La oración se conforma a partir de un sujeto y un predicado; el enunciado no necesariamente",
      "No hay diferencia: son lo mismo",
    ],
    correctAnswer: 2,
    explanation:
      "Todas las oraciones son enunciados, pero no todos los enunciados son oraciones, ya que estos no se conforman necesariamente a partir de la unión entre un sujeto y un predicado.",
    hint: "Recuerda: toda oración es enunciado, pero ¿todo enunciado es oración?",
    difficulty: "easy",
  },
  {
    id: 3,
    question:
      '¿Por qué "¡No a la experimentación con animales!" NO es una oración?',
    options: [
      "Porque es una exclamación",
      "Porque es demasiado corta",
      "Porque no contiene un verbo conjugado que conforme un predicado",
      "Porque no tiene complementos",
    ],
    correctAnswer: 2,
    explanation:
      "No es oración porque no contiene un verbo conjugado mediante el cual se conforme un predicado asociado a un sujeto.",
    hint: "Busca si hay un verbo en forma personal (conjugado). Sin él, no hay predicado.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "¿Cuáles son las formas no personales del verbo?",
    options: [
      "Presente, pasado y futuro",
      "Gerundio, infinitivo y participio",
      "Primera, segunda y tercera persona",
      "Singular y plural",
    ],
    correctAnswer: 1,
    explanation:
      "Las formas no personales del verbo son el gerundio (terminado en -ndo), el infinitivo (terminado en -ar, -er, -ir) y el participio (terminado en -do). No tienen rasgos de persona, tiempo o número.",
    hint: "Son tres formas verbales que no se conjugan: una termina en -ndo, otra en -ar/-er/-ir, y otra en -do.",
    difficulty: "easy",
  },
  {
    id: 5,
    question:
      '¿Cuál de los siguientes es un enunciado pero NO una oración?',
    options: [
      '"María corre todos los días"',
      '"¡Prohibido parquear!"',
      '"Ellos llegaron temprano"',
      '"Haremos el proyecto mañana"',
    ],
    correctAnswer: 1,
    explanation:
      '"¡Prohibido parquear!" tiene un participio y un infinitivo, pero carece de un verbo conjugado que constituya predicado. Las demás opciones sí tienen verbos conjugados.',
    hint: "Revisa cuál opción no tiene un verbo conjugado (en forma personal).",
    difficulty: "easy",
  },
  {
    id: 6,
    question: '¿Cuál es un ejemplo de forma NO personal del verbo?',
    options: ["corremos", "estudió", "cantando", "escriben"],
    correctAnswer: 2,
    explanation:
      '"Cantando" es un gerundio (forma no personal). Las demás son verbos conjugados con rasgos de persona, número y tiempo.',
    hint: "Los gerundios terminan en -ndo, los infinitivos en -ar/-er/-ir y los participios en -do.",
    difficulty: "easy",
  },
  {
    id: 7,
    question:
      '¿Por qué "Prohibido parquear en esta zona" no es una oración, si tiene dos verbos?',
    options: [
      "Porque los verbos están en formas no personales (participio e infinitivo)",
      "Porque tiene demasiadas palabras",
      "Porque le falta un complemento",
      "Porque está en modo imperativo",
    ],
    correctAnswer: 0,
    explanation:
      "Pese a tener dos verbos (prohibido = participio; parquear = infinitivo), ninguno está conjugado, por lo que no constituyen predicado ni se asocian con un sujeto.",
    hint: "Un verbo conjugado muestra persona, número y tiempo. ¿Alguno de esos dos verbos lo hace?",
    difficulty: "easy",
  },
  {
    id: 8,
    question: "¿Qué es el predicado de una oración?",
    options: [
      "La parte que indica de quién se habla",
      "La parte formada por un verbo conjugado que expresa algo sobre el sujeto",
      "Cualquier verbo que aparezca en la oración",
      "El complemento que aparece al final de la oración",
    ],
    correctAnswer: 1,
    explanation:
      "El predicado constituye aquello que se predica o se dice del sujeto. Está formado por un verbo conjugado (verbo en forma personal) que puede aparecer acompañado de complementos.",
    hint: "Piensa en cuál parte de la oración dice algo sobre el sujeto, usando un verbo conjugado.",
    difficulty: "easy",
  },

  // ──────────────── MEDIUM ────────────────
  {
    id: 9,
    question:
      'En "Los hinchas festejaron sin parar toda la noche", ¿cuál es el verbo principal?',
    options: ["parar", "festejaron", "sin", "toda"],
    correctAnswer: 1,
    explanation:
      '"Festejaron" es el verbo conjugado (tercera persona del plural, pasado) que constituye el verbo principal. "Parar" es un infinitivo (forma no personal).',
    hint: "Solo uno de los verbos está conjugado y muestra persona y tiempo.",
    difficulty: "medium",
  },
  {
    id: 10,
    question:
      '"Juan fue castigado por sus padres." ¿Cuál es el sujeto de esta oración?',
    options: [
      "Sus padres, porque realizan la acción",
      "Juan",
      "Fue castigado",
      "No tiene sujeto",
    ],
    correctAnswer: 1,
    explanation:
      "El sujeto es Juan, no sus padres. El sujeto no siempre es quien ejecuta la acción; aquí Juan recibe o padece la acción. Si cambiamos el número del verbo, lo que cambia es Juan (Los Juan-es fueron castigados).",
    hint: "El sujeto no siempre realiza la acción. Prueba cambiar el número del verbo y observa qué cambia.",
    difficulty: "medium",
  },
  {
    id: 11,
    question:
      '"A ella le agradan las películas de ciencia ficción." ¿Cuál es el sujeto?',
    options: [
      "Ella",
      "Le",
      "Las películas de ciencia ficción",
      "Ciencia ficción",
    ],
    correctAnswer: 2,
    explanation:
      'El sujeto es "las películas de ciencia ficción". Si cambiamos el verbo a singular ("agrada"), las palabras que deben cambiar son "las películas" → "la película". Esto confirma que ese es el sujeto.',
    hint: "Cambia el número del verbo (agradan → agrada) y observa qué parte de la oración también debe cambiar.",
    difficulty: "medium",
  },
  {
    id: 12,
    question:
      '"El presidente pidió mantener el distanciamiento social." ¿Cuál es el verbo principal?',
    options: ["mantener", "pidió", "distanciamiento", "social"],
    correctAnswer: 1,
    explanation:
      '"Pidió" es el verbo conjugado (tercera persona del singular, pasado). "Mantener" es un infinitivo y, por tanto, una forma no personal del verbo.',
    hint: "¿Cuál de los verbos está conjugado y se asocia directamente con el sujeto?",
    difficulty: "medium",
  },
  {
    id: 13,
    question:
      '¿Cuál es una buena estrategia para identificar el sujeto de una oración?',
    options: [
      "Buscar quién realiza la acción",
      "Buscar la primera palabra de la oración",
      "Cambiar el número del verbo y observar qué otras palabras deben cambiar",
      "Buscar el sustantivo más largo",
    ],
    correctAnswer: 2,
    explanation:
      "Si se cambia el número del verbo (de singular a plural o viceversa), las palabras que también deben cambiar para que la oración tenga sentido conforman el sujeto.",
    hint: "Es un truco que involucra modificar el verbo principal para ver qué concuerda con él.",
    difficulty: "medium",
  },
  {
    id: 14,
    question:
      '"Haremos una investigación sobre lo ocurrido." ¿Qué tipo de sujeto tiene esta oración?',
    options: [
      "Sujeto explícito al inicio",
      "Sujeto tácito (nosotros)",
      "No tiene sujeto (oración impersonal)",
      "Sujeto compuesto",
    ],
    correctAnswer: 1,
    explanation:
      'El sujeto es tácito o implícito: "nosotros". Se identifica por la conjugación del verbo "haremos" (primera persona del plural).',
    hint: "Fíjate en la conjugación del verbo: ¿a qué persona corresponde? Esa persona es el sujeto aunque no esté escrita.",
    difficulty: "medium",
  },
  {
    id: 15,
    question: "¿Qué es la concordancia en una oración?",
    options: [
      "Que todas las palabras tengan la misma cantidad de sílabas",
      "La igualdad de número, género y tiempo entre las partes de la oración",
      "Que el sujeto esté siempre al inicio",
      "Que la oración termine con punto",
    ],
    correctAnswer: 1,
    explanation:
      "La concordancia consiste en la igualdad o conformidad en número, género e incluso tiempo entre las palabras de la oración, lo cual es imprescindible para conservar su sentido.",
    hint: "Se refiere a que las partes de la oración coincidan en aspectos gramaticales como número, género y tiempo.",
    difficulty: "medium",
  },
  {
    id: 16,
    question:
      '"¡Ahí viene el bus!" ¿Dónde está el sujeto en esta oración?',
    options: [
      "Al inicio: 'Ahí'",
      "No tiene sujeto",
      "Es tácito, está implícito en el verbo",
      "Al final: 'el bus'",
    ],
    correctAnswer: 3,
    explanation:
      "El sujeto es 'el bus' y aparece al final de la oración. Esto demuestra que el sujeto no siempre está al inicio; puede aparecer en posición intermedia o final.",
    hint: "El sujeto puede cambiar de posición. Busca qué concuerda en número y persona con el verbo 'viene'.",
    difficulty: "medium",
  },
  {
    id: 17,
    question:
      '"Llegaron a la conferencia demasiado temprano." ¿Qué tipo de oración es?',
    options: [
      "Oración impersonal (sin sujeto)",
      "Oración con sujeto tácito",
      "No es una oración",
      "Oración con sujeto explícito",
    ],
    correctAnswer: 1,
    explanation:
      'Tiene un sujeto tácito: "ellos" o "ellas", identificable por la conjugación del verbo "llegaron" (tercera persona del plural). Aunque no se pueda determinar con precisión quiénes son, sigue habiendo un sujeto implícito.',
    hint: "Fíjate en la conjugación de 'llegaron'. ¿Qué pronombre corresponde a esa conjugación?",
    difficulty: "medium",
  },

  // ──────────────── HARD ────────────────
  {
    id: 18,
    question:
      '"El proceso de estructuración del nuevo currículo requirieron varios meses de trabajo ardua." ¿Cuáles errores de concordancia hay?',
    options: [
      '"requirieron" debería ser "requirió" y "ardua" debería ser "arduo"',
      'Solo "requirieron" debería ser "requirió"',
      'Solo "ardua" debería ser "arduo"',
      "No hay errores de concordancia",
    ],
    correctAnswer: 0,
    explanation:
      'Hay dos discordancias: "requirieron" (plural) no concuerda con el sujeto "el proceso" (singular) → debe ser "requirió". Y "ardua" (femenino) no concuerda con "trabajo" (masculino) → debe ser "arduo".',
    hint: "Busca discordancias de número (singular/plural) entre sujeto y verbo, y de género entre sustantivo y adjetivo.",
    difficulty: "hard",
  },
  {
    id: 19,
    question: "¿Cuál de las siguientes es una oración compuesta SUBORDINADA?",
    options: [
      '"¿Cerrarán las fronteras o acogerán a los inmigrantes?"',
      '"Esperamos que desciendan las cifras de desempleo"',
      '"Culminaron la sesión una hora después: muchos llegaron tarde"',
      '"Conseguí traer vino, pero no encontré queso"',
    ],
    correctAnswer: 1,
    explanation:
      'En "Esperamos que desciendan las cifras de desempleo", el verbo "desciendan" está subordinado al verbo principal "esperamos" mediante el nexo "que". Una oración no se entiende plenamente sin la otra.',
    hint: "En la subordinación, una oración depende de la otra. Busca la que usa un nexo como 'que' donde una parte no se comprende sola.",
    difficulty: "hard",
  },
  {
    id: 20,
    question: "¿Cuál de las siguientes es una oración compuesta COORDINADA?",
    options: [
      '"Esperamos que mejore la situación"',
      '"El libro que leí es muy interesante"',
      '"¿Cerrarán las fronteras o acogerán a los inmigrantes?"',
      '"La empresa tuvo que pagar una multa"',
    ],
    correctAnswer: 2,
    explanation:
      'En la coordinación, las oraciones simples son independientes (cada una se comprende por sí sola). Aquí, "cerrarán las fronteras" y "acogerán a los inmigrantes" son independientes, unidas por el nexo "o".',
    hint: "En la coordinación, cada oración simple es independiente y se enlaza mediante nexos como 'y', 'o', 'pero'.",
    difficulty: "hard",
  },
  {
    id: 21,
    question: "¿Qué caracteriza a una oración YUXTAPUESTA?",
    options: [
      "Se unen con nexos como 'y', 'o', 'pero'",
      "Las oraciones simples se unen exclusivamente mediante signos de puntuación, sin nexo explícito",
      "No tienen verbo conjugado",
      "Siempre son subordinadas",
    ],
    correctAnswer: 1,
    explanation:
      "En las oraciones yuxtapuestas, las oraciones simples se unen sin un nexo explícito, enlazándose exclusivamente mediante signos de puntuación como la coma, los dos puntos o el punto y coma.",
    hint: "La clave de la yuxtaposición es la ausencia de una palabra que funcione como nexo. ¿Qué las une entonces?",
    difficulty: "hard",
  },
  {
    id: 22,
    question:
      '"La migración es un fenómeno social ignorado en el diseño, que durante los últimos años ha crecido de un modo desaforado de nuevas políticas públicas." ¿Cuál es el problema principal?',
    options: [
      "Falta de concordancia de número",
      "El inciso está mal ubicado y genera ambigüedad",
      "Falta el sujeto de la oración",
      "Sobran signos de puntuación",
    ],
    correctAnswer: 1,
    explanation:
      "El inciso 'que durante los últimos años ha crecido de un modo desaforado' está mal ubicado, lo que hace confusa la oración. No queda claro si lo que creció es la migración o el diseño. Lo correcto: 'La migración, que durante los últimos años ha crecido de un modo desaforado, es un fenómeno social ignorado en el diseño de nuevas políticas públicas.'",
    hint: "Piensa en los incisos: ¿está bien ubicada la aclaración? ¿Se entiende qué es lo que ha crecido desaforadamente?",
    difficulty: "hard",
  },
  {
    id: 23,
    question:
      "¿Cuál de los siguientes fragmentos constituye una oración con sentido completo?",
    options: [
      '"Si bien llevábamos meses organizando las conferencias"',
      '"Aunque sufrió múltiples traumatismos"',
      '"El parque de mi barrio, donde hay una cancha"',
      '"Las elecciones se realizaron de manera exitosa"',
    ],
    correctAnswer: 3,
    explanation:
      'Solo "Las elecciones se realizaron de manera exitosa" tiene un sujeto (las elecciones), un predicado con verbo conjugado (realizaron) y comunica una idea con sentido completo. Las demás son fragmentos incompletos.',
    hint: "Una oración necesita sujeto y predicado con verbo conjugado, y debe comunicar una idea completa. ¿Cuál de las opciones cumple todo eso?",
    difficulty: "hard",
  },
  {
    id: 24,
    question:
      '"En el siglo XVIII, la viruela fue la enfermedad más catastrófica en Europa, cuyo índice de mortalidad será muy alto." ¿Qué error de concordancia hay?',
    options: [
      "Discordancia de género",
      "Discordancia de número",
      'Discordancia temporal: "será" debería ser "fue" o "era" para concordar con el tiempo pasado',
      "No hay error",
    ],
    correctAnswer: 2,
    explanation:
      'El verbo "será" (futuro) no concuerda temporalmente con "fue" (pasado). Si se habla de un hecho del siglo XVIII, ambos verbos deben estar en pasado. Lo correcto: "cuyo índice de mortalidad fue/era muy alto".',
    hint: "Compara los tiempos verbales: uno habla del pasado y otro del futuro. ¿Tiene sentido eso?",
    difficulty: "hard",
  },
  {
    id: 25,
    question: "¿Qué es un inciso gramatical?",
    options: [
      "Un error de puntuación frecuente",
      "Una aclaración, explicación o información intercalada en la oración",
      "El verbo principal de la oración",
      "Un tipo de enunciado sin verbo",
    ],
    correctAnswer: 1,
    explanation:
      "Los incisos son aclaraciones, explicaciones o información intercaladas en la oración para complementar lo que en esta se dice. Se delimitan con comas, rayas o guiones.",
    hint: "Es algo que se inserta dentro de la oración para ampliar o aclarar información.",
    difficulty: "hard",
  },
  {
    id: 26,
    question:
      '"Muchas casas de mi barrio, incluido el apartamento de un amigo, fue robado durante diciembre." ¿Cuáles errores de concordancia se identifican?',
    options: [
      'Solo "fue" debería ser "fueron"',
      '"incluido" debería ser "incluidas", "fue" debería ser "fueron" y "robado" debería ser "robadas"',
      'Solo "robado" debería ser "robadas"',
      "No hay errores de concordancia",
    ],
    correctAnswer: 1,
    explanation:
      'El sujeto "muchas casas" es femenino plural. Por tanto: "incluido" → "incluidas" (género y número), "fue" → "fueron" (número) y "robado" → "robadas" (género y número).',
    hint: "El sujeto es 'muchas casas' (femenino plural). ¿Todos los elementos concuerdan con ese género y número?",
    difficulty: "hard",
  },

  // ──────────────── EXPERT ────────────────
  {
    id: 27,
    question:
      '"La pintura que vimos en el museo es realmente bella." ¿Cuál es el verbo principal y por qué?',
    options: [
      '"vimos", porque indica una acción concreta',
      '"es", porque aporta el significado central: que la pintura es bella',
      "Ambos son verbos principales",
      "Ninguno es principal; la oración es un enunciado",
    ],
    correctAnswer: 1,
    explanation:
      'Aunque hay dos verbos conjugados ("vimos" y "es"), solo "es" cumple la función de verbo principal porque aporta el significado central de la idea: que la pintura es bella. "Vimos" está subordinado.',
    hint: "¿Cuál verbo comunica la idea central de la oración? ¿Se trata de que vimos algo o de que algo es bello?",
    difficulty: "expert",
  },
  {
    id: 28,
    question:
      '"Aún no se sabe cuáles sean los efectos secundarios de la vacuna." ¿Qué tipo de oración es?',
    options: [
      "Oración con sujeto tácito",
      "Oración con sujeto explícito al final",
      "Oración impersonal: no es posible recuperar o reconocer el sujeto",
      "No es una oración",
    ],
    correctAnswer: 2,
    explanation:
      "Es una oración impersonal: no hay una palabra que contenga, implícita o explícitamente, el sujeto. Aun así, mediante el verbo principal se comprende la idea comunicada.",
    hint: "Intenta encontrar el sujeto. ¿Quién 'sabe'? ¿Se puede identificar?",
    difficulty: "expert",
  },
  {
    id: 29,
    question:
      'En "México, un país exportador de combustibles, depende cada vez más del combustible estadounidense", ¿qué función cumple "un país exportador de combustibles"?',
    options: [
      "Es el sujeto de la oración",
      "Es el predicado",
      "Es un inciso que amplía información sobre el sujeto",
      "Es el complemento del verbo principal",
    ],
    correctAnswer: 2,
    explanation:
      "Es un inciso delimitado por dos comas que amplía la información sobre el sujeto (México). Si se elimina, la oración mantiene su sentido: 'México depende cada vez más del combustible estadounidense.'",
    hint: "Observa que está delimitado por comas. Si lo quitas, ¿la oración sigue teniendo sentido?",
    difficulty: "expert",
  },
  {
    id: 30,
    question:
      '"La sentencia dictada por la Corte Suprema de Justicia la semana pasada, fue completamente injusta." ¿Cuál es el error?',
    options: [
      "Falta el sujeto",
      "La coma entre el sujeto y el predicado es inapropiada: rompe la secuencia natural",
      "El verbo debería estar en plural",
      "Falta un inciso de cierre",
    ],
    correctAnswer: 1,
    explanation:
      "La coma entre el sujeto ('La sentencia dictada por la Corte Suprema de Justicia la semana pasada') y el predicado ('fue completamente injusta') es inapropiada. No se debe separar sujeto de predicado con una coma.",
    hint: "Es un error de puntuación muy común cuando el sujeto es extenso. ¿Hay algún signo de puntuación que no debería estar ahí?",
    difficulty: "expert",
  },
  {
    id: 31,
    question:
      '"La empresa, que ya presentaba antecedentes por evasión de impuestos, tuvo que pagar nuevamente una multa." ¿Qué tipo de oración compuesta es?',
    options: [
      "Coordinada",
      "Yuxtapuesta",
      "Subordinada con inciso",
      "Simple",
    ],
    correctAnswer: 2,
    explanation:
      "Es una oración compuesta subordinada. El inciso 'que ya presentaba antecedentes por evasión de impuestos' es una oración subordinada enlazada por 'que', cuya claridad depende de su relación con el sujeto 'la empresa'.",
    hint: "Hay un inciso con otro verbo conjugado. ¿Ese inciso se entiende por sí solo sin el resto de la oración?",
    difficulty: "expert",
  },
  {
    id: 32,
    question:
      "¿Cuál de las siguientes recomendaciones es correcta para construir buenas oraciones?",
    options: [
      "Usar la mayor cantidad de subordinaciones posibles para dar detalle",
      "Siempre poner el sujeto al inicio y nunca usar sujeto tácito",
      "Procurar usar la estructura sujeto-verbo-complemento y evitar oraciones excesivamente largas",
      "Separar el sujeto del predicado con coma cuando el sujeto es largo",
    ],
    correctAnswer: 2,
    explanation:
      "Se recomienda mantener la estructura sujeto-verbo-complemento para preservar la claridad, y evitar oraciones demasiado largas o con subordinaciones excesivas.",
    hint: "Piensa en claridad y concreción. ¿Qué estructura básica se recomienda para que las ideas sean claras?",
    difficulty: "expert",
  },
  {
    id: 33,
    question:
      '"Hace unos 2500 años, hallado culpable de corromper a los jóvenes, Sócrates será condenado a muerte." ¿Cuál es el error?',
    options: [
      "El sujeto está mal ubicado",
      'Discordancia temporal: "será" debería ser "fue" para concordar con "hace 2500 años"',
      "Falta un nexo entre las oraciones",
      '"hallado" debería ser "hallando"',
    ],
    correctAnswer: 1,
    explanation:
      'El verbo "será" (futuro) no concuerda temporalmente con el contexto "Hace unos 2500 años" (pasado). Debería ser "fue condenado a muerte" para mantener la concordancia temporal.',
    hint: "Compara el tiempo del que se habla (hace 2500 años) con el tiempo verbal usado. ¿Coinciden?",
    difficulty: "expert",
  },
];

export function getQuestionsByDifficulty(difficulty: Question["difficulty"]): Question[] {
  return questions.filter((q) => q.difficulty === difficulty);
}

export function selectGameQuestions(): Question[] {
  const easy = shuffle(getQuestionsByDifficulty("easy"));
  const medium = shuffle(getQuestionsByDifficulty("medium"));
  const hard = shuffle(getQuestionsByDifficulty("hard"));
  const expert = shuffle(getQuestionsByDifficulty("expert"));

  return [
    ...easy.slice(0, 3),
    ...medium.slice(0, 3),
    ...hard.slice(0, 3),
    ...expert.slice(0, 1),
  ];
}

export function getReplacementQuestion(
  difficulty: Question["difficulty"],
  excludeIds: number[]
): Question | null {
  const pool = getQuestionsByDifficulty(difficulty).filter(
    (q) => !excludeIds.includes(q.id)
  );
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default questions;
