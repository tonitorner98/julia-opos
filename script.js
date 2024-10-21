/*----------------------------------------------*/

const preguntes = [ 
    { 
        "art": 3, 
        "preg": "¿Qué establece el artículo 3 sobre la lengua oficial?", 
        "resp": "El castellano es la lengua oficial del Estado y las demás lenguas españolas serán también oficiales en las respectivas comunidades autónomas" 
        }, 
        { 
        "art": 14, 
        "preg": "¿Qué derecho garantiza el artículo 14?", 
        "resp": "Igualdad ante la ley sin que pueda prevalecer discriminación alguna" 
        }, 
        { 
        "art": 15, 
        "preg": "¿Qué establece el artículo 15 sobre el derecho a la vida?", 
        "resp": "Todos tienen derecho a la vida y a la integridad física y moral" 
        }, 
        { 
        "art": 16, 
        "preg": "¿Qué derecho protege el artículo 16?", 
        "resp": "Libertad ideológica, religiosa y de culto" 
        }, 
        { 
        "art": 17, 
        "preg": "¿Qué derecho protege el artículo 17?", 
        "resp": "Derecho a la libertad y a la seguridad" 
        }, 
        { 
        "art": 18, 
        "preg": "¿Qué establece el artículo 18 sobre la intimidad personal?", 
        "resp": "Dereho al honor, a la intimidad personal y familiar, y a la propia imagen" 
        }, 
        { 
        "art": 19, 
        "preg": "¿Qué derecho garantiza el artículo 19?", 
        "resp": "Derecho a elegir libremente su residencia y a circular por el territorio nacional" 
        }, 
        { 
        "art": 20, 
        "preg": "¿Qué establece el artículo 20 sobre la libertad de expresión?", 
        "resp": "Derecho a expresar y difundir libremente pensamientos, ideas y opiniones mediante la palabra, el escrito o cualquier otro medio de reproducción" 
        }, 
        { 
        "art": 21, 
        "preg": "¿Qué derecho garantiza el artículo 21?", 
        "resp": "Derecho de reunión pacífica y sin armas" 
        }, 
        { 
        "art": 22, 
        "preg": "¿Qué establece el artículo 22 sobre la asociación?", 
        "resp": "Derecho de asociación" 
        }, 
        { 
        "art": 23, 
        "preg": "¿Qué derecho garantiza el artículo 23?", 
        "resp": "Derecho a participar en los asuntos públicos" 
        }, 
        { 
        "art": 24, 
        "preg": "¿Qué establece el artículo 24 sobre la tutela judicial efectiva?", 
        "resp": "Derecho a obtener la tutela efectiva de jueces y tribunales en el ejercicio de sus derechos e intereses legítimos, sin que, en ningún caso, pueda producirse indefensión" 
        }, 
        { 
        "art": 25, 
        "preg": "¿Qué establece el artículo 25 sobre las penas?", 
        "resp": "Nadie puede ser condenado por acciones u omisiones que en el momento de producirse no constituían delito" 
        }, 
        { 
        "art": 26, 
        "preg": "¿Qué establece el artículo 26 sobre los tribunales de honor?", 
        "resp": "Se prohiben los tribunales de honor en el ámbito de la Administración civil y de las organizaciones profesionales" 
        }, 
        { 
        "art": 27, 
        "preg": "¿Qué establece el artículo 27 sobre la educación?", 
        "resp": "Derecho a la educación y la libertad de enseñanza" 
        }, 
        { 
        "art": 28, 
        "preg": "¿Qué derecho reconoce el artículo 28?", 
        "resp": "Derecho a la sindicación libre y al derecho de huelga" 
        }, 
        { 
        "art": 29, 
        "preg": "¿Qué establece el artículo 29 sobre el derecho de petición?", 
        "resp": "Derecho de petición individual y colectiva, por escrito, en la forma y con los efectos que determine la ley" 
        }, 
        { 
        "art": 31, 
        "preg": "¿Qué establece el artículo 31 sobre el sistema tributario?", 
        "resp": "Sistema tributario justo inspirado en los principios de igualdad y progresividad" 
        }, 
        { 
        "art": 33, 
        "preg": "¿Qué derecho garantiza el artículo 33?", 
        "resp": "Derecho a la propiedad privada y a la herencia" 
        }, 
        { 
        "art": 35, 
        "preg": "¿Qué establece el artículo 35 sobre el trabajo?",
        "resp": "Derecho y deber de trabajar, y a una remuneración suficiente para satisfacer sus necesidades y las de su familia" 
        }, 
        { 
        "art": 37, 
        "preg": "¿Qué derecho reconoce el artículo 37 sobre la negociación colectiva?", 
        "resp": "Derecho a la negociación colectiva laboral" 
        }, 
        { 
        "art": 39, 
        "preg": "¿Qué establece el artículo 39 sobre la protección de la familia?", 
        "resp": "Los poderes públicos aseguran la protección social, económica y jurídica de la familia" 
        }, 
        { 
        "art": 40, 
        "preg": "¿Qué establece el artículo 40 sobre la política social y económica?", 
        "resp": "Fomento del progreso social y económica y distribución equitativa de la renta" 
        }, 
        { 
        "art": 43, 
        "preg": "¿Qué derecho garantiza el artículo 43 sobre la salud?", 
        "resp": "Derecho a la protección de la salud" 
        }, 
        { 
        "art": 45, 
        "preg": "¿Qué derecho garantiza el artículo 45 sobre el medio ambiente?", 
        "resp": "Derecho a disfrutar de un medio ambiente adecuado para el desarollo de la persona" 
        }, 
        { 
        "art": 47, 
        "preg": "¿Qué derecho garantiza el artículo 47 sobre la vivienda?", 
        "resp": "Derecho a disfrutar de una vivienda digna y adecuada" 
        }, 
        { 
        "art": 49, 
        "preg": "¿Qué derecho garantiza el artículo 49 sobre las personas con discapacidad?", 
        "resp": "Los poderes públicos realizarán una política de previsión, tratamiento, rehabilitación e integración de los disminuidos físicos, sensoriales y psíquicos" 
        }, 
        { 
        "art": 50, 
        "preg": "¿Qué establece el artículo 50 sobre la protección de los mayores?", 
        "resp": "Los poderes públicos garantizarán, mediante pensiones adecuadas y periódicamente actualizadas, la suficiencia económica a los ciudadanos durante la tercera edad" 
        }, 
        { 
        "art": 55, 
        "preg": "¿Qué establece el artículo 55 sobre la suspensión de derechos?", 
        "resp": "Circunstancias y condiciones bajo las cuales pueden suspenderse ciertos derechos y libertades" 
        }, 
        { 
        "art": 56, 
        "preg": "¿Qué establece el artículo 56 sobre el Rey?", 
        "resp": "El Rey es el Jefe del Estado, símbolo de su unidad y permanencia" 
        }, 
        { 
        "art": 62, 
        "preg": "¿Qué establece el artículo 62 sobre las funciones del Rey?", 
        "resp": "El Rey sanciona y promulga las leyes, convoca y disuelve las Cortes Generales y convoca elecciones y referendos en los términos previstos en la Constitución" 
        }, 
        { 
        "art": 66, 
        "preg": "¿Qué establece el artículo 66 sobre las Cortes Generales?", 
        "resp": "Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado" 
        }, 
        { 
        "art": 81, 
        "preg": "¿Qué establece el artículo 81 sobre las leyes orgánicas?", 
        "resp": "Son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y de las libertades públicas, las que aprueban los Estatutos de Autonomía y el régimen electoral general" 
        }, 
        { 
        "art": 92, 
        "preg": "¿Qué establece el artículo 92 sobre el referéndum?", 
        "resp": "Las decisiones políticas de especial trascendencia podrán ser sometidas a referéndum consultivo de todos los ciudadanos" 
        }, 
        { 
        "art": 97, 
        "preg": "¿Qué función tiene el Gobierno según el artículo 97?", 
        "resp": "El Gobierno dirige la política interior y exterior, la administración civil y militar y la defensa del Estado" 
        }, 
        { 
        "art": 99, 
        "preg": "¿Qué establece el artículo 99 sobre la investidura del Presidente del Gobierno?", 
        "resp": "Tras cada renovación del Congreso de los Diputados, el Rey, previa consulta con los representantes designados por los grupos políticos con representación parlamentaria, y a través del Presidente del Congreso, propondrá un candidato a la Presidencia del Gobierno" 
        }, 
        { 
        "art": 102, 
        "preg": "¿Qué establece ela rtículo 102 sobre la responsabilidad criminal del Presidente y los Ministros?", 
        "resp": "(El Presidente y los ministros) Sólo pueden ser acusados por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones" 
        }, 
        { 
        "art": 106, 
        "preg": "¿Qué establece el artículo 106 sobre el control de la legalidad?", 
        "resp": "Los Tribunales controlan la legalidad de la actuación administrativa y el sometimiento de ésta a los fines que la justifican" 
        }, 
        { 
        "art": 119, 
        "preg": "¿Qué derecho garantiza el artículo 119?", 
        "resp": "Justicia gratuita para quienes acrediten insuficiencia de recursos para litigar" 
        }, 
        { 
        "art": 123, 
        "preg": "¿Qué establece el artículo 123 sobre el Tribunal Supremo?", 
        "resp": "(El Tribunal Supremo) Es el órgano jurisdiccional superior en todos los órdenes, salvo lo dispuesto en materia de garantías constitucionales" 
        }, 
        { 
        "art": 125, 
        "preg": "¿Qué establece el artículo 125 sobre el jurado?", 
        "resp": "Participación de los ciudadanos en la administración de justicia mediante la institución del Jurado" 
        }, 
        { 
        "art": 161, 
        "preg": "¿Qué función tiene el Tribunal Constitucional según el artículo 161?", 
        "resp": "(El Tribunal Constitucional) Es competente para conocer del recurso de inconstitucionalidad, del recurso de amparo, de los conflictos de competencia entre el Estado y las comunidades autónomas y de otros conflictos en defensa de la autonomía local" 
        }, 
        { 
        "art": 148, 
        "preg": "¿Qué establece el artículo 148 sobre las competencias de las comunidades autónomas?", 
        "resp": "Enumera las materias en las que las comunidades autónomas pueden asumir competencias, como la ordenación del territorio, urbanismo y vivienda, entre otras" 
        }, 
        { 
        "art": 149, 
        "preg": "¿Qué establece el artículo 149 sobre las competencias exclusivas del Estado?", 
        "resp": "Lista las materias de competencia exclusiva del Estado, como la regulación de las condiciones básicas que garanticen la igualdad de todos los españoles en el ejercicio de los derechos y en el cumplimiento de los deberes constitucionales" 
        } 
]; 

const preguntes_hard = [ 
    { 
        "art": 3, 
        "preg": "¿Qué establece el artículo 3?", 
        "resp": "El castellano es la lengua oficial del Estado y las demás lenguas españolas serán también oficiales en las respectivas comunidades autónomas" 
        }, 
        { 
        "art": 14, 
        "preg": "¿Qué derecho garantiza el artículo 14?", 
        "resp": "Igualdad ante la ley sin que pueda prevalecer discriminación alguna" 
        }, 
        { 
        "art": 15, 
        "preg": "¿Qué establece el artículo 15?", 
        "resp": "Todos tienen derecho a la vida y a la integridad física y moral" 
        }, 
        { 
        "art": 16, 
        "preg": "¿Qué derecho protege el artículo 16?", 
        "resp": "Libertad ideológica, religiosa y de culto" 
        }, 
        { 
        "art": 17, 
        "preg": "¿Qué derecho protege el artículo 17?", 
        "resp": "Derecho a la libertad y a la seguridad" 
        }, 
        { 
        "art": 18, 
        "preg": "¿Qué establece el artículo 18?", 
        "resp": "Dereho al honor, a la intimidad personal y familiar, y a la propia imagen" 
        }, 
        { 
        "art": 19, 
        "preg": "¿Qué derecho garantiza el artículo 19?", 
        "resp": "Derecho a elegir libremente su residencia y a circular por el territorio nacional" 
        }, 
        { 
        "art": 20, 
        "preg": "¿Qué establece el artículo 20?", 
        "resp": "Derecho a expresar y difundir libremente pensamientos, ideas y opiniones mediante la palabra, el escrito o cualquier otro medio de reproducción" 
        }, 
        { 
        "art": 21, 
        "preg": "¿Qué derecho garantiza el artículo 21?", 
        "resp": "Derecho de reunión pacífica y sin armas" 
        }, 
        { 
        "art": 22, 
        "preg": "¿Qué establece el artículo 22?", 
        "resp": "Derecho de asociación" 
        }, 
        { 
        "art": 23, 
        "preg": "¿Qué derecho garantiza el artículo 23?", 
        "resp": "Derecho a participar en los asuntos públicos" 
        }, 
        { 
        "art": 24, 
        "preg": "¿Qué establece el artículo 24?", 
        "resp": "Derecho a obtener la tutela efectiva de jueces y tribunales en el ejercicio de sus derechos e intereses legítimos, sin que, en ningún caso, pueda producirse indefensión" 
        }, 
        { 
        "art": 25, 
        "preg": "¿Qué establece el artículo 25?", 
        "resp": "Nadie puede ser condenado por acciones u omisiones que en el momento de producirse no constituían delito" 
        }, 
        { 
        "art": 26, 
        "preg": "¿Qué establece el artículo 26?", 
        "resp": "Se prohiben los tribunales de honor en el ámbito de la Administración civil y de las organizaciones profesionales" 
        }, 
        { 
        "art": 27, 
        "preg": "¿Qué establece el artículo 27?", 
        "resp": "Derecho a la educación y la libertad de enseñanza" 
        }, 
        { 
        "art": 28, 
        "preg": "¿Qué derecho reconoce el artículo 28?", 
        "resp": "Derecho a la sindicación libre y al derecho de huelga" 
        }, 
        { 
        "art": 29, 
        "preg": "¿Qué establece el artículo 29?", 
        "resp": "Derecho de petición individual y colectiva, por escrito, en la forma y con los efectos que determine la ley" 
        }, 
        { 
        "art": 31, 
        "preg": "¿Qué establece el artículo 31?", 
        "resp": "Sistema tributario justo inspirado en los principios de igualdad y progresividad" 
        }, 
        { 
        "art": 33, 
        "preg": "¿Qué derecho garantiza el artículo 33?", 
        "resp": "Derecho a la propiedad privada y a la herencia" 
        }, 
        { 
        "art": 35, 
        "preg": "¿Qué establece el artículo 35?",
        "resp": "Derecho y deber de trabajar, y a una remuneración suficiente para satisfacer sus necesidades y las de su familia" 
        }, 
        { 
        "art": 37, 
        "preg": "¿Qué derecho reconoce el artículo 37?", 
        "resp": "Derecho a la negociación colectiva laboral" 
        }, 
        { 
        "art": 39, 
        "preg": "¿Qué establece el artículo 39?", 
        "resp": "Los poderes públicos aseguran la protección social, económica y jurídica de la familia" 
        }, 
        { 
        "art": 40, 
        "preg": "¿Qué establece el artículo 40?", 
        "resp": "Fomento del progreso social y económica y distribución equitativa de la renta" 
        }, 
        { 
        "art": 43, 
        "preg": "¿Qué derecho garantiza el artículo 43?", 
        "resp": "Derecho a la protección de la salud" 
        }, 
        { 
        "art": 45, 
        "preg": "¿Qué derecho garantiza el artículo 45?", 
        "resp": "Derecho a disfrutar de un medio ambiente adecuado para el desarollo de la persona" 
        }, 
        { 
        "art": 47, 
        "preg": "¿Qué derecho garantiza el artículo 47?", 
        "resp": "Derecho a disfrutar de una vivienda digna y adecuada" 
        }, 
        { 
        "art": 49, 
        "preg": "¿Qué derecho garantiza el artículo 49?", 
        "resp": "Los poderes públicos realizarán una política de previsión, tratamiento, rehabilitación e integración de los disminuidos físicos, sensoriales y psíquicos" 
        }, 
        { 
        "art": 50, 
        "preg": "¿Qué establece el artículo 50?", 
        "resp": "Los poderes públicos garantizarán, mediante pensiones adecuadas y periódicamente actualizadas, la suficiencia económica a los ciudadanos durante la tercera edad" 
        }, 
        { 
        "art": 55, 
        "preg": "¿Qué establece el artículo 55?", 
        "resp": "Circunstancias y condiciones bajo las cuales pueden suspenderse ciertos derechos y libertades" 
        }, 
        { 
        "art": 56, 
        "preg": "¿Qué establece el artículo 56?", 
        "resp": "El Rey es el Jefe del Estado, símbolo de su unidad y permanencia" 
        }, 
        { 
        "art": 62, 
        "preg": "¿Qué establece el artículo 62?", 
        "resp": "El Rey sanciona y promulga las leyes, convoca y disuelve las Cortes Generales y convoca elecciones y referendos en los términos previstos en la Constitución" 
        }, 
        { 
        "art": 66, 
        "preg": "¿Qué establece el artículo 66?", 
        "resp": "Las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado" 
        }, 
        { 
        "art": 81, 
        "preg": "¿Qué establece el artículo 81?", 
        "resp": "Son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y de las libertades públicas, las que aprueban los Estatutos de Autonomía y el régimen electoral general" 
        }, 
        { 
        "art": 92, 
        "preg": "¿Qué establece el artículo 92?", 
        "resp": "Las decisiones políticas de especial trascendencia podrán ser sometidas a referéndum consultivo de todos los ciudadanos" 
        }, 
        { 
        "art": 97, 
        "preg": "¿Qué función tiene el Gobierno según el artículo 97?", 
        "resp": "El Gobierno dirige la política interior y exterior, la administración civil y militar y la defensa del Estado" 
        }, 
        { 
        "art": 99, 
        "preg": "¿Qué establece el artículo 99?", 
        "resp": "Tras cada renovación del Congreso de los Diputados, el Rey, previa consulta con los representantes designados por los grupos políticos con representación parlamentaria, y a través del Presidente del Congreso, propondrá un candidato a la Presidencia del Gobierno" 
        }, 
        { 
        "art": 102, 
        "preg": "¿Qué establece el artículo 102?", 
        "resp": "(El Presidente y los ministros) Sólo pueden ser acusados por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones" 
        }, 
        { 
        "art": 106, 
        "preg": "¿Qué establece el artículo 106?", 
        "resp": "Los Tribunales controlan la legalidad de la actuación administrativa y el sometimiento de ésta a los fines que la justifican" 
        }, 
        { 
        "art": 119, 
        "preg": "¿Qué derecho garantiza el artículo 119?", 
        "resp": "Justicia gratuita para quienes acrediten insuficiencia de recursos para litigar" 
        }, 
        { 
        "art": 123, 
        "preg": "¿Qué establece el artículo 123?", 
        "resp": "(El Tribunal Supremo) Es el órgano jurisdiccional superior en todos los órdenes, salvo lo dispuesto en materia de garantías constitucionales" 
        }, 
        { 
        "art": 125, 
        "preg": "¿Qué establece el artículo 125?", 
        "resp": "Participación de los ciudadanos en la administración de justicia mediante la institución del Jurado" 
        }, 
        { 
        "art": 161, 
        "preg": "¿Qué función tiene el Tribunal Constitucional según el artículo 161?", 
        "resp": "(El Tribunal Constitucional) Es competente para conocer del recurso de inconstitucionalidad, del recurso de amparo, de los conflictos de competencia entre el Estado y las comunidades autónomas y de otros conflictos en defensa de la autonomía local" 
        }, 
        { 
        "art": 148, 
        "preg": "¿Qué establece el artículo 148?", 
        "resp": "Enumera las materias en las que las comunidades autónomas pueden asumir competencias, como la ordenación del territorio, urbanismo y vivienda, entre otras" 
        }, 
        { 
        "art": 149, 
        "preg": "¿Qué establece el artículo 149?", 
        "resp": "Lista las materias de competencia exclusiva del Estado, como la regulación de las condiciones básicas que garanticen la igualdad de todos los españoles en el ejercicio de los derechos y en el cumplimiento de los deberes constitucionales" 
        } 
]; 

const quiz_tema_1 = [

    {question: "¿De cuántos títulos consta la Constitución española de 1978?",
    choices:["Nueve títulos", "Diez títulos", "Once títulos", "Doce títulos"],
    answer:1},
    
    {question: "¿Qué título de la Constitución española regula la Corona?",
    choices:["Título I", "Título II", "Título III", "Título IV"],
    answer:1},
    
    {question: "¿Qué título de la Constitución española regula las Cortes Generales?",
    choices:["Título VI", "Título V", "Título III", "Título IV"],
    answer:2},
    
    {question: "Según el artículo 1 de la Constitución española, ¿en qué tipo de Estado se constituye España?",
    choices:["Un Estado democrático y plural", "Un Estado social y monárquico", "Un Estado parlamentario democrático", "Un Estado social i democrático de derecho"],
    answer:3},
    
    {question: "¿Dónde se regula que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado?",
    choices:["En el título preliminar de la Constitución española", "En el preámbulo de la Constitución española", "En el título I de la Constitución española", "En el título II de la Constitución española"],
    answer:0},
    
    {question: "Según el artículo 1 de la Constitución española, ¿Cuál es la forma política del Estado español?",
    choices:["La democracia popular", "La monarquía presidencialista", "La monarquía parlamentaria", "La democracia parlamentaria"],
    answer:2},
    
    {question: "Según el artículo 2 de la Constitución española, la Constitución se fundamenta:",
    choices:["En la indisoluble unidad de la Nación Española", "En el principio democrático y social", "En la soberanía nacional que reside en el pueblo", "En el principio de justicia social"],
    answer:0},
    
    {question: "Según el artículo 3 de la Constitución española, las diferentes modalidades lingüísticas de España  son:",
    choices:["Un derecho de los ciudadanos españoles", "Un patrimonio cultural, objeto de especial respeto y protección", "Un valor fundamental de la cultura española", "Las respuestas a) y b) son correctas"],
    answer:1},
    
    {question: "¿La Constitución española establece que el castellano es la lengua española oficial del Estado?",
    choices:["Sí, en el preámbulo", "No", "Sí, en el título preliminar", "Sí, en el título I"],
    answer:2},
    
    {question: "Según el artículo 6 de la Constitución española, la estructura interna y el funcionamiento de los partidos políticos deben ser:",
    choices:["Plurales", "Independientes", "Objetivos", "Democráticos"],
    answer:3},
    
    {question: "Según el artículo 1 de la Constitución española, los poderes del Estado emanan de:",
    choices:["La corona", "El pueblo español", "El rey", "Las Cortes Generales"],
    answer:1},
    
    {question: "Según el artículo 4 de la Constitución española, ¿las comunidades autónomas pueden reconocer banderas y enseñas propias?",
    choices:["Sí, con autorización previa del Congreso y del Senado", "Sí, con autorización previa del Gobierno", "Sí, si está reconocido por el Estatuto de autonomía correspondiente", "Las respuestas b) y c) son correctas"],
    answer:2},
    
    {question: "Según el artículo 4 de la Constitución española, las banderas y enseñas propias de las comunidades autónomas:",
    choices:["Sólo se utilizarán en sus edificios públicos", "Se utilizarán junto con la bandera de España en sus edificios públicos", "Se utilizarán junto con la bandera de España y de la Unión Europea en sus edificios públicos", "Se utilizarán junto con la bandera de España en sus edificios públicos y en sus actos oficiales"],
    answer:3},
    
    {question: "¿Dónde se regula que se reconoce y garantiza el derecho a la autonomía de las nacionalidades y de las regiones que  integran la Nación española y la solidaridad entre todas ellas?",
    choices:["En el título preliminar de la Constitución española", "En el preámbulo de la Constitución española", "En el título I de la Constitución española", "En el título II de la Constitución española"],
    answer:0},
    
    {question: "Según el artículo 6 de la Constitución española, los partidos políticos:",
    choices:["Contribuyen a la defensa y a la promoción de los intereses económicos y sociales", "Defienden el ordenamiento constitucional", "Expresan el pluralismo político", "Garantizan la participación democrática"],
    answer:2},
    
    {question: "Según el artículo 7 de la Constitución española, los Sindicatos:",
    choices:["Contribuyen a la defensa y a la promoción de los intereses económicos y sociales que les son propios", "Defienden el ordenamiento constitucional", "Expresan el pluralismo social", "Garantizan la participación democrática"],
    answer:0},
    
    {question: "Según el artículo 7 de la Constitución española, ¿quién contribuye a la defensa y a la promoción de los intereses económicos y sociales que les son propios?",
    choices:["Los partidos políticos", "Los sindicatos de trabajadores", "Las asociaciones empresariales", "Las respuestas b) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 8 de la Constitución española, ¿quién tiene como misión garantizar la soberanía y la independencia de España?",
    choices:["El poder judicial", "Las fuerzas armadas", "El rey", "El Gobierno"],
    answer:1},
    
    {question: "Según el artículo 8 de la Constitución española, las Fuerzas Armadas tienen como misión:",
    choices:["Garantizar la soberanía y la independencia de España", "Defender la integridad territorial de España", "Defender el ordenamiento constitucional español", "Las respuestas a) b) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 9 de la Constitución española, los ciudadanos y los poderes públicos están sujetos a:",
    choices:["La Constitución", "La Constitución y las leyes", "La Constitución y el resto del ordenamiento jurídico", "Las leyes"],
    answer:2},
    
    {question: "Según el artículo 9 de la Constitución española, se garantiza el principio de:",
    choices:["Jerarquía institucional", "Retroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", " Irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", "Solidaridad"],
    answer:2},
    
    {question: "Según el artículo 9 de la Constitución española, se garantiza el principio de:",
    choices:["Jerarquía normativa", "Retroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", "Irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", "Las respuestas a) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 10 de la Constitución española, las normas relativas a los derechos fundamentales y a las libertades que la Constitución reconoce se interpretarán de conformidad con:",
    choices:["La Declaración Universal de Derechos Humanos", "La Carta Social Europea", "El Convenio de Derechos Humanos y Sociales Europeo", "La Directiva 5/2017 de derechos humanos"],
    answer:0},
    
    {question: "¿Dónde se regula la mayoría de edad de los españoles?",
    choices:["En el título preliminar de la Constitución española", "En el  preámbulo de la Constitución española", "En el título I de la Constitución española", "En el título II de la Constitución española"],
    answer:2},
    
    {question: "Según el artículo 11 de la Constitución española, ¿puede el Estado español concertar tratados de doble nacionalidad con otros países?",
    choices:["No", "Sí, con los países iberoamericanos", "Sí, con los países que hayan tenido o tengan una vinculación particular con España", "Las respuestas b) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 11 de la Constitución española, ¿puede un español de origen ser privado de su nacionalidad?",
    choices:["Sí, en los casos previstos por ley", "En ningún caso", "Sólo en caso de terrorismo o pertenencia a banda armada", "Sólo en caso de delito flagrante"],
    answer:1},
    
    {question: "De acuerdo con el artículo 13 de la Constitución española, ¿en qué caso queda excluida la extradición?",
    choices:["En los delitos políticos", "En los delitos de hacienda", "En los actos de terrorismo", "Las respuestas a) y c) son correctas"],
    answer:0},
    
    {question: "Según el artículo 16 de la Constitución española, ¿qué confesión religiosa tiene el carácter de estatal?",
    choices:["Ninguna", "La religión cristiana", "La religión católica", "La creencia religiosa que histórica y tradicionalmente es propia de España"],
    answer:0},
    
    {question: "Según el artículo 17 de la Constitución española, ¿cuánto puede durar como máximo la detención preventiva?",
    choices:["Sesenta y cinco horas", "Sesenta y dos horas", "Setenta y cinco horas", "Setenta y dos horas"],
    answer:3},
    
    {question: "De acuerdo con el artículo 17 de la Constitución española, una persona detenida tiene derecho a:",
    choices:["Ser informada inmediatamente de sus derechos y de las razones de la detención", "No ser obligada a declarar", "La asistencia de un abogado", "Las respuestas a) b) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 22 de la Constitución española, ¿qué tipo de asociaciones están prohibidas?",
    choices:["Ninguna", "Las asociaciones de carácter lucrativo", "Las asociaciones secretas y las de carácter paramilitar", "Ninguna, excepto las de carácter paramilitar"],
    answer:2},
    
    {question: "Según el artículo 25 de la Constitución española, las penas privativas de libertad estarán orientadas a:",
    choices:["La reeducación", "Al cumplimiento estricto de la pena", "La reinserción social", "Las respuestas a) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 25 de la Constitución española, ¿qué tipo de sanciones no puede imponer la Administración civil?",
    choices:["Sanciones que directa o subsidiariamente impliquen privación de libertad", "Sanciones pecuniarias", "Sanciones administrativas", "Multas"],
    answer:0},
    
    {question: "De acuerdo con el artículo 26 de la Constitución española, ¿qué tipo de tribunales están prohibidos en el ámbito de la Administración civil y de las organizaciones profesionales?",
    choices:["Tribunales castrenses", "Tribunales de honor", "Jurados populares", "Tribunales civiles"],
    answer:1},
    
    {question: "Según el artículo 28 de la Constitución española, sobre la libertad de sindicación, ¿tienen todos derecho a sindicarse libremente?",
    choices:["Sí, sin excepciones", "No, la ley puede limitar o exceptuar el ejercicio de este derecho a las Fuerzas o Institutos armados u otros cuerpos con disciplina militar", "No, se exceptúa a los jueces y magistrados", "Las respuestas b) y c) son correctas"],
    answer:1},
    
    {question: "Según el artículo 54 de la Constitución española, ¿a quién se designa como alto comisionado de las Cortes Generales?",
    choices:["Al fiscal general del estado", "Al Presidente del Consejo General del Poder Judicial", "Al Defensor del Pueblo", "Al presidente del Consejo del Estado"],
    answer:2},
    
    {question: "Según el artículo 54 de la Constitución española, ¿qué norma regula la institución del Defensor del Poble?",
    choices:["Una ley orgánica", "Una ley ordinaria", "Un reglamento", "Un decreto ley"],
    answer:0},
    
    {question: "De acuerdo con el artículo 53 de la Constitución española, ¿qué tipo de recurso judicial se puede interponer para defender la objeción de conciencia ante el Tribunal Constitucional?",
    choices:["Un recurso de apelación", "Un recurso de inconstitucionalidad", "Un recurso de amparo", "Un recurso de casación"],
    answer:2},
    
    {question: "Según el artículo 55 de la Constitución española, ¿en qué caso la garantía al derecho del secreto de las comunicaciones puede ser suspendida?",
    choices:["Cuando sea acordada la declaración del estado de excepción", "Nunca, en ningún caso", "Cuando sea acordada la declaración del estado de sitio", "Las respuestas a) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 54 de la Constitución española, ¿quién tiene la misión de defender los derechos fundamentales comprendidos en el título I?",
    choices:["El Defensor del Pueblo", "El Ministerio Fiscal", "Los tribunales de justicia", "El ministro competente en materia de justicia"],
    answer:0},
    
    {question: "Según el artículo 166 de la Constitución española, ¿quién puede tener la iniciativa de reforma constitucional?",
    choices:["El Gobierno y el Congreso", "Las Cortes Generales y las asambleas legislativas autonómicas", "El Gobierno, el Congreso , el Senado y las asambleas legislativas autonómicas", "El Gobierno estatal y los gobiernos autonómicos"],
    answer:2},
    
    {question: "De acuerdo con el artículo 167 de la Constitución española, ¿qué mayoría se requiere en cada una de las cámaras de las Cortes Generales para aprobar un proyecto de reforma constitucional no esencial?",
    choices:["Mayoría de dos tercios", "Mayoría de tres quintas partes", "Mayoría absoluta", "Mayoría de tres cuartas partes"],
    answer:1},
    
    {question: "Según el artículo 167 de la Constitución española, ¿una vez aprobada una reforma constitucional no esencial por parte de las Cortes Generales se requiere de un referéndum para ser ratificada?",
    choices:["No, nunca", "Sí, siempre", "Sí, siempre que lo solicite una décima parte de los miembros de cualquiera de las cámaras", "Sí, siempre que lo solicite una quinta parte de los miembros de cualquiera de las cámaras"],
    answer:2},
    
    {question: "Según el artículo 168 de la Constitución española, sobre la reforma constitucional, ¿en qué caso se produce la disolución inmediata de las Cortes Generales?",
    choices:["Nunca", "Con cualquier tipo de reforma constitucional", "Si se propone la revisión total de la Constitución", "Si se propone la revisión parcial que afecte al título III"],
    answer:2},
    
    {question: "Según el artículo 168 de la Constitución española, ¿qué se requiere para aprobar una reforma parcial de la Constitución que afecte al título II?",
    choices:["La aprobación de la reforma por mayoría de dos tercios de cada cámara", "La disolución inmediata de las Cortes Generales", "La aprobación de la reforma por mayoría absoluta de cada cámara", "Las respuestas a) y b) son correctas"],
    answer:3},
    
    {question: "Según el artículo 168 de la Constitución española, ¿qué se requiere para aprobar una reforma parcial de la Constitución que afecte al título preliminar?",
    choices:["La aprobación de la reforma por mayoría de dos tercios de cada cámara", "La aprobación de la reforma por mayoría absoluta de cada cámara", "La disolución inmediata de las Cortes Generales", "Las respuestas a) y c) son correctas"],
    answer:3},
    
    {question: "Según el artículo 168 de la Constitución española, una vez aprobada por las Cortes Generales una reforma parcial de la Constitución que afecte al título Preliminar ¿qué se requiere para ratificarla?",
    choices:["Un referéndum", "La sanción por parte del rey", "La publicación en el Boletín Oficial del Estado", "Las repuestas b) y c) son correctas"],
    answer:0},
    
    {question: "Según el artículo 168 de la Constitución española, ¿es necesario someter a referéndum la reforma del título preliminar una vez aprobada por las Cortes Generales?",
    choices:["No, no es necesario", "Sí, en todo caso", "Sí, siempre que lo solicite una décima parte de los miembros de cualquiera de las cámaras", "Únicamente en caso de desacuerdo entre el Congreso y el Senado"],
    answer:1},
    
    {question: "Según el artículo 169 de la Constitución española, ¿cuándo no se puede iniciar una reforma constitucional?",
    choices:["No hay limitaciones, se puede iniciar en cualquier momento", "En tiempo de guerra", "En un proceso electoral", "En una moción de censura"],
    answer:1},
    
    {question: "De acuerdo con el artículo 169 de la Constitución española, ¿se puede iniciar una reforma constitucional en cualquier momento?",
    choices:["Sí, siempre", "Sí, excepto en tiempo de guerra", "Sí, excepto durante un proceso electoral", "Sí, excepto en tiempo de guerra o de vigencia de los Estados de alarma, de excepción y de sitio"],
    answer:3},
    
];

const quiz_tema_2 = [

    {question: "¿En qué título de la Constitución española se regula la distribución de competencias entre el Estado y las comunidades autónomas?",
    choices: ["En el título V", "En el título VI", "En el título VII", "En el título VIII"],
    answer: 3},
    
    {question: "Según el artículo 137 de la Constitución española, ¿cómo se organiza territorialmente el Estado?",
    choices: ["En comunidades autónomas", "En municipios, en provincias y en comunidades autónomas", "En municipios, en islas, en provincias y en comunidades autónomas", "En provincias, en islas y en comunidades autónomas"],
    answer: 1},
    
    {question: "Según el artículo 141 de la Constitución española, cualquier alteración de los límites provinciales requiere:",
    choices: ["Ser aprobada por la diputación provincial", "Ser aprobada por el Consejo de Gobierno de la comunidad autónoma afectada", "Ser aprobada por las Cortes Generales, mediante una ley orgánica", "Ser aprobada por las Cortes Generales, mediante una ley ordinaria"],
    answer: 2},
    
    {question: "Según el artículo 140 de la Constitución española, los alcaldes de los municipios serán elegidos:",
    choices: ["Por los regidores del ayuntamiento", "Por los vecinos del municipio", "Por el presidente de la comunidad autónoma", "Las respuestas a) o b) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 143 de la Constitución española, en el ejercicio del derecho a la autonomía se pueden constituir en comunidad autónoma:",
    choices: ["Las provincias limítrofes que tengan características históricas, culturales y económicas comunes", "Los territorios insulares", "Las provincias de entidad regional histórica", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 145 de la Constitución española, ¿se permite la federación de comunidades autónomas?",
    choices: ["En ningún caso", "Sí, con  la aprobación de las Cortes Generales por medio de una ley orgánica", "Excepcionalmente por motivos tasados con la aprobación del Congreso", "Excepcionalmente con la aprobación del Senado"],
    answer: 0},
    
    {question: "Según el artículo 147 de la Constitución española, ¿cuál es la norma institucional básica de cada comunidad autónoma?",
    choices: ["La Constitución española", "El Estatuto de autonomía", "Las leyes de desarrollo de competencias autonómicas", "Las respuestas a) y b) son correctas"],
    answer: 1},
    
    {question: "Según el artículo 147 de la Constitución española, los estatutos de autonomía tienen que contener, entre otros:",
    choices: ["La delimitación del territorio", "La denominación de los municipios", "La denominación de la Comunidad que se ajuste mejor a su identidad histórica", "Las respuestas a) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 147 de la Constitución española, ¿qué se requiere para la reforma de un Estatuto de Autonomía?",
    choices: ["La aprobación del Senado por mayoría absoluta", "La aprobación del Congreso de los Diputados por ley ordinaria", "La aprobación de las Cortes Generales por ley orgánica", "La aprobación del parlamento autonómico por ley ordinaria"],
    answer: 2},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["Las relaciones internacionales", "La asistencia social", "El fomento de la cultura", "La caza"],
    answer: 0},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La promoción y la ordenación del turismo", "La legislación sobre propiedad intelectual e industrial", "La enseñanza de la lengua de la comunidad autónoma", "La artesanía"],
    answer: 1},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La ordenación del territorio, urbanismo y vivienda", "Los espacios forestales y su aprovechamiento", "La Administración de justicia", "Las ferias interiores"],
    answer: 2},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["El régimen aduanero y arancelario", "La artesanía", "La caza", "Las alteraciones de los términos municipales compresos en la comunidad autónoma"],
    answer: 0},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["Las ferias interiores", "La defensa y las fuerzas armadas", "La promoción del deporte", "El fomento de la cultura"],
    answer: 1},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La ordenación del territorio, urbanismo y vivienda", "El patrimonio monumental de interés para la comunidad autónoma", "La legislación mercantil, penal y penitenciaria", "La artesanía"],
    answer: 2},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La agricultura y la ganadería", "Los puertos y aeropuertos deportivos", "La pesca en aguas interiores", "El derecho de asilo"],
    answer: 3},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La legislación laboral", "Las ferias interiores", "Los espacios forestales y su aprovechamiento", "La organización de las instituciones de autogobierno autonómicos"],
    answer: 0},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La promoción del deporte", "La hacienda general y la deuda del Estado", "El fomento de la investigación", "La gestión en materia de protección del medio ambiente"],
    answer: 1},
    
    {question: "Según el artículo 149 de la Constitución española, el Estado tiene competencias exclusivas en:",
    choices: ["La legislación sobre expropiación forzosa", "La asistencia social", "Las bases del régimen jurídico de las administraciones públicas", "Las respuestas a) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["La artesanía", "Las relaciones internacionales", "La administración de justicia", "El derecho de asilo"],
    answer: 0},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["Los espacios forestales y su aprovechamiento", "La defensa y las fuerzas armadas", "La gestión en materia de protección del medio ambiente", "Las respuestas a) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["La legislación sobre propiedad intelectual", "Los puertos y aeropuertos deportivos", "La legislación sobre propiedad industrial", "Las respuestas a) y c) son correctas"],
    answer: 1},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["La hacienda general y la deuda del Estado", "La marina mercante", "Las ferias interiores", "El régimen aduanero y arancelario"],
    answer: 2},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["El comercio exterior", "La estadística para finalidades estatales", "La asistencia social", "Los museos, bibliotecas y archivos de titularidad estatal"],
    answer: 2},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas pueden asumir competencias en:",
    choices: ["Las bases del régimen minero y energético", "El sistema monetario", "El régimen aduanero y arancelario", "La promoción y ordenación del turismo dentro del ámbito autonómico"],
    answer: 3},
    
    {question: "Según el artículo 150 de la Constitución española, el Estado puede transferir o delegar a las comunidades autónomas facultades correspondientes a una materia de titularidad estatal que por su naturaleza sean susceptibles de transferencia o delegación. ¿Mediante qué tipo de norma se puede hacer?",
    choices: ["Un decreto de transferencias", "Una ley orgánica", "Una ley ordinaria", "Una ley marco"],
    answer: 1},
    
    {question: "Según el artículo 149 de la Constitución española, sobre la distribución de competencias, ¿las materias no atribuidas expresamente al Estado por la Constitución podrán corresponder a las comunidades autónomas?",
    choices: ["No", "Sí, en virtud de los Estatutos de autonomía respectivos", "Sí, mediante un acuerdo de transferencias", "Sí, mediante una ley de delegación"],
    answer: 1},
    
    {question: "Según el artículo 152 de la Constitución española, en los Estatutos de Autonomía la organización institucional autonómica se basará en:",
    choices: ["Una asamblea legislativa y un consejo de gobierno", "Una asamblea legislativa, un consejo de gobierno y un presidente", "Una asamblea legislativa, un consejo de gobierno, un presidente y un tribunal superior de justicia", "Una asamblea legislativa, un consejo de Gobierno y un tribunal superior de justicia"],
    answer: 2},
    
    {question: "Según el artículo 152 de la Constitución española, sobre el presidente de una comunidad autónoma:",
    choices: ["Será elegido por la asamblea legislativa entre sus miembros y nombrado por el rey", "Le corresponde la dirección del Consejo de Gobierno", "Le corresponde la suprema representación de la comunidad autónoma respectiva y la ordinaria del Estado dentro de aquella", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 153 de la Constitución española, ¿quién ejercerá el control de constitucionalidad sobre las disposiciones normativas con fuerza de ley emanadas de una comunidad autónoma?",
    choices: ["El Tribunal Supremo", "El Tribunal Superior de Justicia de la comunidad autónoma respectiva", "El Tribunal Constitucional", "La Audiencia Provincial"],
    answer: 2},
    
    {question: "Según el artículo 153 de la Constitución española, ¿quién ejercerá el control jurisdiccional en aquello que se refiere a la administración autónoma y a sus normas reglamentarias?", 
    choices: ["La jurisdicción contenciosa administrativa", "La jurisdicción civil", "La jurisdicción penal", "La jurisdicción social"],
    answer: 0},
    
    {question: "Según el artículo 153 de la Constitución española, ¿quién ejercerá el control en los aspectos económicos y presupuestarios en una comunidad autónoma?",
    choices: ["El consejo económico y social", "El Tribunal de Cuentas", "El ministerio competente en materia presupuestaria", "La consejería competente en materia presupuestaria"],
    answer: 1},
    
    {question: "Según el artículo 154 de la Constitución española, ¿a quién corresponde dirigir la Administración del Estado en el territorio de la Comunidad Autónoma?",
    choices: ["Al ministro competente en materia de Interior", "Al presidente de la Comunidad Autónoma", "Al delegado del Gobierno", "Al ministro competente en materia de administraciones públicas"],
    answer: 2},
    
    {question: "Según el artículo 156 de la Constitución española, las comunidades autónomas para cumplir y ejercer sus competencias gozarán:",
    choices: ["De autonomía financiera", "De tutela del Estado", "Del principio de solidaridad entre Estado y comunidades autónomas", "De suficiencia presupuestaria"],
    answer: 0},
    
    {question: "Según el artículo 157 de la Constitución española, los recursos de las comunidades autónomas estarán constituidos, entre otros, por:",
    choices: ["Impuestos cedidos total o parcialmente por el Estado", "Rendimientos procedentes del su patrimonio y del patrimonio estatal", "El producto de operaciones de débito", "Las respuestas a) y b) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 157 de la Constitución española, los recursos de las comunidades autónomas estarán constituidos, entre otros:",
    choices: ["Por sus propios impuestos, tasas y contribuciones especiales", "Por transferencias de un fondo de compensación interterritorial", "Por el producto de operaciones de crédito", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 157 de la Constitución española, ¿con qué norma se puede regular la posible colaboración financiera entre las comunidades autónomas y el Estado?",
    choices: ["Una ley ordinaria de transferencias", "Una ley orgánica", "Un decreto de transferencias", "Un convenio regulador de transferencias"],
    answer: 1},
    
    {question: "Según el artículo 158 de la Constitución española, ¿dónde se puede establecer una asignación a las comunidades autónomas en función del volumen de los servicios y de las actividades estatales que hayan asumido?", 
    choices: ["En los presupuestos generales del Estado", "En los presupuestos generales de la comunidad autónoma", "En la ley ordinaria de transferencias", "Las respuestas a) b) y c) son correctas"],
    answer: 0},
    
    {question: "Según el artículo 158 de la Constitución española, para hacer efectivo el principio de solidaridad y por tal de corregir desequilibrios económicos interterritoriales el Estado constituirá:",
    choices: ["Una partida presupuestaria en los Presupuestos Generales del Estado", "Una asignación anual de fondo de compensación", "Un fondo de compensación destinado a gastos de inversión", "Las respuestas a) y b) son correctas"],
    answer: 2},
    
    {question: "Según el artículo 158 de la Constitución española, ¿quien  se encarga de distribuir los recursos del fondo de compensación interterritorial entre las comunidades autónomas y las provincias, en su caso?",
    choices: ["La asamblea legislativa de la comunidad autónoma respectiva", "Las Cortes Generales", "El ministerio competente en materia presupuestaria", "La consejería competente en materia presupuestaria"],
    answer: 1},
    
    {question: "Según el artículo 138 de la Constitución española, sobre la organización territorial, el Estado garantiza la realización efectiva del principio:",
    choices: ["De igualdad", "De autonomía", "De solidaridad", "De equilibrio"],
    answer: 2},
    
    {question: "Según el artículo 139 de la Constitución española, en cualquier parte del territorio del Estado, todos los españoles tienen:",
    choices: ["Los mismos derechos y diferentes obligaciones", "Los mismos derechos", "Las mismas obligaciones", "Las respuestas b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 140 de la Constitución española, los regidores de un ayuntamiento serán elegidos mediante:",
    choices: ["Sufragio universal igual, libre, directo y secreto", "Sufragio universal igual, directo y secreto", "Sufragio universal libre, directo y secreto", "Sufragio universal proporcional, libre, directo y secreto"],
    answer: 0},
    
    {question: "Según el artículo 147 de la Constitución española, sobre los Estatutos de Autonomía, el Estado los reconocerá y amparará:",
    choices: ["Como normativa autónoma e independiente", "Como parte integrante de su ordenamiento jurídico", "Como parte independiente de su ordenamiento jurídico", "Como normativa básica de su ordenamiento jurídico"],
    answer: 1},
    
    {question: "Según el artículo 149 de la Constitución española, la competencia en materia de defensa y fuerzas armadas:",
    choices: ["Es una competencia exclusiva del Estado", "Es una competencia exclusiva de la comunidad autónoma", "Es una competencia de desarrollo legislativo y de ejecución  autonómica", "Es una competencia compartida del Estado"],
    answer: 0},
    
    {question: "Según el artículo 149 de la Constitución española, la competencia en relaciones internacionales:",
    choices: ["Es una competencia exclusiva del Estado", "Es una competencia exclusiva de la comunidad autónoma", "Es una competencia de desarrollo legislativo y de ejecución  autonómica", "Es una competencia compartida del Estado"],
    answer: 0},
    
    {question: "Según el artículo 149 de la Constitución española, la competencia en  la nacionalidad:",
    choices: ["Es una competencia exclusiva del Estado", "Es una competencia exclusiva de la comunidad autónoma", "Es una competencia de desarrollo legislativo y de ejecución  autonómica ", "Es una competencia compartida del Estado"],
    answer: 0},
    
    {question: "Según el artículo 152 de la Constitución española,el  presidente de la comunidad autónoma es nombrado:",
    choices: ["Por la asamblea legislativa autonómica", "Por el rey", "Por el Consejo de Gobierno", "Por los diputados"],
    answer: 1},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas podrán asumir competencias en:",
    choices: ["La organización de sus instituciones de autogobierno", "Los montes y aprovechamientos forestales", "La ordenación del territorio, urbanismo y vivienda", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 148 de la Constitución española, las comunidades autónomas podrán asumir competencias en:",
    choices: ["La gestión en materia de protección del medio ambiente", "La hacienda general y la deuda del Estado", "La Administración de justicia", "Las bases del régimen minero y energético"],
    answer: 0}
    
];

const quiz_tema_3 = [

    {question: "Qui tria el defensor del poble europeu?",
    choices: ["El Consell Europeu", "El Tribunal de Justícia", "El Parlament Europeu", "La Comissió Europea"],
    answer: 2},
    
    {question: "Quin any es va crear el Consell Europeu?",
    choices: ["El 1986", "El 1974", "El 1955", "El 1925"],
    answer: 1},
    
    {question: "Quina de les següents no és una institució de la Unió Europea?",
    choices: ["El Parlament Europeu", "El Comitè Europeu de Protecció de Dades", "El Consell Europeu", "La Comissió Europea"],
    answer: 1},
    
    {question: "On té la seu el Parlament Europeu?",
    choices: ["A París", "A Roma", "A Barcelona", "A Estrasburg"],
    answer: 3},
    
    {question: "Quan es va signar el Tractat de Roma?",
    choices: ["El 2 de setembre del 2009", "El 25 de març de 1957", "El 8 de maig de 1965", "L’1 de juliol de 1935"],
    answer: 1},
    
    {question: "El Tractat de la Unió Europea es va signar a Maastricht:",
    choices: ["El 25 de juny de 1979", "El 16 de març de 1993", "El 17 d'octubre de 1971", "El 7 de febrer de 1992"],
    answer: 3},
    
    {question: "Durant quins mesos el Consell duu a terme les reunions a Luxemburg?",
    choices: ["Abril, juny i octubre", "Gener, febrer i març", "El Consell es reuneix quan el convoca el president", "Juny, juliol i agost"],
    answer: 0},
    
    {question: "Senyalau la resposta correcta en relació amb el Tribunal de Justícia de la Unió Europea:",
    choices: ["Interpreta el dret dels estats membres", "Aplica i interpreta el dret comunitari", "Interpreta, però no aplica el dret comunitari", "Aplica el dret comunitari en col·laboració amb els ministres d'assumptes exteriors de cada país membre"],
    answer: 1},
    
    {question: "És correcte afirmar que les directives de la Unió Europea:",
    choices: ["Tenen un abast general. Són obligatòries en tots els seus elements i directament aplicables a cada estat membre", "Obliguen l'estat membre destinatari quant al resultat que s'hagi d'aconseguir, i deixen, tanmateix, a les autoritats nacionals l'elecció de la forma i dels mitjans", "No són vinculants i cada estat membre pot incorporar-les al seu ordenament jurídic", "Són dret comunitari primari i no vinculant"],
    answer: 1},
    
    {question: "El Tractat de París que crea la Comunitat Europea del Carbó i l'Acer va entrar en vigor:",
    choices: ["El 17 d'octubre de 1958", "El 13 de gener de 1981", "El 23 de juliol de 1952", "El 5 de setembre de 1962"],
    answer: 2},
    
    {question: "La Comissió Europea té la seu a Brussel·les, però alguns depertament i agències executives d'aquesta Comissió es troben a:",
    choices: ["París", "Berlín", "Luxemburg", "Niça"],
    answer: 2},
    
    {question: "El Consell Europeu està format per:",
    choices: ["Únicament pels caps d'estat o de govern dels estats membres de la Unió Europea", "Els caps d’estat o de govern dels estats membres de la Unió Europea i el president del Parlament Europeu", "Els caps d’estat o de govern dels estats membres de la Unió Europea, el president del Consell Europeu i el president del Parlament Europeu", "Els caps d’Estat o de govern dels estats membres de la Unió Europea, el president del Consell Europeu i el president de la Comissió Europea"],
    answer: 3},
    
    {question: "L'instrument normatiu que es dirigeix exclusivament als estats membres de la Unió Europea i els obliga a dur a terme una actuació positiva denominada transposició s'anomena:",
    choices: ["Reglament", "Llei", "Decisió", "Directiva"],
    answer: 3},
    
    {question: "El 18 d'abril de 1951 es va signar a París el Tractat constitutiu de la Unió Europea del Carbó i de l'Acer; quins països varen signar aquest Tractat?",
    choices: ["Alemanya occidental, Bèlgica, França, Itàlia, Luxemburg i els Països Baixos", "Alemanya occidental, Bèlgica, França, Itàlia, Gran Bretanya i els Països Baixos", "Alemanya occidental, França, Gran Bretanya, Itàlia, Luxemburg i els Països Baixos", "Alemanya occidental, Dinamarca, França, Itàlia, Luxemburg i els Països Baixos"],
    answer: 0},
    
    {question: "Els reglaments europeus es caracteritzen:",
    choices: ["Pel caràcter no obligatori, l'abast individual i l'aplicabilitat directa", "Pel caràcter no obligatori, l'abast individual i l'aplicació indirecta", "Pel caràcter no vinculant, l'abast general i la no aplicabilitat directa", "Pel caràcter obligatori, l’abast general i l’aplicació directa"],
    answer: 3},
    
    {question: "La Mesa del Parlament Europeu estarà composta:",
    choices: ["Pel president, dotze vicepresidents i els qüestors", "Pel president, deu vicepresidents i els qüestors", "Pel president, dos vicepresidents i els qüestors", "Pel president, catorze vicepresidents i els qüestors"],
    answer: 3},
    
    {question: "On es va signar l'Acta Única Europea?",
    choices: ["A Berlín", "A Luxemburg", "A Estrasburg", "A Munic"],
    answer: 1},
    
    {question: "Els drets, les llibertats i els principis reconeguts a la Unió Europea estan enunciats:",
    choices: ["En el Tractat de Tallinn", "No estan reconeguts avui dia", "En les constitucions dels països membres", "En la Carta dels Drets Fonamentals de la Unió Europea"],
    answer: 3},
    
    {question: "Quin organisme de la Unió Europea elabora l’avantprojecte del pressupost?",
    choices: ["El defensor del poble europeu", "El Consell Europeu", "La Comissió Europea", "El Parlament Europeu"],
    answer: 2},
    
    {question: "Quin és el principal òrgan fiscalitzador dels comptes de la Unió Europea?",
    choices: ["La Comissió", "El Parlament Europeu", "El Tribunal de Comptes", "El Banc Central Europeu"],
    answer: 2},
    
    {question: "Els actes legislatius es poden adoptar únicament a proposta de:",
    choices: ["La Comissió Europea", "El Consell Europeu", "El Consell d’Europa", "El Consell de la Unió Europea"],
    answer: 0},
    
    {question: "El president de la Comissió Europea és elegit:",
    choices: ["Pel Parlament", "Pel Consell de la Unió", "Pel Consell d'Europa", "Pel Tribunal Superior de Justícia"],
    answer: 0},
    
    {question: "El mandat dels parlamentaris europeus és de:",
    choices: ["Deu anys", "Dos anys", "Cinc anys", "Quinze anys"],
    answer: 2},
    
    {question: "El defensor del poble presentarà al Parlament Europeu un informe sobre el resultat de les seves investigacions:",
    choices: ["Semestralment", "Setmanalment", "Mensualment", "Anualment"],
    answer: 3},
    
    {question: "Les decisions de la Comissió s'adopten per:",
    choices: ["Consens de tres quartes parts dels membres", "Majoria dels seus membres", "Unanimitat", "Majoria de dos terços"],
    answer: 1},
    
    {question: "Quin any es va adherir Espanya a la Comunitat Europea?",
    choices: ["El 2001", "El 1950", "El 1986", "El 1991"],
    answer: 2},
    
    {question: "Quants vicepresidents assisteixen el president del Parlament Europeu?",
    choices: ["Vint-i-set", "Un", "Catorze", "Set"],
    answer: 2},
    
    {question: "El Consell Europeu es reuneix:",
    choices: ["Tres cops l'any", "Dues vegades cada any", "Un cop per trimestre", "Dues vegades per semestre"],
    answer: 3},
    
    {question: "Quin és el màxim òrgan polític de la Unió Europea?",
    choices: ["El Tribunal de Justícia", "El Defensor del Poble", "La Comissió Europea", "El Consell de la Unió Europea"],
    answer: 3},
    
    {question: "Quantes sessions plenàries com a mínim duu a terme el Parlament Europeu?",
    choices: ["Una a l'any", "Una al mes", "Una a la setmana", "Una al dia"],
    answer: 1},
    
    {question: "En relació amb la legislació de la Unió Europea, són instruments jurídics vinculants:",
    choices: ["El reglament, la directiva i la decisió", "El reglament, la recomanació i el dictamen", "La directiva, el dictamen i la decisió", "La directiva, el reglament i la recomanació"],
    answer: 0},
    
    {question: "Quina de les institucions següents es va crear per iniciativa del Tractat de la Unió Europea?",
    choices: ["El Comitè de les Regions", "El Defensor del Poble Europeu", "La Interpol", "El Banc Central Europeu"],
    answer: 0},
    
    {question: "El Parlament Europeu estarà compost per representants dels ciutadans de la Unió, amb un nombre de:",
    choices: ["305 més el president", "705, inclòs el president", "375 diputats", "Entre 457 i 528 diputats"],
    answer: 1},
    
    {question: "La renovació parcial dels jutges i advocats generals del Tribunal de Justícia Europeu té lloc cada:",
    choices: ["Tres anys", "Dos anys", "Deu anys", "Set anys"],
    answer: 0},
    
    {question: "Qui administra els crèdits comunitaris del Fons Social Europeu?",
    choices: ["El Tribunal de Comptes", "La Comissió", "La Intervenció General", "El Defensor del Poble"],
    answer: 1},
    
    {question: "El Parlament Europeu pot constituir una comissió temporal de recerca a petició:",
    choices: ["D’una desena part dels diputats", "D’una quarta part dels diputats", "D’una cinquena part dels diputats", "De la unanimitat dels diputats"],
    answer: 2},
    
    {question: "Qui presideix el Consell d'Afers Estrangers de la Unió Europea?",
    choices: ["L'alt representant de la Unió per a Assumptes Exteriors i Política de Seguretat", "Un ministre d’assumptes exteriors d’un país membre", "El president del Parlament", "El president de la Comissió"],
    answer: 0},
    
    {question: "Quin dels següents actes normatius de la Unió Europea és obligatori en tots els seus elements:",
    choices: ["La decisió", "El dictamen", "La recomanació", "La instrucció"],
    answer: 0},
    
    {question: "Quin dels països següents no forma part de la Unió Europea?",
    choices: ["Espanya", "França", "Noruega", "Finlàndia"],
    answer: 2},
    
    {question: "Quants escons corresponen a Espanya en el Parlament Europeu actualment?",
    choices: ["54", "59", "75", "45"],
    answer: 1},
    
    {question: "D'acord amb el que preveu el Tractat Constitutiu de la Unió Europea, com s'anomena la institució europea en què estan representats els ciutadans dels estats membres?:",
    choices: ["Comissió", "Parlament", "Tribunal Europeu", "Consell Europeu"],
    answer: 1},
    
    {question: "En quants pilars es basa el Tractat de la Unió Europea?",
    choices: ["Tres", "Vuit", "Quinze", "Vint-i-set"],
    answer: 0},
    
    {question: "Indicau la resposta correcta respecte del defensor del poble europeu:",
    choices: ["El seu mandat és de cinc anys", "És elegit per la Comissió", "Només els jutges poden recórrer al defensor del poble europeu", "No pot ser remogut de les funcions en cap cas"],
    answer: 0},
    
    {question: "El ple del Parlament Europeu adopta els acords:",
    choices: ["Per majoria simple", "Per majoria dels vots emesos excepte que hi hagi una disposició en contra", "Per majoria de tres cinquenes parts", "Per unanimitat"],
    answer: 0},
    
    {question: "Segons el Tractat de Lisboa, quants diputats com a màxim pot tenir un estat membre?",
    choices: ["27", "96", "15", "150"],
    answer: 1},
    
    {question: "La seu del Parlament Europeu és a:",
    choices: ["Estrasburg", "Brussel·les", "París", "Roma"],
    answer: 0},
    
    {question: "El mandat de la Comissió Europea s'estableix per un període de:",
    choices: ["Vuit anys", "Sis anys", "Quatre anys", "Cinc anys"],
    answer: 3},
    
    {question: "Amb quina freqüència es reuneix de manera ordinària el Consell Europeu?",
    choices: ["Un cop l'any", "Un cop al mes", "Dues vegades per semestre", "Dues vegades cada any"],
    answer: 2},
    
    {question: "Al Parlament Europeu els diputats s'agrupen per:",
    choices: ["Països", "Regions", "Idioma", "Ideologia política"],
    answer: 3},
    
    {question: "La institució de la Unió Europea que està composta per un ministre de cada estat membre de la Unió Europea és:",
    choices: ["El Comitè de les Regions", "El Parlament Europeu", "La Comissió Europea", "El Consell"],
    answer: 3}
    
]

const quiz_tema_4 = [

    {question: "¿Cuántos títulos tiene la Ley orgánica 1/2007, del 28 de febrero, de reforma del Estatuto de autonomía de las Illes Balears?",
    choices: ["Siete títulos", "Ocho títulos", "Nueve títulos", "Diez títulos"],
    answer: 2},
    
    {question: "Según el artículo 1 del Estatuto de autonomía de las Illes Balears, la denominación de la comunidad autónoma es:",
    choices: ["Comunitat Autónoma de las Islas Baleares", "Comunitat Autónoma de las Illes Balears", "Comunidad Autónoma Balear", "Comunidad Autónoma de las Islas Baleáricas"],
    answer: 1},
    
    {question: "Según el artículo 2 del Estatuto de autonomía de las Illes Balears, la comunidad autónoma está formada por el territorio:",
    choices: ["De las islas de Mallorca, Menorca, Ibiza y Formentera", "De las islas de Mallorca, Menorca, Ibiza, Formentera y Cabrera", "De las islas de Mallorca, Menorca, Ibiza, Formentera y por el de las otras islas menores adyacentes", "De las islas de Mallorca, Menorca, Ibiza, Formentera y Cabrera y por el de las otras islas menores adyacentes"],
    answer: 3},
    
    {question: "Según el artículo 6 del Estatuto de autonomía de las Illes Balears, sobre los símbolos de las iIles Balears:",
    choices: ["Únicamente hay una bandera para todas las islas", "Cada isla puede tener su bandera", "Únicamente tienen bandera propia Mallorca e Ibiza", "Únicamente tienen bandera propia Mallorca y Menorca"],
    answer: 1},
    
    {question: "Según el artículo 6 del Estatuto de autonomía de las Illes Balears, la bandera de las Islas Baleares está constituida por:",
    choices: ["Cuatro barras rojas horizontales sobre fondo amarillo, con un cuartel situado en la parte superior izquierda de fondo morado y con un castillo blanco de cinco torres en medio", "Cinco barras rojas horizontales sobre fondo amarillo, con un cuartel situado en la parte superior izquierda de fondo morado y con un castillo blanco de cinco torres en medio", "Cuatro barras rojas horizontales sobre fondo amarillo, con un castillo blanco situado en la parte superior izquierda de fondo morado y con un cuartel de cinco torres en medio", "Cinco barras rojas horizontales sobre fondo amarillo, con un castillo blanco situado en la parte superior izquierda de fondo morado y con un cuartel de cinco torres en medio"],
    answer: 0},
    
    {question: "Según el artículo 7 del Estatuto de autonomía de las Illes Balears, la ciudad de Palma:",
    choices: ["Es la capital de las Illes Balears", "Es la sede permanente del Parlamento", "Es la sede permanente de la Presidencia del Gobierno y del Gobierno", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 8 del Estatuto de autonomía de las Illes Balears, sobre la organización territorial de la Comunidad Autónoma, las instituciones de gobierno son:",
    choices: ["De las islas, son los consejos insulares", "De las islas, son el gobierno", "De los municipios, son los ayuntamientos", "Las respuestas a) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 16 del Estatuto de autonomía de las Illes Balears, el conjunto de principios, derechos y directrices que informan la actuación pública de las administraciones públicas de las Illes Balears en el ámbito de la política social estará contenido en:",
    choices: ["La Declaración de Derechos Humanos", "La Constitución española", "La Carta de Derechos Sociales de la Comunidad Autónoma de las Illes Balears", "Los convenios internacionales sobre derechos civiles y humanos"], 
    answer: 2},
    
    {question: "Según el artículo 24 del Estatuto de autonomía de las Illes Balears, ¿cuál es el elemento económico estratégico de las Illes Balears reconocido por los poderes públicos de la comunidad autónoma?",
    choices: ["La actividad industrial", "La actividad turística", "La actividad comercial", "La actividad agrícola"],
    answer: 1},
    
    {question: "Según el artículo 25 del Estatuto de autonomía de las Illes Balears, se garantiza el derecho a la prevención y la protección de la salud mediante:",
    choices: ["Un sistema sanitario público y privado de carácter social", "Un sistema sanitario universal de carácter público", "Un sistema sanitario público de carácter universal", "Un sistema sanitario público i privado de carácter universal"],
    answer: 2},
    
    {question: "Según el artículo 26 del Estatuto de autonomía de las Illes Balears, sobre la educación:",
    choices: ["Se garantiza la gratuidad de la enseñanza en todos los niveles educativos", "Se garantiza la gratuidad de la enseñanza en todos los niveles obligatorios", "Se garantiza la gratuidad de la enseñanza en todos los niveles educativos, excepto en los centros educativos sostenidos con fondos públicos", "Se garantiza la gratuidad de la enseñanza en todos los niveles obligatorios y en los otros niveles que se establezcan por ley"],
    answer: 3},
    
    {question: "Según el Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears puede tener competencias:",
    choices: ["Competencias exclusivas sobre determinadas materias", "Competencias de desarrollo legislativo y ejecución sobre determinadas materias", "Competencias ejecutivas sobre determinadas materias", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 30 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia exclusiva en:",
    choices: ["Ordenación del sector pesquero", "Turismo", "Protección Civil", "Salud y Sanidad"],
    answer: 1},
    
    {question: "Según el artículo 30 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia exclusiva en:",
    choices: ["Agricultura y ganadería", "Juventud", "Legislación laboral", "Las respuestas a) y b) son correctas"],
    answer: 1},
    
    {question: "Según el artículo 30 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia exclusiva en:",
    choices: ["Alteraciones de los términos municipales y denominación oficial de los municipios y topónimos", "Propiedad industrial", "Salvamento marítimo", "Ferias internacionales"],
    answer: 0},
    
    {question: "Según el artículo 30 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia exclusiva en:",
    choices: ["Salud y sanidad", "Protección de menores", "Ordenación del sector pesquero", "Productos farmacéuticos"],
    answer: 1},
    
    {question: "Según el artículo 31 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia de desarrollo legislativo y ejecución en:",
    choices: ["Turismo", "Expropiación forzosa", "Salud y Sanidad", "Salvamento marítimo"],
    answer: 2},
    
    {question: "Según el artículo 31 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia de desarrollo legislativo y ejecución en:",
    choices: ["Régimen Local", "Pesos y medidas", "Políticas de género", "Protección de menores"],
    answer: 0},
    
    {question: "Según el artículo 31 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia de desarrollo legislativo y ejecución en:",
    choices: ["Expropiación forzosa", "Estatuto de los funcionarios de la Administración de la Comunidad Autónoma y de la Administración local", "Medios de comunicación social", "Las respuestas b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 31 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia de desarrollo legislativo y ejecución en:",
    choices: ["Actividades clasificadas", "Productos farmacéuticos", "Caza", "Las respuestas a) y c) son correctas"],
    answer: 0},
    
    {question: "Según el artículo 32 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia ejecutiva en:",
    choices: ["Protección civil", "Régimen minero y energético", "Legislación laboral", "Tercera edad"],
    answer: 2},
    
    {question: "Según el artículo 32 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia ejecutiva en:",
    choices: ["Agencias de transporte", "Expropiación forzosa", "Ordenación del sector pesquero", "Espectáculos y actividades recreativas"],
    answer: 1},
    
    {question: "Según el artículo 32 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia ejecutiva en:",
    choices: ["Bienes de dominio público y patrimoniales de su titularidad", "Propiedad industrial", "Salvamento marítimo", "Las respuestas b) y c) son correctos"],
    answer: 3},
    
    {question: "Según el artículo 32 del Estatuto de autonomía de las Illes Balears, la Comunidad Autónoma de las Illes Balears tiene la competencia ejecutiva en:",
    choices: ["Emergencias", "Ferias y mercados no internacionales", "Crédito, banca y seguros", "Tercera edad"],
    answer: 2},
    
    {question: "Según el artículo 35 del Estatuto de autonomía de las Illes Balears, ¿cuál es la institución oficial consultiva para todo el que se refiere a la lengua catalana?",
    choices: ["La consejería competente en materia de cultura", "La Universidad de las Illes Balears", "La dirección general competente en materia lingüística", "La Escuela Oficial de Idiomas"],
    answer: 1},
    
    {question: "Según el artículo 39 del Estatuto de autonomía de las Illes Balears, las instituciones de la Comunidad Autónoma de las Illes Balears son:",
    choices: ["El Parlamento, el Gobierno y el presidente de la Comunidad Autónoma", "El Parlamento, el Gobierno y los consejos insulares de Mallorca, Menorca, Ibiza y Formentera", "El Gobierno, el presidente de la Comunidad Autónoma y los consejos insulares de Mallorca, Menorca, Ibiza y Formentera", "El Parlamento, el Gobierno, el presidente de la Comunidad Autónoma y los consejos insulares de Mallorca, Menorca, Ibiza y Formentera"],
    answer: 3},
    
    {question: "Según el artículo 40 del Estatuto de autonomía de las Illes Balears, ¿dónde radica la sede del Parlamento?",
    choices: ["En la isla de Mallorca", "No se indica en el Estatuto de autonomía de las Illes Balears", "En la ciudad de Palma", "Las respuestas a) y c) son correctas"],
    answer: 2},
    
    {question: "Según el artículo 40 del Estatuto de autonomía de las Illes Balears, ¿qué órgano aprueba los presupuestos de la Comunidad Autónoma?",
    choices: ["El Parlamento", "El Consejo de Gobierno", "El presidente del Parlamento", "El presidente del Gobierno"],
    answer: 0},
    
    {question: "Según el artículo 41 del Estatuto de autonomía de las Illes Balears, los diputados del Parlamento son elegidos:",
    choices: ["Por sufragio universal, libre, directo y secreto", "Por sufragio universal, igual, libre, directo y secreto", "Per sufragio universal, igual, directo y secreto", "Per sufragio universal, proporcional, libre, directo y secreto"],
    answer: 1},
    
    {question: "Según el artículo 41 del Estatuto de autonomía de las Illes Balears, ¿cuánto dura el mandato de los diputados?",
    choices: ["Cinco años", "Dos años", "Cuatro años", "Tres años"],
    answer: 2},
    
    {question: "Según el artículo 45 del Estatuto de autonomía de las Illes Balears, el Parlamento tiene:",
    choices: ["Un presidente y una mesa", "Un presidente y una diputación permanente", "Un presidente, un pleno y una mesa", "Un presidente, una mesa y una diputación permanente"],
    answer: 3},
    
    {question: "Según el artículo 45 del Estatuto de autonomía de las Illes Balears, el Parlamento se reune durante:",
    choices: ["Ocho meses al año", "Nueve meses al año", "Diez meses al año", "Siete meses al año"],
    answer: 0},
    
    {question: "Según el artículo 46 del Estatuto de autonomía de las Illes Balears, la Diputación Permanente tiene por función velar por el poder del Parlamento cuando:",
    choices: ["Este no esté reunido", "Este haya sido disuelto", "Este haya expirado el mandato", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 48 del Estatuto de autonomía de las Illes Balears, ¿qué órgano ejerce la potestad legislativa?",
    choices: ["El Parlamento", "El Consejo de Gobierno", "Las Cortes Generales", "El Presidente del Gobierno"],
    answer: 0},
    
    {question: "Según el artículo 48 del Estatuto de autonomía de las Illes Balears, las leyes del Parlamento han de ser publicadas:",
    choices: ["En el Boletín Oficial de las Illes Balears", "En el Diario Oficial de la Unión Europea", "En el Boletín Oficial del Estado", "Las respuestas a) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 51 del Estatuto de autonomía de las Illes Balears, para  defender  las libertades y de los derechos fundamentales de los ciudadanos ,el Parlamento, mediante una ley, creará:",
    choices: ["El Defensor del Pueblo", "La Sindicatura de Cuentas", "La Sindicatura de Agravios", "El defensor de los derechos de los ciudadanos"],
    answer: 2},
    
    {question: "Según el artículo 52 del Estatuto de autonomía de las Illes Balears, la legislatura finaliza por expiración del mandato en cumplirse:",
    choices: ["Tres años de la fecha de las elecciones", "Cuatro años de la fecha de las elecciones ", "Cinco años de la fecha de las elecciones", "Seis años de la fecha de las elecciones"],
    answer: 1},
    
    {question: "Según el artículo 56 del Estatuto de autonomía de las Illes Balears, ¿quién nombra y separa los miembros que han de formar el Gobierno?",
    choices: ["El presidente de las Illes Balears", "El rey", "El presidente del Parlamento", "El Parlamento"],
    answer: 0},
    
    {question: "Según el artículo 57 del Estatuto de autonomía de las Illes Balears, el Gobierno está formado:",
    choices: ["Por el presidente, un vicepresidente y los consejeros", "Por el presidente y los consejeros", "Por el presidente, los vicepresidentes, si es el caso, y los consejeros", "Por el presidente y los diputados"],
    answer: 2},
    
    {question: "Según el artículo 57 del Estatuto de autonomía de las Illes Balears, el Gobierno cesa:",
    choices: ["Después de la celebración de elecciones al Parlamento", "Por dimisión, incapacidad o defunción de su presidente", "Por pérdida de la confianza del Parlamento o por la adopción de una moción de censura", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 58 del Estatuto de autonomía de las Illes Balears, el Gobierno tiene:",
    choices: ["La potestad legislativa", "La potestad reglamentaria en sus competencias", "La potestad de aprobar los presupuestos de la Comunidad Autónoma", "Las respuestas b) y c) son correctas"],
    answer: 1},
    
    {question: "Según el artículo 76 del Estatuto de autonomía de las Illes Balears, ¿por cuántos juristas de prestigio reconocido estará integrado como máximo el Consejo consultivo de las Illes Balears?",
    choices: ["Por diez juristas", "Por nueve juristas", "Por ocho juristas", "Por siete juristas"],
    answer: 0},
    
    {question: "Según el artículo 82 del Estatuto de autonomía de las Illes Balears, ¿cuál es el órgano al que corresponde la fiscalización externa de la actividad económica, financiera y contable del sector público de las Illes Balears?",
    choices: ["El Consejo Económico Consultivo", "La Junta de Hacienda", "El Consejo Económico y Social", "La Sindicatura de Cuentas"],
    answer: 2},
    
    {question: "Según el artículo 82 del Estatuto de autonomía de las Illes Balears, ¿cuál es el órgano al que corresponde la fiscalización externa de la actividad económica, financiera y contable del sector público de las Illes Balears?",
    choices: ["El Consejo Económico Consultivo", "La junta de Hacienda", "El Consejo Económico y Social", "La Sindicatura de Cuentas"],
    answer: 3},
    
    {question: "Según el artículo 95 del Estatuto de autonomía de las Illes Balears, ¿quién nombra al presidente del Tribunal Superior de Justicia de las Illes Balears?",
    choices: ["El presidente del Consejo General del Poder Judicial", "El rey", "El presidente del Parlamento", "El presidente del Gobierno"],
    answer: 1},
    
    {question: "Según el artículo 139 del Estatuto de autonomía de las Illes Balears, ¿a quién corresponde la iniciativa de reforma del Estatuto de autonomía?",
    choices: ["Al Parlamento", "Al Gobierno", "A las Cortes Generales", "Las respuestas a) b) y c) son correctas"],
    answer: 3},
    
    {question: "Según el artículo 135 del Estatuto de autonomía de las Illes Balears, ¿qué carácter tiene el presupuesto general de la Comunidad Autónoma de las Illes Balears?",
    choices: ["Carácter semestral", "Carácter bimestral", "Carácter anual", "Carácter trimestral"],
    answer: 2},
    
    {question: "Según el artículo 135 del Estatuto de autonomía de las Illes Balears, ¿a quién corresponde elaborar y ejecutar el presupuesto general de la Comunidad Autónoma de las Illes Balears?",
    choices: ["Al Parlamento", "Al Gobierno de las Illes Balears", "A la Sindicatura de Cuentas", "A la consejería competente en materia de presupuestos"],
    answer: 1},
    
    {question: "Según el artículo 133 del Estatuto de autonomía de las Illes Balears, la Agencia Tributaria de las Illes Balears se creará por:",
    choices: ["Una ley del Parlamento", "Un decreto del Gobierno", "Una ley de las Cortes Generales", "Un reglamento del Estado"],
    answer: 0},
    
    {question: "Según el artículo 139 del Estatuto de autonomía de las Illes Balears, ¿qué se requiere para prosperar la propuesta de reforma del Estatuto de autonomía?",
    choices: ["La aprobación del Parlamento por mayoría simple de los diputados y la aprobación de las Cortes Generales mediante una ley orgánica", "La aprobación del Parlamento por mayoría de dos tercios de los diputados y la aprobación de las Cortes Generales mediante una ley orgánica", "La aprobación del Parlamento por mayoría de dos tercios de los diputados y la aprobación de las Cortes Generales mediante una ley ordinaria", "La aprobación del Parlamento por mayoría absoluta de los diputados y la aprobación de las Cortes Generales mediante una ley ordinaria"],
    answer: 1}
    
];

const quiz_tema_5 = [

    {question: "De acuerdo con el artículo 39 del Estatuto de Autonomía de las Illes Balears vigente, el sistema institucional autonómico está integrado:",
    choices: ["Por el Parlamento, el Gobierno, el presidente de la comunidad autónoma y los consejos insulares de Mallorca, Menorca, Ibiza y Formentera", "Por el Parlamento, el Gobierno y el presidente de la comunidad autónoma", "Por el Parlamento y el Gobierno", "Por el Parlamento, el presidente de la comunidad autónoma y los consejos insulares de Mallorca, Menorca, Ibiza y Formentera"],
    answer: 0},
    
    {question: "Pueden ser elegidos diputados del Parlamento de las Illes Balears:",
    choices: ["Los ciudadanos españoles mayores de edad residentes en las Illes Balears, inscritos en el censo electoral y en pleno ejercicio de sus derechos civiles y políticos", "Los ciudadanos españoles mayores de edad y en pleno ejercicio de sus derechos políticos", "Los ciudadanos españoles mayores de edad, inscritos en el censo electoral y en pleno ejercicio de sus derechos civiles", "Los ciudadanos españoles mayores de edad residentes en las Illes Balears, inscritos en el censo electoral"],
    answer: 0},
    
    {question: "El Parlamento de las Illes Balears se reúne en sesión extraordinaria:",
    choices: ["A petición del Gobierno o por acuerdo de la Diputación Permanente o del Pleno, a propuesta de una quinta parte de los diputados", "Por acuerdo de la Mesa, a propuesta de dos terceras partes de los grupos parlamentarios", "A petición del Gobierno oa petición de dos grupos parlamentarios", "A petición del Gobierno o por acuerdo de la Diputación Permanente o del Pleno, a propuesta de una tercera parte de los diputados"],
    answer: 0},
    
    {question: "Los diputados del Congreso elegidos en las Illes Balears pueden asistir:",
    choices: ["A las sesiones del Pleno y de las comisiones que no tengan carácter secreto", "A todas las sesiones del Pleno", "A las reuniones de la Junta de Portavoces", "A las sesiones del Pleno, de la Diputación Permanente y de las comisiones que no tengan carácter secreto"],
    answer: 0},
    
    {question: "La aprobación y la reforma del Reglamento del Parlamento de las Illes Balears requieren:",
    choices: ["La mayoría absoluta de los componentes del Parlamento", "La mayoría de dos tercios de los presentes en la votación", "La mayoría simple de los componentes del Parlamento", "La mayoría de tres quintas partes de los componentes del Parlamento"],
    answer: 0},
    
    {question: "¿Cuál de estas funciones corresponde al Parlamento de las Illes Balears?",
    choices: ["Designar el senador o los senadores que deben representar a la comunidad autónoma de las Illes Balears en el Senado", "Dictar decretos ley", "Deliberar sobre la decisión del presidente de disolver de forma anticipada el Parlamento", "Proponer transferencias o delegaciones de competencias a favor de los consejos insulares y de otros entes locales de la comunidad autónoma"],
    answer: 0},
    
    {question: "El Parlamento de las Illes Balears, mediante ley, crea la institución de la Sindicatura de Greuges:",
    choices: ["Para la defensa de las libertades y de los derechos fundamentales de los ciudadanos, así como para supervisar e investigar las actividades de la Administración de la Comunidad Autónoma de las Illes Balears", "Para examinar y aprobar la contabilidad de la Comunidad Autónoma", "Por supervisar e investigar actividades contrarias a la ética pública", "Para controlar la actividad del Gobierno"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta. De acuerdo con el Reglamento del Parlamento de las Illes Balears:",
    choices: ["En la votación secreta mediante papeleta, los diputados son llamados con el criterio de menos a más edad y por sexos para depositar la papeleta", "La votación telemática puede ser ordinaria o secreta", "La votación para la investidura del presidente del Gobierno siempre es pública por llamamiento", "El voto de los diputados es personal y indelegable"],
    answer: 0},
    
    {question: "La ley que regula el total de diputados que deben integrar el Parlamento de las Illes Balears debe ser aprobada:",
    choices: ["Por una mayoría calificada de tres cuartas partes", "Por mayoría simple", "Por una mayoría calificada de dos tercios", "Por una mayoría calificada de tres cuartas partes y la aprobación de las Cortes Generales mediante ley orgánica"],
    answer: 0},
    
    {question: "Para adoptar acuerdos, el Parlamento de las Illes Balears y sus órganos:",
    choices: ["Deben estar reunidos con la asistencia mínima de un representado por grupo político", "Deben estar reunidos reglamentariamente y con la asistencia de la mayoría de sus miembros", "Deben estar reunidos con la asistencia de la mayoría de los grupos políticos", "Deben estar reunidos reglamentariamente y con la asistencia de todos sus miembros"],
    answer: 0},
    
    {question: "El orden del día del Pleno del Parlamento de las Illes Balears lo fija la Presidencia:",
    choices: ["Oída la Mesa, y de acuerdo con la Junta de Portavoces", "Oído la Mesa y los jefes de los grupos políticos", "De acuerdo con la Junta de Portavoces", "Previa consulta con el consejero competente en materia de relaciones con el Parlamento"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta. De acuerdo con el Estatuto de Autonomía, en relación con el Parlamento de las Illes Balears:",
    choices: ["La duración del mandato de los diputados del Parlamento será de cuatro años", "Una ley del Parlamento, aprobada por mayoría absoluta, regula el total de diputados que deben integrarla", "La sede del Parlamento es la ciudad de palma", "Los diputados del Parlamento de las Illes Balears pierden la condición como tales por incapacidad declarada por decisión judicial firme"],
    answer: 0},
    
    {question: "La Diputación Permanente tiene por función velar por el poder del Parlamento de las Illes Balears:",
    choices: ["Cuando no esté reunido, haya sido disuelto o haya expirado su mandato", "Cuando haya sido disuelto", "Cuando haya expirado su mandato", "Cuando haya sido disuelto o haya expirado su mandato"],
    answer: 0},
    
    {question: "La Mesa del Parlamento de las Illes Balears:",
    choices: ["Está integrada por representantes de todos los grupos parlamentarios", "Está integrada por un presidente, un vicepresidente y tres secretarios", "Elije al presidente y al vicepresidente del Parlamento entre sus miembros", "Es el órgano de gobierno y gestión del Parlamento"],
    answer: 0},
    
    {question: "La Mesa del Parlamento de las Illes Balears puede acordar que un asunto se tramite por el procedimiento de urgencia:",
    choices: ["A petición motivada del Gobierno", "A petición motivada del Gobierno, de un grupo parlamentario o de una quinta parte de los diputados", "A petición de un grupo parlamentario o de una cuarta parte de los diputados", "A petición motivada de la Diputación Permanente, de un grupo parlamentario o de un tercio de los diputados"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta. De acuerdo con el Reglamento del Parlamento de las Illes Balears:",
    choices: ["El presidente del Parlamento tiene el tratamiento de señor", "Los miembros de la Mesa del Parlamento cesan por negligencia notoria y grave en el cumplimiento del cargo, acordada por el Pleno del Parlamento", "Son comisiones no permanentes las que se creen para un trabajo concreto", "El Pleno del Parlamento, a propuesta de dos grupos parlamentarios o de la cuarta parte de los miembros de la cámara, puede acordar la creación de una comisión de investigación"],
    answer: 0},
    
    {question: "Corresponde al Parlamento de las Illes Balears:",
    choices: ["Dictar decretos legislativos", "Aprobar el proyecto de ley de presupuestos generales de la Comunidad Autónoma", "Aprobar y decidir transferencias o delegaciones de competencias a favor de los consejos insulares y de otros entes locales de la comunidad autónoma", "Deliberar sobre la decisión del presidente de convocar elecciones de forma anticipada"],
    answer: 0},
    
    {question: "Indique la respuesta correcta. De acuerdo con el Reglamento del Parlamento de las Illes Balears:",
    choices: ["La sede del Parlamento es la ciudad de Palma", "La lengua catalana, propia de las Illes Balears, es la lengua oficial del Parlamento de las Illes Balears", "Los diputados pueden invocar su condición de parlamentarios en el ejercicio de una actividad industrial o profesional", "Los miembros del Gobierno que no sean diputados no pueden asistir a las comisiones parlamentarias"],
    answer: 0},
    
    {question: "Aprobar el estatuto que regula la ordenación del régimen jurídico del personal al servicio del Parlamento de las Illes Balears corresponde:",
    choices: ["Al Presidente del Parlamento", "A la Mesa del Parlamento", "En la Comisión de Asuntos Institucionales, oída la Mesa", "En la Junta de Portavoces y en la Mesa de forma conjunta"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta respecto del Parlamento de las Illes Balears:",
    choices: ["Representa al pueblo de las Illes Balears", "Controla la acción de gobierno", "Ejerce la potestad ejecutiva", "Aprueba los presupuestos de la Comunidad Autónoma"],
    answer: 0},
    
    {question: "En el Parlamento de las Illes Balears, la sesión solemne de apertura de la legislatura tendrá lugar dentro del plazo de los:",
    choices: ["Quince días hábiles siguientes al de la celebración de la sesión constitutiva", "Tres meses siguientes al de la celebración de las elecciones", "Veinte días hábiles siguientes al de la celebración de la sesión constitutiva", "Dos meses siguientes a la celebración de las elecciones"],
    answer: 0},
    
    {question: "No es una función de la Mesa del Parlamento de las Illes Balears:",
    choices: ["Ordenar los gastos de la cámara", "Solicitar la convocatoria de una sesión extraordinaria del Pleno", "Decidir la tramitación de todos los escritos y la documentación de índole parlamentaria", "Fijar el calendario de actividades del Pleno"],
    answer: 0},
    
    {question: "En el Parlamento de las Illes Balears, la elección de los miembros de la Mesa se produce:",
    choices: ["En la sesión solemne de apertura de la legislatura", "En la sesión constitutiva de la Diputación Permanente", "En la sesión constitutiva del Parlamento", "Cuando así lo decida el presidente del Parlamento de las Illes Balears"],
    answer: 0},
    
    {question: "La duración del mandato de los diputados del Parlamento de las Illes Balears es:", 
    choices: ["De cuatro años", "De seis años", "De cinco años", "De tres años"],
    answer: 0},
    
    {question: "El Parlamento de las Illes Balears debe constituirse dentro del plazo máximo:",
    choices: ["De un mes después de la celebración de las elecciones", "De cuarenta días después de la celebración de las elecciones", "De treinta días después de la celebración de las elecciones", "De dos meses después de la celebración de las elecciones"],
    answer: 0},
    
    {question: "En las elecciones al Parlamento de las Illes Balears, serán electores:",
    choices: ["Todos los ciudadanos españoles mayores de edad que figuren en el censo electoral de las Illes Balears", "Todos los ciudadanos europeos mayores de edad que figuren en el censo electoral de las Illes Balears", "Todos los ciudadanos españoles mayores de edad que estén empadronados en las Illes Balears", "Todos los ciudadanos españoles mayores de dieciséis años que figuren en el censo electoral de las Illes Balears"],
    answer: 0},
    
    {question: "La Junta de Portavoces del Parlamento de las Illes Balears se reúne bajo la dirección:", 
    choices: ["Del portavoz del grupo parlamentario mayoritario", "Del vicepresidente primero de la Mesa", "Del letrado mayor del Parlamento", "Del presidente del Parlamento"],
    answer: 0},
    
    {question: "El día y la hora señalados en la resolución de convocatoria de la sesión constitutiva del Parlamento de las Illes Balears, los diputados electos, se constituyen:", 
    choices: ["En asamblea", "En conferencia", "En Junta", "En Convención"],
    answer: 0},
    
    {question: "Inicialmente, la sesión constitutiva del Parlamento de las Illes Balears la preside:",
    choices: ["El diputado o diputada electo más antiguo en el cargo", "El diputado o diputada electo de menor edad", "El Oficial mayor del Parlamento", "De entre los presentes, el diputado o la diputada electos de mayor edad"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta. Corresponde al Parlamento de las Illes Balears:", 
    choices: ["Solicitar al Gobierno la adopción de un proyecto de ley", "Determinar, en aplicación del criterio de representación mayoritario, el senador o los senadores que deben representar a la comunidad autónoma de las Illes Balears en el Senado", "Fijar las previsiones de orden político, social y económico que deban adoptarse para la elaboración de proyectos de planificación", "Designar, en aplicación del criterio de representación proporcional, el senador o los senadores que deben representar a la comunidad autónoma de las Illes Balears en el Senado"],
    answer: 0},
    
    {question: "Indique la respuesta correcta respecto de los diputados y diputadas del Parlamento de las Illes Balears:",
    choices: ["Al final de cada período de sesiones, la Mesa del Parlamento publicará en el Boletín Oficial del Parlamento de las Illes Balears, la asistencia de los diputados y diputadas a las sesiones del Pleno y de las comisiones de las que formen parte", "Al final de cada período de sesiones, la Mesa del Parlamento publicará en el Portal de Transparencia, la asistencia de los diputados y diputadas a las sesiones del Pleno y de las comisiones de que formen parte", "Al final de cada legislatura, la Mesa del Parlamento publicará en el Boletín Oficial del Parlamento de las Illes Balears y en el Portal de Transparencia, la asistencia de los diputados y las diputadas a las sesiones del Pleno y de las comisiones de que formen parte", "Al final de cada período de sesiones, la Mesa del Parlamento publicará en el Boletín Oficial del Parlamento de las Illes Balears y en el Portal de Transparencia, la asistencia de los diputados y las diputadas a las sesiones del Pleno y de las comisiones de que formen parte"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta respecto de los diputados y diputadas del Parlamento de las Illes Balears:", 
    choices: ["Tienen la obligación de formar parte, al menos, de una comisión", "Deberán observar en todo momento las normas sobre incompatibilidades establecidas en la Constitución, en el Estatuto y en las leyes", "Tienen derecho a formar parte, al menos, de una comisión", "Tienen derecho al tratamiento de señor y señora"],
    answer: 0},
    
    {question: "La Sindicatura de Greuges de las Illes Balears debe crearse mediante:", 
    choices: ["Un acuerdo del Consejo de Gobierno", "Un decreto del presidente o la presidenta de las Illes Balears", "Una ley del Parlamento", "Un acuerdo de la Mesa del Parlamento"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta. El Parlamento de las Illes Balears elige:", 
    choices: ["Los síndicos de la Sindicatura de Cuentas", "Todos los miembros del Consejo Consultivo", "Cuatro miembros del Consejo Consultivo", "Al Director de la Oficina de Prevención y Lucha contra la Corrupción en las Illes Balears"],
    answer: 0},
    
    {question: "Señale la respuesta incorrecta. Los diputados y diputadas del Parlamento de las Illes Balears perderán la condición como tales por las siguientes causas:",
    choices: ["Por decisión judicial firme que lo comporte", "Por renuncia del diputado o diputada ante la Mesa del Parlamento", "Por renuncia provocada por incompatibilidad sobrevenida", "Por renuncia del diputado o la diputada ante el Pleno del Parlamento"],
    answer: 0},
    
    {question: "En el Parlamento de las Illes Balears, los grupos parlamentarios, salvo el Grupo Mixto, serán formados, al menos, por:",
    choices: ["Por tres diputados", "Por dos diputados", "Por cuatro diputados", "Por un diputado"],
    answer: 1},
     
    {question: "El presidente o la presidenta del Parlamento de las Illes Balears tiene el tratamiento de:",
    choices: ["Señor o señora", "Honorable", "Ilustrísimo o Ilustrísima", "Muy Honorable"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta sobre las funciones del presidente o presidenta del Parlamento de las Illes Balears:",
    choices: ["Ejercer la representación de la cámara", "Ordenar los pagos", "Tramitar todos los escritos y documentos de índole parlamentaria", "Mantener el orden de los debates"],
    answer: 0},
    
    {question: "Indica una respuesta correcta sobre las funciones del presidente o presidenta del Parlamento de las Illes Balears:",
    choices: ["Convocar y presidir cualquier comisión, pero sólo tendrá voto en aquellas de que forme parte", "Ordenar los gastos de la cámara", "Aprobar las plantillas del personal del Parlamento", "Calificar los escritos de carácter parlamentario y declarar su admisibilidad o inadmisibilidad"],
    answer: 0},
    
    {question: "En el Parlamento de las Illes Balears, las decisiones de la Junta de Portavoces se adoptarán:", 
    choices: ["En función del criterio del voto ponderado", "Por mayoría simple de sus miembros", "Por mayoría absoluta de sus miembros", "Por mayoría de dos tercios de sus miembros"],
    answer: 0},
    
    {question: "Se denominan declaraciones institucionales del Parlamento de las Illes Balears:",
    choices: ["Las acordadas unánimemente por el presidente o la presidenta y por los miembros de la Mesa", " Las acordadas unánimemente por el presidente o la presidenta y por los portavoces de los grupos parlamentarios", "Las acordadas mayoritariamente por el presidente o la presidenta y por los portavoces de los grupos parlamentarios", "Las acordadas unánimemente por el presidente o la presidenta, por los miembros de la Mesa y por los portavoces de los grupos parlamentarios"],
    answer: 2},
    
    {question: "En el Parlamento de las Illes Balears, el número de senadores y senadoras que corresponden proporcionalmente a cada grupo parlamentario lo fija:",
    choices: ["El presidente o la presidenta del Parlamento, oída la Mesa", "La Mesa del Parlamento, de acuerdo con la Junta de Portavoces", "El Pleno del Parlamento", "La Mesa del Parlamento, a propuesta del Gobierno"],
    answer: 2},
    
    {question: "Indique la respuesta incorrecta en relación con el Parlamento de las Illes Balears:",
    choices: ["Los diputados tienen el derecho de asistir a las sesiones del Pleno del Parlamento y a las comisiones de que no forman parte", "Los diputados podrán formular preguntas al Gobierno de las Illes Balears", "Los diputados y grupos parlamentarios podrán formular interpelaciones a cada uno de los miembros del Gobierno de las Illes Balears", "Los grupos parlamentarios podrán presentar proposiciones de ley a través de las cuales formulen propuestas de resolución en la cámara"],
    answer: 3},
    
    {question: "En el Parlamento de las Illes Balears, la constitución de los grupos parlamentarios se realizará, mediante escrito dirigido a la Mesa de la cámara:",
    choices: ["Dentro de los diez días siguientes a la solemne sesión de apertura de la legislatura", "Dentro de los veinte días siguientes a la sesión constitutiva del Parlamento", "Dentro de los quince días siguientes a la sesión constitutiva del Parlamento", "Dentro de los diez días siguientes a la sesión constitutiva del Parlamento"],
    answer: 3},
    
    {question: "En el Parlamento de las Illes Balears, En caso de ausencia del secretario o secretaria de una comisión, éste o ésta será sustituido o sustituida perseguirá sustituido:", 
    choices: ["Por el vicepresidente de la comisión", "Por el diputado de mayor edad entre los miembros de la comisión", "Por el secretario de la Mesa del Parlamento", "Por un miembro de la comisión del mismo grupo político"],
    answer: 0},
    
    {question: "El Pleno del Parlamento de las Illes Balears podrá acordar la creación de una comisión de investigación sobre cualquier asunto de interés público, dentro del ámbito competencial de la Comunidad en Autónoma, a propuesta de:",
    choices: ["De la Mesa del Parlamento", "Un grupo parlamentario o de la quinta parte de los diputados o diputadas miembros de la cámara", "Un grupo parlamentario o de la cuarta parte de los diputados o diputadas miembros de la cámara", "De la Presidencia del Parlamento, oída la Junta de Portavoces"],
    answer: 1},
    
    {question: "La Mesa del Parlamento de las Illes Balears, de acuerdo con la Junta de Portavoces, puede acordar constituir intergrupos parlamentarios a iniciativa de:",
    choices: ["Dos grupos parlamentarios o de la quinta parte de los miembros del Parlamento", "Dos grupos parlamentarios o de la cuarta parte de los miembros del Parlamento", "Dos grupos parlamentarios o de la sexta parte de los miembros del Parlamento", "Tres grupos parlamentarios o de la quinta parte de los miembros del Parlamento"],
    answer: 1},
    
    {question: "El jefe superior de todo el personal y de todos los servicios del Parlamento de las Illes Balears es:",
    choices: ["El oficial mayor del Parlamento", "El letrado mayor del Parlamento", "El jefe del Gabinete de la Presidencia del Parlamento", "El secretario primero del Parlamento"],
    answer: 0},
    
    {question: "En las votaciones del Parlamento de las Illes Balears, se entiende que hay mayoría simple, cuando:",
    choices: ["Los votos favorables superen a los desfavorables, sin contar las abstenciones, y los votos nulos", "Los votos favorables superen a los desfavorables", "Los votos favorables superen a los desfavorables, sin contar los votos en blanco y los votos nulos", "Los votos favorables superen a los desfavorables, sin contar las abstenciones, los votos en blanco y los votos nulos"],
    answer: 0},
    
    {question: "Indique la respuesta incorrecta sobre el Parlamento de las Illes Balears:",
    choices: ["En la sesión constitutiva elige al presidente o presidenta de las Illes Balears", "En la sesión constitutiva elige al presidente o presidenta del Parlamento", "Elije a q cuatro miembros del Consejo Consultivo", "Elije los síndicos de la Sindicatura de Cuentas"],
    answer: 0}
    
];


 
function getRandomAnswers(numAnswers, forbiddenAnswer, hard=false) { 
    //Returns the indexes of the answers in the list to retrieve the information later 
    //We need the index of the answer used in the solution to not duplicate solutions 
    //if (hard){preguntes = preguntes_hard};

    let answers = []; 
    while (answers.length < numAnswers) { 
        let randomInt = Math.floor(Math.random() * (preguntes.length - 1)); 
        if (!answers.includes(randomInt) && forbiddenAnswer !== randomInt) { 
            answers.push(preguntes[randomInt].resp); 
        } 
    } 
 
    return answers; 
 
} 
 
function generateQuizList(totalQuestions, answersPerQuestion, hard=false) { 
    let generatedQuiz = []; 
    let usedQuestions = []; 

    //if (hard){preguntes = preguntes_hard};
 
    while (generatedQuiz.length < totalQuestions) { 
        do { 
            var randomQuestionPosition = Math.floor(Math.random() * (preguntes.length - 1)); 
        } while (usedQuestions.includes(randomQuestionPosition)); 
 
        let fillingAnswers = getRandomAnswers(answersPerQuestion - 1, randomQuestionPosition); 
        let randomPosition = Math.floor(Math.random() * (answersPerQuestion - 1)); 
        generatedQuiz.push({ 
            question: preguntes[randomQuestionPosition].preg, 
            choices: fillingAnswers 
                    .slice(0, randomPosition)
                    .concat(preguntes[randomQuestionPosition].resp, fillingAnswers.slice(randomPosition)), 
            answer: randomPosition 
        }); 
        usedQuestions.push(randomQuestionPosition);
    } 

    return generatedQuiz;
}

function subQuizFromBiggerQuiz(biggerQuiz, subsetSize) {
    if (biggerQuiz.length < subsetSize) return;

    //Simply return a subset of the array conserving the format
    let generatedQuiz = [];
    let usedQuestions = [];

    while (generatedQuiz.length < subsetSize) {
        do { 
            var randomQuestionPosition = Math.floor(Math.random() * (biggerQuiz.length - 1)); 
        } while (usedQuestions.includes(randomQuestionPosition)); 
        generatedQuiz.push(biggerQuiz[randomQuestionPosition]);
        usedQuestions.push(randomQuestionPosition);
    }
    return generatedQuiz;
}



/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/

var countQues=0;
var lang;
var score=0;

var easyquestions=generateQuizList(10,4);

var hardquestions=generateQuizList(10,4, true);

var tema1questions=subQuizFromBiggerQuiz(quiz_tema_1, 10);

var tema2questions=subQuizFromBiggerQuiz(quiz_tema_2, 10);

var tema3questions=subQuizFromBiggerQuiz(quiz_tema_3, 10);

var tema4questions=subQuizFromBiggerQuiz(quiz_tema_4, 10);

var tema5questions=subQuizFromBiggerQuiz(quiz_tema_5, 10);





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";






//REUTILITZAR L'ANTIC SELECTOR DE LLENGUATGES?

document.querySelector("#startQuizbutton").addEventListener("click",function(){

    //lang=document.getElementById("language").value+"questions";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    if (checkboxes.length < 1) {
        alert("Convendria seleccionar almenys un tema, no? Desde luego... \u{1F61C} \u{1F61C}");
        return;
    }
    var joinedQuestions = [];

    for (var t = 0; t < checkboxes.length; t++) {
        switch (checkboxes[t].value) {
            case "articles":
                joinedQuestions = joinedQuestions.concat(generateQuizList(preguntes, 4));
                break;
            case "tema1":
                joinedQuestions = joinedQuestions.concat(quiz_tema_1);
                break;
            case "tema2":
                joinedQuestions = joinedQuestions.concat(quiz_tema_2);
                break;
            case "tema3":
                joinedQuestions = joinedQuestions.concat(quiz_tema_3);
                break;
            case "tema4":
                joinedQuestions = joinedQuestions.concat(quiz_tema_4);
                break;
            case "tema5":
                joinedQuestions = joinedQuestions.concat(quiz_tema_5);
                break;
        }
    }


    finalQuiz = subQuizFromBiggerQuiz(joinedQuestions, document.querySelectorAll("input[type=radio]:checked")[0].value);
    //alert(finalQuiz[0]);

    //Fer guapo, està així per fer proves
    lang = "finalQuiz";
    document.getElementById("ques-left").textContent="Pregunta : "+(countQues+1)+"/"+window[lang].length;

    //alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1 id=\"enunciat\">"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };
    

});






document.querySelector(".submit-answer").addEventListener("click",function(){
    //alert(window[lang][countQues].choices[window[lang][countQues].answer]);
    //alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer]){
           
        score+=1;
        document.getElementById("score").textContent="Nota : "+score.toFixed(2);
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=0.3333;
        document.getElementById("score").textContent="Nota : "+score.toFixed(2);
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Pregunta : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1 id=\"enunciat\">"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="Nombre total de preguntes: "+(countQues+1);
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML="Preguntes encertades: "+correct;
    
    document.getElementById("display-final-score").innerHTML="Nota: "+score.toFixed(2);
    
    if (score>8.5){
        document.querySelector(".remark").innerHTML="Vamos! Pràcticament dins sa lancha!";
    }else if(score>6.5){
        document.querySelector(".remark").innerHTML="Ja s'ensuma la mar!";
    
    }else if(score>4){
        document.querySelector(".remark").innerHTML="Meh, sin más";
    }else{
        document.querySelector(".remark").innerHTML="Buffff... Falten hores de bibliooo ;)";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("No hi ha info. A etudiar!");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
