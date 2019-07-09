const path = "https://thomasobadia.github.io/three-scroll-js/assets/"
const spaceBetweenYears = 5
const spaceAfterYears = 3
const spaceBetweenElements = 2
const spaceBetweenYearAndText = 1
let position = 0
const elementsPosition = [{x:-1.5,y:1},{x:1.5,y:1}, {x:1.5,y:-1}, {x:-1.5,y:-1}]
const elementsPositionMobile = [{x:1,y:-1.5},{x:1,y:1.5}, {x:-1,y:1.5}, {x:-1,y:-1.5}]



const dates = {
    0: [
        {
            date: 1819,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Naissance de Charles-Frédéric Selmer qui, comme son père, Jean-Jacques Selmer, et son grand-père, Johann Jakobus Selmer (né en 1749), devient chef de musique militaire (De 1853 à 1867, il est chef de musique au 9ème régiment d'infanterie de ligne)",
        },
        {
            date: 1840,
            type: "picture",
            url : "histoire-6.jpg",
            content :"En 1840, Adolphe Sax (né à Dinant en Belgique le 6 novembre 1814, mort à Paris le 7 février 1894) fabrique un instrument au registre grave qu’il dénomme « Saxophon » et qu’il projette de présenter en 1841 à la Commission de l’Exposition belge des produits de l’industrie à Bruxelles.",
        },
        {
            date: 1842,
            type: "picture",
            url : "histoire-6.jpg",
            content :"En 1842, Adolphe Sax s’installe à Paris, rue Neuve-Saint-Georges, dans un petit atelier qui comptera jusqu’à 191 ouvriers en 1848 et produira environ 20 000 instruments durant la période comprise entre 1843 et 1860.",
        },
        {
            date: 1846,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Le 21 mars, Adolphe Sax dépose un brevet pour un système d’instruments à vent, dits Saxophones.",
        },
        {
            date: 1880,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Henri Selmer, fils de Charles Frédéric décédé en 1878, sort du conservatoire (classe de clarinette de M. Leroy). Il a 22 ans et entre à la musique de la Garde Républicaine, où il reste de 1878 à 1881. Il jouera successivement comme clarinette solo aux concerts Lamoureux, Benjamin Godard et à l’Opéra.",
        },
        {
            date: 1885,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Fondation de la Maison Selmer : Henri Selmer commence l'activité de fabrication d’anches et de becs.<br> Dès 1898, Henri Selmer entreprend, avec le concours d'un ouvrier, la fabrication de clarinettes et installe son atelier au 4 de la Place Dancourt.<br> La même année, son frère cadet, Alexandre, né en 1864, entre comme clarinettiste à l'Orchestre Philharmonique de Boston, où il restera jusqu’en 1901.",
        },
    
    ],
    1900: [
        {
            date: 1900,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Henri obtient une Médaille de bronze à l’exposition de Paris. La même année, il commence à travailler avec un agent en Grande Bretagne (M. Gomez).",
        },
        {
            date: 1904,
            type: "picture",
            url : "histoire-3.jpg",
            content :"Henri et Alexandre Selmer dans l’atelier de la place Dancourt. <br> Les clarinettes Selmer sont présentées pour la première fois à l'exposition Universelle de Saint Louis (USA) où elles obtiennent une médaille d’or. <br> Alexandre Selmer est alors clarinette solo, depuis deux ans, à l'Orchestre Symphonique de Cincinnati.  De plus, dès 1903, il représente les clarinettes Selmer produites par Henri en France, ce qui contribuera fortement à l’essor de la marque aux Etats-Unis.",
        },
        {
            date: 1905,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Paul Lefèvre qui travaillait pour la Maison Robert (facteur de clarinettes) et son fils Henri rejoignent Henri Selmer. <br> Reprise des établissements \"Barbier\" (fabricant de flûtes, rue du faubourg Saint Denis). <br> L’année suivante, Alexandre s’installe officiellement aux Etats-Unis, à New York où il vend les clarinettes Selmer. Cette structure est à l’origine de Selmer USA.",
        },
        {
            date: 1908,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Dans son atelier de la place Dancourt, Henri Selmer travaille avec une équipe d’une vingtaine d’ouvriers/apprentis.",
        },
        {
            date: 1909,
            type: "picture",
            url : "histoire-3.jpg",
            content :"Alexandre Selmer rejoint l’orchestre philharmonique de New York en tant que 1ère clarinette où il  jouera sous la direction de Gustav Mahler. <br> Il ouvre un magasin à New York, dans la 86ème rue  et  engage un de ses élèves, George Bundy, pour  l'assister." ,
        },
        
        
    ],
    1910: [
        {
            date: 1910,
            type: "picture",
            url : "histoire-3.jpg",
            content :"Le catalogue de 1910, un des tout premiers catalogues Selmer, propose une grande diversité d’instruments et de becs : <br> Le catalogue, p. 1 à 5 : présentation de la société <br> Le catalogue, p. 4 à 23 : les clarinettes <br> Le catalogue, p.24 à 41 : les flûtes, saxophones et accessoires <br> Le catalogue, p. 42 à 49 : méthodes et partitions <br> Maurice Lefèvre, deuxième fils de Paul Lefèvre, rejoint l'équipe Selmer. <br> Alexandre, après avoir ouvert sa première boutique aux Etats-Unis, décide de rentrer définitivement en France, confiant son poste à un de ses élèves, George Bundy." ,
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Ouverture de l'usine de Gaillon, dans l’Eure où travaille une petite quarantaine d’ouvriers. <br> L’année suivante l’atelier de Paris est agrandi et les moyens de fabrication structurés." ,
        },
        {
            date: 1919,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Ouverture d’une nouvelle usine à Mantes dont la direction technique est assurée par Maurice et Henri Lefèvre, gendres d’Henri Selmer. D’autres fabricants de saxophones, comme Dolnet et Evette-Scheaffer sont déjà implantés dans cette ville." ,
        },
    ],
    1920: [
        {
            date: 1922,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Le 31 Décembre 1921 est présenté le premier saxophone Selmer (un alto), le \"Série 1922\" <br> Les premiers saxophones « Selmer » sortent sous la marque « Série 22 » <br> Le « Série 22 » fait place au « Modèle 22 ». L’ensemble de la famille est proposé, y compris le saxophone Tenor « C Melody ». <br> François Combelle, saxophoniste à la Garde Républicaine, est essayeur de saxophones pour Selmer (jusqu’à l’après guerre). <br> Selmer compte alors 50 luthiers qui fabriquent 30 saxophones / mois. " ,
        },
        {
            date: 1923,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Extension des ateliers de Mantes : trois nouveaux ateliers sont construits : un pour les anches, deux pour les saxophones. L’atelier de la place Dancourt est conservé pour l’accueil des musiciens. <br> Selmer est présent au salon de la musique." ,
        },
        {
            date: 1926,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Le nouveau logotype \"Henri SELMER Paris\" est adopté : la couronne de lauriers remplace la lyre. Ce logo original, gravé sur tous les instruments SELMER Paris, est toujours aujourd’hui le sceau de la marque originale « Henri SELMER Paris ».  <br> Sortie des Saxophones \"Modèle 26\". <br> Environ 136 ouvriers travaillent chez Selmer." ,
        },
        {
            date: 1927,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Sortie de la clarinette métal. <br> Grand prix à l'Exposition Internationale de Genève, pour l'ensemble de la production." ,
        },
        {
            date: 1928,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Création de la société \"H.Selmer & Cie\", sous forme S.A.R.L. <br> Sortie du “Modèle 28” <br> Le catalogue propose une large gamme d’instruments fabriqués par Selmer : la gamme clarinettes, bassons,... <br> ... au catalogue également : les gammes flûtes, saxophones, cors anglais, hautbois <br> Création de Selmer–Canada." ,
        },
        {
            date: 1929,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Rachat des ateliers Adolphe Sax : Selmer Paris devient successeur du concept du saxophone. <br> Création de Selmer-Londres. <br> Présentation d'un modèle spécial de saxophone (n°9 909), avec douze améthystes pour l'exposition internationale de Barcelone. <br> Sortie du saxophone 28 New large bore." ,
        },
    ],
    1940: [
        {
            date: 1942,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1945,
            type: "picture",
            url : "histoire-3.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
    ],
    // 1950: [
    //     {
    //         date: 1952,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1953,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1954,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1955,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1956,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1957,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
        
    // ],
    // 1960: [
    //     {
    //         date: 1962,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1963,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1964,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1965,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1966,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1967,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
        
    // ],
    // 1970: [
    //     {
    //         date: 1972,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1973,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1974,
    //         type: "picture",
    //         url : "histoire-6.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    //     },
    //     {
    //         date: 1975,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1976,
    //         type: "picture",
    //         url : "histoire-3.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
    //     {
    //         date: 1977,
    //         type: "picture",
    //         url : "histoire-4.jpg",
    //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
    //     },
        
    // ],  
}




const addVideo = (scene, url, size, position, name, content) => {

    video = document.createElement( 'video' );
    video.src = url;
    video.muted = "true"
    video.load()
    // TODO: Support play device
    video.play()
    var texture = new THREE.VideoTexture( video );
    texture.needsUpdate;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    texture.crossOrigin = 'anonymous';
    var video = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(size.w, size.h),
        new THREE.MeshBasicMaterial({ map: texture }));
    video.position.set(position.x,position.y,position.z);
    video.name = name
    video.content = content
    video.callback = () => {
        console.log('hello')
    }
    scene.add( video );
    
}


function normalize(val, max, min) { return (val - min) / (max - min); }


const addPicture = (scene, url, position, name, content) => {
    var map = new THREE.TextureLoader().load(url);
    var img = document.createElement("img");
    var result
    img.src = url;
    img.onload = function (){
        img.style.visibility = 'hidden';
        document.body.appendChild(img);
        var width = img.naturalWidth;
        var height = img.naturalHeight;
        document.body.removeChild(img)

        sprite.scale.set(normalize(width,2500,0)*1.5,normalize(height,2500,0)*1.5,0.0001);
    }
    var material = new THREE.SpriteMaterial( { map: map} );
    material.minFilter = THREE.LinearFilter;
    material.magFilter = THREE.LinearFilter;
    var sprite = new THREE.Sprite( material );
    sprite.name = name
    sprite.content = content
    sprite.position.set(position.x,position.y,position.z);
    scene.add( sprite );
}


const addText = (scene,loader, url, content, size, position, color,opacity) => {

    loader.load( url, function ( font ) {
        var shapes = font.generateShapes( content, size);
        text = new THREE.Mesh( 
            new THREE.ShapeBufferGeometry(shapes),
            new THREE.MeshBasicMaterial({ color: color, opacity: opacity, transparent : true }));
        text.position.set(position.x,position.y,position.z);
        text.geometry.center()
        scene.add( text ); 
    })
    
}

const addDate = (scene, loader, date, position) => {
    addText(scene,loader, path +'Montserrat_Bold.json',date, 2, {x:0,y:0,z:position}, 0x24282E, 0.9)
    addText(scene,loader, path +'Hijrnotes_Regular.json',"Années", 0.25, {x:0,y:0,z:position+spaceBetweenYearAndText}, 0xffffff, 1)
}

const addItemsMobile = (obj,scene,loader, sidebarContainer,camera, sidebarCursor) => {
    for(let i = 0; i < Object.values(obj).length; i++){
        if (i > 0){
            position -= spaceBetweenYears
            addDate(scene,loader, Object.keys(obj)[i],position)
            Object.values(obj)[i].position = position
        }
       
        console.log(position)


        for (let j = 0; j <Object.values(obj)[i].length; j++){
            if(j == 0 && i !== 0){
                position -= spaceAfterYears
            }
            position -= spaceBetweenElements
            switch (Object.values(obj)[i][j].type){
                case 'picture':
                    addPicture(scene, path + Object.values(obj)[i][j].url, {x: elementsPositionMobile[j%elementsPositionMobile.length].x, y:elementsPositionMobile[j%elementsPositionMobile.length].y, z:position}, Object.values(obj)[i][j].date, Object.values(obj)[i][j].content)
                    break;
                case 'video':
                    addVideo(scene,path + Object.values(obj)[i][j].url, {w:2*16/9, h:2}, {x: elementsPositionMobile[j%elementsPositionMobile.length].x, y:elementsPositionMobile[j%elementsPositionMobile.length].y,z:position}, Object.values(obj)[i][j].date, Object.values(dates)[i][j].content)
                    break;
                default:
                    console.log('error')
            }
        }

    }
}

const addItems = (obj,scene,loader, sidebarContainer,camera, sidebarCursor,sidebar) => {
    for(let i = 0; i < Object.values(obj).length; i++){
        if (i > 0){
            position -= spaceBetweenYears
            addDate(scene,loader, Object.keys(obj)[i],position)
            Object.values(obj)[i].position = position
        }
       
        console.log(position)

        for (let j = 0; j <Object.values(obj)[i].length; j++){
            if(j == 0 && i !== 0){
                position -= spaceAfterYears
            }
            position -= spaceBetweenElements
            switch (Object.values(obj)[i][j].type){
                case 'picture':
                    addPicture(scene, path + Object.values(obj)[i][j].url, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y, z:position}, Object.values(obj)[i][j].date, Object.values(obj)[i][j].content)
                    break;
                case 'video':
                    addVideo(scene,path + Object.values(obj)[i][j].url, {w:2*16/9, h:2}, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y,z:position}, Object.values(obj)[i][j].date, Object.values(dates)[i][j].content)
                    break;
                default:
                    console.log('error')
            }
        }

    }
    createTimeLine(obj, sidebarContainer,camera, sidebarCursor,sidebar)

}

const createTimeLine = (obj,sidebarContainer, camera, sidebarCursor,sidebar) => {
    for(let i = 1; i < Object.values(obj).length; i++){
        var year = document.createElement('div')
        year.classList.add('history-sidebar-container-year')
        // console.log(Object.keys(obj)[i])
        year.textContent = Object.keys(obj)[i]
        year.id = "annee-"+ Object.keys(obj)[i]
        sidebarContainer.appendChild(year)
        year.addEventListener('click', () => {
            jumpTo(obj, Object.keys(obj)[i],camera, sidebarContainer, sidebarCursor)
            updateTimeLinePosition(sidebarContainer, sidebarCursor, camera,sidebar)
            // TweenMax.to(document.querySelector('.intro'),0.5,{autoAlpha:0, scale: 5, onComplete: () =>{intro.style.display = 'none'}})
            

        })
    }

}


const jumpTo = (obj, year, camera, sidebarContainer, sidebarCursor) => {

    var goodone = Object.entries(obj).filter(entry => entry[0] == year)
    // console.log(goodone[0][1].position)
    // console.log(1 - goodone[0][1].position / 100)
    TweenMax.to(camera.position,2  , { ease: Power4.easeOut, z: goodone[0][1].position + 4 , overwrite : "none"});
}


const updateTimeLinePosition = (sidebarContainer, sidebarCursor, camera,sidebar) => {
    if(window.innerHeight < window.innerWidth){
        let years = Array.from(sidebarContainer.children)
        document.querySelector('.history-sidebar-container-year-origin').classList.remove('history-sidebar-container-year-active')
        for(let j = 0; j< Object.values(dates).length; j++){
            if (j!=0){
                document.querySelector(`#annee-${Object.keys(dates)[j]}`).classList.remove('history-sidebar-container-year-active')
                
            }
            if(j == 0 && camera.position.z -5 > Object.values(dates)[j+1].position ){
                var value = document.querySelector('.history-sidebar-container-year-origin').getBoundingClientRect().height /2 + document.querySelector('.history-sidebar-container-year-origin').offsetTop
                TweenMax.to(sidebarCursor.style,1, { ease: Power0.ease, top: value + "px" , overwrite : "none"});
                document.querySelector('.history-sidebar-container-year-origin').classList.add('history-sidebar-container-year-active')
    
            } else if(j != 0 && camera.position.z -5 < Object.values(dates)[j-1].position && camera.position.z -5 > Object.values(dates)[j].position){
                var value = document.querySelector(`#annee-${Object.keys(dates)[j-1]}`).getBoundingClientRect().height /2 + document.querySelector(`#annee-${Object.keys(dates)[j-1]}`).offsetTop
                TweenMax.to(sidebarCursor.style,1, { ease: Power0.ease, top: value + "px" , overwrite : "none"});
                document.querySelector(`#annee-${Object.keys(dates)[j-1]}`).classList.add('history-sidebar-container-year-active')
    
            }
            if(camera.position.z - 5  < Object.values(dates)[Object.values(dates).length - 1].position ){
                var value = document.querySelector(`#annee-${Object.keys(dates)[Object.values(dates).length - 1]}`).getBoundingClientRect().height /2 + document.querySelector(`#annee-${Object.keys(dates)[Object.values(dates).length - 1]}`).offsetTop
                TweenMax.to(sidebarCursor.style,1, { ease: Power0.ease, top: value + "px" , overwrite : "none"});
                document.querySelector(`#annee-${Object.keys(dates)[Object.values(dates).length - 1]}`).classList.add('history-sidebar-container-year-active')
            }
        }
    } else {
        sidebar.style.display = 'none'
    }


}




const init = () => {
    const scene = new THREE.Scene()
    var loader = new THREE.FontLoader()
    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    let picOpened = false
    let picOpenedCoords = {}
    
    const container = document.querySelector('.history-container')
    const overlayContainer = document.querySelector('.history-overlay')
    const overlayYear = document.querySelector('.history-overlay-year')
    const overlayContent = document.querySelector('.history-overlay-content')
    const overlayContainerMobile = document.querySelector('.history-overlay-mobile')
    const overlayYearMobile = document.querySelector('.history-overlay-mobile-year')
    const overlayContentMobile = document.querySelector('.history-overlay-mobile-content')
    const overlayImageMobile = document.querySelector('.history-overlay-mobile-image')
    const overlayCloseMobile = document.querySelector('.history-overlay-mobile-close')
    const sidebar = document.querySelector('.history-sidebar')
    const sidebarContainer = document.querySelector('.history-sidebar-container')
    const sidebarCursor = document.querySelector('.history-sidebar-container-cursor')
    const intro = document.querySelector('.history-intro')
    const progress = document.querySelector('.history-progress')
    const progressContainer = document.querySelector('.history-progress-container')
    const progressBar = document.querySelector('.history-progress-progression')
    const progressNumber = document.querySelector('.history-progressnumber')
    const scrollItem = document.querySelector('.mouse_scroll')
    var nextImage, prevImage, baseAlpha, baseBeta
    let canScroll = true;
    let canBounce = true;
    let loadingComplete = false
    const initialOrientation = true


    document.querySelector('.history-sidebar-container-year-origin').addEventListener('click', () => {
        
        TweenMax.to(camera.position,1, { ease: Power0.ease, z: 4 , overwrite : "none"});
    })

    // THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    //     progress.innerText = 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
    
    // };
    
    THREE.DefaultLoadingManager.onLoad = function ( ) {
        // progress.innerText = 'Chargement terminé !'
        onLoadingComplete()
    };
    
    THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        progressNumber.innerText =  Math.floor(itemsLoaded / itemsTotal * 100) +' %'
        progressBar.style.width = itemsLoaded / itemsTotal * 100 +'%'
    };
    
    THREE.DefaultLoadingManager.onError = function ( url ) {
        progress.innerText = 'There was an error loading ' + url     
    };



    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight, 0.001, 1000)
    camera.position.z = 4
    camera.lookAt(0,0,0)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
        
    })
    

    renderer.setSize(windowWidth, windowHeight)
    renderer.shadowMap.enabled = true
    renderer.domElement.id = 'canvas-histoire';
    container.appendChild(renderer.domElement)

    const onLoadingComplete = () => {
        loadingComplete = true
        TweenMax.to(progress,0.5,{opacity:0, onComplete: () =>{
            // progress.style.display= 'none'
            TweenMax.to(scrollItem,0.5,{opacity:1})
        }})
        TweenMax.to(renderer.domElement,1,{opacity:1})
        TweenMax.to(sidebar,1,{opacity:1})


    }

    scene.fog = new THREE.Fog( 0x0C1015,2,10);
    // TODO: Opti fog


    var start = {x:0,y:0};


    function onMouseWheel(event) {

        event.preventDefault();
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera,sidebar);
        
        if ( typeof event.deltaY !== 'undefined'){
            if(loadingComplete){

                if(!picOpened){
    
                    TweenMax.to(progressContainer,0.25,{opacity:0, onComplete:()=> {
                        progressContainer.style.display = 'none'
                    }})
                    
                    let move = scale(event.deltaY, -300, 300, -50, 50)
                    console.log(event.deltaY)
                    if(camera.position.z - move <= 4){
                        
                        // camera.position.z -= move;
                        TweenMax.to(camera.position,1, { ease: Power0.easeInOut, z: "-=" + move, overwrite : "all"});
    
    
                    } 
    
                    // if(camera.position.z - move >= 4){
                    //     // camera.position.z = 4;
                    //     TweenMax.to(camera.position,0.25, { ease: Power0.easeInOut, z: 4, delay: 0.25, overwrite : "all"});
                    
                    // } 
                    
                }else {
                    
                    if(canScroll){
                        if(event.deltaY > 0){
                            toggleImage(nextImage, 0)
                           
                        
                        }else{
                            toggleImage(prevImage, 1)
        
                        }
                        canScroll = false
                        setTimeout(()=>{ canScroll = true },1000)
                    }
                            
                }
    
            }
        }else{
            if(loadingComplete){

                if(!picOpened){
    
                    TweenMax.to(progressContainer,0.25,{opacity:0, onComplete:()=> {
                        progressContainer.style.display = 'none'
                    }})
                    
                    let move = scale(event.detail, -50, 50, -80, 80)
    
                    if(camera.position.z - move <= 4){
                        
                        // camera.position.z -= move;
                        TweenMax.to(camera.position,1, { ease: Power0.easeInOut, z: "-=" + move, overwrite : "all"});
    
    
                    } 
    
                    // if(camera.position.z - move >= 4){
                    //     // camera.position.z = 4;
                    //     TweenMax.to(camera.position,0.25, { ease: Power0.easeInOut, z: 4, delay: 0.25, overwrite : "all"});
                    
                    // } 
                    
                }else {
                    
                    if(canScroll){
                        if(event.detail > 0){
                            toggleImage(nextImage, 0)
                           
                        
                        }else{
                            toggleImage(prevImage, 1)
        
                        }
                        canScroll = false
                        setTimeout(()=>{ canScroll = true },1000)
                    }
                            
                }
    
            }
        }
        
        
    }


    function touchStart(event) {
        console.log("touch")
        event.preventDefault()
        start.x = event.touches[0].pageX;
        start.y = event.touches[0].pageY;
        mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 +-1;
        mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
        offset = {x:0,y:0};
    }

    function touchEnd(event){
        console.log(event)
        // touch = {};
        // touch.x = start.x - event.touches[0].pageX;
        // touch.y = start.y +(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
        console.log(offset.y)
        if(offset.y < 10 && offset.y > -10){
         handleTouch(mouse)

        }
    }
    
    function touchMove(event){
        event.preventDefault()
        offset = {};
        offset.x = start.x - event.touches[0].pageX;
        offset.y = start.y - event.touches[0].pageY;
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera,sidebar);
        if(loadingComplete){
            if(!picOpened){
                TweenMax.to(progressContainer,0.25,{opacity:0, onComplete:()=> {
                    progressContainer.style.display = 'none'
                }})
                let move = scale(offset.y, -300, 300, 10, -10)

                if(camera.position.z - move <= 4){
                    // camera.position.z -= move;
                    TweenMax.to(camera.position,0.8, { ease: Power2.easeOut, z: "-=" + move, overwrite : "none"});
                } 

                // if(camera.position.z - move >= 4){
                //      TweenMax.to(camera.position,1, { ease: Power0.easeInOut, z: 4, overwrite : "none"});
                // } 
                
            }else {              
                if(canScroll){
                    if(offset.y > 0){
                        toggleImage(nextImage, 0)
                       
                    }else{
                        toggleImage(prevImage, 1)
    
                    }
                    canScroll = false
                    setTimeout(()=>{ canScroll = true },1000)
                }
                        
            }

        }
    
    }

    // TODO: Insta Scroll
    function onMouseMove( event ) {

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // camera.rotation.x =  mouse.y / 20
        TweenMax.to(camera.rotation,1, { ease: Power0.ease, x: mouse.y / 10, y: - mouse.x / 10, overwrite : "none"});
        TweenMax.to(overlayContent.style,1, {ease: Power0.ease, top: 50 + mouse.y  + '%', left: '+=' - mouse.x   + '%'});
        TweenMax.to(overlayYear.style,1, {ease: Power0.ease, top: 20 + mouse.y  + '%', left: '+=' - mouse.x   + '%'});

        updateCursor()
        

    }
    const updateCursor = () => {
        raycaster.setFromCamera( mouse, camera );
        var intersects = raycaster.intersectObjects( scene.children );

        if(picOpened){
            console.log('cross')
            overlayContainer.style.cursor = `url('${path}'close_cursor.svg) 25 25, auto`

        } else{
            if(intersects.length && intersects[0].object.type === "Sprite"){
                document.querySelector('body').style.cursor ="pointer";

            } else {
                    document.querySelector('body').style.cursor ="auto";
                }
            }
    }

    const openImage = (obj) => {
        picOpened = true
        picOpenedCoords.name = obj.name
        picOpenedCoords.x = obj.position.x
        picOpenedCoords.y = obj.position.y
        picOpenedCoords.z = obj.position.z
        overlayYear.textContent = obj.name
        overlayContent.innerHTML = obj.content
        document.querySelector('body').style.cursor ="pointer";   
        
        if(picOpenedCoords.x > 0){
            overlayContent.classList.add('history-overlay-content-left')
            if(overlayContent.classList.contains('history-overlay-content-right')){
                overlayContent.classList.remove('history-overlay-content-right')
            }
            
        }else {
            overlayContent.classList.add('history-overlay-content-right')
            if(overlayContent.classList.contains('history-overlay-content-left')){
                overlayContent.classList.remove('history-overlay-content-left')
            }
        }
        TweenMax.to(camera.position, 1, { ease: Power2.easeInOut, x:obj.position.x * 0.60, y:obj.position.y, z: obj.position.z + 1.5 });
        overlayContainer.style.display = 'block'
        TweenMax.to(overlayContainer,0.5, {ease: Power2.easeInOut, delay: 0.75, opacity:1, scale: 1});
        var toHide = scene.children.filter(mesh => mesh.uuid !== obj.uuid && mesh.type !== "PerspectiveCamera" )
        toHide.map( mesh => { TweenMax.to(mesh.material,1, {ease: Power2.easeInOut, opacity:0.1 })})

        for (let i = 0 ; i < scene.children.length; i++){
            if(scene.children[i].uuid == obj.uuid && scene.children[i].type === "Sprite"){
                if(i > 0 && i < scene.children.length){
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i-1]
                } else if (i = 0) {
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i]
                }else  {
                    nextImage = scene.children[i]
                    prevImage = scene.children[i - 1]
                }
                
            }
        }

    }

    const openImageMobile = (obj) => {
        picOpened = true
        picOpenedCoords.name = obj.name
        overlayYearMobile.textContent = obj.name
        overlayContentMobile.innerHTML = obj.content
        overlayImageMobile.src = obj.material.map.image.currentSrc
        overlayContainerMobile.style.display = 'flex'
        overlayCloseMobile.style.display = 'block'
        TweenMax.to(overlayContainerMobile,0.5, {ease: Power2.easeInOut, opacity:1, scale: 1});
        TweenMax.to(overlayCloseMobile,0.5, {ease: Power2.easeInOut, opacity:1, scale: 1});

    }

    const closeImageMobile = () => {
        TweenMax.to(overlayCloseMobile,0.5, {ease: Power2.easeInOut,  opacity:0, scale : 0.9, onComplete: () => overlayContainer.style.display = 'none'});
        TweenMax.to(overlayContainerMobile,0.5, {ease: Power2.easeInOut,  opacity:0, scale : 0.9, onComplete: () => overlayContainerMobile.style.display = 'none'});
        picOpened = false
    }
    overlayCloseMobile.addEventListener('touchstart', () => {
        closeImageMobile()
    })
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

    const updateIntro = (cameraPos) => {
        opacity = scale(cameraPos,0,4,0,1)
        scaleIntro = scale(cameraPos,4,-2,1,10)
        if(scaleIntro < 0.7){scaleIntro = 0.7}
        intro.style.opacity = opacity
        // intro.style.transform = 'scale('+scaleIntro+') translateX(-50%)'
        TweenMax.to(intro,0,{scale:scaleIntro,translateX: '-50%'})
        if(opacity <= 0){
            intro.style.display = 'none'
        }else{
            intro.style.display = 'flex'       
        }
        
    }

    const closeImage = () => {
        var toShow = scene.children.filter(mesh =>  mesh.type !== "PerspectiveCamera")
        toShow.map( mesh => { 
            if (mesh.type == "Mesh"){
                TweenMax.to(mesh.material,0.5, {ease: Power2.easeInOut, opacity:0.9 })
            }else{
                TweenMax.to(mesh.material,0.5, {ease: Power2.easeInOut, opacity:1 })
            }
         })
            
        // TweenMax.to(scene.getObjectByName(picOpenedCoords.name).position, 0.5, { ease: Power2.easeInOut, x:picOpenedCoords.x, y:picOpenedCoords.y, z: picOpenedCoords.z });
        TweenMax.to(camera.position, 1, { ease: Power2.easeInOut, x:0, y:0, z: picOpenedCoords.z + 2 });
        TweenMax.to(overlayContainer,0.5, {ease: Power2.easeInOut,  opacity:0, scale : 0.9, onComplete: () => overlayContainer.style.display = 'none'});
        picOpened = false
    }

    const toggleImage = (obj, way) => {
        picOpened = true
        picOpenedCoords.name = obj.name
        picOpenedCoords.x = obj.position.x
        picOpenedCoords.y = obj.position.y
        picOpenedCoords.z = obj.position.z
        
        document.querySelector('body').style.cursor ="pointer";   
        
        
        TweenMax.to(camera.position, 1, { ease: Power2.easeInOut, x:obj.position.x * 0.60, y:obj.position.y, z: obj.position.z + 1.5 });
    
        if(way === 1 ){
                TweenMax.to(overlayContainer,0.5, {ease: Power2.easeInOut, opacity:0, scale: 0.8, onComplete : () => {
                overlayYear.textContent = obj.name
                overlayContent.innerHTML = obj.content
                overlayContainer.style.transform = 'scale(0)'
                if(picOpenedCoords.x > 0){
                    overlayContent.classList.add('history-overlay-content-left')
                    if(overlayContent.classList.contains('history-overlay-content-right')){
                        overlayContent.classList.remove('history-overlay-content-right')
                    }
                    
                }else {
                    overlayContent.classList.add('history-overlay-content-right')
                    if(overlayContent.classList.contains('history-overlay-content-left')){
                        overlayContent.classList.remove('history-overlay-content-left')
                    }
                }
                TweenMax.to(overlayContainer,0.5, {ease: Power2.easeInOut, opacity:1, scale: 1});
            }});
        }else {
            TweenMax.to(overlayContainer,0.5, {ease: Power2.easeInOut, opacity:0, scale: 1.2, onComplete : () => {
                overlayYear.innerHTML = obj.name
                overlayContent.innerHTML = obj.content
                if(picOpenedCoords.x > 0){
                    overlayContent.classList.add('history-overlay-content-left')
                    if(overlayContent.classList.contains('history-overlay-content-right')){
                        overlayContent.classList.remove('history-overlay-content-right')
                    }
                    
                }else {
                    overlayContent.classList.add('history-overlay-content-right')
                    if(overlayContent.classList.contains('history-overlay-content-left')){
                        overlayContent.classList.remove('history-overlay-content-left')
                    }
                }
                TweenMax.fromTo(overlayContainer,0.5, {ease: Power2.easeInOut, opacity:0, scale: 0.8},{ease: Power2.easeInOut, opacity:1, scale: 1});
            }});
        }
        

      
    
        var toShow = scene.children.filter(mesh =>  mesh.type !== "PerspectiveCamera")
        toShow.map( mesh => { 
            if (mesh.type == "Mesh"){
                TweenMax.to(mesh.material,0.5, {ease: Power2.easeInOut, opacity:0.9 })
            }else{
                TweenMax.to(mesh.material,0.5, {ease: Power2.easeInOut, opacity:1 })
            }
         })
        var toHide = scene.children.filter(mesh => mesh.uuid !== obj.uuid && mesh.type !== "PerspectiveCamera" )
        toHide.map( mesh => { TweenMax.to(mesh.material,1, {ease: Power2.easeInOut, opacity:0.1 })})
    
        for (let i = 0 ; i < scene.children.length; i++){
            if(scene.children[i].uuid == obj.uuid && scene.children[i].type === "Sprite"){
                if(i > 0 && i < scene.children.length){
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i-1]
                } else if (i = 0) {
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i]
                }else  {
                    nextImage = scene.children[i]
                    prevImage = scene.children[i - 1]
                }
                
            }
        }
    
    }

    
        


    const toggleImageContent = () => {
        console.log(raycaster)
        var intersects = raycaster.intersectObjects( scene.children );
        if(picOpened){
            closeImage()  
        }else{
            if(intersects.length){
                // console.log(intersects[0].object)
                if(intersects[0].object.type === "Sprite" && !picOpened){

                    openImage(intersects[0].object)

                }
            }
        }
    }

    const handleTouch = (tar) => {
        
        raycaster.setFromCamera( tar, camera );
        console.log(raycaster)
        var intersects = raycaster.intersectObjects( scene.children );
        console.log(intersects)
        if(intersects.length){
            // console.log(intersects[0].object)
            if(intersects[0].object.type === "Sprite" && !picOpened){
                openImageMobile(intersects[0].object)

            }
        }

    }


    const handleClick = () => {
        
        updateCursor()
        toggleImageContent()


    }

  

    // // TODO: Handle Mobile Orientation
    // const handleOrientation = (event,initialOrientation) => {
    //     if(initialOrientation){
    //         baseBeta = event.beta
    //         baseAlpha = event.alpha
    //         initialOrientation = false
    //     }        
    //     camera.rotation.x +=  (baseBeta - event.beta) /100
    //     camera.rotation.y +=  (baseAlpha - event.alpha) /100
    // }

    // window.addEventListener('deviceorientation', (e) =>{handleOrientation(e,initialOrientation)}, false);

    
    renderer.domElement.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
    renderer.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, { passive: false } );
    renderer.domElement.addEventListener("touchstart", touchStart, { passive: false });
    renderer.domElement.addEventListener("touchend", touchEnd, { passive: false });
    renderer.domElement.addEventListener("touchmove", touchMove, { passive: false });
    renderer.domElement.addEventListener( 'mousemove', onMouseMove, false );
    renderer.domElement.addEventListener( 'click', handleClick, false );
    overlayContainer.addEventListener( 'click', handleClick, false );
    overlayContainer.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
    overlayContainer.addEventListener( 'mousemove', onMouseMove, false );

    intro.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
    intro.addEventListener("touchstart", touchStart, { passive: false });
    intro.addEventListener("touchmove", touchMove, { passive: false });
    intro.addEventListener( 'mousemove', onMouseMove, false );
    intro.addEventListener( 'click', handleClick, false );

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
        windowHeight = window.innerHeight
        camera.aspect = windowWidth / windowHeight
        camera.updateProjectionMatrix()
        renderer.setSize(windowWidth, windowHeight)
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera,sidebar)
    })

    const animate = () => {
        window.requestAnimationFrame(animate)
        renderer.render(scene, camera)
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera,sidebar)

        if(camera.position.z >= -2){
            updateIntro(camera.position.z)

        }
        

    }
    
    if(window.innerHeight > window.innerWidth){
        addItemsMobile(dates, scene, loader, sidebarContainer, camera, sidebarCursor)

    }else{
        addItems(dates, scene, loader, sidebarContainer, camera, sidebarCursor,sidebar)

    }
    
    animate()



    console.log(scene.children)



}


init()









// var delta,memo_delta;
// var isFirefox = (navigator.userAgent.indexOf("Firefox") != -1) ;



// var handleWheel = function (event) 
// {
//  var e = window.event || event;
//  delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//  change_slide(delta,e.wheelDelta);
//  e.preventDefault();
// };




// var addMouseWheelEventListener = function (scrollHandler)
// {
//  if (window.addEventListener) 
//  {
//   // IE9+, Chrome, Safari, Opera
//   window.addEventListener("mousewheel", scrollHandler, false);
//   // Firefox
//   window.addEventListener("DOMMouseScroll", scrollHandler, false);
//  } 
//  else 
//  {
//   // // IE 6/7/8
//   window.attachEvent("onmousewheel", scrollHandler);
//  }
// }
// addMouseWheelEventListener(handleWheel);