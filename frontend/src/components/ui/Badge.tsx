interface BadgeProps {
    name: string;
    color: string;
}

const Badge = ({name, color} : BadgeProps) => (
    <span className={`flex items-center rounded-md text-xs px-2 py-0.5 font-medium ${color}`}>
        {name}
    </span>
)

export default Badge;