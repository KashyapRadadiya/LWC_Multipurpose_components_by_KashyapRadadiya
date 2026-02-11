import { LightningElement } from 'lwc';

export default class MemoryGame extends LightningElement {

    score = 0
    time = 0

    icons = [
        'custom:custom1',
        'custom:custom2',
        'custom:custom3',
        'custom:custom4',
        'custom:custom5',
        'custom:custom6',
        'custom:custom7',
        'custom:custom8'
    ];

    items = []
    // prepare cards when component loads
    connectedCallback() {
        this.createCards();
        this.items = [...this.items].sort(() => Math.random() - 0.5);

        // update time
        this.timerId = setInterval(() => {
            this.time++;
        }, 1000);
    }

    createCards() {
        const iconPairs = [...this.icons, ...this.icons]
        // convert icons into card objects
        this.items = iconPairs.map((icon, index) => {
            return {
                id: index,
                icon: icon,
                isFlipped: false,
                isMatched: false,
                iconClass: 'icon-hidden'
            }
        });
    }

    // Card selection started

    firstCard = null;
    secondCard = null;
    isProcessing = false;

    handleCardClick(event) {
        if (this.isProcessing) return;

        const cardId = event.currentTarget.dataset.id;
        const clickedCard = this.items.find(c => c.id == cardId);

        if (clickedCard.isFlipped || clickedCard.isMatched) return;

        clickedCard.isFlipped = true;
        clickedCard.iconClass = 'icon-visible';
        this.items = [...this.items];

        if (!this.firstCard) {
            this.firstCard = clickedCard;
        } else {
            this.secondCard = clickedCard;
            this.checkMatch();
        }
    }

    checkMatch() {
        this.isProcessing = true;

        if (this.firstCard.icon === this.secondCard.icon) {
            this.handleMatch();
        } else {
            this.handleMismatch();
        }
    }

    handleMatch() {
        this.firstCard.isMatched = true;
        this.secondCard.isMatched = true;

        this.score += 10;

        this.checkWin()
        this.resetSelection();
    }

    handleMismatch() {
        setTimeout(() => {
            this.firstCard.isFlipped = false;
            this.secondCard.isFlipped = false;

            this.firstCard.iconClass = 'icon-hidden';
            this.secondCard.iconClass = 'icon-hidden';

            this.items = [...this.items];

            this.resetSelection();
        }, 1000);
    }

    resetSelection() {
        this.firstCard = null;
        this.secondCard = null;
        this.isProcessing = false;
    }

    winpopup = false
    checkWin() {
        if (this.score == 10 * (this.icons.length)) {
            clearInterval(this.timerId);
            this.winpopup = true
            // this.resetgame()
        }
    }


    resetgame() {
        this.winpopup = false;
        clearInterval(this.timerId);
        this.score = 0;
        this.time = 0;
        this.resetSelection()

        this.createCards();
        this.items = [...this.items].sort(() => Math.random() - 0.5);
        
        this.timerId = setInterval(() => {
            this.time++;
        }, 1000);
    }
}

