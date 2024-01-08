function findCaterer(budget, people) {
    const basicBuffetCost = 15 * people;
    const economyBuffetCost = 20 * people;

    const totalPremiumBuffetCost = 30 * people;
    const premiumBuffetCost =
        people > 60
            ? totalPremiumBuffetCost - totalPremiumBuffetCost * 0.2
            : totalPremiumBuffetCost;

    if (!people || budget < basicBuffetCost) {
        return -1;
    }

    if (budget > premiumBuffetCost) {
        return 3;
    }

    if (budget > economyBuffetCost) {
        return 2;
    }

    return 1;
}
