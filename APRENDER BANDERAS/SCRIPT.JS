const countries = [
    { name: "Afganistán", flag: "https://flagcdn.com/w320/af.png" },
    { name: "Albania", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Argelia", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Antigua y Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Austria", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaiyán", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Baréin", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladés", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Bielorrusia", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Bélgica", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belice", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benín", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bután", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bosnia y Herzegovina", flag: "https://flagcdn.com/w320/ba.png" },
    { name: "Botsuana", flag: "https://flagcdn.com/w320/bw.png" },
    { name: "Brasil", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Brunéi", flag: "https://flagcdn.com/w320/bn.png" },
    { name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
    { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
    { name: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
    { name: "Cabo Verde", flag: "https://flagcdn.com/w320/cv.png" },
    { name: "Camboya", flag: "https://flagcdn.com/w320/kh.png" },
    { name: "Camerún", flag: "https://flagcdn.com/w320/cm.png" },
    { name: "Canadá", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "República Centroafricana", flag: "https://flagcdn.com/w320/cf.png" },
    { name: "Chad", flag: "https://flagcdn.com/w320/td.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Comoras", flag: "https://flagcdn.com/w320/km.png" },
    { name: "Congo (Congo-Brazzaville)", flag: "https://flagcdn.com/w320/cg.png" },
    { name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Croacia", flag: "https://flagcdn.com/w320/hr.png" },
    { name: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Chipre", flag: "https://flagcdn.com/w320/cy.png" },
    { name: "Chequia (República Checa)", flag: "https://flagcdn.com/w320/cz.png" },
    { name: "Dinamarca", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Yibuti", flag: "https://flagcdn.com/w320/dj.png" },
    { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
    { name: "República Dominicana", flag: "https://flagcdn.com/w320/do.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "Egipto", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { name: "Guinea Ecuatorial", flag: "https://flagcdn.com/w320/gq.png" },
    { name: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
    { name: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
    { name: "Esuatini (antes Suazilandia)", flag: "https://flagcdn.com/w320/sz.png" },
    { name: "Etiopía", flag: "https://flagcdn.com/w320/et.png" },
    { name: "Fiyi", flag: "https://flagcdn.com/w320/fj.png" },
    { name: "Finlandia", flag: "https://flagcdn.com/w320/fi.png" },
    { name: "Francia", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Gabón", flag: "https://flagcdn.com/w320/ga.png" },
    { name: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
    { name: "Georgia", flag: "https://flagcdn.com/w320/ge.png" },
    { name: "Alemania", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
    { name: "Grecia", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Granada", flag: "https://flagcdn.com/w320/gd.png" },
    { name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
    { name: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
    { name: "Guinea-Bisáu", flag: "https://flagcdn.com/w320/gw.png" },
    { name: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
    { name: "Haití", flag: "https://flagcdn.com/w320/ht.png" },
    { name: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
    { name: "Hungría", flag: "https://flagcdn.com/w320/hu.png" },
    { name: "Islandia", flag: "https://flagcdn.com/w320/is.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Irán", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Irak", flag: "https://flagcdn.com/w320/iq.png" },
    { name: "Irlanda", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Israel", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Italia", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Jamaica", flag: "https://flagcdn.com/w320/jm.png" },
    { name: "Japón", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Jordania", flag: "https://flagcdn.com/w320/jo.png" },
    { name: "Kazajistán", flag: "https://flagcdn.com/w320/kz.png" },
    { name: "Kenia", flag: "https://flagcdn.com/w320/ke.png" },
    { name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
    { name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
    { name: "Kirguistán", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Laos", flag: "https://flagcdn.com/w320/la.png" },
    { name: "Letonia", flag: "https://flagcdn.com/w320/lv.png" },
    { name: "Líbano", flag: "https://flagcdn.com/w320/lb.png" },
    { name: "Lesoto", flag: "https://flagcdn.com/w320/ls.png" },
    { name: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
    { name: "Libia", flag: "https://flagcdn.com/w320/ly.png" },
    { name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
    { name: "Lituania", flag: "https://flagcdn.com/w320/lt.png" },
    { name: "Luxemburgo", flag: "https://flagcdn.com/w320/lu.png" },
    { name: "Madagascar", flag: "https://flagcdn.com/w320/mg.png" },
    { name: "Malaui", flag: "https://flagcdn.com/w320/mw.png" },
    { name: "Malasia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Maldivas", flag: "https://flagcdn.com/w320/mv.png" },
    { name: "Malí", flag: "https://flagcdn.com/w320/ml.png" },
    { name: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
    { name: "Islas Marshall", flag: "https://flagcdn.com/w320/mh.png" },
    { name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
    { name: "Mauricio", flag: "https://flagcdn.com/w320/mu.png" },
    { name: "México", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Micronesia", flag: "https://flagcdn.com/w320/fm.png" },
    { name: "Moldavia", flag: "https://flagcdn.com/w320/md.png" },
    { name: "Mónaco", flag: "https://flagcdn.com/w320/mc.png" },
    { name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
    { name: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
    { name: "Marruecos", flag: "https://flagcdn.com/w320/ma.png" },
    { name: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" },
    { name: "Birmania (Myanmar)", flag: "https://flagcdn.com/w320/mm.png" },
    { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "Países Bajos", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Nueva Zelanda", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" },
    { name: "Níger", flag: "https://flagcdn.com/w320/ne.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "Corea del Norte", flag: "https://flagcdn.com/w320/kp.png" },
    { name: "Macedonia del Norte", flag: "https://flagcdn.com/w320/mk.png" },
    { name: "Noruega", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Omán", flag: "https://flagcdn.com/w320/om.png" },
    { name: "Pakistán", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Palaos", flag: "https://flagcdn.com/w320/pw.png" },
    { name: "Palestina", flag: "https://flagcdn.com/w320/ps.png" },
    { name: "Panamá", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "Papúa Nueva Guinea", flag: "https://flagcdn.com/w320/pg.png" },
    { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Perú", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Filipinas", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Polonia", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Catar", flag: "https://flagcdn.com/w320/qa.png" },
    { name: "Rumanía", flag: "https://flagcdn.com/w320/ro.png" },
    { name: "Rusia", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Ruanda", flag: "https://flagcdn.com/w320/rw.png" },
    { name: "San Cristóbal y Nieves", flag: "https://flagcdn.com/w320/kn.png" },
    { name: "Santa Lucía", flag: "https://flagcdn.com/w320/lc.png" },
    { name: "San Vicente y las Granadinas", flag: "https://flagcdn.com/w320/vc.png" },
    { name: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
    { name: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { name: "Santo Tomé y Príncipe", flag: "https://flagcdn.com/w320/st.png" },
    { name: "Arabia Saudita", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
    { name: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
    { name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
    { name: "Sierra Leona", flag: "https://flagcdn.com/w320/sl.png" },
    { name: "Singapur", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Eslovaquia", flag: "https://flagcdn.com/w320/sk.png" },
    { name: "Eslovenia", flag: "https://flagcdn.com/w320/si.png" },
    { name: "Islas Salomón", flag: "https://flagcdn.com/w320/sb.png" },
    { name: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
    { name: "Sudáfrica", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Corea del Sur", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Sudán del Sur", flag: "https://flagcdn.com/w320/ss.png" },
    { name: "España", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "Sudán", flag: "https://flagcdn.com/w320/sd.png" },
    { name: "Surinam", flag: "https://flagcdn.com/w320/sr.png" },
    { name: "Suecia", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Suiza", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Siria", flag: "https://flagcdn.com/w320/sy.png" },
    { name: "Taiwán", flag: "https://flagcdn.com/w320/tw.png" },
    { name: "Tayikistán", flag: "https://flagcdn.com/w320/tj.png" },
    { name: "Tanzania", flag: "https://flagcdn.com/w320/tz.png" },
    { name: "Tailandia", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Timor Oriental", flag: "https://flagcdn.com/w320/tl.png" },
    { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
    { name: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
    { name: "Trinidad y Tobago", flag: "https://flagcdn.com/w320/tt.png" },
    { name: "Túnez", flag: "https://flagcdn.com/w320/tn.png" },
    { name: "Turquía", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Turkmenistán", flag: "https://flagcdn.com/w320/tm.png" },
    { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
    { name: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { name: "Ucrania", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Emiratos Árabes Unidos", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "Reino Unido", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Estados Unidos de América", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Uzbekistán", flag: "https://flagcdn.com/w320/uz.png" },
    { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
    { name: "Ciudad del Vaticano", flag: "https://flagcdn.com/w320/va.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Yemen", flag: "https://flagcdn.com/w320/ye.png" },
    { name: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Zimbabue", flag: "https://flagcdn.com/w320/zw.png" }
];

let currentCountry = {};
let correctAnswerIndex = 0;

// Función para mostrar una bandera aleatoria con 4 opciones
function showRandomFlag() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];

    // Mostrar la bandera
    document.getElementById('flag').src = currentCountry.flag;

    // Obtener 3 opciones adicionales aleatorias
    const options = [currentCountry];
    while (options.length < 4) {
        const randomOption = countries[Math.floor(Math.random() * countries.length)];
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Mezclar las opciones y asignarlas a los botones
    options.sort(() => Math.random() - 0.5);
    correctAnswerIndex = options.indexOf(currentCountry);

    const optionButtons = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        optionButtons[index].textContent = option.name;
        optionButtons[index].disabled = false;
    });

    document.getElementById('result').textContent = '';
}

// Función para comprobar la respuesta
function checkAnswer(button) {
    const userAnswer = button.textContent;
    if (userAnswer === currentCountry.name) {
        document.getElementById('result').textContent = '¡Correcto!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').textContent = `Incorrecto. La respuesta correcta es ${currentCountry.name}.`;
        document.getElementById('result').style.color = 'red';
    }

    // Deshabilitar botones después de la respuesta
    document.querySelectorAll('.option').forEach(btn => btn.disabled = true);
}

// Mostrar una bandera al cargar la página
window.onload = showRandomFlag;