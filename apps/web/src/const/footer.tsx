import { BsFacebook, BsYoutube, BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

export const navigation = {
	solutions: [
		{ name: 'About Us', href: '/about' },
		{ name: 'Careers', href: '#' },
		{ name: 'Company Blog', href: '#' },
		{ name: 'Gift Cards', href: '#' },
		{ name: 'Promotions', href: '#' },
		{ name: 'Linkedln', href: '#' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Terms and Conditions', href: '/terms' },
		{ name: 'Data privacy ', href: '/dataprivacy' },
		{ name: 'Cookies', href: '/cookies' },
		{ name: 'Impressum', href: '/impressum' },
	],
	support: [
		{ name: 'Account Details', href: '#' },
		{ name: 'Order History', href: '#' },
		{ name: 'Help', href: '#' },
	],
	company: [{ name: 'Become a Partner Restaurant', href: '#' }],
	legal: [
		{ name: 'Claim', href: '#' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Terms', href: '/terms' },
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: (props: Parameters<IconType>[0]) => <BsFacebook {...props} />,
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (props: Parameters<IconType>[0]) => <BsInstagram {...props} />,
		},
		{
			name: 'Twitter',
			href: '#',
			icon: (props: Parameters<IconType>[0]) => <BsTwitter {...props} />,
		},
		{
			name: 'GitHub',
			href: '#',
			icon: (props: Parameters<IconType>[0]) => <BsGithub {...props} />,
		},
		{
			name: 'YouTube',
			href: '#',
			icon: (props: Parameters<IconType>[0]) => <BsYoutube {...props} />,
		},
	],
};
export const faqs = [
	{
		question: 'Get to Know Us',
		answer1: 'About Us',
		answer2: 'Careers',
		answer3: 'Company Blog',
		answer4: 'Gift Cards',
		answer5: 'Promotions',
		answer6: 'Linkedln',
	},
	{
		question: 'Let Us Help You',
		answer1: 'Account Details',
		answer2: 'Order History',
		answer3: 'Help',
	},
	{
		question: 'Doing Business',
		answer1: 'Become a Partner Restaurant',
	},
	{
		question: 'Terms of Service',
		answer1: 'Privacy',
		answer2: 'Delivery Lacations',
		answer3: 'Help',
	},
	{
		question: 'Terms and Conditions',
		answer1: 'Data privacy',
		answer2: 'Cookies',
		answer3: 'Impressum',
	},
	// More questions...
];
