// Dati dei concorrenti
const contestants = [
    {
        name: "Alessia Neri",
        age: 28,
        city: "Milano",
        specialty: "Pittura a olio",
        bio: "Specializzata in ritratti iperrealisti con una tecnica unica",
        image: "images/contestants/alessia-neri.jpg"
    },
    {
        name: "Marco Gialli",
        age: 32,
        city: "Roma",
        specialty: "Scultura in metallo",
        bio: "Trasforma rottami industriali in opere d'arte",
        image: "images/contestants/marco-gialli.jpg"
    },
    {
        name: "Elena Blu",
        age: 25,
        city: "Firenze",
        specialty: "Arte digitale",
        bio: "Pioniera della realtà aumentata nell'arte contemporanea",
        image: "images/contestants/elena-blu.jpg"
    },
    {
        name: "Davide Verdi",
        age: 30,
        city: "Torino",
        specialty: "Street art",
        bio: "I suoi murales hanno ridisegnato il volto della città",
        image: "images/contestants/davide-verdi.jpg"
    },
    {
        name: "Sara Rossi",
        age: 27,
        city: "Napoli",
        specialty: "Fotografia concettuale",
        bio: "Esplora i confini tra realtà e percezione",
        image: "images/contestants/sara-rossi.jpg"
    },
    {
        name: "Luca Bianchi",
        age: 29,
        city: "Bologna",
        specialty: "Installazioni immersive",
        bio: "Crea mondi alternativi che coinvolgono tutti i sensi",
        image: "images/contestants/luca-bianchi.jpg"
    }
];

// Dati degli episodi
const episodes = [
    {
        title: "Episodio 1: Il Primo Colpo di Pennello",
        description: "I 12 artisti si affrontano nella prima sfida di pittura veloce con un tema a sorpresa. Avranno solo 3 ore per creare un'opera che rappresenti 'La contraddizione umana'.",
        date: "15 Settembre 2025",
        image: "images/episodes/ep1.jpg"
    },
    {
        title: "Episodio 2: La Forma dell'Essere",
        description: "Sfida di scultura con materiali non convenzionali. Gli artisti devono plasmare la loro visione di 'Identità fluida' utilizzando solo oggetti riciclati.",
        date: "22 Settembre 2025",
        image: "images/episodes/ep2.jpg"
    },
    {
        title: "Episodio 3: Pixel e Fantasia",
        description: "L'arte digitale mette alla prova la creatività tecnologica dei nostri concorrenti. Il tema 'Connessioni invisibili' dovrà essere interpretato attraverso software 3D e realtà virtuale.",
        date: "29 Settembre 2025",
        image: "images/episodes/ep3.jpg"
    }
];

// Popola i concorrenti
function loadContestants() {
    const grid = document.getElementById('contestantsGrid');
    
    contestants.forEach(contestant => {
        const card = document.createElement('div');
        card.className = 'contestant-card';
        
        card.innerHTML = `
            <img src="${contestant.image}" alt="${contestant.name}" class="contestant-img">
            <div class="contestant-info">
                <h3>${contestant.name}</h3>
                <p>${contestant.age} anni, ${contestant.city}</p>
                <span class="contestant-specialty">${contestant.specialty}</span>
                <p>${contestant.bio}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Popola gli episodi
function loadEpisodes() {
    const list = document.getElementById('episodeList');
    
    episodes.forEach(episode => {
        const item = document.createElement('div');
        item.className = 'episode-item';
        
        item.innerHTML = `
            <img src="${episode.image}" alt="${episode.title}" class="episode-thumbnail">
            <div class="episode-content">
                <h3>${episode.title}</h3>
                <span class="episode-date">${episode.date}</span>
                <p>${episode.description}</p>
                <button class="watch-button">GUARDA ORA</button>
            </div>
        `;
        
        list.appendChild(item);
    });
}

// Animazione header al scroll
function setupHeaderAnimation() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0) scale(1)';
            header.style.opacity = '1';
        } else if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-50px) scale(0.95)';
            header.style.opacity = '0.9';
        } else {
            header.style.transform = 'translateY(0) scale(1)';
            header.style.opacity = '1';
        }
        
        lastScroll = currentScroll;
    });
}

// Effetto hover per le card
function setupHoverEffects() {
    const cards = document.querySelectorAll('.info-card, .contestant-card, .judge-card, .episode-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
        });
    });
}

// Gestione del bottone CTA
function setupCTAButton() {
    const ctaButton = document.getElementById('ctaButton');
    
    ctaButton.addEventListener('click', () => {
        // Simula l'apertura di un modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        
        modal.innerHTML = `
            <div style="background: #1a1a1a; padding: 40px; border-radius: 15px; max-width: 500px; text-align: center;">
                <h3 style="color: #ffd700; margin-bottom: 20px;">ISCRIVITI ALLA NEWSLETTER</h3>
                <input type="email" placeholder="La tua email" style="width: 100%; padding: 15px; margin-bottom: 20px; border-radius: 5px; border: none;">
                <button style="background: #e63946; color: white; border: none; padding: 15px 30px; border-radius: 5px; cursor: pointer; font-weight: bold;">INVIA</button>
                <button id="closeModal" style="display: block; margin: 20px auto 0; background: none; border: none; color: #ccc; cursor: pointer;">Chiudi</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('closeModal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    loadContestants();
    loadEpisodes();
    setupHeaderAnimation();
    setupHoverEffects();
    setupCTAButton();
});