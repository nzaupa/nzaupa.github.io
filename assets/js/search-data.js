// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "[Under construction] You can find a short pdf version of the CV on the top right of the page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here I will try to keep updated what I am doing and what I have done.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-from-september-4th-to-6th-i-will-be-in-lyon-fr-at-micnon-to-present-the-work-on-rms-value-regulation-done-in-collaboration-with-manon-doré",
          title: 'From September 4th to 6th I will be in Lyon (FR) at MICNON...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-our-tcst-paper-about-hybrid-control-of-resonant-converters-at-ieee-ccta-in-newcastle-upon-tyne-uk",
          title: 'I will be presenting our TCST paper about hybrid control of resonant converters...',
          description: "",
          section: "News",},{id: "news-the-paper-on-multi-agents-system-synchronization-has-been-accepted-for-publication-in-european-journal-of-control",
          title: 'The paper on multi-agents system synchronization has been accepted for publication in European...',
          description: "",
          section: "News",},{id: "news-in-occasion-of-micnon-2024-the-paper-control-of-the-rms-output-current-in-series-resonant-converters-in-collaboration-with-manon-doré-has-been-awarded-the-young-author-s-awards",
          title: 'In occasion of MICNON 2024, the paper Control of the RMS Output Current...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-defended-my-ph-d-thesis-hybrid-limit-cycles-from-theory-to-practice-in-resonant-converters",
          title: 'I have successfully defended my Ph.D. thesis Hybrid Limit Cycles: from theory to...',
          description: "",
          section: "News",},{id: "news-i-have-started-a-short-term-postdoc-working-with-sophie-tarbouriech-and-samuele-zoboli",
          title: 'I have started a short-term postdoc working with Sophie Tarbouriech and Samuele Zoboli....',
          description: "",
          section: "News",},{id: "news-in-december-i-ll-be-at-cdc24-in-milan-as-a-volunteer",
          title: 'In December, I’ll be at CDC24 in Milan as a volunteer.',
          description: "",
          section: "News",},{id: "news-i-have-started-as-a-postdoctoral-researcher-at-gipsa-lab-grenoble-france-with-bogdan-robu-and-matteo-tacchi",
          title: 'I have started as a Postdoctoral Researcher at GIPSA-lab (Grenoble, France) with Bogdan...',
          description: "",
          section: "News",},{id: "projects-control-of-resonant-converter",
          title: 'Control of Resonant Converter',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%63%6F%6C%61.%7A%61%75%70%61(%61%74)%67%69%70%73%61-%6C%61%62(%64%6F%74)%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nzaupa", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nicola-zaupa", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5644-6699# your ORCID ID", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jo4GiUIAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.gipsa-lab.grenoble-inp.fr/user/nicola.zaupa", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
