let SKILL = '%skill%';

let HTMLskillClass = '<div class="skills_item"><img class="skills_img %skill%" ';
let HTMLskillLogo = 'src="img/%skill%" ';
let HTMLskillName = 'alt="%skill%"></div>';

let PROJECT = '%project%';

let HTMLanchor = '<a href="%project%" target="_blank"><div class="ptfolio_item">';
let HTMLsmallpic = '<picture><source media="(max-width: 1100px)" srcset="img/%project%">';
let HTMLbigpic = '<img class="ptfolio_img" src="img/%project%" alt="Project title">';
let HTMLtitle= '</picture><p class="ptfolio_txt">%project%</p></div></a>';

let skills = [
    {
        class: 'ht',
        source: 'html-5.svg',
        alt: 'HTML 5 logo'
    },
    {
        class: 'cs',
        source: 'css-3.svg',
        alt: 'CSS 3 logo'
    },
    {
        class: 're',
        source: 'react.svg',
        alt: 'React logo'        
    },
    {
        class: 'jq',
        source: 'jquery-1.svg',
        alt: 'jQuery logo'        
    },
    {
        class: 'js',
        source: 'javascript.svg',
        alt: 'Javascript logo'        
    }
];

let projects = [
    {
        projectLink: 'https://github.com/RenAfonso/the-brighton-times',
        smallpic: 'brighton_small.jpg',
        bigpic: 'brighton350.jpg',
        title: 'Newspaper mockup'
    },
    {
        projectLink: 'https://codepen.io/rrca/pen/zPJbZX',
        smallpic: 'pixel_small.png',
        bigpic: 'pixel350.png',
        title: 'Pixel Art Maker'
    },
    {
        projectLink: 'https://github.com/RenAfonso/arcade-game',
        smallpic: 'memory-game-small.png',
        bigpic: 'memory-game.png',
        title: 'Memory game'
    },
    {
        projectLink: 'https://github.com/RenAfonso/responsive-blog',
        smallpic: 'arcade-game-small.png',
        bigpic: 'arcade-game.png',
        title: 'Arcade game clone'
    }
];


class Octopus {
    
    init() {
        resumeView.buildSkills();
        resumeView.buildProjects();
    }

    getSkills() {
        return skills;
    }

    getProjects() {
        return projects;
    }
}


class ResumeView {

    buildSkills() {
        let currentSkills = octopus.getSkills();

        for (let i = 0; i < currentSkills.length; i++) {
            
            const CLASS = currentSkills[i].class;
            const SOURCE = currentSkills[i].source;
            const ALT = currentSkills[i].alt;

            let skillClass = HTMLskillClass.replace(SKILL, CLASS);
            let skillLogo = HTMLskillLogo.replace(SKILL, SOURCE);
            let skillName = HTMLskillName.replace(SKILL, ALT);

            let skill = skillClass + skillLogo + skillName;

            $('.skills_list').append(skill);
        }
        
        this.render();
    }


    buildProjects() {
        let currentProject = octopus.getProjects();

        for (let i = 0; i < currentProject.length; i++) {

            const ANCHOR = currentProject[i].projectLink;
            const SMALLPIC = currentProject[i].smallpic;
            const BIGPIC = currentProject[i].bigpic;
            const TITLE = currentProject[i].title;

            let projectAnchor = HTMLanchor.replace(PROJECT, ANCHOR);
            let projectSmallPic = HTMLsmallpic.replace(PROJECT, SMALLPIC);
            let projectBigPic = HTMLbigpic.replace(PROJECT, BIGPIC);
            let projectTitle = HTMLtitle.replace(PROJECT, TITLE);

            let project = projectAnchor + projectSmallPic + projectBigPic + projectTitle;

            $('.ptfolio_list').append(project);
        }
        
        this.render();
    }

    render() {
        
    }
}

let octopus = new Octopus();
let resumeView = new ResumeView();
octopus.init();