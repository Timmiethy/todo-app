interface BadgeProps {
    children: React.ReactNode;
    color: string;
}

const Badge = ({children, color} : BadgeProps) => (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${color}`}>
        {children}
    </span>
)

export default Badge;