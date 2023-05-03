const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const datos = [
        {titulo: 'Nombre', valor: 'Juan Escobar'},
        {titulo: 'Email', valor: 'juan@gmail.com'},
        {titulo: 'Profesión', valor: 'Web Designer'},
        {titulo: 'Experiencia', valor: '3 years'},
        {titulo: 'Contacto', valor: '957996578'},
        {titulo: 'Curriculum', valor: 'CV.pdf'}
    ];
    const experiencias = [
        {
          icono: "icon-graduation",
          fecha: "8, Nov 2016",
          titulo: "Maestría en Diseño Web",
          institucion: "Universidad del Pacífico",
          descripcion: "Durante mi maestría en Diseño Web, aprendí las últimas tendencias y técnicas para crear diseños web modernos y atractivos. También trabajé en varios proyectos prácticos, donde tuve la oportunidad de aplicar mis habilidades y conocimientos en un entorno de trabajo real."
        },
        {
          icono: "icon-trophy",
          fecha: "8, Nov 2015",
          titulo: "Diploma en Diseño UX",
          institucion: "Instituto de Diseño Expo",
          descripcion: "En mi curso de Diseño UX, aprendí cómo crear experiencias de usuario efectivas y agradables para los usuarios de un sitio web o aplicación. Trabajé en varios proyectos de equipo donde pude aplicar mis habilidades en diseño y colaborar con otros diseñadores y desarrolladores."
        },
        {
          icono: "icon-book-open",
          fecha: "8, Nov 2014",
          titulo: "Diseñador Web Junior",
          institucion: "Empresa NovaCallCenter",
          descripcion: "Comencé mi carrera como diseñador web junior en la empresa XYZ. En esta posición, aprendí cómo trabajar en un entorno de trabajo real y desarrollar mis habilidades de diseño. Trabajé en varios proyectos web para clientes de la empresa y aprendí cómo trabajar con equipos de desarrollo para implementar mis diseños."
        }
      ];
    res.render('index', { title: 'inicio', datos , experiencias});
});

app.get('/acerca', (req, res) => {
    const skills = [
        { skill: 'Diseño Gráfico', percentage: '80%' },
        { skill: 'Diseño web', percentage: '99%' },
        { skill: 'HTML5/CSS3', percentage: '85%' },
        { skill: 'Javascript', percentage: '90%' }
      ]
    res.render('acerca', { title: 'acerca', skills });
});

app.get('/portfolio', (req, res) => {
    const portfolioItems = [
        {
          category: 'apps',
          imageSrc: 'images/portfolio/1.jpg',
          title: 'Mi primera aplicación móvil'
        },
        {
          category: 'mockups',
          imageSrc: 'images/portfolio/2.jpg',
          title: 'Página web de un restaurante'
        },
        {
          category: 'apps',
          imageSrc: 'images/portfolio/3.jpg',
          title: 'Aplicación de notas para estudiantes'
        },
        {
          category: 'mockups wordpress',
          imageSrc: 'images/portfolio/4.jpg',
          title: 'Sitio web de un fotógrafo'
        },
        {
          category: 'wordpress apps',
          imageSrc: 'images/portfolio/5.jpg',
          title: 'Aplicación de viajes y turismo'
        },
        {
          category: 'apps mockups wordpress',
          imageSrc: 'images/portfolio/6.jpg',
          title: 'Plataforma de e-commerce para productos artesanales'
        }
      ];
      
    res.render('portfolio', { title: 'portfolio' ,portfolioItems });
});

app.get('/testimonios', (req, res) => {
    const testimonios = [
        {
          nombre: "María",
          imagen: "images/testimonial/1.png",
          testimonio: "Juan es un excelente diseñador, su trabajo es de alta calidad y siempre cumple con los plazos acordados."
        },
        {
          nombre: "Carlos",
          imagen: "images/testimonial/2.png",
          testimonio: "Trabajar con Juan fue una gran experiencia. Siempre estuvo dispuesto a escuchar nuestras ideas y brindar soluciones creativas y efectivas."
        },
        {
          nombre: "Laura",
          imagen: "images/testimonial/3.png",
          testimonio: "Recomiendo ampliamente los servicios de Juan. Es un profesional comprometido y apasionado por su trabajo, lo que se refleja en los excelentes resultados que entrega."
        }
      ];
    res.render('testimonios', { title: 'testimonios', testimonios });
});

app.get('/habilidades', (req, res) => {
    res.render('habilidades', { title: 'habilidades' });
});

app.get('/contacto', (req, res) => {
    res.render('contacto', { title: 'contacto' });
});



  app.listen(3000, () => {
    console.log('Mi portfolio en el puerto 3000');
  });
  