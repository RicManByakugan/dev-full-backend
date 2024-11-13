interface FullFeatureUser {
    viewAd(): void;
    skipAd(): void;
    startParty(): void;
}

class User {
    viewAd(): void {
        // ...
    }
}

class FreeUser extends User implements FullFeatureUser {
    skipAd(): void {
        throw new Error("Sorry, I can't skip ads");
    }

    startParty(): void {
        throw new Error("Sorry, I can't start parties");
    }
}

class PremiumUser extends User implements FullFeatureUser {
    skipAd(): void {
        // ...
    }

    startParty(): void {
        // ...
    }
}

