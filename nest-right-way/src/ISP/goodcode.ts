interface User {
    viewAd(): void;
}

interface PremiumFeatureUser {
    skipAd(): void;
    startParty(): void;
}

class FreeUserG implements User {
    viewAd(): void {
        // ...
    }
}

class PremiumUserG implements User, PremiumFeatureUser {
    viewAd(): void {
        // ...
    }

    skipAd(): void {
        // ...
    }

    startParty(): void {
        // ...
    }
}