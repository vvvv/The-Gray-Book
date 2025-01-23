// CURRENTLY NOT IN USE

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
        },
        {
            icon: 'vimeo',
            href: 'https://vimeo.com/groups/vvvv/sort:date/format:thumbnail',
            title: 'Vimeo'
        },
        {
            icon: 'youtube',
            href: 'https://www.youtube.com/channel/UCu-xqv-TLwv6L0An7MJJA5A',
            title: 'Youtube'
        }
    ],
    start: function () {
    }
};

export default app;

// Start the app when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => app.start());