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
