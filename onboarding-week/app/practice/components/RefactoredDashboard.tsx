import BadgeV2 from './BadgeV2'
import StatCard from './StatCard'

type Badge = { label: string; variant: 'blue' | 'green' | 'yellow' }

export default function RefactoredDashboard() {

    const badges: Badge[] = [{label: "Active", variant: "blue" }, {label: "Verified", variant: "green" }, {label: "Pending", variant: "yellow" }]

    const stats = [
        { label: 'Revenue', value: '$45,231', change: '+20.1%', trend: 'up' },
        { label: 'Users', value: '2,345', change: '+15.3%', trend: 'up' },
        { label: 'Orders', value: '1,234', change: '-5.2%', trend: 'down' },
    ];

    return (
        <div className='flex flex-col gap-4'>  
        
            {/* Badges */}
            <div className='flex gap-2 '>
                {badges.map((badge, i) => (
                    <BadgeV2 key={i} label={badge.label} variant={badge.variant} />        
                ))}
            </div>

            {/* StatCard */}
            <div className='flex gap-2'>
                {stats.map((stat, i) => (
                    <StatCard key={i} label={stat.label} value={stat.value} change={stat.change} trend={stat.trend} />        
                ))}
            </div>

        </div>
    )
}