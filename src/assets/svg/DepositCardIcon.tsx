import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={26}
		viewBox="0 0 30 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0.017107 19.7401C0.017107 18.4561 0.017107 17.158 0.017107 15.8739C0.017107 15.6764 0.0451778 15.5917 0.269741 15.5917C1.81362 15.6059 3.35749 15.6059 4.90137 15.5917C5.11189 15.5917 5.18207 15.6482 5.16804 15.8598C5.154 16.0997 5.08382 16.4242 5.21014 16.5653C5.35049 16.7347 5.68734 16.6218 5.92594 16.6218C6.3891 16.6359 6.8663 16.6218 7.32946 16.6218C7.49788 16.6218 7.61017 16.5653 7.70841 16.4525C8.01719 16.1138 8.32596 15.7752 8.67684 15.4789C9.18211 15.0273 9.74352 14.6887 10.4312 14.5335C11.0909 14.3924 11.7225 14.3077 12.3962 14.4206C13.0278 14.5194 13.5471 14.8157 14.0944 15.0838C15.5822 15.8175 17.0699 16.5512 18.5436 17.2991C18.7962 17.4261 19.0208 17.6518 19.3576 17.5954C19.5401 17.5672 19.7085 17.5107 19.8769 17.4684C20.9015 17.2144 21.9121 16.9322 22.9366 16.7206C23.5682 16.5795 24.1858 16.3819 24.8173 16.2126C25.3788 16.0715 25.9542 15.9445 26.5296 15.7893C26.9086 15.6905 27.2875 15.5917 27.6665 15.4789C28.3262 15.2672 29.2104 15.6482 29.5893 16.2126C29.7999 16.523 29.9683 16.8476 29.9963 17.2426C30.0385 18.0328 29.7156 18.6254 29.0841 19.077C28.0876 19.7684 27.0911 20.4739 26.1086 21.1653C25.2665 21.7579 24.4384 22.3646 23.5963 22.9432C22.7542 23.5358 21.898 24.1002 21.0699 24.6928C20.7331 24.9327 20.4103 25.1726 20.0454 25.3842C19.4278 25.737 18.7401 25.9204 18.0383 25.9627C17.1962 26.0051 16.3541 26.0192 15.526 25.9627C14.712 25.9063 13.9822 25.5677 13.2383 25.2431C12.312 24.8339 11.3716 24.4388 10.4312 24.0296C9.75755 23.7474 9.0979 23.4652 8.4242 23.1689C7.96104 22.9573 7.49788 22.7738 6.96454 22.8162C6.45927 22.8585 5.93997 22.8303 5.42067 22.8303C5.22417 22.8303 5.13996 22.8726 5.154 23.0843C5.16804 23.2959 5.154 23.5076 5.154 23.7051C5.16804 23.8603 5.1119 23.9027 4.95751 23.9027C3.37153 23.9027 1.79958 23.8885 0.213601 23.9027C0.0171083 23.9027 -0.0109622 23.8321 0.00307303 23.6628C0.0311435 22.3788 0.017107 21.0524 0.017107 19.7401ZM5.16804 19.7543C5.16804 20.3751 5.16804 20.996 5.16804 21.6027C5.16804 21.7861 5.21014 21.8567 5.40663 21.8567C6.1084 21.8426 6.79612 21.8567 7.49788 21.8567C7.65227 21.8567 7.83473 21.8426 7.97508 21.899C8.50842 22.1107 9.02772 22.3364 9.54702 22.5622C10.1505 22.8162 10.7541 23.0843 11.3435 23.3524C12.1576 23.7051 12.9716 24.0579 13.7857 24.4247C14.5155 24.7493 15.2313 25.0033 16.0594 24.9468C16.705 24.9045 17.3646 24.9327 18.0103 24.9468C18.6138 24.9609 19.1612 24.8057 19.6524 24.4812C20.4945 23.9168 21.3226 23.3382 22.1507 22.7456C23.7086 21.6591 25.2524 20.5726 26.8103 19.4721C27.4139 19.0487 28.0454 18.6254 28.6349 18.1739C29.056 17.8494 29.1262 17.3979 28.8455 16.9463C28.5648 16.4948 28.2279 16.396 27.6805 16.5653C27.1051 16.7488 26.5156 16.8476 25.9402 17.0028C25.3788 17.158 24.8173 17.2567 24.2559 17.412C23.6524 17.5813 23.0489 17.7224 22.4454 17.8635C21.7577 18.0328 21.084 18.2445 20.3963 18.3715C20.3261 18.3856 20.2278 18.3997 20.312 18.569C20.5927 19.1334 20.7471 19.7119 20.5226 20.361C20.2138 21.2782 19.2173 21.7579 18.4032 21.5462C17.7015 21.3769 17.0418 21.0947 16.3541 20.869C15.5822 20.6291 14.8102 20.361 14.0523 20.107C13.6172 19.9659 13.1681 19.8107 12.7471 19.6414C12.5225 19.5567 12.3962 19.2463 12.4523 19.0487C12.5085 18.8653 12.8453 18.6254 12.9857 18.6819C13.1962 18.7665 13.4067 18.8089 13.6172 18.8794C14.4594 19.1757 15.3155 19.4721 16.1716 19.7543C16.9015 19.9941 17.6173 20.234 18.3471 20.4598C18.8945 20.6291 19.3015 20.5303 19.498 20.1352C19.7366 19.6555 19.5261 18.9359 19.0348 18.6819C18.5576 18.4279 18.0804 18.188 17.5892 17.9481C16.312 17.2991 15.0208 16.65 13.7436 16.0009C13.112 15.6905 12.4944 15.3519 11.7365 15.366C10.6979 15.3942 9.79966 15.6623 9.08386 16.4525C8.74702 16.8193 8.41017 17.1721 8.07332 17.5248C8.00315 17.5954 7.93297 17.6518 7.79262 17.6518C6.99261 17.6377 6.17857 17.6518 5.37856 17.6377C5.21014 17.6377 5.13996 17.6801 5.13996 17.8635C5.18207 18.5126 5.16804 19.1334 5.16804 19.7543ZM1.01361 19.7119C1.01361 20.6855 1.01361 21.6732 1.01361 22.6468C1.01361 22.8021 1.04168 22.8585 1.19607 22.8585C2.10836 22.8585 3.02065 22.8444 3.93294 22.8585C4.08732 22.8585 4.1575 22.8303 4.1575 22.6468C4.1575 20.7138 4.1575 18.7807 4.1575 16.8476C4.1575 16.6782 4.11539 16.6218 3.94697 16.6359C3.03468 16.65 2.12239 16.6359 1.2101 16.6359C1.05571 16.6359 1.01361 16.6641 1.01361 16.8334C1.01361 17.7788 1.01361 18.7383 1.01361 19.7119Z"
			fill="#01468E"
		/>
		<path
			d="M15.0354 0C18.8951 0 22.7548 0 26.6004 0C26.8531 0 26.9092 0.0705484 26.9092 0.310422C26.8952 4.59993 26.8952 8.88943 26.9092 13.1789C26.9092 13.447 26.8531 13.5317 26.5724 13.5317C18.839 13.5176 11.1055 13.5317 3.37214 13.5317C3.16161 13.5317 3.10547 13.4894 3.10547 13.2636C3.1195 8.93176 3.1195 4.59993 3.10547 0.268093C3.10547 0.0282195 3.20372 0.0141111 3.38617 0.0141111C7.27393 8.61008e-07 11.1617 0 15.0354 0ZM14.9793 12.4875C18.5021 12.4875 22.025 12.4875 25.5478 12.4875C25.8145 12.4875 25.8846 12.4029 25.8706 12.1489C25.8566 8.55079 25.8566 4.95268 25.8706 1.35458C25.8706 1.05827 25.7864 1.01593 25.5197 1.01593C18.5161 1.01593 11.4985 1.01593 4.49496 1.03004C4.10197 1.03004 4.13004 0.959492 4.13004 1.3828C4.13004 4.9809 4.13004 8.579 4.11601 12.1771C4.11601 12.4311 4.18618 12.4875 4.42478 12.4875C7.96166 12.4875 11.4705 12.4875 14.9793 12.4875Z"
			fill="#01468E"
		/>
		<path
			d="M15.0347 2.0742C17.4909 2.0742 19.9471 2.0742 22.4032 2.0742C22.8243 2.0742 22.8102 1.97543 22.7822 2.45518C22.7401 3.1748 23.0629 3.65454 23.6524 3.99319C23.891 4.13429 24.1436 4.13429 24.4103 4.13429C24.8454 4.13429 24.8454 4.13429 24.8454 4.58582C24.8454 6.06739 24.8454 7.54896 24.8594 9.03053C24.8594 9.28452 24.7892 9.35507 24.5366 9.34096C23.8769 9.32684 23.3155 9.52439 22.9506 10.1452C22.7681 10.4698 22.7681 10.8225 22.7822 11.1612C22.7962 11.3728 22.7401 11.4434 22.5155 11.4434C17.5049 11.4434 12.5084 11.4434 7.49782 11.4434C7.27325 11.4434 7.20307 11.3728 7.23114 11.1612C7.28729 10.6109 7.16097 10.1311 6.73991 9.75015C6.36096 9.3974 5.91183 9.31274 5.43464 9.32685C5.21007 9.32685 5.16797 9.2704 5.16797 9.05875C5.182 7.52074 5.182 5.96862 5.16797 4.4306C5.16797 4.17662 5.25218 4.12018 5.47674 4.1484C6.08026 4.20484 6.58552 4.03552 6.96448 3.52755C7.21711 3.1748 7.28729 2.79382 7.24518 2.37051C7.21711 2.13064 7.28729 2.06009 7.52588 2.0742C10.0242 2.0742 12.5224 2.0742 15.0347 2.0742ZM14.9786 10.4133C15.8347 10.4133 16.6769 10.4133 17.533 10.4133C18.8804 10.4133 20.2278 10.4133 21.5751 10.4133C21.6874 10.4133 21.7857 10.4416 21.8418 10.2581C22.1085 9.31273 22.7401 8.69189 23.6804 8.40968C23.8067 8.36735 23.8348 8.31091 23.8348 8.19803C23.8348 7.23854 23.8348 6.29315 23.8348 5.33366C23.8348 5.20666 23.7927 5.13612 23.6664 5.09379C22.7541 4.81158 22.1506 4.20484 21.8559 3.28768C21.7997 3.11835 21.7155 3.10425 21.5611 3.10425C17.2383 3.10425 12.9294 3.11836 8.6066 3.10425C8.31186 3.10425 8.19958 3.20302 8.11537 3.457C7.83466 4.30361 7.24518 4.82569 6.40307 5.09379C6.27675 5.13612 6.20657 5.19255 6.20657 5.33366C6.20657 6.29315 6.20657 7.26676 6.20657 8.22625C6.20657 8.32502 6.22061 8.39557 6.33289 8.42379C7.25922 8.69189 7.8908 9.28452 8.17151 10.2158C8.24168 10.4274 8.33993 10.4416 8.50835 10.4416C10.6698 10.4133 12.8172 10.4133 14.9786 10.4133Z"
			fill="#01468E"
		/>
		<path
			d="M15.0074 9.32683C13.6319 9.38327 12.467 8.11335 12.4389 6.8011C12.4109 5.37597 13.674 4.04961 15.1477 4.14838C16.5232 4.24715 17.4495 5.24898 17.5899 6.50479C17.7723 8.21212 16.2425 9.41149 15.0074 9.32683ZM16.5653 6.8011C16.5653 5.86982 15.9197 5.17842 15.0355 5.17842C14.1653 5.17842 13.4775 5.86983 13.4635 6.77288C13.4635 7.69004 14.2495 8.33911 15.0495 8.33911C15.8495 8.325 16.5653 7.66182 16.5653 6.8011Z"
			fill="#01468E"
		/>
	</svg>
);
export default SVGComponent;
