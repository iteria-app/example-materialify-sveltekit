import { AbilityBuilder, Ability } from '@casl/ability'

function defineAbilitiesFor(user) {
    const { can, cannot, rules } = new AbilityBuilder(Ability);
    can('read', 'Customer');

    return new Ability(rules);
}

export default defineAbilitiesFor;