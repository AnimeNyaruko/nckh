import { Maven_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const Carlito = localFont({
	src: './fonts/Carlito-Regular.ttf',
	display: 'swap',
});
export const PaytoneOne = localFont({
	src: './fonts/PaytoneOne-Regular.ttf',
	display: 'swap',
});
export const Roboto = localFont({
	src: './fonts/Roboto-Regular.ttf',
	display: 'swap',
});

//*Maven Pro
const MavenProNormal = Maven_Pro({
	weight: '400',
	style: 'normal',
	subsets: ['vietnamese'],
});

const MavenProSemibold = Maven_Pro({
	weight: '600',
	style: 'normal',
	subsets: ['vietnamese'],
});

const MavenProBold = Maven_Pro({
	weight: '700',
	style: 'normal',
	subsets: ['vietnamese'],
});

export const MavenPro = {
	normal: MavenProNormal,
	semibold: MavenProSemibold,
	bold: MavenProBold,
};
