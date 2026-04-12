import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js";

// Enable dark mode
document.documentElement.classList.add("cc--dark-turquoise");

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "bar inline",
      position: "bottom",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {},
  },
  language: {
    default: "es",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "We use cookies and similar technologies to improve your experience, analyze site usage, and personalize content. Necessary cookies are required for basic website functionality, while analytics cookies help us understand how visitors interact with the site. You can accept all cookies or manage your preferences.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          //   footer: '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "Cookies and tracking technologies are used to provide, protect, and improve our services. Some cookies are strictly necessary for the website to operate, while others help us analyze traffic and remember your preferences.",
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "Necessary cookies are essential for the website to function. They enable core features such as security, network management, and accessibility, and cannot be disabled in our system.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "Analytics cookies collect anonymous information about how visitors use the site. This data helps us improve website performance, understand popular content, and make the site easier to use.",
              linkedCategory: "analytics",
            },
            {
              title: "More information",
              description:
                'For more details about how we use cookies and how to change your settings, please consult our privacy policy or <a class="cc__link" href="#yourdomain.com">contact us</a>.',
            },
          ],
        },
      },
    },
  },
});
