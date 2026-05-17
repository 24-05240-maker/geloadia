// ==============================
// THEME TOGGLE
// ==============================

const themeToggle =
  document.getElementById('themeToggle');

themeToggle?.addEventListener('click', () => {

  const currentTheme =
    document.body.getAttribute('data-theme');

  document.body.setAttribute(
    'data-theme',
    currentTheme === 'dark'
      ? 'light'
      : 'dark'
  );

});

// ==============================
// PREMIUM POP OUT REVEAL
// ==============================

const revealElements =
  document.querySelectorAll('.reveal');

const revealObserver =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.animate([

          {
            opacity:0,
            transform:'translateY(32px) scale(.96)',
            filter:'blur(8px)'
          },

          {
            opacity:1,
            transform:'translateY(0px) scale(1)',
            filter:'blur(0px)'
          }

        ],{

          duration:650,
          easing:'cubic-bezier(.16,1,.3,1)',
          fill:'forwards'

        });

        entry.target.classList.add('visible');

        // SKILL BARS

        const bars =
          entry.target.querySelectorAll('.skill-progress');

        bars.forEach((bar, index) => {

          setTimeout(() => {

            bar.style.transform =
              `scaleX(${bar.dataset.progress / 100})`;

          }, index * 80);

        });

        // LEARNING BADGE BLINK

        const badgeDot =
          entry.target.querySelector('.progress-badge span');

        if(badgeDot){

          badgeDot.style.animation =
            'pulseGlow 1.4s infinite';

        }

        revealObserver.unobserve(entry.target);

      }

    });

  }, {

    threshold:0.08,
    rootMargin:'0px 0px -80px 0px'

  });

revealElements.forEach(el => {

  revealObserver.observe(el);

});

// ==============================
// PROJECT FILTERING
// ==============================

const filterButtons =
  document.querySelectorAll('.filter-btn');

const projectCards =
  document.querySelectorAll('.project-card');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    filterButtons.forEach(btn => {

      btn.classList.remove('active');

    });

    button.classList.add('active');

    const filter =
      button.dataset.filter;

    projectCards.forEach(card => {

      const isVisible =
        filter === 'all' ||
        card.dataset.category.includes(filter);

      card.style.transition =
        'opacity .55s cubic-bezier(.16,1,.3,1), transform .55s cubic-bezier(.16,1,.3,1)';

      if(isVisible){

        card.style.display = 'block';

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            card.style.opacity = '1';

            card.style.transform =
              'translateY(0px) scale(1)';

            card.style.pointerEvents =
              'auto';

          });

        });

      } else {

        card.style.opacity = '0';

        card.style.transform =
          'translateY(24px) scale(.96)';

        card.style.pointerEvents =
          'none';

        setTimeout(() => {

          card.style.display = 'none';

        }, 550);

      }

    });

  });

});

// ==============================
// MAGNETIC BUTTON EFFECT
// ==============================

const magneticButtons =
  document.querySelectorAll('.magnetic');

magneticButtons.forEach(button => {

  button.addEventListener('mousemove', (e) => {

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.14}px, ${y * 0.14}px)`;

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform =
      'translate(0px,0px)';

  });

});

// ==============================
// TIMELINE SCROLL REVEAL
// ==============================

const timelineItems =
  document.querySelectorAll('.timeline-item');

const timelineObserver =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add('visible');

        entry.target.animate([

          {
            opacity:0,
            transform:'translateY(70px) scale(.96)',
            filter:'blur(14px)'
          },

          {
            opacity:1,
            transform:'translateY(0px) scale(1)',
            filter:'blur(0px)'
          }

        ],{

          duration:1200,
          easing:'cubic-bezier(.22,1,.36,1)',
          fill:'forwards'

        });

      } else {

        entry.target.classList.remove('visible');

        entry.target.style.opacity = '0';

        entry.target.style.transform =
          'translateY(40px) scale(.94)';

        entry.target.style.filter =
          'blur(8px)';

      }

    });

  },{

    threshold:0.15

  });

timelineItems.forEach(item => {

  timelineObserver.observe(item);

});

// ==============================
// HERO ROLE EFFECT
// ==============================

const heroRoles =
  document.querySelectorAll('.hero-role');
// ==============================
// HERO TAG PERSISTENT ACTIVE
// ==============================

const heroTags =
  document.querySelectorAll('.hero-tag');

heroTags.forEach(tag => {

  tag.addEventListener('mouseenter', () => {

    heroTags.forEach(t => {

      t.classList.remove('active');

    });

    tag.classList.add('active');

  });

});

// ==============================
// CINEMATIC HERO ENTRANCE
// ==============================

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

  const heroName =
    document.querySelector('.hero-big-name');

  const heroDescription =
    document.querySelector('.hero-description');

  const heroButtons =
    document.querySelector('.hero-buttons');

  const heroImage =
    document.querySelector('.hero-image');

  if(heroName){

    heroName.animate([

      {
        opacity:0,
        transform:'translateY(70px) scale(.94)',
        filter:'blur(10px)'
      },

      {
        opacity:1,
        transform:'translateY(0px) scale(1)',
        filter:'blur(0px)'
      }

    ],{

      duration:1200,
      easing:'cubic-bezier(.16,1,.3,1)',
      fill:'forwards'

    });

  }

  if(heroDescription){

    heroDescription.animate([

      {
        opacity:0,
        transform:'translateY(35px)',
        filter:'blur(6px)'
      },

      {
        opacity:1,
        transform:'translateY(0px)',
        filter:'blur(0px)'
      }

    ],{

      duration:1000,
      delay:180,
      easing:'cubic-bezier(.16,1,.3,1)',
      fill:'forwards'

    });

  }

  if(heroButtons){

    heroButtons.animate([

      {
        opacity:0,
        transform:'translateY(30px)'
      },

      {
        opacity:1,
        transform:'translateY(0px)'
      }

    ],{

      duration:1000,
      delay:260,
      easing:'cubic-bezier(.16,1,.3,1)',
      fill:'forwards'

    });

  }

  if(heroImage){

    heroImage.animate([

      {
        opacity:0,
        transform:'scale(.92)',
        filter:'blur(10px)'
      },

      {
        opacity:1,
        transform:'scale(1)',
        filter:'blur(0px)'
      }

    ],{

      duration:1300,
      delay:180,
      easing:'cubic-bezier(.16,1,.3,1)',
      fill:'forwards'

    });

  }

});

// ==============================
// HERO BOTTOM FADE
// ==============================

const heroBottom =
  document.querySelector('.hero-bottom');

window.addEventListener('scroll', () => {

  if(heroBottom){

    const scrollY =
      window.scrollY;

    heroBottom.style.opacity =
      1 - scrollY / 850;

    heroBottom.style.transform =
      `translateY(${scrollY * 0.05}px)`;

  }

}, { passive:true });

// ==============================
// REMOVE STAGGER DELAY
// ==============================

const staggerCards =
  document.querySelectorAll(
    '.project-card, .glass-card, .timeline-item'
  );

staggerCards.forEach(card => {

  card.style.transitionDelay =
    '0s';

});

// ==============================
// SMOOTH SCROLL DEPTH
// ==============================

const hero =
  document.querySelector('.hero');

window.addEventListener('scroll', () => {

  if(hero){

    const scrollTop =
      window.scrollY;

    requestAnimationFrame(() => {

      hero.style.transform =
        `translateY(${scrollTop * 0.012}px)`;

    });

  }

}, { passive:true });

// ==============================
// SHOWCASE PARALLAX
// ==============================

const showcaseImg =
  document.querySelector('.showcase-image img');

window.addEventListener('scroll', () => {

  if(showcaseImg){

    const scrollY =
      window.scrollY;

    showcaseImg.style.transform =
      `translateY(${scrollY * 0.03}px) scale(1.03)`;

  }

}, { passive:true });

// ==============================
// HEADER EFFECT
// ==============================

const header =
  document.getElementById('header');

window.addEventListener('scroll', () => {

  if(!header) return;

  requestAnimationFrame(() => {

    if(window.scrollY > 40){

      header.style.backdropFilter =
        'blur(16px)';

      header.style.background =
        'rgba(255,255,255,0.04)';

    } else {

      header.style.backdropFilter =
        'blur(10px)';

      header.style.background =
        'transparent';

    }

  });

}, { passive:true });

// ==============================
// MOBILE OPTIMIZATION
// ==============================

if(window.innerWidth < 768){

  document.querySelectorAll('.gradient-orb')
    .forEach(orb => {

      orb.style.filter =
        'blur(60px)';

    })

}// ==============================
// DRAGGABLE ID CARD
// ==============================

const idCard =
  document.getElementById('idCard');
const lanyard =
  document.querySelector('.lanyard-string');
if(idCard){

  let isDragging = false;

  let currentX = 0;
  let currentY = 0;

  let initialX = 0;
  let initialY = 0;

  let velocityX = 0;
  let velocityY = 0;

  let rotation = 0;

  // ==========================
  // START DRAG
  // ==========================

  const startDrag = (e) => {

    isDragging = true;

    idCard.classList.add('dragging');

    const clientX =
      e.touches ? e.touches[0].clientX : e.clientX;

    const clientY =
      e.touches ? e.touches[0].clientY : e.clientY;

    initialX = clientX - currentX;
    initialY = clientY - currentY;

  };

  // ==========================
  // DRAGGING
  // ==========================

  const drag = (e) => {

    if(!isDragging) return;

    e.preventDefault();

    const clientX =
      e.touches ? e.touches[0].clientX : e.clientX;

    const clientY =
      e.touches ? e.touches[0].clientY : e.clientY;

    const prevX = currentX;
    const prevY = currentY;

    currentX =
      clientX - initialX;

    currentY =
      clientY - initialY;

    velocityX =
      currentX - prevX;

    velocityY =
      currentY - prevY;

    // ROTATION BASED ON MOVEMENT

    rotation =
      velocityX * 0.35;

   idCard.style.transform = `
  translate(
    ${currentX}px,
    ${currentY}px
  )
  rotate(${rotation}deg)
`;

if(lanyard){

  const stretch =
    220 + Math.abs(currentY * 0.25);

  lanyard.style.height =
    `${stretch}px`;

  lanyard.style.transform =
    `
      translateX(-50%)
      rotate(${rotation * 0.45}deg)
    `;
}

  };

  // ==========================
  // RELEASE
  // ==========================

  const endDrag = () => {

    if(!isDragging) return;

    isDragging = false;

    idCard.classList.remove('dragging');

    // SPRING RETURN

    let springX = currentX;
    let springY = currentY;
    let springRotate = rotation;

    const animateBack = () => {

      springX *= 0.88;
      springY *= 0.88;

      springRotate *= 0.9;

      idCard.style.transform = `
  translate(
    ${springX}px,
    ${springY}px
  )
  rotate(${springRotate}deg)
`;

if(lanyard){

  const stretch =
    220 + Math.abs(springY * 0.2);

  lanyard.style.height =
    `${stretch}px`;

  lanyard.style.transform =
    `
      translateX(-50%)
      rotate(${springRotate * 0.45}deg)
    `;
}

      if(
        Math.abs(springX) > 0.5 ||
        Math.abs(springY) > 0.5 ||
        Math.abs(springRotate) > 0.5
      ){

        requestAnimationFrame(animateBack);

      } else {

        currentX = 0;
        currentY = 0;
        rotation = 0;

        idCard.style.transform =
          'translate(0px,0px) rotate(0deg)';

      }

    };

    animateBack();

  };

  // ==========================
  // MOUSE EVENTS
  // ==========================

  idCard.addEventListener(
    'mousedown',
    startDrag
  );

  window.addEventListener(
    'mousemove',
    drag
  );

  window.addEventListener(
    'mouseup',
    endDrag
  );

  // ==========================
  // TOUCH EVENTS
  // ==========================

  idCard.addEventListener(
    'touchstart',
    startDrag,
    { passive:false }
  );

  window.addEventListener(
    'touchmove',
    drag,
    { passive:false }
  );

  window.addEventListener(
    'touchend',
    endDrag
  );

    // ==========================
  // REALISTIC IDLE SWING
  // ==========================

  let swing = 0;

  const idleMotion = () => {

    if(!isDragging){

      swing += 0.02;

      const rotate =
        Math.sin(swing) * 3;

      // CARD

      idCard.style.transform = `
        translate(0px,0px)
        rotate(${rotate}deg)
      `;

      // LACE

      if(lanyard){

        lanyard.style.height =
          '220px';

        lanyard.style.transform = `
          translateX(-50%)
          rotate(${rotate * 0.35}deg)
        `;

      }

    }

    requestAnimationFrame(idleMotion);

  };

  // DROPDOWN ENTRANCE

  window.addEventListener('load', () => {

    if(lanyard){

      lanyard.animate([

        {
          height:'0px',
          opacity:0
        },

        {
          height:'360px',
          opacity:1
        }

      ],{

        duration:1000,
        easing:'cubic-bezier(.16,1,.3,1)',
        fill:'forwards'

      });

    }

  });

  idleMotion();

}// ===================================
// CINEMATIC LOADING SCREEN
// ===================================
// ===================================
// JUMBLED NAME EFFECT
// ===================================

const loadingName =
  document.getElementById('loadingName');

const finalText =
  "ANGHELO";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop12345678910";

let iteration = 0;

const scramble = setInterval(() => {

  loadingName.innerText =
    finalText
      .split("")
      .map((letter, index) => {

        if(letter === " "){
          return " ";
        }

        if(index < iteration){
          return finalText[index];
        }

        return letters[
          Math.floor(
            Math.random() * letters.length
          )
        ];

      })
      .join("");

  if(iteration >= finalText.length){

    clearInterval(scramble);

  }

  iteration += 1 / 3;

}, 40);

window.addEventListener('load', () => {

  const loader =
    document.getElementById('loadingScreen');

  setTimeout(() => {

    loader.classList.add('hide');

    document.body.classList.remove('preload');

    document.body.classList.add('loaded');

  }, 2600);

});// ==============================
// CINEMATIC IMAGE REVEAL
// ==============================

const cinematicImages =
  document.querySelectorAll('.cinematic-image');

const cinematicObserver =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

},{
  threshold:0.1
});

cinematicImages.forEach(image=>{

  cinematicObserver.observe(image);

});
// =========================================
// MILESTONE ORB + SMOOTH SCROLL SYSTEM
// =========================================

const milestoneTimeline = document.querySelector('.milestones-timeline');
const orb = document.querySelector('.milestone-orb');
const progressFill = document.querySelector('.milestone-progress-fill');
const milestoneItems = document.querySelectorAll('.milestone-item');

if (milestoneTimeline && orb && progressFill) {

  let currentY = 0; // smooth orb position

  function updateMilestones() {

    const rect = milestoneTimeline.getBoundingClientRect();
    const totalHeight = milestoneTimeline.offsetHeight;
    const viewportHeight = window.innerHeight;

    // progress 0 - 1
    let progress =
      (viewportHeight - rect.top) /
      (totalHeight + viewportHeight * 0.2);

    progress = Math.max(0, Math.min(progress, 1));

    const targetY = progress * totalHeight;

    // SMOOTH ORB FOLLOW (lerp)
    currentY += (targetY - currentY) * 0.18;

    orb.style.top = `${currentY}px`;
    progressFill.style.height = `${currentY}px`;

    // =====================================
    // FASTER REVEAL TRIGGER
    // =====================================

    milestoneItems.forEach(item => {

      const itemTop = item.offsetTop;

      if (currentY >= itemTop + 80) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }

    });

    requestAnimationFrame(updateMilestones);
  }

  updateMilestones();
}// ==============================
// SERVICES-LOCKED ORB BEHAVIOR
// ==============================

const servicesSection = document.getElementById('services');
const gradientOrbs = document.querySelectorAll('.gradient-orb');

let orbActive = false;

function checkOrbActivation() {

  if (!servicesSection) return;

  const rect = servicesSection.getBoundingClientRect();

  // activate when services starts entering viewport
  if (rect.top <= window.innerHeight * 0.6) {
    orbActive = true;
  } else {
    orbActive = false;
  }
}

window.addEventListener('scroll', checkOrbActivation, { passive: true });

// override existing orb movement safely
window.addEventListener('mousemove', (e) => {

  if (!orbActive) return; // 👈 LOCK UNTIL SERVICES

  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  requestAnimationFrame(() => {

    gradientOrbs.forEach((orb, index) => {

      const movement = (index + 1) * 12;

      orb.style.transform = `
        translate(
          ${mouseX * movement}px,
          ${mouseY * movement}px
        )
      `;

    });

  });

}, { passive: true });// ==============================
// ENHANCED SMOOTH SCROLL (OPTIONAL)
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', (e) => {

    const target = document.querySelector(link.getAttribute('href'));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });

});// ==============================
// PREMIUM NAV SCROLL EFFECT
// ==============================

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

  const header = document.getElementById('header'); // SAFE inside function

  // GLASS INTENSITY ON SCROLL
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // ACTIVE SECTION TRACKING
  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }

  });

});







