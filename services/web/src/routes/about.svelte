<script>
    import FeatureToggle from '../components/feature-toggle.svelte';
    import ContactCard from "../components/contact-card.svelte";
    import { FEATURE_TOGGLES } from '../feature-toggles';

    const erinLindford = {
        name: "Erin Lindford",
        avatarSrc: 'https://randomuser.me/api/portraits/women/17.jpg',
        job: "Customer Support",
        email: "​erinlindford@example.com​",
        phone: "(555) 765-4321"
    }

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1 class="text-yellow-600">About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<ContactCard {...erinLindford} />

<FeatureToggle name={FEATURE_TOGGLES.vipWelcome.name}>
    <p>Some people see this, others don't!</p>
</FeatureToggle>