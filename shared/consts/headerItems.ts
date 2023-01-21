import IcProjects from '@assets/navbar/projects.svg';
import IcProjectsActive from '@assets/navbar/projects_active.svg';

import IcStudents from '@assets/navbar/students.svg';
import IcStudentsActive from '@assets/navbar/students_active.svg';

import IcTeams from '@assets/navbar/teams.svg';
import IcTeamsActive from '@assets/navbar/teams_active.svg';

import IcCourses from '@assets/navbar/courses.svg';
import IcCoursesActive from '@assets/navbar/courses_active.svg';

interface IHeaderItem {
	label: string;
	url: string;
	defaultIcon: React.FC;
	activeIcon: React.FC;
}

const HEADER_ITEMS: IHeaderItem[] = [
	{
		label: 'Проекты',
		url: '/projects',
		defaultIcon: IcProjects,
		activeIcon: IcProjectsActive,
	},
	{
		label: 'Участники',
		url: '/members',
		defaultIcon: IcStudents,
		activeIcon: IcStudentsActive,
	},
	{
		label: 'Команды',
		url: '/teams',
		defaultIcon: IcTeams,
		activeIcon: IcTeamsActive,
	},
	{
		label: 'Обучение',
		url: '/learn',
		defaultIcon: IcCourses,
		activeIcon: IcCoursesActive,
	},
];

export default HEADER_ITEMS;
