const app = {
    languageDropdownCreated: false,
    iconLinks: [
        {
            icon: 'github',
            href: 'https://github.com/vvvv',
            title: 'GitHub'
        },
        {
            icon: 'mastodon',
            href: 'https://mastodon.xyz/@vvvv',
            title: 'Mastodon'
        },
        {
            icon: 'image',
            href: 'https://pixelfed.social/madewithvvvv',
            title: 'Pixelfed'
        }
    ],
    start: function () {
    }
};

export default app;

// Start the app when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => app.start());