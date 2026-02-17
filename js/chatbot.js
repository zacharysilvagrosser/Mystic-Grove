// Chatbot Widget
class ChatbotWidget {
    constructor() {
        this.chatLog = [];
        this.isOpen = false;
        this.apiUrl = 'http://127.0.0.1:8000/chat';
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
    }

    createWidget() {
        // Create chat widget container if it doesn't exist
        if (document.getElementById('chatbot-widget')) return;

        const widgetHTML = `
            <div id="chatbot-widget">
                <div id="chatbot-button">
                    <i class="fas fa-comments"></i>
                </div>
                <div id="chatbot-popup" style="display: none;">
                    <div id="chatbot-header">
                        <h3>Mystic Grove Assistant</h3>
                        <span id="chatbot-close">&times;</span>
                    </div>
                    <div id="chatbot-messages"></div>
                    <div id="chatbot-input-area">
                        <input type="text" id="chatbot-input" placeholder="Ask me anything about Mystic Grove...">
                        <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    attachEventListeners() {
        const button = document.getElementById('chatbot-button');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        button.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const popup = document.getElementById('chatbot-popup');
        const button = document.getElementById('chatbot-button');
        
        if (this.isOpen) {
            popup.style.display = 'flex';
            button.style.display = 'none';
            
            // Add welcome message if chat is empty
            if (this.chatLog.length === 0) {
                this.addMessage('ai', 'Hello! Welcome to Mystic Grove! How can I help you today?');
            }
        } else {
            popup.style.display = 'none';
            button.style.display = 'flex';
        }
    }

    addMessage(role, content) {
        this.chatLog.push({ role, content });
        
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message chatbot-message-${role}`;
        
        const label = document.createElement('strong');
        label.textContent = role === 'user' ? 'You: ' : 'Assistant: ';
        
        const text = document.createElement('span');
        // Preserve line breaks by converting newlines to <br> tags
        text.innerHTML = content.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(label);
        messageDiv.appendChild(text);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addMessage('user', message);
        input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            
            const data = await response.json();
            
            // Remove typing indicator
            this.removeTypingIndicator();
            
            // Add AI response
            const reply = data.reply || data.error || 'Sorry, I could not process your request.';
            this.addMessage('ai', reply);
            
        } catch (error) {
            console.error('Chatbot error:', error);
            this.removeTypingIndicator();
            this.addMessage('ai', 'Sorry, I am having trouble connecting. Please try again later.');
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-typing';
        typingDiv.id = 'chatbot-typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('chatbot-typing-indicator');
        if (indicator) indicator.remove();
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ChatbotWidget());
} else {
    new ChatbotWidget();
}
