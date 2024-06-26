import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={25}
		height={25}
		viewBox="0 0 34 35"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21.0504 22.15C23.3754 22.15 24.9254 23.607 24.9254 25.25H29.5754V2H24.9254C24.9254 3.55 23.3754 5.1 21.0504 5.1C18.7254 5.1 17.1754 3.55 17.1754 2H12.5254V12.85"
			stroke="#F7A800"
			strokeWidth={3.1}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M21.05 33H16.4C16.4 31.357 14.85 29.9 12.525 29.9C10.2 29.9 8.65 31.357 8.65 33H4V9.75H8.65C8.65 11.3 10.2 12.85 12.525 12.85C14.85 12.85 16.4 11.3 16.4 9.75H21.05V33Z"
			stroke="#F7A800"
			strokeWidth={3.1}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M8.64961 19.05C9.50565 19.05 10.1996 18.356 10.1996 17.5C10.1996 16.6439 9.50565 15.95 8.64961 15.95C7.79357 15.95 7.09961 16.6439 7.09961 17.5C7.09961 18.356 7.79357 19.05 8.64961 19.05Z"
			fill="#F7A800"
		/>
		<path
			d="M12.5246 19.05C13.3807 19.05 14.0746 18.356 14.0746 17.5C14.0746 16.6439 13.3807 15.95 12.5246 15.95C11.6686 15.95 10.9746 16.6439 10.9746 17.5C10.9746 18.356 11.6686 19.05 12.5246 19.05Z"
			fill="#F7A800"
		/>
		<path
			d="M16.3996 19.05C17.2557 19.05 17.9496 18.356 17.9496 17.5C17.9496 16.6439 17.2557 15.95 16.3996 15.95C15.5436 15.95 14.8496 16.6439 14.8496 17.5C14.8496 18.356 15.5436 19.05 16.3996 19.05Z"
			fill="#F7A800"
		/>
	</svg>
);
export default SVGComponent;
