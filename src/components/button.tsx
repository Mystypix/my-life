import React from "react"
import clsx from 'clsx'

type ButtonProps = {
	color?: ButtonColor
	children: React.ReactNode
	icon?: React.ReactNode
	isDisabled?: boolean
	isLoading?: boolean
	onClick?: () => void
	type?: 'submit' | 'button'
	variant?: ButtonVariant
};

enum ButtonColor {
	Primary = 'btn-primary',
	Secondary = 'btn-secondary',
	Accent = 'btn-accent',
}

enum ButtonVariant {
	Default = '',
	Link = 'btn-link',
	Outlined = 'btn-outline',
}

export const Button = ({ children, color = ButtonColor.Primary, icon, isDisabled, isLoading, onClick, type = 'button', variant = ButtonVariant.Default }: ButtonProps) => (
	<button className={clsx('btn', color, variant)} disabled={isDisabled} onClick={onClick} type={type}>
		{icon && icon}
		{isLoading ? <span className='loading loading-dots loading-sm' /> : children}
	</button>
);
