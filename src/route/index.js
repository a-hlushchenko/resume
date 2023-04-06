const express = require('express')
const router = express.Router()

var header = {
    name: {
        firstname: 'Anton',
        lastname: 'Hlushchenko',
    },

    posititon: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',
    address: 'Ukraine, Kyiv city, Teremkyvska, 4a',
}

var footer = {
    social: {
        email: {
            text: 'glantoshka@gmail.com',
            href: 'mailto:dmytro@mail.com',
        },
        phone: {
            text: '+380683266551',
            href: 'tel:+380670000123',
        },
        linkedin: {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
    },
}

router.get('/summary', function (req, res) {
    res.render('summary', {

        page: {
            title: 'Resume | Summary',
        },

        header,

        main: {
            summary: {
                title: 'Summary',
                text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                work on a new project I learn the domain and try to understand the idea of the project. Good team
                player, every colleague is a friend to me.`,
            },
            experience: {
                title: 'Other experience',
                text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                for such events like: money line - first win / draw / second win, totals etc.`,
            },
        },

        footer,
    })
})

router.get('/skills', function (req, res) {
    res.render('skills', {

        page: {
            title: 'Resume | Skills',
        },

        header,

        main: {
            skills: [
                {
                    name: 'HTML',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'Handlebars',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'Git',
                    point: 8,
                },
                {
                    name: 'Terminal',
                    point: 7,
                },
                {
                    name: 'NPM',
                    point: 9,
                },
                {
                    name: 'VS Code',
                    point: 10,
                    isTop: true,
                },
                {
                    name: 'react.js',
                    point: 0,
                },
                {
                    name: 'php',
                    point: null,
                },
            ],
            hobbies: [
                {
                    name: 'world',
                    isMain: true,
                },
                {
                    name: 'train',
                    isMain: false,
                },
                {
                    name: 'plain',
                    isMain: true,
                },
            ],
        },

        footer,
    })
})

router.get('/education', function (req, res) {
    res.render('education', {

        page: {
            title: 'Resume | Education',
        },

        header,

        main: {
            educations: [
                {
                    name: 'school',
                    isEnd: true,
                },
                {
                    name: 'university',
                    isEnd: false,
                },
                {
                    name: 'IT BRAINS',
                    isEnd: false,
                },
            ],
            certificates: [
                {
                    name: 'good',
                    id: 127,
                },
                {
                    name: 'nice',
                    id: 432,
                },
                {
                    name: 'happy',
                    id: 680,
                },
            ],
        },

        footer,
    })
})

router.get('/work', function (req, res) {
    res.render('work', {
        layout: 'defaultbig',

        page: {
            title: 'Resume | Work',
        },

        header,

        main: {

            works: [
                {
                    position: 'JS FS DEV',
                    company: {
                        name: 'DIGITAL COIN',
                        url: 'https://qwerty',
                    },

                    duration: {
                        from: '04.08.2022',
                        to: null,
                    },

                    projectAmount: 5,

                    projects: [
                        {
                            stackAmount: 24000,
                            awardAmount: 115000,
                            name: 'resume',
                            about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
                            stacks: [
                                {
                                    name: 'react.js',
                                },
                                {
                                    name: 'html',
                                },
                                {
                                    name: 'css',
                                },
                            ],
                            awards: [
                                {
                                    name: 'ipsam voluptas nostrum corrupti.'
                                },
                            ],
                        },
                    ]
                },
            ]
        },

        footer,
    })
})

router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
        layout: 'person',
        person: {
            name: 'Emma Johnson',
            age: 32,
            gender: 'Female',
            address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'USA',
            },
            education: [
                {
                    degree: 'Bachelor of Science',
                    major: 'Computer Science',
                    university:
                        'Massachusetts Institute of Technology',
                    graduationYear: 2012,
                },
            ],
            workExperience: [
                {
                    company: 'Google',
                    title: 'Software Engineer',
                    startDate: '2012-06-01',
                    endDate: '2016-12-31',
                    responsibilities: [
                        'Developed new features for Google Maps',
                        'Worked on improving search algorithms',
                    ],
                    year_founded: 1990,
                    industry: 'Technology',
                    employees: [
                        {
                            name: 'John Smith',
                            position: 'CEO',
                            department: 'Executive',
                            projects: [
                                {
                                    name: 'Project Alpha',
                                    description:
                                        'Developing new software platform',
                                    status: 'In Progress',
                                    teams: [
                                        {
                                            team_name: 'Awesome Team',
                                            team_leader: {
                                                name: 'John Smith',
                                                title: 'Team Leader',
                                                email: 'john.smith@example.com',
                                            },
                                            team_members: [
                                                {
                                                    name: 'Alice Johnson',
                                                    title: 'Software Engineer',
                                                    email:
                                                        'alice.johnson@example.com',
                                                    skills: ['Java', 'Python', 'SQL'],
                                                    projects: [
                                                        {
                                                            name: 'Project A',
                                                            description:
                                                                'Lorem ipsum dolor sit amet',
                                                            technologies: [
                                                                'Java',
                                                                'Spring Framework',
                                                            ],
                                                            team_members: [
                                                                {
                                                                    name: 'Bob Lee',
                                                                    title:
                                                                        'Software Engineer',
                                                                },
                                                                {
                                                                    name: 'Cindy Chen',
                                                                    title: 'UI Designer',
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
})


module.exports = router