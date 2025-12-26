document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');

    // Toggle Chat
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.remove('d-none');
        chatToggle.classList.add('d-none');
        addMessage("bot", `Hello! I'm Habeeb's AI Assistant. How can I help you navigate? try "Show projects" or "Skills".`);
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('d-none');
        chatToggle.classList.remove('d-none');
    });

    // Send Message Logic
    function handleSend() {
        const text = userInput.value.trim();
        if (!text) return;

        addMessage("user", text);
        userInput.value = '';
        
        // Simulate AI Thinking
        setTimeout(() => {
            const response = processCommand(text.toLowerCase());
            addMessage("bot", response.text);
            if (response.action) response.action();
        }, 600);
    }

    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    function addMessage(sender, text) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.innerText = text;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // AI Logic
    function processCommand(input) {
        input = input.toLowerCase();

        // Greeting
        if (portfolioData.commands.greeting.some(cmd => input === cmd || input.startsWith(cmd + " "))) {
            return {
                text: "Hi! Welcome to Habeeb's website. How can I assist you?",
                action: null
            };
        }

        // Navigation Commands
        if (portfolioData.commands.projects.some(cmd => input.includes(cmd))) {
            return { 
                text: "Navigating to the Featured Work section...", 
                action: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            };
        }
        if (portfolioData.commands.services.some(cmd => input.includes(cmd))) {
            return { 
                text: "Here is what I can do for you...", 
                action: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
            };
        }
        // Experience is often asked as "experience" or "timeline", mapped to about usually or its own
        if (input.includes('experience') || input.includes('timeline')) {
             return { 
                text: "Here is Habeeb's professional journey...", 
                action: () => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
            };
        }
        
        if (portfolioData.commands.about.some(cmd => input.includes(cmd))) {
            return { 
                text: portfolioData.bio, 
                action: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
            };
        }
        if (portfolioData.commands.contact.some(cmd => input.includes(cmd))) {
            return { 
                text: portfolioData.contact.cta, 
                action: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            };
        }
        if (portfolioData.commands.skills.some(cmd => input.includes(cmd))) {
            return { 
                text: `Habeeb is proficient in: ${portfolioData.skills.join(', ')}.`, 
                action: () => document.getElementById('stack').scrollIntoView({ behavior: 'smooth' })
            };
        }

        // Default
        return { 
            text: "I didn't quite catch that. Try saying 'Hi', 'Projects', or 'Services'.", 
            action: null 
        };
    }
});
