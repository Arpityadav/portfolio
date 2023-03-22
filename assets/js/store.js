import {ref} from "vue";

const experienceDetails = ref([
    {
        'id': 1,
        'company': 'Ripenapps',
        'companyLink': 'https://ripenapps.com/',
        'role': 'Engineer',
        'duration': 'December 2021 - Present',
        'points': [
            'Write modern, performant, maintainable code for a diverse array of client and internal projects',
            'Work with a variety of different languages, platforms, frameworks, and content management systems such as Laravel, JavaScript, React, Vue, Tailwind, Bootstrap, Jquery and Wordpress',
            'Building scalable and secure APIs, designing and implementing database schemas, and integrating with third-party services',
            'Experience with server management, deployment, and monitoring tools, such as AWS, Docker, and Kubernetes'
        ]
    },
    {
        'id': 2,
        'company': 'LogixInfo',
        'companyLink': 'https://www.justdial.com/Delhi/Logix-Info-Solution-Pvt-Ltd-Near-Gold-Gym-Raj-Nagar-Ghaziabad/011PX120-X120-121102165958-V2J5_BZDET',
        'role': 'Internship',
        'duration': 'October 2021 - November 2021',
        'points': [
            'Write modern code with  HTML, CSS, and JavaScript, and how to use front-end frameworks like React, Angular, or Vue.js to build user interfaces',
            'Develop server-side applications using PHP and learn how to design and implement database schemas using SQL databases',
            'Work with version control systems like Git, and have experience working in collaborative environments using agile methodologies',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ]
    },
]);

const workingExp = ref([
    {
        'id': 1,
        'name': 'Blossom',
        'img_url': '../images/blossom.png',
        'link': 'https://web.blossombookings.com.au/',
        'points': [
            'Developing user interfaces for admin panel using HTML, CSS, and Jquery and developing client-side code that interacts with server-side APIs to fetch, manipulate and display data in the admin panel',
            'Integrating third-party APIs and services to add functionality to the application, such as payment processing, social media integration, and email notifications',
            'Writing scripts and cron jobs to automate tasks such as database maintenance, or data processing'
        ]
    },
    {
        'id': 2,
        'name': 'Cashbook',
        'img_url': '../images/cashbook1.png',
        'link': 'https://play.google.com/store/apps/details?id=com.app.cashbook&hl=en_IN&gl=US',
        'points': [
            'Developing APIs that allow client-side applications to interact with the server-side code.',
            'Designing and developing a database schema to store data efficiently',
            'Implementing security measures such as authentication, authorization, and encryption to protect user data',
            'Writing code to handle incoming socket connections and messages from clients and implementing security measures to ensure only authorized clients can connect to the chat server'
        ]
    },
    {
        'id': 3,
        'name': 'The Wedding Hat',
        'img_url': '../images/twh.png',
        'link': 'https://www.theweddinghat.com/',
        'points': [
            'Developing user interfaces for admin panel using HTML, CSS, and Jquery and developing client-side code that interacts with server-side APIs to fetch, manipulate and display data in the admin panel\',\n',
            'Developing APIs that allow client-side applications to interact with the server-side code',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ]
    }
]);

const personalExperience = ref([
    {
        'id': 1,
        'name': 'Cyberbub',
        'img_url': '../images/cyberbub.png',
        'link': 'https://github.com/Arpityadav/ArrayX',
        'points': [
            'Created with Laravel, Vue and Tailwind (and many other services like Algolia, Pusher, etc)',
            'Backend is fully backed with TDD (PHPUnit)',
            'A personal project that lets you to find your coding partner',
            'You can chat, manage tasks and do many things in real time'
        ],
        'note': 'Currently working on successor of this project: <a href="https://github.com/Arpityadav/wrup">wrup</a>'
    },
    {
        'id': 2,
        'name': 'Forum',
        'img_url': '../images/forum.png',
        'link': 'https://github.com/Arpityadav/forum',
        'points': [
            'Created with Laravel, Vue and Bootstrap',
            'Backend is fully backed with TDD (PHPUnit)',
            'Based on video series by Jeffrey Way on Laracasts'
        ],
        'note': null
    },
    {
        'id': 3,
        'name': 'MoviesApp',
        'img_url': '../images/movie.png',
        'link': 'https://github.com/Arpityadav/laravel-movies-example',
        'points': [
            'Created with Laravel, AlpineJS, Livewire, Tailwind CSS and The Movie DB REST API',
            'Test Driven Development (PHPUnit)'
        ],
        'note': null
    },
    {
        'id': 4,
        'name': 'Reddit-Clone',
        'img_url': '../images/reddit.png',
        'link': 'https://github.com/Arpityadav/reddit-clone',
        'points': [
            'Created with Laravel, Vue.js and Tailwindcss',
            'Backend is fully backed with TDD (PHPUnit)',
            'Users can create a thread and vote to other threads in real time',
            'Comments and Replies in a thread will be posted in real time',
            'Created just for fun and to test my knowledge, also does not have the all the reddit functions (ofcourse!)'
        ],
        'note': null
    },
    {
        'id': 5,
        'name': 'Birdboard',
        'img_url': '../images/birdboard.png',
        'link': 'https://github.com/Arpityadav/birdboard',
        'points': [
            'Created with Laravel,Vue and Tailwind CSS',
            'Backend is fully backed with TDD (PHPUnit)',
            'Based on video series by Jeffrey Way on Laracasts'
        ],
        'note': null
    },
]);

export {experienceDetails, workingExp, personalExperience};