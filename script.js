const IC={g:'leaf',h:'flame',s:'chili'};
const ic=f=>[...(f||'')].map(c=>`<svg class="ic"><use href="#${IC[c]}"/></svg>`).join('');
const fm=n=>'$'+(+n).toLocaleString('es-AR');
const pr=p=>p==='x'?'<span class="nd">NO DISPONIBLE</span>':`<span class="pr">${p.split('/').map(fm).join(' / ')}</span>`;
const item=l=>{const[n,d,p,f]=l.split('|');return `<div class="it${p==='x'?' off':''}"><div class="n"><span>${n}${ic(f)}</span>${pr(p)}</div>${d?`<p>${d}</p>`:''}</div>`};
const rows=t=>t.trim().split('\n');
const grid=t=>`<div class="grid">${rows(t).map(item).join('')}</div>`;
const S=(id,t,jp,body,c='')=>`<section id="${id}"><div class="ttl"><h2 class="${c}">${t}</h2><span class="jp">${jp}</span></div>${body}</section>`;
const H=(t,s,jp)=>`<h3>${t}${s?`<small>${s}</small>`:''}${jp?`<span class="jp">${jp}</span>`:''}</h3>`;

const RC=`New Phila|Salmón, palta y philadelphia con sesamo.|10000/20000|g
New York|Salmón y palta con sesamo.|10000/20000|g
California|Kanikama, palta y philadelphia con sesamo.|9800/19600|g
Tokio|Atún con verdeo y mayonesa, palta y philadelphia con lluvia de sesamo.|9800/19600|g
Chicken|Pollo con verdeo y philadelphia, cubierto con palta y teriyaki.|9800/19600|g
Golden|Palta y philadelphia cubierto con salmón.|10000/20000|g
Furoi|Langostino crispy y palta con sesamo.|10000/20000
Smoked|Salmón ahumado, philadelphia y palta con sesamo.|10000/20000|g
Spring|Langostino, palta y philadelphia cubierto con verdeo.|10000/20000|g
Maki Lang/Salmón|Langostino o salmón crispy y palta cubierto con salsa honey. Alga por fuera.|10000/20000`;
const RH=`Bahia Hot|Salmón, palta y philadelphia rebozado en panko.|10500/21000|h
Caribean Hot|Langostino crispy, palta y philadelphia rebozado en panko. Cubierto con salsa honey.|10500/21000|h
Patagonia Hot|Salmón ahumado, palta y philadelphia rebozado en panko.|10500/21000|h
Mexican Hot|Salmón, palta y philadelphia con topping de guacamole.|10900/21800|hs
Kali Hot|Kanikama, palta y philadelphia con topping neptuno.|10800/21800|hs`;
const RE=`Buenos Aires|Langostino, palta y phila cubierto con salmón y teriyaki.|10500/21000|g
Feel/Lang|Salmón o langostino, verdeo y phila envuelto en masa tamago.|10500/21000|g
Ebipalta|Langostino crispy y pepino cubierto con palta, batata y salsa maracuyá.|10500/21000
Tex Mex|Salmón crispy y palta cubierto con guacamole.|10500/21000|s
Recargado|Langostino crispy y salmón cubierto con salmón, batata y salsa maracuyá.|10500/21000
Tropical|Langostino crispy, phila y palta cubierto con plátano y salsa japonesa.|11000/22000
Nikkei|Langostino crispy y palta cubierto con salmón y surimi spicy.|11000/22000|s
Ceviche|Langostino, palta y phila cubierto con salmón acevichado.|11000/22000|g
Eros|Salmón ahumado, phila y verdeo cubierto con palta y salsa teriyaki.|11000/22000|g
Mango Lang/Salmón|Salmón o langostinos y palta cubierto con mango.|11000/22000|g
Maki Crazy|Langostino crispy y palta cubierto con salmón. Alga por fuera.|11000/22000
Amazonia|Langostino crispy y palta cubierto con salmón sellado y salsa spicy.|11000/22000|s`;
const RV=`Caprese|Tomate y palta cubierto con verdeo y salsa de rúcula.|9500/19000|g
Veggie|Zanahoria, pepino, phila y palta con lluvia de sesamo.|9500/19000|g
Fruit|Palta y phila cubierto con mango, lluvia de batata y salsa maracuyá.|9800/19600
Tamago Veggie|Masa tamago rellena de berenjena crispy y palta. Sin arroz.|9800/19600
Singapur|Zucchini crispy, phila y verdeo con cobertura de tamago.|9500/19000
Sidney|Maki con palta y phila cubierto con mango, batata y maracuyá.|9500/19000
Mexicano|Maki con palta, tomate y phila, rebozado en panko coronado con guacamole.|9800/19600|hs`;

const ENT=`Empanada de trucha|Trucha ahumada con un sofrito jugoso de cebollas y especias, encerrado en una masa crocante frita. (1 u.)|3000
Empanada de langostinos|Langostinos salteados en pimentón ahumado con un sofrito de cebollas y puerro, encerrado en una masa crocante frita. (1 u.)|3000`;
const COM=`Gyōza|Masa fina y ligera al vapor, sellada a la plancha, rellena de carne de cerdo al estilo nipón con notas frescas de verdeo y jengibre. (5 u.)|12500
Harumakis|Arrolladitos primavera. Carne o vegetales. (2 u.)|6000
Natsu Ebi|Langostinos sellados al pimentón rojo, coronados con ceviche tropical de mango y reducción de maracuyá. (5 u.)|14000
Ebifurōi|Langostinos apanados en panko y coco. Acompañados de salsa agridulce. (5 u.)|14000
Bōkōnchīno|Croquetas de salmón en panko, con salsa japonesa y sésamo. (5 u.)|14000
Tekenyōsu|Masa artesanal rellena de queso suave y fundido. (5 u.)|9000
Kanōri|Masa infusionada en alga nori crocante, rellena con tartar de trucha patagónica. (2 u.)|x
Torikatsu|Tiras de pollo apanadas en panko, acompañadas de salsa tokatsu. (5 u.)|x`;
const MAR=[['Pileta del Año','Finca Feliz · 70% Chardonnay, 30% Sauvignon Blanc'],['Santa Julia','100% Chardonnay'],['Tesoro Naranjo','Pedro Giménez'],['Trumpeter','Rutini Wines · 100% Sauvignon Blanc'],['Tesoro Criolla','Criolla grande'],['Hegel','Finca Feliz · 60% Chardonnay, 40% Torrontés']];

const NIG=`Salmón|Salmón rosado.|14000
Sellado|Salmón sellado, aceite de sésamo y spicy.|14000
Ahumado|Salmón ahumado en especias.|14000
Langostinos|Cubierto con langostinos.|14000
Palta|Cubierto con palta.|12500
Lenguado|Cubierto con pescado blanco.|x`;
const TIR=`Salmón|Salmón flambeado, aceite de ajonjolí, pimienta ahumada y rayadura de limón.|18500
Langostinos|Langostinos, aceite de sésamo, pimientos ahumados y rayadura de limón.|18000
Trucha|Salmón flambeado con aceite de ajonjolí, pimientos ahumados y rayadura de limón.|17500`;
const SAS=`Salmón|Cortes de salmón fresco.|14000
Pasión|Cortes de salmón sellados con batata y maracuyá.|14000
Ceviche|Cortes de salmón acevichado.|14000`;
const GEI=`Salmón|Palta y philadelphia envuelto en salmón.|14000
Fusión|Langostino, palta y philadelphia envuelto en salmón.|14000`;
const HR=`Trucha|Trucha patagónica, palta y cebolla de verdeo.|x
Langostino|Langostinos en tempura, crema de palta ahumada con sutil toque shirasha.|x
Salmón|Salmón flambeado, aceite de ajonjolí, pimentón ahumado y rayadura de limón.|x`;
const TEM=`Salmón|Cono de alga nori relleno de salmón, palta y philadelphia.|10000
Langostino|Cono de alga nori relleno de langostino, palta y philadelphia.|10000
Mix Fusión|Cono de alga nori relleno de langostinos y salmón, palta y philadelphia.|10000`;
const SAL=`Salmón|Salmón, palta y philadelphia. Lluvia de sésamo y salsa teriyaki.|24000
Furoi|Langostinos crispy, palta y philadelphia. Lluvia de sésamo y salsa teriyaki.|22000
Grill|Salmón grillado, palta y philadelphia. Lluvia de sésamo y salsa teriyaki.|24000
Teriyaki|Pollo teriyaki, palta y philadelphia. Lluvia de sésamo y salsa teriyaki.|20500`;
const HOT=`Ceviche|Salmón acevichado, palta y salsa ceviche.|12000/21900
Salmón|Salmón, palta y philadelphia.|12000/21900
Mix Crunch|Salmón y langostinos crispy, palta y topping surimi spicy.|12500/22300
Kali Neptuno|Kanikama neptuno y palta.|11000/20500`;
const WOK=`Ummi Teppan|Arroz blanco salteado con huevo, verdeo y zanahoria, acompañado de mix del mar.|24500
Yaki udon|Fideos salteados con vegetales mixtos y salsa de udon.|20000/22000
Yakimeshi|Arroz blanco salteado con huevo, verdeo y zanahoria, acompañado de vegetales mixtos.|20000/22000
Raisen Yaki|Fideos salteados con vegetales, salsa udon y mix del mar.|24500
Maneki salmón|Arroz blanco salteado con huevo, verdeo y zanahoria, acompañado de vegetales en cubos y salmón.|26000`;

const VEN=`Harumakis|Arrolladitos primavera. Vegetales.|6000
Vegetales en tempura|Mix de vegetales en panko, acompañados de salsa green.|7500
Tekenyōsu|Masa artesanal rellena de queso suave y fundido.|9000
Bōkōnchīno|Croquetas en panko, con salsa green y guacamole.|10000
Temaki|Cono de alga nori relleno de vegetales, palta y philadelphia.|9000
Gyōza|Ravioles rellenos de vegetales salteados, sellados a la plancha.|x`;
const VWOK=`Yakimeshi Veggie|Arroz blanco salteado con huevo, verdeo y zanahoria, acompañado de vegetales mixtos.|18900
Yaki udon Veggie|Fideos salteados con vegetales mixtos en salsa udon.|18900
Maneki Veggie|Arroz blanco salteado con huevo, verdeo y zanahoria, acompañado de berenjena crispy.|20500`;

const TB=[['Salmón','Selección premium, full salmón.',[[15,'4 Golden, 4 Avocado, 4 New York Phila, 3 Nigiri',25700],[25,'5 Bahia Hot, 5 New York, 5 Golden, 5 Avocado, 3 Nigiri, 2 Geishas',42500],[40,'5 Maki Phila, 5 Tex Mex, 5 Bahia Hot, 5 New York, 5 Golden, 5 Avocado, 5 Crispy, 5 Nigiri',68200]]],
['Fusión','Mix de piezas con langostinos, salmón y el sabor clásico del kanikama.',[[15,'4 Golden, 4 Ebipalta, 4 California, 3 Nigiri salmón',24900],[25,'5 Caribean Hot, 5 Golden, 5 California, 5 Ebipalta, 3 Nigiri, 2 Geishas',41000],[40,'5 Furoi, 5 Caribean, 5 Spring, 5 New York, 5 Golden, 5 Ebipalta, 5 Maki Furoi, 5 California',65900]]],
['Surtido','Piezas tradicionales con atún, pollo, salmón y kanikama.',[[15,'4 Tokio, 4 Chicken, 4 California, 3 Nigiri salmón',23600],[25,'5 Kali Hot, 5 Maki Salmón, 5 Tokio, 5 Chicken, 5 California',37000],[40,'5 Tokio, 5 Golden, 10 Chicken, 5 Kali Hot, 5 Maki Salmón, 5 New York, 5 California',60600]]]];
const tab=a=>`<div class="tabs">${a.map(([n,d,p])=>`<div class="tab"><b>${n} piezas</b>${d?`<span>${d}</span>`:''}<i class="pr">${fm(p)}</i></div>`).join('')}</div>`;
const GR=[[60,'Piezas surtidas tradicionales hechas a nuestro estilo.',93500],[80,'Piezas premium fusionadas con langostinos, salmón y kanikama.',130900],[100,'Piezas premium fusionadas con langostinos, salmón y kanikama.',160000]];
const SALS=`Teriyaki||1500
Agridulce||1500
Honey||1500
Maracuyá||1500
Wasabi||1500
Jengibre||1500
Surimi Spicy|Hebras de kanikama con tartar de chalotes en brunoise, puntos de cremoso especiado y un sutil toque de picante.|2200
Neptuno|Tiraditos de kanikama sobre cama de vegetales, con mayo japonesa de la casa, especias orientales y notas cítricas de yuzu.|2200
Guacamole|Palta cremosa condimentada con sabores orientales: sésamo, cebolla, tomate y notas cítricas.|2500`;

const VINOS=['Finca Feliz Tesoro – Criolla | Divisadero, Santa Rosa','Finca Feliz Tesoro – Naranjo | Algarrobo Grande, Junín','Pileta del año – Chardonnay & Sauvignon Blanc | Divisadero, Santa Rosa','Hegel – Chardonnay | Divisadero, Santa Rosa','Santa Julia – Chardonnay | Fray Luis Beltrán, Maipú','Piel de cordero – Malbec | Perdriel, Luján de Cuyo','Cosecha tardía – Blanco dulce | Centro, Luján de Cuyo','Alma Mora – Blanco dulce | Valle de Pedernal, San Juan'];
const ALC=`Copa de vino|Consultar etiquetas disponibles|5500
Cerveza 473 ml||5000
Cerveza 700 ml||10000
Smirnoff||5000`;
const SIN=`Agua con o sin gas 500 ml||4000
Agua saborizada 500 ml|Pomelo | Manzana|4000
Limonada|Vaso / Jarra|3500/12500
Gaseosa 500 ml||5000`;
const POST=`Franui|Frambuesas bañadas en chocolate.|9000
Chocotorta||4500
Marquesa||4500`;
const PRO=`Yaki de pollo|Arroz salteado con zanahoria, cebolla de verdeo, huevo y pollo.|14000
Wok de pollo|Arroz o fideos salteados con vegetales y pollo + 2 harumakis.|22500
Tokio|10 piezas clásicas (5 chicken – 5 california).|16500
Osaka|15 piezas variadas con langostino, kanikama y salmón.|21500
Sake|25 piezas clásicas full salmón.|38000
Fusionado|6 variedades de rolls con salmón, atún, pollo, langostinos, kanikama y veggie.|32900`;

const libre=[RC,RH,RE,RV].flatMap(rows).map(l=>l.split('|')).filter(a=>a[0]!=='Feel/Lang');
const chips=(a)=>`<div class="chips">${a.map(x=>`<span>${x[0]}${ic(x[3])}</span>`).join('')}</div>`;
const lib=g=>libre.filter(a=>rows(g).some(l=>l.split('|')[0]===a[0]));

document.getElementById('app').innerHTML=
S('entradas','Entradas','チケット',
 `<div class="two"><div><p class="sub">PARA EMPEZAR</p>${grid(ENT)}</div></div>`+
 H('Para compartir','','共有するには')+
 `<div class="two"><div>${grid(COM)}</div><div class="box c"><h3 style="font-size:2.4rem">Maridaje</h3>${MAR.map(m=>`<div class="it" style="margin-bottom:10px"><div class="n" style="font-size:1.2rem"><span>${m[0]}</span></div><p>${m[1]}</p></div>`).join('')}</div></div>`,'r')+
S('rolls','Rolls','ロール',
 H('Clásicos','5 / 10 piezas')+grid(RC)+H('Calientes','rebozados en panko')+grid(RH)+H('Especiales','5 / 10 piezas')+grid(RE)+
 `<div class="box s mt"><b>Puedes tempurizar cualquier roll de nuestra carta por $1.500 adicional.</b></div>`)+
S('barra','Barra','寿司',
 H('Nigiri','5 unidades','にぎり')+grid(NIG)+
 `<div class="box s mt"><div class="n"><span style="color:#fff;font-family:'Mr Dafoe',cursive;font-size:2.2rem">Degustación</span><span class="pr">${fm(15000)}</span></div><p>6 unidades · 3 variedades surtidas · Selección del sushiman</p></div>`+
 H('Tiradito','10 unidades','ティラディート')+grid(TIR)+
 H('Sashimi','5 unidades','刺身')+grid(SAS)+H('Geisha','5 unidades','芸者')+grid(GEI)+
 H('Hand roll','2 unidades','ハンドロール')+grid(HR)+H('Temaki','','手巻き')+grid(TEM)+
 H('Sushi Salad','','寿司サラダ')+grid(SAL)+H('Hot Dog Sushi','','ホットドッグ寿司')+grid(HOT))+
S('wok','Wok','中華鍋',`<div class="box c">${grid(WOK)}</div>`,'r')+
S('veggie','Veggie','ベジタリアン',
 `<svg class="dec" style="right:0;top:40px;width:70px" viewBox="0 0 80 110" fill="none" stroke="#2c4558" stroke-width="2"><path d="M40 4C50 4 52 20 62 40c14 30 6 66-22 66S4 70 18 40C28 20 30 4 40 4z"/><path d="M40 12c6 0 8 14 16 30 10 22 4 54-16 54"/><circle cx="40" cy="72" r="15"/></svg>`+
 H('Rolls veggie','5 / 10 piezas')+grid(RV)+H('Entradas veggie')+grid(VEN)+
 `<div class="two mt"><div class="box c"><h3 style="font-size:2.4rem">Wok veggie</h3>${grid(VWOK)}</div>`+
 `<div><h3 style="margin-top:0">Tablas combinadas veggie</h3><p>Mix de piezas especiales con verduras y frutas de estación. El queso philadelphia es opcional en cada pieza.</p>${tab([[15,'',22000],[25,'',34500],[40,'',56500]])}</div></div>`+
 `<p class="note">Todo nuestro menú es elaborado en el momento, puedes pedir cualquier pieza sin TACC o vegana.</p>`,'r')+
S('tablas','Tablas combinadas','セット',
 TB.map(([n,d,p])=>`<div class="band"><b>${n}</b><span>${d}</span></div>${tab(p.map(([q,t,pp])=>[q,t,pp]))}`).join('')+
 `<div class="tabs mt" style="margin-top:30px">${GR.map(([q,d,p])=>`<div class="tab"><b style="color:var(--red)">${q} piezas</b><span>${d}</span><i class="pr">${fm(p)}</i></div>`).join('')}</div>`+
 H('Salsas y toppings')+`<div class="box c">${grid(SALS)}</div>`)+
S('promos','Promociones','プロモーション',
 grid(PRO)+`<p class="note" style="max-width:none">Promociones válidas únicamente para delivery o take away, abonando en efectivo.</p>`+
 H('Menú pasos')+`<div class="two"><div class="note" style="margin:0;text-align:left"><div class="n"><span>Menú 2 pasos</span><span class="pr">${fm(20500)}</span></div><p>Entrada + principal: 2 harumakis (carne o vegetales) y arroz o fideos salteados con vegetales y pollo.</p></div><div class="note" style="margin:0;text-align:left"><div class="n"><span>Menú 3 pasos</span><span class="pr">${fm(25000)}</span></div><p>Entrada + principal + bebida. Harumakis, boconccinos o gyosas; sushi salad, wok, 10 piezas o hot dog sushi; limonada o agua.</p></div></div><p class="sub mt">Válido para consumo en el local, abonando en efectivo. De 17 a 20 hs.</p>`)+
S('libre','Sushi libre','食べ放題',
 `<div class="box s"><h3 style="font-size:2.6rem">Elegí todos los rolls que quieras</h3><p>Rolls clásicos, calientes, especiales y veggie. Consultá valor y condiciones del sushi libre por nuestros canales de contacto.</p></div>`+
 H('Clásicos')+chips(lib(RC))+
 H('Calientes')+chips(lib(RH))+
 H('Especiales')+chips(lib(RE))+
 H('Rolls veggie')+chips(lib(RV))+
 `<p class="sub mt">Las bebidas se piden aparte.</p>`,'r')+
S('bebidas','Bebidas','飲み物',
 H('Vinos','','ワイン')+`<div class="it">${VINOS.map(v=>`<p style="font-size:1.05rem">${v}</p>`).join('')}</div>`+
 `<div class="two"><div>${H('Con alcohol')}${grid(ALC)}${H('Tragos')}<div class="chips">${['Gin Tonic','Aperol','Mojito','Campari','Cuba Libre','Fernet','Negroni','Caipirinha'].map(t=>`<span>${t}</span>`).join('')}</div></div><div>${H('Sin alcohol')}${grid(SIN)}${H('Postres')}${grid(POST)}</div></div>`,'r')+
S('nosotros','Nosotros','私たち',`<div class="nos"><div class="txt"><span class="hanko">ciao<br>sushi</span><p class="lead">Somos un pequeño local en el corazón de Almagro. Detrás de cada pieza hay amor, dedicación y pasión por la cocina.</p><p>En Ciao Sushi nos gusta que todo llegue fresco, rico y recién hecho. Por eso elaboramos nuestros productos al momento y toda la producción se realiza en el día, cuidando cada detalle para que disfrutes del mejor sabor. Y si preferís disfrutarlo en casa, también tenemos delivery.</p><p>Esta primavera estamos preparando nuestra vereda para recibirte, compartir un rico sushi y disfrutar juntos de esos pequeños momentos que hacen lindo al barrio.</p><p>Gracias por elegir un emprendimiento de barrio, por acompañarnos y por dejarnos ser parte de tus comidas, encuentros y momentos especiales.</p></div><div class="ph"><figure><img src="assets/nosotros-1.jpg" alt="Frente del local Ciao Sushi" loading="lazy"><figcaption><span class="jp">店</span> el local</figcaption></figure><figure><img src="assets/nosotros-2.jpg" alt="Bandeja de rolls" loading="lazy"><figcaption><span class="jp">巻</span> los rolls</figcaption></figure><figure><img src="assets/nosotros-3.jpg" alt="Pared decorada con afiches japoneses" loading="lazy"><figcaption><span class="jp">壁</span> las paredes</figcaption></figure><figure><img src="assets/nosotros-4.jpg" alt="Barra del local" loading="lazy"><figcaption><span class="jp">カウンター</span> la barra</figcaption></figure></div></div>`,'r');
