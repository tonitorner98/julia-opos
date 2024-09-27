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





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";






//REUTILITZAR L'ANTIC SELECTOR DE LLENGUATGES?

document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Pregunta : "+(countQues+1)+"/"+window[lang].length;

    //alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
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
        document.getElementById("score").textContent="Nota : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=0.5;
        document.getElementById("score").textContent="Nota : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Pregunta : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="Nombre total de preguntes: "+(countQues+1);
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML="Preguntes encertades: "+correct;
    
    document.getElementById("display-final-score").innerHTML="Nota: "+score;
    
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
