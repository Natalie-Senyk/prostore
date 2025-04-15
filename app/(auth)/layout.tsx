import type { Metadata } from 'next';
import '@/assets/styles/globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Prostore',
	description: 'app created wiuth next.js',
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='flex-center min-h-screen w-full'>{children}</div>;
}
