import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={20}
		height={16}
		viewBox="0 0 20 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17.9993 4.13342V8.4003H13.7324"
			stroke="#EE0505"
			strokeWidth={2.13345}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M14.4352 10.5324C13.9729 11.8408 13.0979 12.9636 11.942 13.7315C10.7861 14.4993 9.41193 14.8707 8.02658 14.7897C6.64123 14.7087 5.31975 14.1796 4.26127 13.2821C3.20279 12.3847 2.46466 11.1676 2.15812 9.81415C1.85157 8.46073 1.99321 7.04433 2.56169 5.77841C3.13018 4.51249 4.0947 3.46562 5.30993 2.79556C6.52516 2.1255 7.92524 1.86855 9.29921 2.06344C10.6732 2.25832 11.9466 2.89448 12.9275 3.87605L16.2202 6.97664"
			stroke="#EE0505"
			strokeWidth={2.13345}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SVGComponent;
